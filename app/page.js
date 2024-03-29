import Link from "next/link";

const HomePage = () => {
  console.log("Home page");
  return (
    <div>
      <h1 className="text-5xl mb-8 font-bold">Next.js</h1>
      <Link href="/client" className="btn btn-accent">
        Get Started
      </Link>
    </div>
  );
};
export default HomePage;
