import React from "react";

const Title = ({ title, subtitle, align = "center", font }) => {
  const alignmentClasses =
    align === "left"
      ? "items-start text-left"
      : "items-center text-center";

  return (
    <div className={`flex flex-col ${alignmentClasses}`}>
      <h1 className={`text-4xl md:text-[40px] ${font || "font-playfair"}`}>
        {title}
      </h1>

      <p className="text-m md:text-base text-gray-500/90 mt-2 max-w-174">
        {subtitle}
      </p>
    </div>
  );
};

export default Title;
