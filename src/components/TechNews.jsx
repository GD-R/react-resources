import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import NewsCard from "./NewsCard";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";

const TechNews = () => {
  const [article, setArticle] = useState([]);
  const [page, setPage] = useState(2);
  const [checkTotal, setCheckTotal] = useState(true) 

  useEffect(() => {
    const api = async () => {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=coding&apiKey=9bafbb67af514aaabc21e76a60d3b03a&page=1&pageSize=20`
      );
      const data = await response.json();
      setArticle(data.articles);
    }
    api();
  }, []);


  const callApi = async () => {
    const response = await fetch(
        `https://newsapi.org/v2/everything?q=coding&apiKey=9bafbb67af514aaabc21e76a60d3b03a&page=${page}&pageSize=20`
      );
      const data = await response.json();
      setArticle([...article,...data.articles]);
  }
 

  const fetchData = () => {
     
    setTimeout(() => callApi(), 2500)
      
      if(article.length === 80){
         
          setCheckTotal(false)
      }
     
      setPage(page+1)

  }

  return (
    <>
      <Navbar />

      <InfiniteScroll
        dataLength={article.length} //This is important field to render the next data
        next={fetchData}
        hasMore={checkTotal}
        loader={<Spinner/>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="my-40 container w-[90%] md:my-5 mx-auto grid md:grid-cols-2 lg:grid-cols-3">
          {article.map((item) => {
            return (
              <NewsCard
                
                urlToImage={item.urlToImage}
                title={item.title}
                description={item.description}
                url={item.url}
              />
            );
          })}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default TechNews;
