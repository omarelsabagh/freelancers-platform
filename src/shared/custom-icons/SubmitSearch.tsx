import { cn } from "@/lib/utils/cn";
import { MoveRight } from "lucide-react";

type InputProps = React.ComponentProps<"input">;

const SubmitSearch = ({ className, onClick }: InputProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "bg-primary rounded-[6px] flex items-center justify-center h-8 w-8",
        className
      )}
    >
      <MoveRight className="h-6 w-6 text-primary-foreground" />
    </div>
  );
};

export default SubmitSearch;
