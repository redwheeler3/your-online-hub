declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialIcon = ({ href, icon, label }: SocialIconProps) => {
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
      aria-label={label}
      className="social-icon"
      onClick={handleClick}
    >
      {icon}
    </a>
  );
};

export default SocialIcon;
