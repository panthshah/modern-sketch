/**
 * 🎨 Sketch Measure Pro - Main Entry Point
 * A modern, fun design measurement & annotation tool for Sketch
 * Built with ❤️ for the design community
 */

import { sketch } from './utils/sketch-api'
import { Logger } from './utils/logger'
import { ConfigManager } from './core/config-manager'
import { ThemeManager } from './core/theme-manager'
import { QuickMeasure } from './features/quick-measure'
import { MeasurePanel } from './features/measure-panel'
import { SmartDimensions } from './features/smart-dimensions'
import { SpacingInspector } from './features/spacing-inspector'
import { ColorPalette } from './features/color-palette'
import { SmartNotes } from './features/smart-notes'
import { Coordinates } from './features/coordinates'
import { SpecExporter } from './features/spec-exporter'
import { OverlayManager } from './core/overlay-manager'
import { HelpManager } from './core/help-manager'

// 🎉 Welcome message
const logger = new Logger('SketchMeasurePro')

// Initialize core managers
let configManager: ConfigManager
let themeManager: ThemeManager
let overlayManager: OverlayManager
let helpManager: HelpManager

/**
 * 🚀 Initialize the plugin
 */
function initialize() {
  try {
    configManager = new ConfigManager()
    themeManager = new ThemeManager(configManager)
    overlayManager = new OverlayManager(themeManager)
    helpManager = new HelpManager()
    
    logger.info('🎨 Sketch Measure Pro initialized successfully!')
    
    // Show welcome message for first-time users
    if (configManager.isFirstRun()) {
      showWelcomeMessage()
      configManager.setFirstRunComplete()
    }
  } catch (error) {
    logger.error('Failed to initialize plugin:', error)
    sketch.UI.message('❌ Failed to initialize Sketch Measure Pro')
  }
}

/**
 * 🎯 Quick Measure - Fast measurement tool
 */
export function quickMeasure(context: any) {
  try {
    initialize()
    const quickMeasureFeature = new QuickMeasure(configManager, themeManager, overlayManager)
    quickMeasureFeature.execute()
  } catch (error) {
    logger.error('Quick Measure failed:', error)
    sketch.UI.message('❌ Quick Measure failed')
  }
}

/**
 * 📐 Measure Panel - Advanced measurement interface
 */
export function measurePanel(context: any) {
  try {
    initialize()
    const measurePanelFeature = new MeasurePanel(configManager, themeManager)
    measurePanelFeature.show()
  } catch (error) {
    logger.error('Measure Panel failed:', error)
    sketch.UI.message('❌ Failed to open Measure Panel')
  }
}

/**
 * 📏 Smart Dimensions - Intelligent dimension detection
 */
export function smartDimensions(context: any) {
  try {
    initialize()
    const smartDimensionsFeature = new SmartDimensions(configManager, themeManager, overlayManager)
    smartDimensionsFeature.execute()
  } catch (error) {
    logger.error('Smart Dimensions failed:', error)
    sketch.UI.message('❌ Smart Dimensions failed')
  }
}

/**
 * 📊 Spacing Inspector - Spacing analysis tool
 */
export function spacingInspector(context: any) {
  try {
    initialize()
    const spacingInspectorFeature = new SpacingInspector(configManager, themeManager, overlayManager)
    spacingInspectorFeature.execute()
  } catch (error) {
    logger.error('Spacing Inspector failed:', error)
    sketch.UI.message('❌ Spacing Inspector failed')
  }
}

/**
 * 🎨 Color Palette - Color extraction and management
 */
export function colorPalette(context: any) {
  try {
    initialize()
    const colorPaletteFeature = new ColorPalette(configManager, themeManager)
    colorPaletteFeature.show()
  } catch (error) {
    logger.error('Color Palette failed:', error)
    sketch.UI.message('❌ Color Palette failed')
  }
}

/**
 * 💬 Smart Notes - Intelligent annotation system
 */
