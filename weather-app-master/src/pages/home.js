import SearchBox from "../components/SearchBox";
import FamousPlaces from "../components/FamousPlaces";

export default function Home() {
  return (
    <div>
      <div className="home">
        <div className="container">
          <SearchBox placeholder="Search for a city..." />

          <FamousPlaces />
        </div>
      </div>
    </div>
  );
}
