const format = (str: string) => {
  return str
    .replace(/(_[^*_]+)\*([^*_]+_)/g, "$1_*_$2") // Remove interlacing
    .replace(/\*([^*]+)\*/g, "<b>$1</b>") // Bold
    .replace(/_([^_]+)_/g, "<em>$1</em>") // Italic
    .replace("\n", "<br />"); // New Line
};

export default format;
