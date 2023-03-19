export default function Typography() {
  const boilerplate = "Tailwind typography awesome";
  return (
    <div>
      <h1>Typography</h1>

      {/* Font Family */}
      <div className="font-sans">{boilerplate}</div>
      <div className="font-serif">{boilerplate}</div>
      <div className="font-mono">{boilerplate}</div>
   </div>
  );
}