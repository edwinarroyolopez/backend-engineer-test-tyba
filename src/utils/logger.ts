/*
    - Trace - Only when I would be "tracing" the code and trying to find one part of a function specifically.
    - Debug - Information that is diagnostically helpful to people more than just developers (IT, sysadmins, etc.).
    - Info - Generally useful information to log (service start/stop, configuration assumptions, etc). Info I want to always have available but usually don't care about under normal circumstances. This is my out-of-the-box config level.
    - Warn - Anything that can potentially cause application oddities, but for which I am automatically recovering. (Such as switching from a primary to backup server, retrying an operation, missing secondary data, etc.)
    - Error - Any error which is fatal to the operation, but not the service or application (can't open a required file, missing data, etc.). These errors will force user (administrator, or direct user) intervention. These are usually reserved (in my apps) for incorrect connection strings, missing services, etc.
    - Fatal - Any error that is forcing a shutdown of the service or application to prevent data loss (or further data loss). I reserve these only for the most heinous errors and situations where there is guaranteed to have been data corruption or loss.
*/
const TRACE_COLOR = '\x1b[32m%s\x1b[0m'; //green
const DEBUG_COLOR = '\x1b[33m%s\x1b[0m'; //yellow
const INFO_COLOR = '\x1b[36m%s\x1b[0m'; //cyan
const WARN_COLOR = '\x1b[33m%s\x1b[0m'; //yellow
const ERROR_COLOR = '\x1b[31m%s\x1b[0m'; //red
const FATAL_COLOR = '\x1b[41m%s\x1b[0m'; //background red

export const logger = class {
    static trace(message: string, ...optionalParams: any) { console.info(TRACE_COLOR, `[ ${new Date().toUTCString()} ]: ${message}`, ...optionalParams) }
    static debug(message: string, ...optionalParams: any) { console.info(DEBUG_COLOR, `[ ${new Date().toUTCString()} ]: ${message}`, ...optionalParams) }
    static info(message: string, ...optionalParams: any) { console.info(INFO_COLOR, `[ ${new Date().toUTCString()} ]: ${message}`, ...optionalParams) }
    static warn(message: string, ...optionalParams: any) { console.warn(WARN_COLOR, `[ ${new Date().toUTCString()} ]: ${message}`, ...optionalParams) }
    static error(message: string, ...optionalParams: any): void { console.error(ERROR_COLOR, `[ ${new Date().toUTCString()} ]: ${message}`, ...optionalParams) }
    static fatal(message: string, ...optionalParams: any) { console.error(FATAL_COLOR, `[ ${new Date().toUTCString()} ]: ${message}`, ...optionalParams) }
}