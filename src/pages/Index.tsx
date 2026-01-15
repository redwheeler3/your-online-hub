import Avatar from "@/components/Avatar";
import SocialIcon from "@/components/SocialIcon";
import LinkButton from "@/components/LinkButton";
import profileImage from "@/assets/profile.jpg";

// Custom SVG icons for higher resolution and better visual impact
const LinkedInIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const Index = () => {
  const links = [
    {
      label: "My Resume",
      href: "https://drive.google.com/file/d/0B2Ng6aKKisxmaW5NdGVsS2oxdFE/view?usp=drive_link&resourcekey=0-Q-zPz9Khy8cTSC9OpdBdqQ",
    },
    {
      label: "Penta Housing Co-op Website",
      href: "https://www.pentacoop.com/?utm_source=jeffo.net&utm_medium=referral",
    },
    {
      label: "Amazon EventBridge Pipes Workshop",
      href: "https://catalog.workshops.aws/eb-pipes",
    },
    {
      label: "Unsanctioned Songs About Pipes",
      href: "https://music.jeffo.net/",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-5 py-16">
      <main className="w-full max-w-md flex flex-col items-center">
        {/* Avatar */}
        <Avatar src={profileImage} alt="Jeff Oriecuia" />

        {/* Name */}
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-8 opacity-0 animate-fade-in-up animation-delay-100 tracking-tight">
          Jeff Oriecuia
        </h1>

        {/* Social Icons */}
        <div className="flex items-center gap-3 mt-5 opacity-0 animate-fade-in-up animation-delay-200">
          <SocialIcon
            href="https://www.linkedin.com/in/jefforiecuia/"
            icon={<LinkedInIcon />}
            label="LinkedIn"
          />
          <SocialIcon
            href="https://www.facebook.com/redwheeler"
            icon={<FacebookIcon />}
            label="Facebook"
          />
          <SocialIcon
            href="mailto:contact@jeffo.net"
            icon={<EmailIcon />}
            label="Email"
          />
        </div>

        {/* Bio Section */}
        <div className="text-center mt-10 space-y-4 opacity-0 animate-fade-in-up animation-delay-300">
          <p className="text-lg font-semibold text-foreground">
            Nice to meet you!
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I'm a Senior Technical Product Manager at AWS with a love for
            snowboarding, sailing, and exploring new places. I love speaking to
            audiences on behalf of AWS and on my own. Check out the hands-on
            workshop for Pipes I created and then presented at re:Invent 3 years
            in a row. Lately I've been "creating" AI music, though it skews
            pretty heavily into songs about Pipes.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I live in a housing co-op, where I built our community website. I'm
            always happy to connect, whether it's about work or speaking
            opportunities, co-op living, or getting your website up and running.
          </p>
        </div>

        {/* Links */}
        <div className="w-full mt-10 space-y-3">
          {links.map((link, index) => (
            <LinkButton
              key={link.label}
              href={link.href}
              label={link.label}
              delay={400 + index * 100}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
