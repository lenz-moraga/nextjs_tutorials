import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, that page does not exist.</p>
      <Link href={"/"}>Go back home</Link>
    </>
  );
}
