import Image from "next/image";
import Link from "next/link";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const getSingleDrink = async (id) => {
  const resp = await fetch(`${url}${id}`);

  if (!resp.ok) {
    throw new Error("Failed to fetch a drink...");
  }
  return resp.json();
};

const SingleDrinkPage = async ({ params }) => {
  // console.log(params.id);
  const data = await getSingleDrink(params.id);
  // console.log(data);
  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;

  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        Back to drinks
      </Link>
      <Image
        src={imgSrc}
        width={300}
        height={300}
        className="w-48 h-48 rounded-lg shadow-lg mb-4"
        priority
        alt="drink"
      />
      <h1 className="text-4xl mb-8">{title}</h1>
    </div>
  );
};
export default SingleDrinkPage;
