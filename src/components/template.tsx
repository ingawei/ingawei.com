import { ReactNode } from "react";

export default function Template(props: { children: ReactNode }) {
  return (
    <main
      className={
        "font-mono flex flex-col bg-gradient-to-b from-indigo-900 to-fuchsia-900 h-[100vh] w-[100vw] px-12 py-24 items-center via-70% overflow-y-scroll"
      }
    >
      <div className="flex flex-col max-w-4xl">{props.children}</div>
    </main>
  );
}
