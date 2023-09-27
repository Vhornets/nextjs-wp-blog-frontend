export const Columns = ({
  isStackedOnMobile,
  children,
  textColor,
  backgroundColor,
}) => {
  const backgroundColorStyle = backgroundColor ? { backgroundColor } : {};
  const textColorStyle = backgroundColor ? { color: textColor } : {};

  return (
    <div
      className="my-10"
      style={{ ...backgroundColorStyle, ...textColorStyle }}
    >
      <div
        className={`max-w-5xl mx-auto gap-4 ${
          isStackedOnMobile ? "block md:flex" : "flex"
        }`}
      >
        {children}
      </div>
    </div>
  );
};
