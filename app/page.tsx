import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex gap-2">
          <Image
            src="/images/pokeball.svg"
            alt="Pokeball icon"
            width={16}
            height={16}
          />
          <span>Pokemon teams</span>
        </div>
      </main>
      <footer className="font-lato text-xs row-start-3 flex gap-6 flex-wrap sm:items-center justify-center">
        2024
      </footer>
    </div>
  );
}
