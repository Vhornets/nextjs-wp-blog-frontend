export const Column = ({ width, children }) => {
  const styles = width
    ? { minWidth: width, flexGrow: 1 }
    : { flexGrow: 1, flexBasis: 0 };
  return (
    <div style={styles} className="py-4 [&>*:first-child]:mt-0">
      {children}
    </div>
  );
};
