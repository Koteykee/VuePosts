export function capitalize(text) {
  if (!text) return "";
  const capitalizedText = text[0].toUpperCase() + text.slice(1);
  return capitalizedText;
}
