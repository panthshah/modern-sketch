/**
 * 🎯 Coordinates Feature
 */

import { ConfigManager } from '../core/config-manager'
import { ThemeManager } from '../core/theme-manager'
import { OverlayManager } from '../core/overlay-manager'
import { Logger } from '../utils/logger'
import { SketchAPIHelper } from '../utils/sketch-api'

export class Coordinates {
  private logger: Logger

  constructor(configManager: ConfigManager, themeManager: ThemeManager, overlayManager: OverlayManager) {
    this.logger = new Logger('Coordinates')
  }

  execute(): void {
    SketchAPIHelper.showMessage('🎯 Coordinates - Coming Soon!')
    this.logger.info('🎯 Coordinates executed')
  }
}