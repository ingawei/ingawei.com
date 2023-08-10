import Template from "@/components/template";

export default function Resume() {
  return (
    <Template>
      <iframe
        src="/resume2021.pdf"
        title="title"
        className="h-[80vh]"
        width="100%"
      />
      <p className="text-xs font-sans mt-2">
        I know it's small and also only updated to my electrical engineering
        days deal with it.
      </p>
    </Template>
  );
}
