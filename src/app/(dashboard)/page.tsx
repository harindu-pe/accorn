import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="">
      <p>This is an authenticated route.</p>
      <UserButton afterSignOutUrl="/" />
    </main>
  );
}
