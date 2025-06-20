/**
 * ⚙️ Configuration Manager for Sketch Measure Pro
 * Handles all plugin settings and preferences
 */

import { SketchAPIHelper } from '../utils/sketch-api'
import { Logger } from '../utils/logger'

export interface PluginConfig {
  // 🎨 Theme settings
  theme: 'light' | 'dark' | 'auto'
  
  // 📏 Measurement settings
  units: 'px' | 'pt' | 'rem' | 'em'
  precision: number
  showGrid: boolean
  snapToGrid: boolean
  
  // 🎯 Quick measure settings
  quickMeasureEnabled: boolean
  autoDetectSpacing: boolean
  smartDimensions: boolean
  
  // 🎨 Visual settings
  overlayOpacity: number
  annotationStyle: 'modern' | 'classic' | 'minimal'
  colorScheme: string
  fontSize: number
  
  // 📱 Export settings
  exportFormat: 'html' | 'json' | 'css' | 'swift' | 'flutter'
  includeAssets: boolean
  generateCode: boolean
  
  // 🚀 Advanced settings
  animationsEnabled: boolean
  debugMode: boolean
  autoUpdate: boolean
  firstRun: boolean
}

const DEFAULT_CONFIG: PluginConfig = {
  theme: 'auto',
  units: 'px',
  precision: 2,
  showGrid: false,
  snapToGrid: false,
  quickMeasureEnabled: true,
  autoDetectSpacing: true,
  smartDimensions: true,
  overlayOpacity: 0.8,
  annotationStyle: 'modern',
  colorScheme: 'blue',
  fontSize: 12,
  exportFormat: 'html',
  includeAssets: true,
  generateCode: true,
  animationsEnabled: true,
  debugMode: false,
  autoUpdate: true,
  firstRun: true
}

export class ConfigManager {
  private logger: Logger
  private config: PluginConfig
  private readonly CONFIG_KEY = 'sketch-measure-pro-config'

  constructor() {
    this.logger = new Logger('ConfigManager')
    this.config = this.loadConfig()
    this.logger.info('📋 Configuration loaded')
  }

  /**
   * 📁 Load configuration from document settings
   */
  private loadConfig(): PluginConfig {
    try {
      const savedConfig = SketchAPIHelper.getDocumentSetting(this.CONFIG_KEY, {})
      return { ...DEFAULT_CONFIG, ...savedConfig }
    } catch (error) {
      this.logger.warn('Failed to load config, using defaults:', error)
      return { ...DEFAULT_CONFIG }
    }
  }

  /**
   * 💾 Save configuration to document settings
   */
  private saveConfig(): boolean {
    try {
      return SketchAPIHelper.setDocumentSetting(this.CONFIG_KEY, this.config)
    } catch (error) {
      this.logger.error('Failed to save config:', error)
      return false
    }
  }

  /**
   * 🔧 Get current configuration
   */
  getConfig(): PluginConfig {
    return { ...this.config }
  }

  /**
   * 🔧 Update configuration
   */
  updateConfig(updates: Partial<PluginConfig>): boolean {
    try {
      this.config = { ...this.config, ...updates }
      const saved = this.saveConfig()
      if (saved) {
        this.logger.info('⚙️ Configuration updated')
      }
      return saved
    } catch (error) {
      this.logger.error('Failed to update config:', error)
      return false
    }
  }

  /**
   * 🎨 Get theme setting
   */
  getTheme(): 'light' | 'dark' | 'auto' {
    return this.config.theme
  }

  /**
   * 🎨 Set theme
   */
  setTheme(theme: 'light' | 'dark' | 'auto'): boolean {
    return this.updateConfig({ theme })
  }

  /**
   * 📏 Get measurement units
   */
  getUnits(): string {
    return this.config.units
  }

  /**
   * 📏 Set measurement units
   */
  setUnits(units: 'px' | 'pt' | 'rem' | 'em'): boolean {
    return this.updateConfig({ units })
  }

  /**
   * 🎯 Check if it's the first run
   */
  isFirstRun(): boolean {
    return this.config.firstRun
  }

  /**
   * 🎯 Mark first run as complete
   */
  setFirstRunComplete(): boolean {
    return this.updateConfig({ firstRun: false })
  }

