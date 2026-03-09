export const BuyerDots = ({ profiles }: { profiles: string[] }) => {
  const colorMap: Record<string, string> = {
    maria: 'bg-profile-maria',
    pedro: 'bg-profile-pedro',
    carlos: 'bg-profile-carlos',
    investor: 'bg-profile-investor',
  };
  return (
    <div className="flex items-center gap-1.5">
      {profiles.map((p) => (
        <span
          key={p}
          className={`w-2.5 h-2.5 rounded-full ${colorMap[p] || 'bg-muted-foreground'}`}
          title={p.charAt(0).toUpperCase() + p.slice(1)}
        />
      ))}
    </div>
  );
};
