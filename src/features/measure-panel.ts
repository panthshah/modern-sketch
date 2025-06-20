/**
 * 📐 Measure Panel Feature
 */

import { ConfigManager } from '../core/config-manager'
import { ThemeManager } from '../core/theme-manager'
import { Logger } from '../utils/logger'
import { SketchAPIHelper } from '../utils/sketch-api'

export class MeasurePanel {
  private logger: Logger

  constructor(configManager: ConfigManager, themeManager: ThemeManager) {
    this.logger = new Logger('MeasurePanel')
  }

  show(): void {
    SketchAPIHelper.showMessage('📐 Measure Panel - Coming Soon!')
    this.logger.info('📐 Measure panel shown')
  }
}