export default function Footer() {
  return (
    <footer className="w-full bg-white text-right p-4">
      Built by{" "}
      <a
        target="_blank"
        href="https://github.com/gadjacobs"
        rel="noreferrer"
        className="underline"
      >
        Gad Jacobs
      </a>{" "}
      with{" "}
      <a
        target="_blank"
        href="https://tailwindcss.com"
        rel="noreferrer"
        className="underline"
      >
        {" "}
        TailwindCSS
      </a>{" "}
      and{" "}
      <a
        target="_blank"
        href="https://nextjs.org/"
        rel="noreferrer"
        className="underline"
      >
        NextJS
      </a>
      .
    </footer>
  );
}
