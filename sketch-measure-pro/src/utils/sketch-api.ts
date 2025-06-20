/**
 * 🎨 Modern Sketch API Wrapper
 * Provides a cleaner, more robust interface to the Sketch API
 */

// Import the core Sketch modules
const sketchDOM = require('sketch/dom')
const sketchUI = require('sketch/ui')
const sketchSettings = require('sketch/settings')
const sketchAsync = require('sketch/async')

export interface SketchAPI {
  DOM: typeof sketchDOM
  UI: typeof sketchUI
  Settings: typeof sketchSettings
  Async: typeof sketchAsync
  Document: typeof sketchDOM.Document
  Layer: typeof sketchDOM.Layer
  Group: typeof sketchDOM.Group
  Shape: typeof sketchDOM.Shape
  Text: typeof sketchDOM.Text
  Image: typeof sketchDOM.Image
  Page: typeof sketchDOM.Page
  Artboard: typeof sketchDOM.Artboard
  Rectangle: typeof sketchDOM.Rectangle
  Style: typeof sketchDOM.Style
  getSelectedDocument: typeof sketchDOM.getSelectedDocument
  getDocuments: typeof sketchDOM.getDocuments
}

/**
 * Modern Sketch API with enhanced error handling
 */
export const sketch: SketchAPI = {
  DOM: sketchDOM,
  UI: sketchUI,
  Settings: sketchSettings,
  Async: sketchAsync,
  Document: sketchDOM.Document,
  Layer: sketchDOM.Layer,
  Group: sketchDOM.Group,
  Shape: sketchDOM.Shape,
  Text: sketchDOM.Text,
  Image: sketchDOM.Image,
  Page: sketchDOM.Page,
  Artboard: sketchDOM.Artboard,
  Rectangle: sketchDOM.Rectangle,
  Style: sketchDOM.Style,
  getSelectedDocument: sketchDOM.getSelectedDocument,
  getDocuments: sketchDOM.getDocuments
}

/**
 * 🛡️ Safe API wrapper functions
 */
export class SketchAPIHelper {
  /**
   * Safely get the selected document
   */
  static getSelectedDocument() {
    try {
      return sketch.getSelectedDocument()
    } catch (error) {
      console.error('Failed to get selected document:', error)
      return null
    }
  }

  /**
   * Safely get selected layers
   */
  static getSelectedLayers() {
    try {
      const document = this.getSelectedDocument()
      if (!document) return []
      return document.selectedLayers.layers || []
    } catch (error) {
      console.error('Failed to get selected layers:', error)
      return []
    }
  }

  /**
   * Safely show a message to the user
   */
  static showMessage(message: string) {
    try {
      sketch.UI.message(message)
    } catch (error) {
      console.error('Failed to show message:', error)
    }
  }

  /**
   * Safely show an alert to the user
   */
  static showAlert(title: string, message: string) {
    try {
      sketch.UI.alert(title, message)
    } catch (error) {
      console.error('Failed to show alert:', error)
    }
  }

  /**
   * Check if we have a valid document context
   */
  static hasValidContext(): boolean {
    const document = this.getSelectedDocument()
    return document !== null && document !== undefined
  }

  /**
   * Check if there are selected layers
   */
  static hasSelectedLayers(): boolean {
    const layers = this.getSelectedLayers()
    return layers.length > 0
  }

  /**
   * Get document settings safely
   */
  static getDocumentSetting<T>(key: string, defaultValue: T): T {
    try {
      const document = this.getSelectedDocument()
      if (!document) return defaultValue
      return sketch.Settings.documentSettingForKey(document, key) || defaultValue
    } catch (error) {
      console.error(`Failed to get document setting ${key}:`, error)
      return defaultValue
    }
  }

  /**
   * Set document settings safely
   */
  static setDocumentSetting<T>(key: string, value: T): boolean {
    try {
      const document = this.getSelectedDocument()
      if (!document) return false
      sketch.Settings.setDocumentSettingForKey(document, key, value)
      return true
    } catch (error) {
      console.error(`Failed to set document setting ${key}:`, error)
      return false
    }
  }

  /**
   * Create a new layer safely
   */
  static createLayer(type: string, properties: any) {
    try {
      switch (type) {
        case 'Group':
          return new sketch.Group(properties)
        case 'Shape':
          return new sketch.Shape(properties)
        case 'Text':
          return new sketch.Text(properties)
        case 'Image':
          return new sketch.Image(properties)
        default:
          throw new Error(`Unknown layer type: ${type}`)
      }
    } catch (error) {
      console.error(`Failed to create layer of type ${type}:`, error)
      return null
    }
  }
}