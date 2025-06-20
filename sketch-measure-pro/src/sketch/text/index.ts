// Copyright 2020 Jebbs. All rights reserved.
// Use of this source code is governed by the MIT
// license that can be found in the LICENSE file.

import { sketch } from "..";
import { TextFragment, getFragments, getFragmentsCount } from "./textFragment";

export enum TextBehaviour {
    autoWidth = 0,
    autoHeight = 1,
    fixedSize = 2,
}

declare module 'sketch/sketch' {
    namespace _Sketch {
        interface Text {
            isEmpty: boolean;
            textBehaviour: TextBehaviour;
            getFragments(): TextFragment[];
            getFragmentsCount(): number;
        }
    }
}

export function extendText() {
    let target = sketch.Text.prototype
    Object.defineProperty(target, "isEmpty", {
        get: function () {
            return this.sketchObject.isEmpty();
        }
    });
    Object.defineProperty(target, "textBehaviour", {
        get: function () {
            return this.sketchObject.textBehaviour();
        },
        set: function (val) {
            // Create a new style if it doesn't exist
            if (!this.sketchObject.style) {
                this.sketchObject.style = new sketch.Style();
            }
            // Set the text behavior through the style
            this.sketchObject.style.textBehaviour = val;
        }
    });
    target.getFragments = function () { return getFragments(this) };
    target.getFragmentsCount = function () { return getFragmentsCount(this) }
}