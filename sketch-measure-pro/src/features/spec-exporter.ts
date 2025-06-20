/**
 * 📱 Spec Exporter Feature
 */

import { ConfigManager } from '../core/config-manager'
import { ThemeManager } from '../core/theme-manager'
import { Logger } from '../utils/logger'
import { SketchAPIHelper } from '../utils/sketch-api'

export class SpecExporter {
  private logger: Logger

  constructor(configManager: ConfigManager, themeManager: ThemeManager) {
    this.logger = new Logger('SpecExporter')
  }

  export(): void {
    SketchAPIHelper.showMessage('📱 Spec Exporter - Coming Soon!')
    this.logger.info('📱 Spec export executed')
  }
}