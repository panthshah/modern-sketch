/**
 * 🎨 Theme Manager for Sketch Measure Pro
 * Handles theme switching and color management
 */

import { ConfigManager } from './config-manager'
import { Logger } from '../utils/logger'

export interface ColorScheme {
  primary: string
  secondary: string
  accent: string
  background: string
  surface: string
  text: string
  textSecondary: string
  border: string
  shadow: string
  success: string
  warning: string
  error: string
}

const LIGHT_THEME: ColorScheme = {
  primary: '#007AFF',
  secondary: '#5856D6',
  accent: '#FF2D92',
  background: '#FFFFFF',
  surface: '#F2F2F7',
  text: '#000000',
  textSecondary: '#8E8E93',
  border: '#C6C6C8',
  shadow: 'rgba(0, 0, 0, 0.1)',
  success: '#34C759',
  warning: '#FF9500',
  error: '#FF3B30'
}

const DARK_THEME: ColorScheme = {
  primary: '#0A84FF',
  secondary: '#5E5CE6',
  accent: '#FF375F',
  background: '#000000',
  surface: '#1C1C1E',
  text: '#FFFFFF',
  textSecondary: '#8E8E93',
  border: '#38383A',
  shadow: 'rgba(0, 0, 0, 0.3)',
  success: '#30D158',
  warning: '#FF9F0A',
  error: '#FF453A'
}

export class ThemeManager {
  private logger: Logger
  private configManager: ConfigManager
  private currentScheme: ColorScheme

  constructor(configManager: ConfigManager) {
    this.logger = new Logger('ThemeManager')
    this.configManager = configManager
    this.currentScheme = this.determineColorScheme()
    this.logger.info('🎨 Theme manager initialized')
  }

  /**
   * 🎨 Get current color scheme
   */
  getColorScheme(): ColorScheme {
    return { ...this.currentScheme }
  }

  /**
   * 🌓 Get current theme name
   */
  getCurrentTheme(): string {
    const themeConfig = this.configManager.getTheme()
    
    if (themeConfig === 'auto') {
      return this.isSystemDarkMode() ? 'dark' : 'light'
    }
    
    return themeConfig
  }

  /**
   * 🔄 Toggle between light and dark theme
   */
  toggleTheme(): void {
    const currentTheme = this.getCurrentTheme()
    const newTheme = currentTheme === 'light' ? 'dark' : 'light'
    
    this.configManager.setTheme(newTheme)
    this.currentScheme = this.determineColorScheme()
    
    this.logger.info(`🎨 Theme switched to ${newTheme}`)
  }

  /**
   * 🎨 Set specific theme
   */
  setTheme(theme: 'light' | 'dark' | 'auto'): void {
    this.configManager.setTheme(theme)
    this.currentScheme = this.determineColorScheme()
    this.logger.info(`🎨 Theme set to ${theme}`)
  }

  /**
   * 🌈 Get color with opacity
   */
  getColorWithOpacity(colorKey: keyof ColorScheme, opacity: number): string {
    const color = this.currentScheme[colorKey]
    
    // Simple opacity implementation for hex colors
    if (color.startsWith('#')) {
      const alpha = Math.round(opacity * 255).toString(16).padStart(2, '0')
      return `${color}${alpha}`
    }
    
    // For rgba colors, modify the alpha
    if (color.startsWith('rgba')) {
      return color.replace(/[\d.]+\)$/, `${opacity})`)
    }
    
    return color
  }

  /**
   * 🎨 Generate CSS-style color variables
   */
  getCSSVariables(): string {
    const scheme = this.currentScheme
    return `
      --smp-primary: ${scheme.primary};
      --smp-secondary: ${scheme.secondary};
      --smp-accent: ${scheme.accent};
      --smp-background: ${scheme.background};
      --smp-surface: ${scheme.surface};
      --smp-text: ${scheme.text};
      --smp-text-secondary: ${scheme.textSecondary};
      --smp-border: ${scheme.border};
      --smp-shadow: ${scheme.shadow};
      --smp-success: ${scheme.success};
      --smp-warning: ${scheme.warning};
      --smp-error: ${scheme.error};
    `.trim()
  }

  /**
   * 🌙 Check if system is in dark mode
   */
  private isSystemDarkMode(): boolean {
    try {
      // Try to detect system dark mode
      // This is a simplified approach for Sketch environment
      const now = new Date()
      const hour = now.getHours()
      
      // Simple heuristic: consider it "dark mode" between 6 PM and 6 AM
      return hour >= 18 || hour <= 6
    } catch (error) {
      this.logger.warn('Could not detect system theme, defaulting to light')
      return false
    }
  }

  /**
   * 🎨 Determine the current color scheme based on settings
   */
  private determineColorScheme(): ColorScheme {
    const themeConfig = this.configManager.getTheme()
    
    let isDark = false
    
    if (themeConfig === 'dark') {
      isDark = true
    } else if (themeConfig === 'auto') {
      isDark = this.isSystemDarkMode()
    }
    
    return isDark ? { ...DARK_THEME } : { ...LIGHT_THEME }
  }

  /**
   * 🌈 Create gradient colors
   */
  createGradient(startColor: keyof ColorScheme, endColor: keyof ColorScheme, angle: number = 45): string {
    const start = this.currentScheme[startColor]
    const end = this.currentScheme[endColor]
    return `linear-gradient(${angle}deg, ${start}, ${end})`
  }

  /**
   * 🎨 Get contrasting text color
   */
  getContrastingTextColor(backgroundColor: keyof ColorScheme): string {
    // Simple contrast logic - in a real app you'd calculate luminance
    const isDarkBg = ['background', 'surface'].includes(backgroundColor) && this.getCurrentTheme() === 'dark'
    return isDarkBg ? this.currentScheme.text : this.currentScheme.text
  }
}