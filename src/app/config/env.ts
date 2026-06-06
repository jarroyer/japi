
export default class Env {

  homeAssistantUrl: string;
  homeAssistantToken: string;

  constructor() {
    this.homeAssistantUrl = this._getEnv("HOME_ASSISTANT_URL");
    this.homeAssistantToken = this._getEnv("HOME_ASSISTANT_TOKEN");
  }

  _getEnv(key: string): string {
    const value = process.env[key];
    if (!value) {
      throw new Error(`Environment ${key} not found`);
    }
    return value;
  }
}