import { FC } from "react";

import Facebook from "./icons/facebook.svg";
import Mac from "./icons/mac.svg";
import Google from "./icons/google.svg";

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
