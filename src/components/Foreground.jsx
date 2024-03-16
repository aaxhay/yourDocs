import React, { useRef } from "react";
import Card from "./Card";
const Foreground = () => {
  const ref = useRef(null);
  const data = [
    {
      desc: "this is something that needs to be shown on this card ",
      filesize: ".9mb",
      close: true,
      tagDetails: { isOpen: true },
    },
    {
      desc: "Today we are going to code a social media app with react",
      filesize: ".4mb",
      close: false,
      tagDetails: { isOpen: false },
    },
    {
      desc: "Code an app that will save all your expenses and keep a track on them",
      filesize: "23mb",
      close: false,
      tagDetails: { isOpen: false },
    },
    {
      desc: "Watch netflix and have some fun ",
      filesize: "12mb",
      close: true,
      tagDetails: { isOpen: true },
    },
  ];
  return (
    <div ref={ref} className="fixed shrink p-8 flex gap-x-6 top-0 left-0 w-full h-screen z-[3] flex-wrap">
      {data.map((item, index) => (
        <Card data={item} reference = {ref} />
      ))}
    </div>
  );
};

export default Foreground;
