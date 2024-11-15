import clsx from "clsx";
import { forwardRef } from "react";

export const Paragraph = forwardRef(function Row(
  props: JSX.IntrinsicElements["div"],
  ref: React.Ref<HTMLDivElement>
) {
  const { children, className, ...rest } = props;
  return (
    <div
      className={clsx(className, "font-sans text-sm text-neutral-700")}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  );
});
