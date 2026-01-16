interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialIcon = ({ href, icon, label }: SocialIconProps) => {
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
      aria-label={label}
      onClick={handleClick}
      className="social-icon"
    >
      {icon}
    </a>
  );
};

export default SocialIcon;
