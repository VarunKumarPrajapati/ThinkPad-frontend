import { useState } from "react";
import { RiPushpin2Fill, RiPushpin2Line } from "react-icons/ri";

import { Icon } from "../../common";

export default function Pin({
  isPinned = false,
  onClick,
  className,
  size = 24,
}) {
  const [pin, setPin] = useState(isPinned);
  const handlePinClick = (e) => {
    e.stopPropagation();
    onClick({
      target: {
        name: "isPinned",
        value: !pin,
      },
      message: `Note is ${!pin ? "pinned" : "unpinned"}`,
    });
    setPin(!pin);
  };

  return (
    <Icon
      size={size}
      icon={pin ? RiPushpin2Fill : RiPushpin2Line}
      className={className}
      onClick={handlePinClick}
    />
  );
}
