import { ButtonLink } from "components/ButtonLink";

export const CallToAction = ({ text, url, alignment }) => {
  const getAlign = (aligment) => {
    const alignMap = {
      left: "justify-start",
      center: "justify-center",
      right: "justify-end",
    };

    return alignMap[aligment];
  };

  return (
    <div className={`max-w-5xl mx-auto my-4 flex ${getAlign(alignment)}`}>
      <ButtonLink label={text} destination={url} />
    </div>
  );
};
