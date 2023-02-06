import React from "react";

const Thankyou = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "grid",
        placeItems: "center",
      }}
    >
      
      <div style={{height: "500px", width:"80%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <img src="/thank-you.png" alt="" style={{objectFit: "contain", width: "100%", height: "100%"}} />
        <div>
          <h3>We will get back to you soon.</h3>
        </div>
      </div>
    </div>
  );
};

export default Thankyou;
