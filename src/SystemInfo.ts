import bowser from 'bowser';

export function getSystemInfo(): { [key: string]: string } {
  const systemInfo: { [key: string]: string } = {};

  if (typeof window !== 'undefined') {
    const browser = bowser.getParser(window.navigator.userAgent);
    systemInfo['browserName'] = browser.getBrowserName();
    systemInfo['browserVersion'] = browser.getBrowserVersion();
    systemInfo['osName'] = browser.getOSName();
    systemInfo['osVersion'] = browser.getOSVersion();
    systemInfo['platformType'] = browser.getPlatformType();
  }

  return systemInfo;
}
