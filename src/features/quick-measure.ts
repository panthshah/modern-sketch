/**
 * 🎯 Quick Measure Feature
 * Provides instant measurements for selected layers
 */

import { ConfigManager } from '../core/config-manager'
import { ThemeManager } from '../core/theme-manager'
import { OverlayManager } from '../core/overlay-manager'
import { Logger } from '../utils/logger'
import { SketchAPIHelper } from '../utils/sketch-api'

export class QuickMeasure {
  private logger: Logger
  private configManager: ConfigManager
  private themeManager: ThemeManager
  private overlayManager: OverlayManager

  constructor(
    configManager: ConfigManager,
    themeManager: ThemeManager,
    overlayManager: OverlayManager
  ) {
    this.logger = new Logger('QuickMeasure')
    this.configManager = configManager
    this.themeManager = themeManager
    this.overlayManager = overlayManager
  }

  /**
   * 🎯 Execute quick measure
   */
  execute(): void {
    try {
      if (!SketchAPIHelper.hasValidContext()) {
        SketchAPIHelper.showMessage('❌ No document open')
        return
      }

      if (!SketchAPIHelper.hasSelectedLayers()) {
        SketchAPIHelper.showMessage('💡 Please select one or more layers first')
        return
      }

      const layers = SketchAPIHelper.getSelectedLayers()
      this.logger.info(`🎯 Measuring ${layers.length} layer(s)`)

      if (layers.length === 1) {
        this.measureSingleLayer(layers[0])
      } else {
        this.measureMultipleLayers(layers)
      }

      SketchAPIHelper.showMessage(`📏 Measured ${layers.length} layer(s)`)
    } catch (error) {
      this.logger.error('Quick measure failed:', error)
      SketchAPIHelper.showMessage('❌ Quick measure failed')
    }
  }

  /**
   * 📏 Measure a single layer
   */
  private measureSingleLayer(layer: any): void {
    try {
      const frame = layer.frame
      const units = this.configManager.getUnits()
      
      const measurements = {
        width: this.formatMeasurement(frame.width, units),
        height: this.formatMeasurement(frame.height, units),
        x: this.formatMeasurement(frame.x, units),
        y: this.formatMeasurement(frame.y, units)
      }

      this.logger.info(`📏 Layer "${layer.name}": ${measurements.width} × ${measurements.height}`)
      
      // Create overlay with measurements
      this.overlayManager.createMeasurementOverlay(layer, measurements)
      
    } catch (error) {
      this.logger.error('Failed to measure single layer:', error)
    }
  }

  /**
   * 📊 Measure multiple layers
   */
  private measureMultipleLayers(layers: any[]): void {
    try {
      for (const layer of layers) {
        this.measureSingleLayer(layer)
      }
      
      // Also measure spacing between layers if applicable
      if (layers.length === 2) {
        this.measureSpacingBetweenLayers(layers[0], layers[1])
      }
    } catch (error) {
      this.logger.error('Failed to measure multiple layers:', error)
    }
  }

  /**
   * 📐 Measure spacing between two layers
   */
  private measureSpacingBetweenLayers(layer1: any, layer2: any): void {
    try {
      const frame1 = layer1.frame
      const frame2 = layer2.frame
      const units = this.configManager.getUnits()

      // Calculate horizontal and vertical spacing
      const horizontalSpacing = Math.abs(frame2.x - (frame1.x + frame1.width))
      const verticalSpacing = Math.abs(frame2.y - (frame1.y + frame1.height))

      const spacing = {
        horizontal: this.formatMeasurement(horizontalSpacing, units),
        vertical: this.formatMeasurement(verticalSpacing, units)
      }

      this.logger.info(`📐 Spacing: H:${spacing.horizontal}, V:${spacing.vertical}`)
      
    } catch (error) {
      this.logger.error('Failed to measure spacing:', error)
    }
  }

  /**
   * 🔢 Format measurement with units
   */
  private formatMeasurement(value: number, units: string): string {
    const precision = this.configManager.getConfig().precision
    return `${value.toFixed(precision)}${units}`
  }
}