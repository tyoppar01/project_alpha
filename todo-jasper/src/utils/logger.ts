import { LogLevel } from "../types/log.enum.js";

export class Logger {

      private static instance: Logger;

      private constructor(private serviceName = "ToDoLogger") {      
      }

      public static getInstance(): Logger {
            if (!Logger.instance) {
                  Logger.instance = new Logger();
            }
            return Logger.instance;
      }

      private formatLog(level: LogLevel, message: string): string {
            const timestamp = new Date().toISOString();
            return `[${timestamp}][${this.serviceName}][${level}][${message}]`
      }

      public info(message: string, ...optional: unknown[]) {
            console.info(this.formatLog(LogLevel.INFO, message));
      }

      public error(message: string, ...optional: unknown[]) {
            console.error(this.formatLog(LogLevel.ERROR, message));
      }

      public warn(message: string, ...optional: unknown[]) {
            console.info(this.formatLog(LogLevel.WARN, message));
      }

} 