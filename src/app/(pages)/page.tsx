import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20">
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <section className="w-full">
          <h2 className="text-2xl font-bold">Welcome to OPInventory</h2>
          <p>Select a tab from the navbar to get started.</p>
        </section>
      </main>
    </div>
  );
}
