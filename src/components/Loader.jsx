function Loader() {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-950/95 backdrop-blur-lg">
      <div className="flex flex-col items-center gap-4 text-center text-white">
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-neon-blue/30 bg-white/5 shadow-[0_0_60px_rgba(79,70,229,0.4)]">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-neon-teal/50 border-t-transparent" />
        </div>
        <div>
          <p className="text-lg font-semibold">Loading premium portfolio...</p>
          <p className="mt-2 text-sm text-slate-400">Preparing a futuristic developer experience.</p>
        </div>
      </div>
    </div>
  );
}

export default Loader;
