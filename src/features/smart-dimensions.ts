/**
 * 📏 Smart Dimensions Feature
 */

import { ConfigManager } from '../core/config-manager'
import { ThemeManager } from '../core/theme-manager'
import { OverlayManager } from '../core/overlay-manager'
import { Logger } from '../utils/logger'
import { SketchAPIHelper } from '../utils/sketch-api'

export class SmartDimensions {
  private logger: Logger

  constructor(configManager: ConfigManager, themeManager: ThemeManager, overlayManager: OverlayManager) {
    this.logger = new Logger('SmartDimensions')
  }

  execute(): void {
    SketchAPIHelper.showMessage('📏 Smart Dimensions - Coming Soon!')
    this.logger.info('📏 Smart dimensions executed')
  }
}