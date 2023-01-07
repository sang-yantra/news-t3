import React from "react";
import { api } from "../../utils/api";
type NewsCategoryTypes = {
  category: string;
};
function NewsCategory({ category }: NewsCategoryTypes) {
  const newsByCategory = api.news.getNewsBycategory.useQuery({
    category,
  });
  return (
    <main>
      {newsByCategory.data && <div>{newsByCategory.data[0]?.title}</div>}
    </main>
  );
}

export default NewsCategory;
