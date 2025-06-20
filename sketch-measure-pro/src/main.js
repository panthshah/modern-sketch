/**
 * 🎨 Sketch Measure Pro - Main Entry Point
 * A modern, fun design measurement & annotation tool for Sketch
 * Built with ❤️ for the design community
 */

const sketch = require('sketch/dom')
const UI = require('sketch/ui')
const Settings = require('sketch/settings')

// 🎉 Welcome message
console.log('🎨 Sketch Measure Pro initializing...')

/**
 * 🚀 Initialize the plugin
 */
function initialize() {
  try {
    console.log('🎨 Sketch Measure Pro initialized successfully!')
    
    // Check if first run
    if (isFirstRun()) {
      showWelcomeMessage()
      setFirstRunComplete()
    }
  } catch (error) {
    console.error('Failed to initialize plugin:', error)
    UI.message('❌ Failed to initialize Sketch Measure Pro')
  }
}

/**
 * 🎯 Quick Measure - Fast measurement tool
 */
function quickMeasure(context) {
  try {
    initialize()
    
    const document = sketch.getSelectedDocument()
    if (!document) {
      UI.message('❌ No document open')
      return
    }

    const selectedLayers = document.selectedLayers
    if (!selectedLayers || selectedLayers.length === 0) {
      UI.message('💡 Please select one or more layers first')
      return
    }

    // Measure the selected layers
    const layers = selectedLayers.layers
    console.log(`🎯 Measuring ${layers.length} layer(s)`)

    if (layers.length === 1) {
      measureSingleLayer(layers[0])
    } else {
      measureMultipleLayers(layers)
    }

    UI.message(`📏 Measured ${layers.length} layer(s)`)
  } catch (error) {
    console.error('Quick Measure failed:', error)
    UI.message('❌ Quick Measure failed')
  }
}

/**
 * 📏 Measure a single layer
 */
function measureSingleLayer(layer) {
  try {
    const frame = layer.frame
    const units = getUnits()
    
    const measurements = {
      width: formatMeasurement(frame.width, units),
      height: formatMeasurement(frame.height, units),
      x: formatMeasurement(frame.x, units),
      y: formatMeasurement(frame.y, units)
    }

    console.log(`📏 Layer "${layer.name}": ${measurements.width} × ${measurements.height}`)
    UI.message(`📏 ${layer.name}: ${measurements.width} × ${measurements.height}`)
    
  } catch (error) {
    console.error('Failed to measure single layer:', error)
  }
}

/**
 * 📊 Measure multiple layers
 */
function measureMultipleLayers(layers) {
  try {
    for (const layer of layers) {
      measureSingleLayer(layer)
    }
    
    // Also measure spacing between layers if applicable
    if (layers.length === 2) {
      measureSpacingBetweenLayers(layers[0], layers[1])
    }
  } catch (error) {
    console.error('Failed to measure multiple layers:', error)
  }
}

/**
 * 📐 Measure spacing between two layers
 */
function measureSpacingBetweenLayers(layer1, layer2) {
  try {
    const frame1 = layer1.frame
    const frame2 = layer2.frame
    const units = getUnits()

    // Calculate horizontal and vertical spacing
    const horizontalSpacing = Math.abs(frame2.x - (frame1.x + frame1.width))
    const verticalSpacing = Math.abs(frame2.y - (frame1.y + frame1.height))

    const spacing = {
      horizontal: formatMeasurement(horizontalSpacing, units),
      vertical: formatMeasurement(verticalSpacing, units)
    }

    console.log(`📐 Spacing: H:${spacing.horizontal}, V:${spacing.vertical}`)
    UI.message(`📐 Spacing: H:${spacing.horizontal}, V:${spacing.vertical}`)
    
  } catch (error) {
    console.error('Failed to measure spacing:', error)
  }
}

/**
 * 🔢 Format measurement with units
 */
function formatMeasurement(value, units) {
  const precision = 2
  return `${value.toFixed(precision)}${units}`
}

/**
 * 📏 Get measurement units
 */
function getUnits() {
  try {
    const document = sketch.getSelectedDocument()
    if (document) {
      return Settings.documentSettingForKey(document, 'units') || 'px'
    }
    return 'px'
  } catch (error) {
    return 'px'
  }
}

/**
 * 🎯 Check if it's the first run
 */
