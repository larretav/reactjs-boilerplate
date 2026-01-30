import type { ButtonProps } from "@heroui/react";

import { Button } from "@heroui/react";
import { forwardRef } from "react";

const IconButton = forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...props }: ButtonProps, ref) => {
  return (
    <Button ref={ref} isIconOnly color="default" radius="full" size="sm" variant="flat" {...props}>
      {children}
    </Button>
  );
});

IconButton.displayName = "IconButton";

export { IconButton };