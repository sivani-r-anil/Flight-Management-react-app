import React from "react";
import NavigationBar from "./NavigationBar";

const Home = () => {
  return (
    <div>
      <NavigationBar />

      <div className="container mt-5">
        <div className="row align-items-center">

          {/* Left Side */}
          <div className="col-md-6">
            <h1 className="display-4 fw-bold text-primary">
              ✈ Flight Management System
            </h1>

            <p className="lead mt-4">
              Welcome to the Flight Management System. Easily manage flight
              details, schedules, and information with a simple and efficient
              interface.
            </p>

            <div className="mt-4">
              <h5 className="text-secondary">Features</h5>

              <ul className="list-group">
                <li className="list-group-item">✔ Add Flight Details</li>
                <li className="list-group-item">✔ View All Flights</li>
                <li className="list-group-item">✔ Manage Flight Information</li>
                <li className="list-group-item">✔ Simple & User Friendly</li>
              </ul>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-md-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900"
              alt="Flight"
              className="img-fluid rounded-4 shadow-lg"
            />
          </div>

        </div>

        {/* Bottom Card */}
        <div className="card mt-5 shadow border-0">
          <div className="card-body text-center">
            <h3 className="text-primary">Welcome Aboard!</h3>
            <p className="mb-0">
              Manage your flights quickly, securely, and efficiently with our
              Flight Management System.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;