import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import "./home.css";
import MenuItems from "../../features/layout/navigation/menu-items";
import PageGrid from "../../features/layout/page-container";
import Filters from "../../features/filter/filter-options";
import { getGenreList } from "../../api/genre-list";
import Search from "../../features/search/search";
const currentYear = new Date().getFullYear();

const Home: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("popular");
  const [currentFilters, setFilters] = useState({
    entertainmentType: "movie",
    yearTo: currentYear,
    yearFrom: 2000,
    genre: 1,
    rating: 4,
  });
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTermChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (
    e:
      | {
          target: { name: string; value: string | number };
        }
      | number
  ) => {
    if (typeof e === "number") {
      setFilters((prevFilter) => ({
        ...prevFilter,
        rating: e,
      }));
      return;
    }

    const { name = "", value = "" } = e.target;

    setFilters((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  const { data: genreList = [], isLoading } = useQuery({
    queryKey: [`/genre/${currentFilters.entertainmentType}`],
    queryFn: () => getGenreList(currentFilters.entertainmentType),
    cacheTime: 24 * 60 * 60 * 1000,
  });

  const handleMenuSelection = (e: any) => {
    // Check if we can improvise
    setSelectedTab(e.target.textContent.split(" ").join("").toLowerCase());
  };

  if (isLoading) {
    return <>Loading...</>;
  }
  return (
    <div className="home-container">
      <main className="page-container">
        <header className="home-header">
          <h3>Discover</h3>
          <MenuItems handleClick={handleMenuSelection} />
          <Search
            searchTerm={searchTerm}
            handleSearch={handleSearchTermChange}
          />
        </header>
        <PageGrid
          selectedTab={selectedTab}
          filters={currentFilters}
          genreList={genreList.genres}
          searchTerm={searchTerm}
        />
      </main>
      <section>
        <Filters
          genres={genreList.genres}
          onFilterChange={handleFilterChange}
          filters={currentFilters}
        />
      </section>
    </div>
  );
};

export default Home;
