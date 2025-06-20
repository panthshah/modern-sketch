/**
 * 🎨 Color Palette Feature
 */

import { ConfigManager } from '../core/config-manager'
import { ThemeManager } from '../core/theme-manager'
import { Logger } from '../utils/logger'
import { SketchAPIHelper } from '../utils/sketch-api'

export class ColorPalette {
  private logger: Logger

  constructor(configManager: ConfigManager, themeManager: ThemeManager) {
    this.logger = new Logger('ColorPalette')
  }

  show(): void {
    SketchAPIHelper.showMessage('🎨 Color Palette - Coming Soon!')
    this.logger.info('🎨 Color palette shown')
  }
}