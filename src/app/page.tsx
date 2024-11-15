import { Project } from "@/components/project";
import Template from "@/components/template";
import Image from "next/image";

export default function Home() {
  return (
    <Template>
      <div className="gap-4 flex flex-col">
        <div className="flex flex-col gap-2 w-full">
          <div className="text-3xl font-shippori">Inga Wei</div>
          <div className="text-slate-600">
            <span className="text-green-600">Designer/Frontend Engineer</span>{" "}
            based in San Francisco, CA
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Project
            href="/manifold"
            imgsrc="/manifold/logo.svg"
            title="Manifold Markets"
            job="Designer/Frontend Engineer"
          />
          <Project
            imgsrc="/manifold-love/manifold_love_logo.svg"
            title="Manifold Love"
            job="Designer/Frontend Engineer"
            href={"/manifoldlove"}
          />
          <Project
            imgsrc="/ridge/logo.png"
            imgSize="h-[90px]"
            title="Ridge Web3"
            job="Frontend Engineer"
            href={"/ridge"}
          />
          <Project
            imgsrc="/rwtp/logo.png"
            imgSize="h-[120px]"
            title="RWTP, YC23"
            job="Designer/Frontend Engineer"
            href={"/rwtp"}
          />
          <div>Uganda Caring Hands</div>
          <div>Solstice Pay</div>
          <div>Resume</div>
        </div>
        <div className="flex md:flex-row flex-col gap-8">
          <div className="flex flex-col">
            <div className="flex flex-row w-full text-left my-6 flex-wrap gap-x-2 gap-y-4">
              <Link href="/resume" text="Resume" />
              <Link
                href="https://www.linkedin.com/in/inga-wei-a3134b12a"
                text="Linkedin"
              />
              <Link href="https://github.com/ingawei" text="Github" />
            </div>
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
