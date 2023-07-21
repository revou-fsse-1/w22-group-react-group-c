import React from "react";
import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
} from "@material-tailwind/react";
import {
  EnvelopeIcon,
  EnvelopeOpenIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

export default function SpeedDialComponent() {
  const router = useRouter();
  const handleWhatsApp = () => {
    router.push(
      `https://api.whatsapp.com/send/?phone=628972580122&text=Halo admin saya ingin bertanya...&type=phone_number&app_absent=0`
    );
  };
  return (
    <div className="relative w-full">
      <div className="fixed  bottom-60 right-0">
        <SpeedDial>
          <SpeedDialHandler>
            <IconButton size="lg" color="green" className="rounded-full">
              <EnvelopeOpenIcon className="hidden h-5 w-5 group-hover:block" />
              <EnvelopeIcon className="block h-5 w-5 group-hover:hidden" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent onClick={handleWhatsApp}>
            <SpeedDialAction>
              <ChatBubbleLeftRightIcon className="h-7 w-28" />
              Contact Us
            </SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </div>
  );
}
