import { FC } from "react";

import Chat from "./icons/chat.svg";
import Facebook from "./icons/facebook.svg";
import Fb from "./icons/fb.svg";
import Google from "./icons/google.svg";
import Instagram from "./icons/instagram.svg";
import Mac from "./icons/mac.svg";
import Notify from "./icons/notifications.svg";
import User from "./icons/perfil.svg";
import Twitter from "./icons/twitter.svg";

export const iconTypes = {
  ic_facebook: {
    component: Facebook,
    alt: "Facebook",
  },
  ic_mac: {
    component: Mac,
    alt: "Mac",
  },
  ic_google: {
    component: Google,
    alt: "Google",
  },
  ic_instagram: {
    component: Instagram,
    alt: "Instagram",
  },
  ic_twitter: {
    component: Twitter,
    alt: "Twitter",
  },
  ic_fb: {
    component: Fb,
    alt: "Facebook",
  },
  ic_user: {
    component: User,
    alt: "User",
  },
  ic_chat: {
    component: Chat,
    alt: "Chat",
  },
  ic_notify: {
    component: Notify,
    alt: "Notification",
  },
};

export type IconNames = keyof typeof iconTypes;

type Props = {
  name: IconNames | string;
  className?: string;
};

const Icon: FC<Props> = ({ name, className, ...props }) => {
  const Icon = iconTypes[name as IconNames];

  return <Icon.component className={className} {...props} alt={Icon?.alt} />;
};

export { Icon };
