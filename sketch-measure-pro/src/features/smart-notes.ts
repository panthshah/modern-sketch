/**
 * 💬 Smart Notes Feature
 */

import { ConfigManager } from '../core/config-manager'
import { ThemeManager } from '../core/theme-manager'
import { OverlayManager } from '../core/overlay-manager'
import { Logger } from '../utils/logger'
import { SketchAPIHelper } from '../utils/sketch-api'

export class SmartNotes {
  private logger: Logger

  constructor(configManager: ConfigManager, themeManager: ThemeManager, overlayManager: OverlayManager) {
    this.logger = new Logger('SmartNotes')
  }

  execute(): void {
    SketchAPIHelper.showMessage('💬 Smart Notes - Coming Soon!')
    this.logger.info('💬 Smart notes executed')
  }
}