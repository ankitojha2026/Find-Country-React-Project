import { HiArrowSmRight } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import About from "./About";

const Home = () => {
  return (<>
    <div className="container  my-5 mt-5">
      <div className="row align-items-center rounded-4 border shadow-lg bg-white">
        {/* Text Content */}
        <div className="col-lg-7 p-4 p-lg-5">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
            Explore the World, One Country at a Time.
          </h1>
          <p className="lead mt-3">
            Discover the history, culture, and beauty of every nation. Sort, search, and filter through countries to find the details you need.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-4">
            <NavLink to="/about">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
              >
                Start Exploring <HiArrowSmRight />
              </button>
            </NavLink>
          </div>
        </div>

        {/* Hero Image */}
        <div className="col-lg-5 p-4 text-center">
          <img
            src="/Images/Hero.jpeg"
            alt="Explore Countries"
            className="img-fluid rounded-4 shadow"
            style={{ maxHeight: "400px", objectFit: "cover", width: "100%" }}
          />
        </div>
      </div>
    </div>


    <About />
    </>




  );
};

export default Home;
