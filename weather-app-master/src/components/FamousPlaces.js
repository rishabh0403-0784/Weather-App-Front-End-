import { Link } from "react-router-dom";

const places = [
  {
    name: "Bengaluru",
    image:
      "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
    url: "/location/eyJuYW1lIjoiQmVuZ2FsdXJ1IiwiY291bnRyeSI6IkluZGlhIiwiY29vcmQiOnsibGF0IjoiMTIuOTc2NzkzNiIsImxvbiI6Ijc3LjU5MDA4MiJ9fQ==",
  },
  {
    name: "Bhopal",
    image:
      "https://www.hvs.com/StaticContent//Image/HVSindia/shivam-tiwari-5ysk1Gl7ukc-unsplash.jpg",
    url: "/location/eyJuYW1lIjoiQmhvcGFsIiwiY291bnRyeSI6IkluZGlhIiwiY29vcmQiOnsibGF0IjoyMy4yNTg0ODU3LCJsb24iOjc3LjQwMTk4OX19",
  },
  {
    name: "Delhi",
    image:
      "https://planetofhotels.com/guide/sites/default/files/styles/paragraph__hero_banner__hb_image__960bp/public/hero_banner/india_gate.jpg",
    url: "/location/eyJuYW1lIjoiRGVsaGkiLCJjb3VudHJ5IjoiSW5kaWEiLCJjb29yZCI6eyJsYXQiOjI4LjY1MTcxNzgsImxvbiI6NzcuMjIxOTM4OH19",
  },
  {
    name: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    url: "/location/eyJuYW1lIjoiTXVtYmFpIiwiY291bnRyeSI6IkluZGlhIiwiY29vcmQiOnsibGF0IjoiMTkuMDc1OTg5OSIsImxvbiI6IjcyLjg3NzM5MjgifX0=",
  },
];

export default function FamousPlaces() {
  return (
    <div className="places">
      <div className="places__row">
        {places.length > 0 &&
          places.map((place, index) => (
            <div className="places__box" key={index}>
              <Link to={place.url}>
                <div className="places__image-wrapper">
                  <img
                    src={place.image}
                    alt={`${place.name}`}
                    width="170"
                    height="200"
                  />
                </div>

                <span>{place.name}</span>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
