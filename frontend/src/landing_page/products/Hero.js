import React from "react";
function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="text-center mt-5 p-5">
        <h1 >Zerodha Products</h1>
        <h3 className="text-muted mb-3 mt-3 fs-4">Sleek, modern, and intuitive trading platforms</h3>
        <p>
          Check out our{" "} 
            <a href="" style={{ textDecoration: "none" }}>
              investment offerings{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>{" "}
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
