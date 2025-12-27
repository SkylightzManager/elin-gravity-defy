export const detectPlatform = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  const platform = navigator.platform.toLowerCase();
  
  // Check for iOS
  if (/iphone|ipad|ipod/.test(userAgent) || platform.includes('mac')) {
    return 'ios';
  }
  
  // Check for Android or Windows
  if (/android/.test(userAgent) || platform.includes('win')) {
    return 'android';
  }
  
  // Default to Android for other platforms
  return 'android';
};

export const getBookingUrl = () => {
  const platform = detectPlatform();
  
  if (platform === 'ios') {
    return 'https://apps.apple.com/us/developer/elin-dance-studio-pte-ltd/id1750182306';
  }
  
  return 'https://play.google.com/store/apps/developer?id=Elin+Dance+Studio+Pte+Ltd&hl=en_IN';
};
