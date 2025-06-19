// Copyright 2020 Jebbs. All rights reserved.
// Use of this source code is governed by the MIT
// license that can be found in the LICENSE file.

import { SMExportFormat } from "../interfaces";
import { sketch } from "../../sketch";
import { context } from "../common/context";
import { toJSString } from "../helpers/helper";
import { logger } from "../common/logger";

export function exportImage(layer: Layer, format: SMExportFormat, path: string, name: string) {
    try {
        let document = context.sketchObject.document;
        let savePath = [
            path,
            "/",
            format.prefix,
            name,
            format.suffix,
            ".",
            format.format
        ].join("");

        // Ensure directory exists
        NSFileManager
            .defaultManager()
            .createDirectoryAtPath_withIntermediateDirectories_attributes_error(path, true, nil, nil);

        // Use MSExportRequest with proper error handling
        let exportRequests = MSExportRequest.exportRequestsFromExportableLayer(layer.sketchObject);
        if (!exportRequests || exportRequests.count() === 0) {
            logger.warn(`No export requests found for layer ${layer.name}, skipping export`);
            return savePath;
        }
        
        let slice = exportRequests.firstObject();
        if (!slice) {
            logger.warn(`No export slice found for layer ${layer.name}, skipping export`);
            return savePath;
        }

        slice.scale = format.scale;
        slice.format = format.format;

        document.saveArtboardOrSlice_toFile(slice, savePath);
        return savePath;
    } catch (error) {
        logger.error(`Error exporting image for layer ${layer.name}:`, error);
        // Don't throw the error, just log it and continue
        return null;
    }
}

export function exportImageToBuffer(layer: Layer, format: SMExportFormat): Buffer {
    return sketch.export(layer, {
        output: null,
        formats: format.format,
        scales: format.scale.toString(),
    }) as Buffer;
}

export function writeFile(options) {

    options = Object.assign({
        content: "Type something!",
        path: toJSString(NSTemporaryDirectory()),
        fileName: "temp.txt"
    }, options)
    let content = NSString.stringWithString(options.content),
        savePathName = [];

    NSFileManager
        .defaultManager()
        .createDirectoryAtPath_withIntermediateDirectories_attributes_error(options.path, true, nil, nil);

    savePathName.push(
        options.path,
        "/",
        options.fileName
    );
    let savePath = savePathName.join("");

    content.writeToFile_atomically_encoding_error(savePath, false, 4, null);
}

export function buildTemplate(content: string, data: object) {
    // Create a new WeakSet for this call to track circular references
    const seen = new WeakSet();
    
    let jsonString: string;
    
    try {
        // Use a custom replacer to handle circular references and non-serializable objects
        jsonString = JSON.stringify(data, (key, value) => {
            // Handle circular references
            if (typeof value === 'object' && value !== null) {
                if (seen.has(value)) {
                    return '[Circular Reference]';
                }
                seen.add(value);
            }
            
            // Handle functions and other non-serializable types
            if (typeof value === 'function') {
                return '[Function]';
            }
            
            // Handle undefined values
            if (value === undefined) {
                return null;
            }
            
            return value;
        });
        
        logger.debug(`[buildTemplate] JSON string length: ${jsonString.length}`);
        logger.debug(`[buildTemplate] JSON string preview: ${jsonString.substring(0, 200)}...`);
        
        // Test if our JSON is valid
        JSON.parse(jsonString);
        logger.debug(`[buildTemplate] JSON is valid`);
        
    } catch (error) {
        logger.error(`[buildTemplate] JSON serialization failed:`, error);
        
        // Fallback: create a minimal valid JSON object
        const fallbackData = {
            resolution: 2,
            unit: "px",
            colorFormat: "hex",
            artboards: [],
            slices: [],
            colors: [],
            languages: {},
            error: "Data serialization failed"
        };
        
        jsonString = JSON.stringify(fallbackData);
        logger.debug(`[buildTemplate] Using fallback JSON`);
    }
    
    // Debug the template replacement
    logger.debug(`[buildTemplate] Template before replacement: ${content.substring(0, 200)}...`);
    
    // Try different placeholder formats
    let result = content;
    
    if (content.includes('{{data}}')) {
        result = content.replace('{{data}}', jsonString);
        logger.debug(`[buildTemplate] Replaced {{data}} successfully`);
    } else if (content.includes("'{{data}}'")) {
        result = content.replace("'{{data}}'", jsonString);
        logger.debug(`[buildTemplate] Replaced '{{data}}' successfully`);
    } else if (content.includes('"{{data}}"')) {
        result = content.replace('"{{data}}"', jsonString);
        logger.debug(`[buildTemplate] Replaced "{{data}}" successfully`);
    } else {
        logger.error(`[buildTemplate] No placeholder found in template!`);
        logger.debug(`[buildTemplate] Template content: ${content}`);
        // Fallback: inject the data directly
        result = content.replace('let data = {{data}};', `let data = ${jsonString};`);
    }
    
    logger.debug(`[buildTemplate] Template after replacement: ${result.substring(0, 200)}...`);
    
    return result;
}