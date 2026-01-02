interface AvatarProps {
  src: string;
  alt: string;
}

const Avatar = ({ src, alt }: AvatarProps) => {
  return (
    <div className="avatar-ring opacity-0 animate-fade-in-up">
      <img
        src={src}
        alt={alt}
        className="w-44 h-44 rounded-full object-cover"
      />
    </div>
  );
};

export default Avatar;