export function smartNotes(context: any) {
  try {
    initialize()
    const smartNotesFeature = new SmartNotes(configManager, themeManager, overlayManager)
    smartNotesFeature.execute()
  } catch (error) {
    logger.error('Smart Notes failed:', error)
    sketch.UI.message('❌ Smart Notes failed')
  }
}

/**
 * 🎯 Coordinates - Position and coordinate display
 */
export function coordinates(context: any) {
  try {
    initialize()
    const coordinatesFeature = new Coordinates(configManager, themeManager, overlayManager)
    coordinatesFeature.execute()
  } catch (error) {
    logger.error('Coordinates failed:', error)
    sketch.UI.message('❌ Coordinates failed')
  }
}

/**
 * 📱 Export Specs - Modern spec export
 */
export function exportSpecs(context: any) {
  try {
    initialize()
    const specExporter = new SpecExporter(configManager, themeManager)
    specExporter.export()
  } catch (error) {
    logger.error('Export Specs failed:', error)
    sketch.UI.message('❌ Export failed')
  }
}

/**
 * 🔧 Settings - Plugin configuration
 */
export function settings(context: any) {
  try {
    initialize()
    configManager.showSettingsPanel()
  } catch (error) {
    logger.error('Settings failed:', error)
    sketch.UI.message('❌ Settings failed')
  }
}

/**
 * 🎭 Toggle Overlays - Show/hide all overlays
 */
export function toggleOverlays(context: any) {
  try {
    initialize()
    overlayManager.toggleAll()
    
    const isVisible = overlayManager.areOverlaysVisible()
    sketch.UI.message(isVisible ? '👁️ Overlays shown' : '🙈 Overlays hidden')
  } catch (error) {
    logger.error('Toggle Overlays failed:', error)
    sketch.UI.message('❌ Toggle failed')
  }
}

/**
 * 🧹 Clear All - Remove all measurements and annotations
 */
export function clearAll(context: any) {
  try {
    initialize()
    
    const result = sketch.UI.getInputFromUser('Are you sure you want to clear all measurements?', {
      type: sketch.UI.INPUT_TYPE.selection,
      possibleValues: ['Yes, clear everything', 'Cancel']
    })
    
    if (result[1] === 0) { // User selected "Yes"
      overlayManager.clearAll()
      sketch.UI.message('🧹 All measurements cleared!')
    }
  } catch (error) {
    logger.error('Clear All failed:', error)
    sketch.UI.message('❌ Clear failed')
  }
}

/**
 * 🌈 Theme Toggle - Switch between light/dark themes
 */
export function themeToggle(context: any) {
  try {
    initialize()
    themeManager.toggleTheme()
    
    const currentTheme = themeManager.getCurrentTheme()
    sketch.UI.message(`🌈 Switched to ${currentTheme} theme`)
  } catch (error) {
    logger.error('Theme Toggle failed:', error)
    sketch.UI.message('❌ Theme toggle failed')
  }
}

/**
 * 📖 Help & Tips - Show help and tips
 */
export function help(context: any) {
  try {
    initialize()
    helpManager.showHelp()
  } catch (error) {
    logger.error('Help failed:', error)
    sketch.UI.message('❌ Help failed')
  }
}

/**
 * 🎉 Welcome message for new users
 */
function showWelcomeMessage() {
  const message = `
🎨 Welcome to Sketch Measure Pro!

✨ A brand new, modern measurement tool built for the future of design.

🚀 Key Features:
• Quick measurements with one click
• Smart dimension detection
• Beautiful color palettes
• Interactive spacing analysis
• Modern export formats
• Light & dark themes

💡 Pro Tip: Use Ctrl+Shift+M for quick measurements!

Happy designing! 🎨
  `
  
  sketch.UI.message('🎉 Welcome to Sketch Measure Pro!')
  
  // Show detailed welcome in an alert
  setTimeout(() => {
    sketch.UI.alert('Welcome!', message)
  }, 1000)
}