import { Col } from "@/components/layout/col";
import { Paragraph } from "@/components/layout/paragraph";
import { Title } from "@/components/layout/title";
import Template from "@/components/template";

export default function Resume() {
  return (
    <Template>
      <Col className="gap-4">
        <Title>Ridge Wallets on WEB3</Title>
        <Paragraph className="font-sans">
          This was a website I built for Ridge Wallets on WEB3, as a partnership
          with RWTP.
        </Paragraph>
        <div>Languages Used</div>
        
        <img src="ridge/home.png" className="w-full" />
        <img src="ridge/checkout.png" className="w-full" />
      </Col>
    </Template>
  );
}
