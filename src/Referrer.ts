export function getReferrer(): string {
  let referrer = '';
  
  if (document && document.referrer) {
    referrer = document.referrer;
    localStorage.setItem('referrer', referrer);
  } else {
    referrer = localStorage.getItem('referrer') || 'none';
  }

  return referrer;
}