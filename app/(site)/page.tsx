import getSongs from "@/actions/getSongs";
import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import { Sorts_Mill_Goudy } from "next/font/google";
import PageContent from "./components/PageContent";

export const revalidate = 0;


export default async function Home() {
  const songs = await getSongs();

  return (
   <div className ="
     bg-neutral-900
     rounded-lg
     h-full
     w-full
     overflow-hidden
     overflow-y-auto
    ">
      <Header>
        <div className="mb-2">
          <h1 
            className="
              text-white
              text-3xl
              font-semibold
            "
          >
            Welcome back
          </h1>
          <div 
            className="
              grid
              grid-col-1
              sm:grid-cols-2
              xl:grid-cols-3
              2xl:grid-cols-4
              gap-4
              mt-4
            "
          >
            <ListItem
              image="/images/liked.png"
              name="Liked Songs"
              href="liked"
            />
          </div>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-ssemibold">
            Newest Songs!
          </h1>
        </div>  
        <PageContent songs={songs} />
    </div>
  </div>
  )
}