import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="">
      <p>This is an authenticated route.</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