  /**
   * 🔧 Reset configuration to defaults
   */
  resetToDefaults(): boolean {
    this.config = { ...DEFAULT_CONFIG }
    const saved = this.saveConfig()
    if (saved) {
      this.logger.info('🔄 Configuration reset to defaults')
    }
    return saved
  }

  /**
   * 🎛️ Show settings panel
   */
  showSettingsPanel() {
    try {
      const options = [
        `Theme: ${this.config.theme}`,
        `Units: ${this.config.units}`,
        `Style: ${this.config.annotationStyle}`,
        `Export: ${this.config.exportFormat}`,
        '---',
        'Reset to Defaults',
        'Cancel'
      ]

      const UI = require('sketch/ui')
      const result = UI.getInputFromUser('⚙️ Sketch Measure Pro Settings', {
        type: UI.INPUT_TYPE.selection,
        possibleValues: options
      })

      if (result[1] !== undefined) {
        this.handleSettingsSelection(result[1], options)
      }
    } catch (error) {
      this.logger.error('Failed to show settings panel:', error)
      SketchAPIHelper.showMessage('❌ Failed to open settings')
    }
  }

  /**
   * Handle settings panel selection
   */
  private handleSettingsSelection(index: number, options: string[]) {
    const selected = options[index]
    
    if (selected === 'Reset to Defaults') {
      if (this.resetToDefaults()) {
        SketchAPIHelper.showMessage('🔄 Settings reset to defaults')
      }
    } else if (selected.startsWith('Theme:')) {
      this.showThemeSelection()
    } else if (selected.startsWith('Units:')) {
      this.showUnitsSelection()
    } else if (selected.startsWith('Style:')) {
      this.showStyleSelection()
    } else if (selected.startsWith('Export:')) {
      this.showExportSelection()
    }
  }

  /**
   * Show theme selection
   */
  private showThemeSelection() {
    try {
      const UI = require('sketch/ui')
      const result = UI.getInputFromUser('🎨 Select Theme', {
        type: UI.INPUT_TYPE.selection,
        possibleValues: ['light', 'dark', 'auto']
      })

      if (result[1] !== undefined) {
        const themes = ['light', 'dark', 'auto'] as const
        this.setTheme(themes[result[1]])
        SketchAPIHelper.showMessage(`🎨 Theme set to ${themes[result[1]]}`)
      }
    } catch (error) {
      this.logger.error('Failed to show theme selection:', error)
    }
  }

  /**
   * Show units selection
   */
  private showUnitsSelection() {
    try {
      const UI = require('sketch/ui')
      const result = UI.getInputFromUser('📏 Select Units', {
        type: UI.INPUT_TYPE.selection,
        possibleValues: ['px', 'pt', 'rem', 'em']
      })

      if (result[1] !== undefined) {
        const units = ['px', 'pt', 'rem', 'em'] as const
        this.setUnits(units[result[1]])
        SketchAPIHelper.showMessage(`📏 Units set to ${units[result[1]]}`)
      }
    } catch (error) {
      this.logger.error('Failed to show units selection:', error)
    }
  }

  /**
   * Show style selection
   */
  private showStyleSelection() {
    try {
      const UI = require('sketch/ui')
      const result = UI.getInputFromUser('✨ Select Annotation Style', {
        type: UI.INPUT_TYPE.selection,
        possibleValues: ['modern', 'classic', 'minimal']
      })

      if (result[1] !== undefined) {
        const styles = ['modern', 'classic', 'minimal'] as const
        this.updateConfig({ annotationStyle: styles[result[1]] })
        SketchAPIHelper.showMessage(`✨ Style set to ${styles[result[1]]}`)
      }
    } catch (error) {
      this.logger.error('Failed to show style selection:', error)
    }
  }

  /**
   * Show export format selection
   */
  private showExportSelection() {
    try {
      const UI = require('sketch/ui')
      const result = UI.getInputFromUser('📱 Select Export Format', {
        type: UI.INPUT_TYPE.selection,
        possibleValues: ['html', 'json', 'css', 'swift', 'flutter']
      })

      if (result[1] !== undefined) {
        const formats = ['html', 'json', 'css', 'swift', 'flutter'] as const
        this.updateConfig({ exportFormat: formats[result[1]] })
        SketchAPIHelper.showMessage(`📱 Export format set to ${formats[result[1]]}`)
      }
    } catch (error) {
      this.logger.error('Failed to show export selection:', error)
    }
  }
}