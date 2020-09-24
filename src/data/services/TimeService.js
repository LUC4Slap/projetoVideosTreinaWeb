export const TimeService = {
  formatTime(dureation) {
    const minutes = (Math.floor(dureation/60)).toString().padStart(2, '0');
    const seconds = (dureation%60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }
}