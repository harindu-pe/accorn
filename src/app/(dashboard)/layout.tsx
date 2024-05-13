import Header from "@/components/global/header";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="px-3 lg:px-14">
        Dashboard Layout
        {children}
      </main>
    </>
  );
}
