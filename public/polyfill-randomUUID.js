if (typeof window !== 'undefined') {
  if (
    typeof window.crypto !== 'undefined' &&
    typeof window.crypto.randomUUID !== 'function'
  ) {
    window.crypto.randomUUID = () => {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    };
  }
}

