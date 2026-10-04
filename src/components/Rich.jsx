// Renders **bold** markers inside question text.
export default function Rich({ text }) {
  return text.split("**").map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part));
}
