import Image from "next/image";
import { MainLayout } from "@/components/layouts/MainLayout";
import { LigthLayout } from "@/components/layouts/LigthLayout";

export default function About() {
  return (
    <>
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

      <h1>ABOUT PAGE</h1>
    </>
  );
}

About.getLayout = function getLayout(page: any) {
  return (
    <MainLayout>
      <LigthLayout>{page}</LigthLayout>
    </MainLayout>
  );
};
