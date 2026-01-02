import { ChevronRight } from "lucide-react";

interface LinkButtonProps {
  href: string;
  label: string;
  delay?: number;
}

const LinkButton = ({ href, label, delay = 0 }: LinkButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="link-button opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className="font-medium text-foreground">{label}</span>
      <ChevronRight size={20} className="text-muted-foreground" />
    </a>
  );
};

export default LinkButton;
