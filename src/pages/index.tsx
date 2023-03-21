import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import DefaultLayout from "@/components/layouts/default_layout";
import Image from "next/image";
import CardList from "@/components/card-list";

export default function Home(): JSX.Element {

  return (
    <>
      <main className="home main">
        <div>
          <CardList />
        </div>
      </main>
    </>
  )
}