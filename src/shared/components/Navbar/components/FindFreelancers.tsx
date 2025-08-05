"use client";

import { Input } from "@/shared/ui/Input";
import { Search } from "lucide-react";
import SubmitSearch from "@/shared/custom-icons/SubmitSearch";

const FindFreelancers = () => {
  return (
    <div className="relative hidden lg:block">
      <Input
        placeholder="Find talent freelancer"
        className="w-120 pl-10"
        iconStart={
          <Search className="h-4 w-4 text-muted-foreground cursor-pointer" />
        }
        iconEnd={
          <SubmitSearch className="cursor-pointer transition-colors duration-200 hover:text-white hover:bg-primary-hover" />
        }
      />
    </div>
  );
};

export default FindFreelancers;
