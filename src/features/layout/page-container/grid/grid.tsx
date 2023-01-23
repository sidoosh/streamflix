import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getPopularEntertainment } from "../../../../api/popular-collection";
import { getTopRatedEntertainment } from "../../../../api/top-rated";
import { getTrendingEntertainment } from "../../../../api/trend";
import { getNewestEntertainment } from "../../../../api/newest";
import { searchEntertainment } from "../../../../api/search";
import EntertainmentList from "../entertainment-list/entertainment-list";
import { SELECTED_TAB } from "../../../../utlis/constants";
import "./grid.css";

interface GridProps {
  filters: {
    entertainmentType: string;
    genre: number;
    yearTo: number;
    yearFrom: number;
    rating: number;
  };
  selectedTab: string;
  genreList: Array<{
    id: number;
    name: string;
  }>;
  searchTerm: string;
}

const PageGrid: React.FC<GridProps> = (props) => {
  const { filters, selectedTab, searchTerm } = props;
  const { entertainmentType, genre, yearFrom, yearTo, rating } = filters;
  const [pageNumber, setPageNumber] = useState(1);

  let {
    data: list = [],
    isLoading,
    isError,
    isFetching,
  } = useQuery({
    queryKey: [
      pageNumber,
      entertainmentType,
      genre,
      yearFrom,
      yearTo,
      rating,
      selectedTab,
      searchTerm,
    ],
    queryFn: () => {
      if (searchTerm.trim() !== "") {
        return searchEntertainment(pageNumber, entertainmentType);
      }
      if (selectedTab === SELECTED_TAB.TOP_RATED) {
        return getTopRatedEntertainment(
          pageNumber,
          entertainmentType,
          genre,
          yearFrom,
          yearTo,
          rating
        );
      }
      if (selectedTab === SELECTED_TAB.TREND) {
        return getTrendingEntertainment(
          pageNumber,
          entertainmentType,
          genre,
          yearFrom,
          yearTo,
          rating
        );
      }
      if (selectedTab === SELECTED_TAB.NEWEST) {
        return getNewestEntertainment(
          pageNumber,
          entertainmentType,
          genre,
          yearFrom,
          yearTo,
          rating
        );
      }
      return getPopularEntertainment(
        pageNumber,
        entertainmentType,
        genre,
        yearFrom,
        yearTo,
        rating
      );
    },
  });

  const fetchMoreReults = () => {
    setPageNumber((prevPage) => prevPage + 1);
  };
  if (isLoading) {
    return <>Loading...</>;
  }

  if (isFetching) {
    return <>Fetching...</>;
  }

  if (isError) {
    return <div>Can't find results... Comeback Later :(</div>;
  }

  return (
    <div className="grid-container">
      <EntertainmentList
        genres={props.genreList}
        entertainmentList={list.results}
        entertainmentType={entertainmentType}
      />
      {/* <div>
        <button onClick={fetchMoreReults}>Load More</button>
      </div> */}
    </div>
  );
};

export default PageGrid;
