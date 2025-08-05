"use client";

import Logo from "./components/Logo";
import FindFreelancers from "./components/FindFreelancers";
import Actions from "./components/Actions";

export const Navbar = () => {
  return (
    <nav className="bg-surface border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo />
          {/* Input*/}
          <FindFreelancers />
          {/* Actions */}
          <Actions />
        </div>
      </div>
    </nav>
  );
};
