"use client";

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
        <span className="text-primary-foreground font-bold text-sm">F</span>
      </div>
      <span className="font-bold text-xl text-foreground">Freelancers</span>
    </div>
  );
};

export default Logo;
