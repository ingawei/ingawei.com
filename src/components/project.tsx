import clsx from "clsx";
import { Col } from "./layout/col";

export function Project(props: {
  href: string;
  imgsrc: string;
  imgSize?: string;
  title: string;
  job: string;
}) {
  const { href, imgsrc, imgSize, title, job } = props;
  return (
    <a href={href} className="p-4 bg-pink-100 flex flex-col items-center">
      <Col className="h-40 w-full items-center justify-center">
        <img
          src={imgsrc}
          className={clsx("mx-auto object-contain", imgSize ? imgSize : "h-40")}
        />
      </Col>
      <Col className="w-full">
        <div className="text-lg font-shippori font-semibold">{title}</div>
        <div className="text-sm text-slate-600">{job}</div>
      </Col>
    </a>
  );
}
