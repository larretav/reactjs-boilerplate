import { Chip, ChipProps, cn, RadioProps, useRadio } from "@heroui/react";
import { VisuallyHidden } from "@react-aria/visually-hidden";

type RealRadioProps = Omit<RadioProps, "color" | "description">
type RealChipProps = Pick<ChipProps, "variant" | "startContent" | "size">

type ChipRadioProps = RealRadioProps & RealChipProps & {
  activeColor?: ChipProps["color"];
  inactiveColor?: ChipProps["color"];
  classNames?: RealRadioProps["classNames"] & { chip?: string }
};


export const ChipRadio = ({ activeColor = "primary", inactiveColor = "default", variant, startContent, size = "md", ...props }: ChipRadioProps) => {

  const {
    Component,
    children,
    getBaseProps,
    getInputProps,
    isSelected,
    isDisabled
  } = useRadio(props);

  return (
    <Component
      {...getBaseProps({
        className: cn(
          "inline-flex items-center hover:opacity-70 active:opacity-50 justify-between flex-row-reverse tap-highlight-transparent m-0 transition-opacity",
          "cursor-pointer gap-4 p-0",
        ),
      })}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>

      <Chip
        size={size}
        color={isSelected ? activeColor : inactiveColor}
        isDisabled={isDisabled}
        variant={!variant && !isSelected ? "flat" : variant}
        className={cn("transition-colors ", props.classNames?.["chip"])}
        startContent={startContent}
      >{children}</Chip>
    </Component>
  )
}



