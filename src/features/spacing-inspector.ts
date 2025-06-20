/**
 * 📊 Spacing Inspector Feature
 */

import { ConfigManager } from '../core/config-manager'
import { ThemeManager } from '../core/theme-manager'
import { OverlayManager } from '../core/overlay-manager'
import { Logger } from '../utils/logger'
import { SketchAPIHelper } from '../utils/sketch-api'

export class SpacingInspector {
  private logger: Logger

  constructor(configManager: ConfigManager, themeManager: ThemeManager, overlayManager: OverlayManager) {
    this.logger = new Logger('SpacingInspector')
  }

  execute(): void {
    SketchAPIHelper.showMessage('📊 Spacing Inspector - Coming Soon!')
    this.logger.info('📊 Spacing inspector executed')
  }
}