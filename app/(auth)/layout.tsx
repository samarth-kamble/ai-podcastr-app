import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main className="relative h-screen w-full ">
        <div className="absolute size-full">
          <Image
            src={"/images/bg-img.png"}
            className="size-full"
            fill
            alt="BG Image"
          />
        </div>
        {children}
      </main>
    </div>
  );
}
