import { getImageURL } from "../utils/getImageURL";

const sweden = {
  name: "Sweden",
  backgroundImage: getImageURL("sweden.jpg"),
  cities: [
    {
      name: "Stockholm",
      image: getImageURL("stockholm.jpg"),
      description: "The capital city, known for its beautiful archipelago and rich history."
    },
    {
      name: "Gotland",
      image: getImageURL("gotland.jpg"),
      description: "A picturesque island famous for medieval streets and beaches."
    },
    {
      name: "Malmö",
      image: getImageURL("malmo.jpg"),
      description: "A vibrant city with modern architecture and cultural landmarks."
    }
  ]
};

export default sweden;