import { Linkedin, Facebook, Mail } from "lucide-react";
import Avatar from "@/components/Avatar";
import SocialIcon from "@/components/SocialIcon";
import LinkButton from "@/components/LinkButton";
import profileImage from "@/assets/profile.jpg";

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
      href: "https://catalog.us-east-1.prod.workshops.aws/workshops/1a9c2258-203d-4035-b516-16a14577c54d/en-US",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 py-12">
      <main className="w-full max-w-md flex flex-col items-center">
        {/* Avatar */}
        <Avatar src={profileImage} alt="Jeff Oriecuia" />

        {/* Name */}
        <h1 
          className="font-display text-3xl md:text-4xl font-medium text-foreground mt-6 opacity-0 animate-fade-in-up animation-delay-100"
        >
          Jeff Oriecuia
        </h1>

        {/* Social Icons */}
        <div 
          className="flex items-center gap-2 mt-4 opacity-0 animate-fade-in-up animation-delay-200"
        >
          <SocialIcon
            href="https://linkedin.com"
            icon={Linkedin}
            label="LinkedIn"
          />
          <SocialIcon
            href="https://facebook.com"
            icon={Facebook}
            label="Facebook"
          />
          <SocialIcon
            href="mailto:contact@example.com"
            icon={Mail}
            label="Email"
          />
        </div>

        {/* Bio Section */}
        <div 
          className="text-center mt-8 space-y-4 opacity-0 animate-fade-in-up animation-delay-300"
        >
          <h2 className="font-display text-xl text-muted-foreground">
            Nice to meet you!
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            I'm a Senior Technical Product Manager at AWS with a love for
            snowboarding, sailing, and exploring new places. I love speaking to
            audiences on behalf of AWS and on my own. Check out the hands-on
            workshop for Pipes I created and then presented at re:Invent 3 years
            in a row.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I live in a housing co-op, where I built our community website. I'm
            always happy to connect, whether it's about work or speaking
            opportunities, co-op living, or getting your website up and running.
          </p>
        </div>

        {/* Links */}
        <div className="w-full mt-8 space-y-3">
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
