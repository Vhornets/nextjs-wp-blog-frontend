import { Newsletter } from "components/Newsletter";

export const Footer = () => {
  return (
    <>
      <Newsletter
        title="Personally Newsletter"
        text="A bi-weekly newsletter of design inspiration, resources and anything related to career development."
      />

      <div className="bg-white py-10 text-center text-xs text-gray-800 shadow-[0_1px_0_0_rgba(30,40,52,0.12)_inset]">
        <p>Copyright 2023</p>
      </div>
    </>
  );
};
