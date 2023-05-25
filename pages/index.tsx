import Image from "next/image";
import { MainLayout } from "@/components/layouts/MainLayout";

export default function Home() {
  return (
    <>
       <MainLayout>
       <div className="center">
          <Image
            className="logo"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <h1>HOME PAGE</h1>
       </MainLayout>
    </>
  );
}
