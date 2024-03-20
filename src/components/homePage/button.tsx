import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  active: boolean;
  hoverOnActive?: boolean;
  large?: boolean;
}

function BaseButton(props: Props) {
  let { className, large, active, ...rest } = props;

  return (
    <button
      className={twMerge(
        `text-center ${
          !props.large ? "text-sm" : "text-lg"
        } font-normal font-eesti w-[fit-content] h-8 ${
          !props.large ? "px-4" : "px-5"
        } ${
          !props.large ? "py-2" : "py-5"
        } rounded-full items-center justify-center inline-flex`,
        props.className
      )}
      {...rest}
    >
      {props.children}
    </button>
  );
}

export default function Button(props: Props) {
  let { ...rest } = props;

  if (props.active) {
    if (!props.hoverOnActive) {
      return (
        <BaseButton
          {...rest}
          className={twMerge("text-black bg-white", props.className)}
        ></BaseButton>
      );
    } else {
      return (
        <BaseButton
          {...rest}
          className={twMerge(
            " hover:bg-white/85 active:translate-y-0.5",
            props.className
          )}
        ></BaseButton>
      );
    }
  } else {
    return (
      <BaseButton
        {...rest}
        className={twMerge(
          "text-white bg-buttonBlue hover:bg-brandBlue",
          props.className
        )}
      ></BaseButton>
    );
  }
}
