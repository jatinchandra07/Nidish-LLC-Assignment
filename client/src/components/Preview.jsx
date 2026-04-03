import React from "react";

const Preview = ({ data }) => {
  return (
    <div
      className="h-80 rounded-2xl p-6 flex flex-col justify-end bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${data.image || "https://via.placeholder.com/400"})`,
        color: data.color,
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10">
        <h1 className="text-2xl font-bold mb-2">
          {data.heading || "Heading"}
        </h1>
        <p>{data.paragraph || "Paragraph..."}</p>
      </div>
    </div>
  );
};

export default Preview;