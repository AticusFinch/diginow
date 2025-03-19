import About from "./about";

export default function AboutPage({ params }) {
  return (
    <>
      <About />
    </>
  );
}

export async function generateStaticParams() {
  return [{ lang: "sr" }, { lang: "en" }, { lang: "tr" }];
}
