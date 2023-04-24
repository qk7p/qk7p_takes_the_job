import { FC, memo, useEffect, useState } from "react";
import styles from "./news.module.scss";
import classNames from "classnames";
import axios from "axios";
import NewsItem, { NewsItemType } from "./news-item/NewsItem";

export interface INewsProps {
  className?: string;
}

const News: FC<INewsProps> = ({ className }) => {
  const [news, setNews] = useState<NewsItemType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    let scrollHeight = event.currentTarget.scrollHeight;
    let scrollTop = event.currentTarget.scrollTop;
    let clientHeight = event.currentTarget.clientHeight;

    if (scrollHeight - (scrollTop + clientHeight) < 100) {
      setFetching(true);
    }
  };

  useEffect(() => {
    type PhotosResponse = {
      id: number;
      title: string;
      thumbnailUrl: string;
    };
    if (fetching) {
      axios
        .get<PhotosResponse[]>(
          `https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${currentPage}`
        )
        .then((response) => {
          const tempArray = [...news];

          response.data.map((element) =>
            tempArray.push({
              id: element.id,
              title: element.title,
              url: element.thumbnailUrl,
            })
          );
          setNews(tempArray);
          setCurrentPage((prev) => prev + 1);
        })
        .finally(() => {
          setFetching(false);
        });
    }
  }, [fetching]);

  return (
    <div className={classNames(styles.news, className)} onScroll={handleScroll}>
      {news?.map((element) => (
        <NewsItem key={element.id} title={element.title} url={element.url} />
      ))}
    </div>
  );
};

export default News;