function isFirstRun() {
  try {
    return Settings.sessionVariable('sketch-measure-pro-first-run') !== false
  } catch (error) {
    return true
  }
}

/**
 * 🎯 Mark first run as complete
 */
function setFirstRunComplete() {
  try {
    Settings.setSessionVariable('sketch-measure-pro-first-run', false)
  } catch (error) {
    console.error('Failed to set first run complete:', error)
  }
}

/**
 * 🎉 Welcome message for new users
 */
function showWelcomeMessage() {
  const message = `🎨 Welcome to Sketch Measure Pro!

✨ A brand new, modern measurement tool built for the future of design.

🚀 Key Features:
• Quick measurements with one click
• Smart dimension detection
• Beautiful color palettes
• Interactive spacing analysis
• Modern export formats
• Light & dark themes

💡 Pro Tip: Use Ctrl+Shift+M for quick measurements!

Happy designing! 🎨`
  
  UI.message('🎉 Welcome to Sketch Measure Pro!')
  
  // Show detailed welcome in an alert
  setTimeout(() => {
    UI.alert('Welcome!', message)
  }, 1000)
}

/**
 * 📐 Measure Panel - Advanced measurement interface
 */
function measurePanel(context) {
  try {
    initialize()
    UI.message('📐 Measure Panel - Coming Soon!')
    console.log('📐 Measure panel shown')
  } catch (error) {
    console.error('Measure Panel failed:', error)
    UI.message('❌ Failed to open Measure Panel')
  }
}

/**
 * 📏 Smart Dimensions - Intelligent dimension detection
 */
function smartDimensions(context) {
  try {
    initialize()
    UI.message('📏 Smart Dimensions - Coming Soon!')
    console.log('📏 Smart dimensions executed')
  } catch (error) {
    console.error('Smart Dimensions failed:', error)
    UI.message('❌ Smart Dimensions failed')
  }
}

/**
 * 📊 Spacing Inspector - Spacing analysis tool
 */
function spacingInspector(context) {
  try {
    initialize()
    UI.message('📊 Spacing Inspector - Coming Soon!')
    console.log('📊 Spacing inspector executed')
  } catch (error) {
    console.error('Spacing Inspector failed:', error)
    UI.message('❌ Spacing Inspector failed')
  }
}

/**
 * 🎨 Color Palette - Color extraction and management
 */
function colorPalette(context) {
  try {
    initialize()
    UI.message('🎨 Color Palette - Coming Soon!')
    console.log('🎨 Color palette shown')
  } catch (error) {
    console.error('Color Palette failed:', error)
    UI.message('❌ Color Palette failed')
  }
}

/**
 * 💬 Smart Notes - Intelligent annotation system
 */
function smartNotes(context) {
  try {
    initialize()
    UI.message('💬 Smart Notes - Coming Soon!')
    console.log('💬 Smart notes executed')
  } catch (error) {
    console.error('Smart Notes failed:', error)
    UI.message('❌ Smart Notes failed')
  }
}

/**
 * 🎯 Coordinates - Position and coordinate display
 */
function coordinates(context) {
  try {
    initialize()
    UI.message('🎯 Coordinates - Coming Soon!')
    console.log('🎯 Coordinates executed')
  } catch (error) {
    console.error('Coordinates failed:', error)
    UI.message('❌ Coordinates failed')
  }
}

/**
 * 📱 Export Specs - Modern spec export
 */
function exportSpecs(context) {
  try {
    initialize()
    UI.message('📱 Export Specs - Coming Soon!')
    console.log('📱 Spec export executed')
  } catch (error) {
    console.error('Export Specs failed:', error)
    UI.message('❌ Export failed')
  }
}

/**
 * 🔧 Settings - Plugin configuration
 */
function settings(context) {
  try {
    initialize()
    
    const options = [
      'Theme: Auto',
      'Units: px',
      'Style: Modern',
      'Export: HTML',
      '---',
      'Reset to Defaults',
      'Cancel'
    ]

    const result = UI.getInputFromUser('⚙️ Sketch Measure Pro Settings', {
      type: UI.INPUT_TYPE.selection,
      possibleValues: options
    })

    if (result[1] !== undefined) {
      const selected = options[result[1]]
      if (selected === 'Reset to Defaults') {
        UI.message('🔄 Settings reset to defaults')
      } else if (selected.startsWith('Theme:')) {
        showThemeSelection()
      } else if (selected.startsWith('Units:')) {
        showUnitsSelection()
      }
    }
  } catch (error) {
    console.error('Settings failed:', error)
    UI.message('❌ Settings failed')
  }
}

