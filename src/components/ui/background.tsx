export function Background() {
  return (
    <div
      className="fixed inset-0 -z-10 h-full w-full bg-background"
    >
      <div className="absolute inset-0 h-full w-full bg-grid"></div>
    </div>
  );
}
