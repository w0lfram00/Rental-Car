import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <h1>Find your perfect rental car</h1>
      <p>Reliable and budget-friendly rentals for any journey</p>
      <Link to="/catalog">View Catalog</Link>
    </section>
  );
};

export default Home;
