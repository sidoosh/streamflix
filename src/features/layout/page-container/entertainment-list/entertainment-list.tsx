import React, { useMemo } from "react";
import { IMAGE_BASE_PATH_500 } from "../../../../utlis/constants";

interface EntertainmentProps {
  entertainmentList: Array<{
    poster_path: string;
    genre_ids: [number];
    title?: string;
    release_date?: string;
    original_name?: string;
    first_air_date?: string;
  }>;
  genres: Array<{
    id: number;
    name: string;
  }>;
  entertainmentType: string;
}

const EntertainmentList: React.FC<EntertainmentProps> = (props) => {
  const genreIdMap = useMemo(() => {
    let map: { [k: number]: string } = {};

    props.genres.forEach((item) => {
      map[item.id] = item.name;
    });

    return map;
  }, [props.entertainmentType]);

  if (props.entertainmentList.length === 0) {
    return (
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        No results found yet, Please try later
      </h1>
    );
  }
  const elements = props.entertainmentList.map((item) => (
    <div key={item.title || item.original_name}>
      <div>
        <img
          src={
            item.poster_path
              ? `${IMAGE_BASE_PATH_500}/${item.poster_path}`
              : `${IMAGE_BASE_PATH_500}/a1NqwE6LP9IEdOZ57NCT51ftHtWT.jpg`
          }
          alt={item.poster_path}
          style={{ width: "200px", height: "300px", objectFit: "cover" }}
        />
      </div>
      <div>{item.title || item.original_name}</div>
      <div style={{ maxWidth: 200, overflow: "hidden" }}>
        {item.genre_ids.map((id) => genreIdMap[id]).join(",") || ""}
        {item.genre_ids.length > 0 ? ", " : ""}
        {item.release_date
          ? item.release_date.slice(0, 4)
          : item.first_air_date
          ? item.first_air_date.slice(0, 4)
          : ""}
      </div>
    </div>
  ));

  return <>{elements}</>;
};

export default EntertainmentList;
