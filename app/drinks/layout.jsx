const DrinksLayout = ({ children }) => {
  return (
    <div className="max-w-xl">
      {/* Random component from daisyUI */}
      <div className="mockup-code mb-8">
        <pre data-prefix="$">
          <code>npx create-next-app@latest nextjs-tutorual</code>
        </pre>
      </div>
      {children}
    </div>
  );
};
export default DrinksLayout;
