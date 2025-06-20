/**
 * 📖 Help Manager for Sketch Measure Pro
 * Provides help, tips, and onboarding
 */

import { Logger } from '../utils/logger'
import { SketchAPIHelper } from '../utils/sketch-api'

export class HelpManager {
  private logger: Logger

  constructor() {
    this.logger = new Logger('HelpManager')
    this.logger.info('📖 Help manager initialized')
  }

  /**
   * 📖 Show main help
   */
  showHelp(): void {
    const helpContent = this.generateHelpContent()
    SketchAPIHelper.showAlert('📖 Sketch Measure Pro Help', helpContent)
  }

  /**
   * 💡 Show tips
   */
  showTips(): void {
    const tips = [
      '💡 Pro Tip: Use Ctrl+Shift+M for quick measurements',
      '🎨 Switch themes with Ctrl+Shift+T',
      '📏 Smart dimensions auto-detect element spacing',
      '🎯 Click and drag to measure between elements',
      '🌈 Color palette extracts all colors from your design'
    ]

    const randomTip = tips[Math.floor(Math.random() * tips.length)]
    SketchAPIHelper.showMessage(randomTip)
  }

  /**
   * 📚 Generate help content
   */
  private generateHelpContent(): string {
    return `
🎨 Sketch Measure Pro Help

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
• Access via menu or Ctrl+Shift+S
• Switch themes (light/dark/auto)
• Change measurement units
• Customize export formats

🔄 Shortcuts:
• Ctrl+Shift+M - Quick Measure
• Ctrl+Shift+P - Measure Panel
• Ctrl+Shift+D - Smart Dimensions
• Ctrl+Shift+S - Spacing Inspector
• Ctrl+Shift+C - Color Palette
• Ctrl+Shift+N - Smart Notes
• Ctrl+Shift+X - Coordinates
• Ctrl+Shift+E - Export Specs
• Ctrl+Shift+O - Toggle Overlays
• Ctrl+Shift+T - Theme Toggle
• Ctrl+Shift+Backspace - Clear All

💡 Tips:
• Hover over elements for instant measurements
• Use color picker to extract exact values
• Export in multiple formats for different platforms
• Collaborate with shared measurement links

❓ Need more help? Visit our documentation online!
    `.trim()
  }
}