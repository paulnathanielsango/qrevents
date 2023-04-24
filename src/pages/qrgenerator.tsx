import { QRCodeSVG } from "qrcode.react";
import Header from "@components/Header";
import React from "react";

export default function qrgenerator() {
  const [qr, setQr] = React.useState();

  const handleHash = async () => {
    const res = await fetch("/api/qrConfirm");
    const data = await res.json();
    setQr(data.qrvalue);
  };

  console.log(qr);

  return (
    <div>
      <Header tabNum={3} />
      <button onClick={handleHash}>Generate</button>
      <div className="w-screen flex justify-center">
        <QRCodeSVG
          value={qr}
          size={128}
          bgColor={"#ffffff"}
          fgColor={"#000000"}
          level={"L"}
          includeMargin={false}
          imageSettings={{
            src: "https://static.zpao.com/favicon.png",
            x: undefined,
            y: undefined,
            height: 24,
            width: 24,
            excavate: true,
          }}
        ></QRCodeSVG>
      </div>
    </div>
  );
}
