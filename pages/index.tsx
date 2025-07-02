import Head from "next/head";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Listing App</title>
      </Head>
      <main className="p-8">
        <Card
          title="Sample Property"
          description="Located in the heart of the city."
        />
        <div className="mt-4">
          <Button label="Book Now" onClick={() => alert("Booking...")} />
        </div>
      </main>
    </>
  );
}
