/**
 * 🐛 Modern Logger for Sketch Measure Pro
 * Provides structured logging with different levels
 */

export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3
}

export class Logger {
  private name: string
  private level: LogLevel = LogLevel.INFO

  constructor(name: string, level: LogLevel = LogLevel.INFO) {
    this.name = name
    this.level = level
  }

  /**
   * 🐛 Debug logging
   */
  debug(message: string, ...args: any[]) {
    if (this.level <= LogLevel.DEBUG) {
      this.log('DEBUG', message, ...args)
    }
  }

  /**
   * ℹ️ Info logging
   */
  info(message: string, ...args: any[]) {
    if (this.level <= LogLevel.INFO) {
      this.log('INFO', message, ...args)
    }
  }

  /**
   * ⚠️ Warning logging
   */
  warn(message: string, ...args: any[]) {
    if (this.level <= LogLevel.WARN) {
      this.log('WARN', message, ...args)
    }
  }

  /**
   * ❌ Error logging
   */
  error(message: string, ...args: any[]) {
    if (this.level <= LogLevel.ERROR) {
      this.log('ERROR', message, ...args)
    }
  }

  /**
   * Internal logging method
   */
  private log(level: string, message: string, ...args: any[]) {
    const timestamp = new Date().toISOString()
    const logMessage = `[${timestamp}] [${this.name}] ${level}: ${message}`
    
    try {
      // Simple logging approach that works in Sketch environment
      const fullMessage = args.length > 0 
        ? `${logMessage} | Data: ${JSON.stringify(args)}`
        : logMessage
      
      // Try to use print() which is available in CocoaScript
      if (typeof print !== 'undefined') {
        ;(print as any)(fullMessage)
      }
    } catch (e) {
      // Silent fallback - don't break the plugin if logging fails
      // In production, logging failures should not crash the plugin
    }
  }

  /**
   * Set the logging level
   */
  setLevel(level: LogLevel) {
    this.level = level
  }

  /**
   * Create a child logger with a sub-name
   */
  child(subName: string): Logger {
    return new Logger(`${this.name}:${subName}`, this.level)
  }
}

/**
 * Default logger instance
 */
export const logger = new Logger('SketchMeasurePro')

/**
 * Create a named logger
 */
export function createLogger(name: string, level?: LogLevel): Logger {
  return new Logger(name, level)
}