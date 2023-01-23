// @ts-ignore
import ReactStars from "react-rating-stars-component";
import React, { useMemo } from "react";
import { Type, startYear } from "../../utlis/constants";
import "./filter-options.css";

interface FilterProps {
  genres: Array<{
    id: number;
    name: string;
  }>;
  onFilterChange: React.ChangeEventHandler<HTMLSelectElement>;
  filters: {
    entertainmentType: string;
    yearTo: number;
    yearFrom: number;
    genre: number;
    rating: number;
  };
}
const currentYear = Number(new Date().getFullYear());
const Filters: React.FC<FilterProps> = (props: FilterProps) => {
  const yearDropDown = useMemo(() => {
    let options = [];
    for (let i = startYear; i <= currentYear; i++) {
      options.push(
        <option value={i} key={i}>
          {i}
        </option>
      );
    }

    return options;
  }, []);

  return (
    <div className="filter-container">
      <h4>DISCOVER OPTIONS</h4>
      <div className="filter-items">
        <label htmlFor="type">Type</label>
        <select
          name="entertainmentType"
          onChange={props.onFilterChange}
          value={props.filters.entertainmentType}
        >
          <option value={Type.MOVIE}>Movies</option>
          <option value={Type.TV}>TV</option>
        </select>
      </div>
      <div className="filter-items">
        <label htmlFor="genre">Genre</label>
        <select
          name="genre"
          onChange={props.onFilterChange}
          value={props.filters.genre}
        >
          {props.genres.map((opt) => (
            <option value={opt.id} key={opt.id}>
              {opt.name}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-items year">
        <label htmlFor="yearFrom">Year</label>
        <select
          name="yearFrom"
          onChange={props.onFilterChange}
          value={props.filters.yearFrom}
        >
          {yearDropDown}
        </select>
        <select
          name="yearTo"
          onChange={props.onFilterChange}
          value={props.filters.yearTo}
        >
          {yearDropDown}
        </select>
      </div>
      <div className="filter-items">
        <label htmlFor="rating">Rating</label>
        <ReactStars
          name="rating"
          activeColor="#ffd700"
          count={5}
          onChange={props.onFilterChange}
          value={props.filters.rating}
          size={24}
        />
      </div>
    </div>
  );
};

export default Filters;
