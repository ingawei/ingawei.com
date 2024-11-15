import { ReactNode } from "react";

export default function Template(props: { children: ReactNode }) {
  return (
    <main
      className={
        "font-inter flex flex-col sm:px-8 sm:py-12 px-4 py-8 items-center"
      }
    >
      <div className="flex flex-col max-w-4xl">{props.children}</div>
    </main>
  );
}
