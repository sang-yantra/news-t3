import React from "react";
import { api } from "../../utils/api";

function Sports() {
  const sportsNews = api.news.getNewsBycategory.useQuery({
    category: "SPORTS",
  });
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] 
    to-[#15162c] text-white"
    >
      SPORTS
      {sportsNews.data && <div>{sportsNews.data[0]?.title}</div>}
    </main>
  );
}

export default Sports;
