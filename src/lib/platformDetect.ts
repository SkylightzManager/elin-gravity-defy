export const detectPlatform = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  const platform = navigator.platform.toLowerCase();
  
  // Check for iOS
  if (/iphone|ipad|ipod/.test(userAgent) || (platform.includes('mac') && 'ontouchend' in document)) {
    return 'ios';
  }
  
  // Check for macOS (desktop)
  if (platform.includes('mac')) {
    return 'ios';
  }
  
  // Default to Android for Windows, Android, and others
  return 'android';
};

export const getBookingUrl = () => {
  const platform = detectPlatform();
  
  if (platform === 'ios') {
    return 'https://apps.apple.com/us/developer/elin-dance-studio-pte-ltd/id1750182306';
  }
  
  return 'https://play.google.com/store/apps/developer?id=Elin+Dance+Studio+Pte+Ltd&hl=en_IN';
};
