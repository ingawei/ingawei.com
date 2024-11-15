import clsx from "clsx";
import { forwardRef } from "react";

export const Title = forwardRef(function Row(
  props: JSX.IntrinsicElements["div"],
  ref: React.Ref<HTMLDivElement>
) {
  const { children, className, ...rest } = props;
  return (
    <div
      className={clsx(className, "text-2xl font-shippori font-semibold")}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  );
});
