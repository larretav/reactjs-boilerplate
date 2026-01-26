import type { ButtonProps } from "@heroui/button";

import { Button } from "@heroui/button";
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