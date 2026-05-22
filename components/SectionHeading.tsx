import { cn } from "@/lib/utils";

interface Props {
  title: string;
  subtitle?: string;
  className?: string;
  action?: React.ReactNode;
}

export function SectionHeading({ title, subtitle, className, action }: Props) {
  return (
    <div className={cn("flex items-end justify-between gap-4 mb-6", className)}>
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">{title}</h2>
        {subtitle ? <p className="text-slate-600 mt-1">{subtitle}</p> : null}
      </div>
      {action}
    </div>
  );
}
