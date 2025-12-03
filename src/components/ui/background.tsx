export function Background() {
  return (
    <div
      className="fixed inset-0 -z-10 h-full w-full bg-cover bg-center bg-no-repeat bg-fixed opacity-20"
      style={{
        backgroundImage:
          "url('https://picsum.photos/seed/tech/1920/3000')",
      }}
      data-ai-hint="computer network"
    >
      <div className="absolute inset-0 bg-background/50"></div>
    </div>
  );
}