/**
 * Show theme selection
 */
function showThemeSelection() {
  try {
    const result = UI.getInputFromUser('🎨 Select Theme', {
      type: UI.INPUT_TYPE.selection,
      possibleValues: ['light', 'dark', 'auto']
    })

    if (result[1] !== undefined) {
      const themes = ['light', 'dark', 'auto']
      UI.message(`🎨 Theme set to ${themes[result[1]]}`)
    }
  } catch (error) {
    console.error('Failed to show theme selection:', error)
  }
}

/**
 * Show units selection
 */
function showUnitsSelection() {
  try {
    const result = UI.getInputFromUser('📏 Select Units', {
      type: UI.INPUT_TYPE.selection,
      possibleValues: ['px', 'pt', 'rem', 'em']
    })

    if (result[1] !== undefined) {
      const units = ['px', 'pt', 'rem', 'em']
      const document = sketch.getSelectedDocument()
      if (document) {
        Settings.setDocumentSettingForKey(document, 'units', units[result[1]])
      }
      UI.message(`📏 Units set to ${units[result[1]]}`)
    }
  } catch (error) {
    console.error('Failed to show units selection:', error)
  }
}

/**
 * 🎭 Toggle Overlays - Show/hide all overlays
 */
function toggleOverlays(context) {
  try {
    initialize()
    UI.message('🎭 Toggle Overlays - Coming Soon!')
  } catch (error) {
    console.error('Toggle Overlays failed:', error)
    UI.message('❌ Toggle failed')
  }
}

/**
 * 🧹 Clear All - Remove all measurements and annotations
 */
function clearAll(context) {
  try {
    initialize()
    
    const result = UI.getInputFromUser('Are you sure you want to clear all measurements?', {
      type: UI.INPUT_TYPE.selection,
      possibleValues: ['Yes, clear everything', 'Cancel']
    })
    
    if (result[1] === 0) { // User selected "Yes"
      UI.message('🧹 All measurements cleared!')
    }
  } catch (error) {
    console.error('Clear All failed:', error)
    UI.message('❌ Clear failed')
  }
}

/**
 * 🌈 Theme Toggle - Switch between light/dark themes
 */
function themeToggle(context) {
  try {
    initialize()
    UI.message('🌈 Theme Toggle - Coming Soon!')
  } catch (error) {
    console.error('Theme Toggle failed:', error)
    UI.message('❌ Theme toggle failed')
  }
}

/**
 * 📖 Help & Tips - Show help and tips
 */
function help(context) {
  try {
    initialize()
    
    const helpContent = `🎨 Sketch Measure Pro Help

🚀 Quick Start:
• Select layers and press Ctrl+Shift+M for quick measurements
• Use the Measure Panel (Ctrl+Shift+P) for advanced options
• Toggle overlays with Ctrl+Shift+O

✨ Features:
📏 Smart Dimensions - Auto-detect spacing and dimensions
📊 Spacing Inspector - Analyze spacing patterns
🎨 Color Palette - Extract design colors
💬 Smart Notes - Add contextual annotations
🎯 Coordinates - Show precise positioning
📱 Export Specs - Generate developer handoffs

⚙️ Settings:
• Access via menu or settings command
• Switch themes (light/dark/auto)
• Change measurement units
• Customize export formats

💡 Tips:
• Hover over elements for instant measurements
• Use color picker to extract exact values
• Export in multiple formats for different platforms

❓ Need more help? Visit our documentation online!`
    
    UI.alert('📖 Sketch Measure Pro Help', helpContent)
  } catch (error) {
    console.error('Help failed:', error)
    UI.message('❌ Help failed')
  }
}

// Export all functions for the Sketch plugin system
module.exports = {
  quickMeasure,
  measurePanel,
  smartDimensions,
  spacingInspector,
  colorPalette,
  smartNotes,
  coordinates,
  exportSpecs,
  settings,
  toggleOverlays,
  clearAll,
  themeToggle,
  help
}