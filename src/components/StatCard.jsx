function StatCard({ stat }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 text-center shadow-glow">
      <p className="text-4xl font-semibold text-white">{stat.value}</p>
      <p className="mt-2 text-sm uppercase tracking-[0.35em] text-slate-400">{stat.label}</p>
    </div>
  );
}

export default StatCard;
