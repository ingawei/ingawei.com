import Template from "@/components/template";
import Image from "next/image";

export default function Home() {
  return (
    <Template>
      <div className="gap-4 flex flex-col">
        <div className="flex flex-col gap-2 w-full">
          <div className="text-3xl text-orange-300">Inga Wei</div>
          <div className="opacity-50">San Francisco, CA</div>
        </div>
        <div className="flex md:flex-row flex-col gap-8">
          <div className="flex flex-col">
            <p className="text-sm font-sans">
              Hello! I&apos;m a electical engineer turned designer/frontend
              developer. Come have a look at my stuff.
            </p>
            <div className="flex flex-row w-full text-left my-6 flex-wrap gap-x-2 gap-y-4">
              <Link href="/resume" text="Resume" />
              <Link
                href="https://www.linkedin.com/in/inga-wei-a3134b12a"
                text="Linkedin"
              />
              <Link href="https://github.com/ingawei" text="Github" />
            </div>
          </div>
          <div className="flex flex-col gap-1 md:w-4/5">
            <img src="inga.jpeg" />
            <span className="text-xs font-sans opacity-50">
              Pictured here in 2019 on my study abroad in France
            </span>
          </div>
        </div>
      </div>
    </Template>
  );
}

function Link(props: { href: string; text: string }) {
  const { href, text } = props;
  return (
    <div className="relative ml-2">
      <a
        className="absolute -left-2 -top-2 right-2 bottom-2 text-black transition-all px-4 py-2 rounded-md z-50 border-black border-2 h-10 w-36 bg-cyan-100"
        href={href}
        target="_blank"
      >
        {text}
      </a>
      <div className="bg-lime-500 border-black border-2 h-10 w-36 rounded-md"></div>
    </div>
  );
}
