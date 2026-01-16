import { ArrowRight } from "lucide-react";

interface LinkButtonProps {
  href: string;
  label: string;
  delay?: number;
}

const LinkButton = ({ href, label, delay = 0 }: LinkButtonProps) => {
  const handleClick = () => {
    const gtag = (window as any)?.gtag as
      | undefined
      | ((...args: any[]) => void);

    if (typeof gtag !== "function") return;

    let linkDomain: string | undefined;
    try {
      linkDomain = new URL(href).hostname;
    } catch {
      // ignore malformed URLs
    }

    gtag("event", "link_click", {
      link_url: href,
      link_text: label,
      link_domain: linkDomain,
    });
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="link-button opacity-0 animate-fade-in-up group"
      style={{ animationDelay: `${delay}ms` }}
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
