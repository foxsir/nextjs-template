"use client"

import {Button} from "@heroui/react";

export default function Home() {
  return (
    <div className="font-sans max-w-7xl mx-auto grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Button>
          Nextjs Template
        </Button>
        <div>use tailwindcss v4 and HeroUI</div>
      </main>
    </div>
  );
}
