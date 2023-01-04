import React, { useEffect } from "react";
import { api } from "../../utils/api";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function Home() {
  const trendingNews = api.news.getNewsBycategory.useQuery({
    category: "MISC",
  });
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] 
    to-[#15162c] text-white"
    >
      HOME
      {trendingNews.data && <div>{trendingNews.data[0]?.title}</div>}
    </main>
  );
}

export default Home;
