interface AvatarProps {
  src: string;
  alt: string;
}

const Avatar = ({ src, alt }: AvatarProps) => {
  return (
    <div className="avatar-container opacity-0 animate-fade-in-up">
      <div className="avatar-glow w-48 h-48" />
      <div className="avatar-ring">
        <img
          src={src}
          alt={alt}
          className="w-44 h-44 rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Avatar;
