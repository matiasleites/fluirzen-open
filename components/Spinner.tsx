import { FaSpinner } from "react-icons/fa6";

export default function Spinner({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <div className="animate-spin">
      <FaSpinner size={size} className={className} />
    </div>
  );
}
