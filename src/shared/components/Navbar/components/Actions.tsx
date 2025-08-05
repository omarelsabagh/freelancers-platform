"use client";
import { Bell, ShoppingCart, MailCheck } from "lucide-react";

const Actions = () => {
  return (
    <div className="flex items-center space-x-4">
      <MailCheck className="h-5 w-5 transition-colors duration-200 hover:text-primary cursor-pointer" />
      <Bell className="h-5 w-5 transition-colors duration-200 hover:text-primary cursor-pointer" />
      <ShoppingCart className="h-5 w-5 transition-colors duration-200 hover:text-primary cursor-pointer" />
      <div className="w-8 h-8 rounded-full overflow-hidden">
        <img
          src={"https://picsum.photos/200"}
          className="w-full h-full object-cover"
        />
      </div>
      {/* <div className="w-8 h-8 rounded-full overflow-hidden">
            <img
              src={freelancer.profilePhoto}
              alt={freelancer.name}
              className="w-full h-full object-cover"
            />
          </div> */}
    </div>
  );
};

export default Actions;
