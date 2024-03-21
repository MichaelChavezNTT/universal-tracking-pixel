// // src/config.ts

// // Define the configuration interface
// export interface Config {
//   apiUrl: string;
// }

// // Private internal configuration object
// let internalConfig: Config = {
//   apiUrl: '', // Default value or leave empty to force setting by user
// };

// // Function to set the configuration
// export function setConfig(userConfig: Partial<Config>): void {
//   internalConfig = { ...internalConfig, ...userConfig };
// }

// // Function to get the current configuration
// export function getConfig(): Config {
//   return internalConfig;
// }

// src/config.ts

export interface ConfigOptions {
  apiUrl: string;
}

export class Config {
  private static instance: Config;
  apiUrl: string = '';

  private constructor() {}

  public static getInstance(): Config {
    if (!Config.instance) {
      Config.instance = new Config();
    }
    return Config.instance;
  }

  public init(options: ConfigOptions): void {
    this.apiUrl = options.apiUrl;
  }
}
