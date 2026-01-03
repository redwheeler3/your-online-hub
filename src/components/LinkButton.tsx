import { ArrowRight } from "lucide-react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

interface LinkButtonProps {
  href: string;
  label: string;
  delay?: number;
}

const LinkButton = ({ href, label, delay = 0 }: LinkButtonProps) => {
  const handleClick = () => {
    if (window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'outbound_link',
        event_label: label,
        transport_type: 'beacon',
      });
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="link-button opacity-0 animate-fade-in-up group"
      style={{ animationDelay: `${delay}ms` }}
      onClick={handleClick}
    >
      <span className="font-medium text-foreground">{label}</span>
      <ArrowRight 
        size={18} 
        className="text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" 
      />
    </a>
  );
};

export default LinkButton;
