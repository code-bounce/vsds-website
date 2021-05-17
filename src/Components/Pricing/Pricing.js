import React from "react";
import "./Pricing.scss";
import { Button } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Divider from "@material-ui/core/Divider";
const pricingData = [
  {
    id: 1,
    price: "₹ 7,670",
    pt1: "10hrs of practical course",
    pt2: "7hrs of theoretical course",
    pt3: "2 1/2hrs Simulator Training",
    pt4: "2 1/2hrs Demo Classes",
    course: "(Learner Course)",
  },
  {
    id: 2,
    price: "₹ 10,030",
    pt1: "15hrs of practical course",
    pt2: "7hrs of theoretical course",
    pt3: "2 1/2hrs Simulator Training",
    pt4: "2 1/2hrs Demo Classes",
    course: "(Learner Extended Course)",
  },
  {
    id: 3,
    price: "₹ 11,800",
    pt1: "20hrs of practical course",
    pt2: "7hrs of theoretical course",
    pt3: "2 1/2hrs Simulator Training",
    pt4: "2 1/2hrs Demo Classes",
    course: "(Learner Detailed Course)",
  },
  {
    id: 4,
    price: "₹ 5,900",
    pt1: "6hrs of practical course",
    pt2: "2hrs of theoretical course",
    pt3: "1hr Simulator Training",
    pt4: "No Demo class",
    course: "(Advance Course)",
  },
];
function Pricing() {
  return (
    <div className="pricing">
      <div className="main">Ready to start with Driving?</div>
      <div className="pricing__head">
        What courses we provide for your advancement.
      </div>
      <div className="pricing__sub">Choose Your plan.</div>
      <div className="pricing__main__content">
        {pricingData.map((value) => {
          if (value.id === 2) {
            return (
              <div className="pricing__main" style={{backgroundColor: "rgb(42, 46, 83)"}} key={value.id}>
                <div className="pricing__content">
                  <div className="pricing__content__price" style={{color: "#fff"}}>{value.price}</div>
                  <div className="pricing__content__gst">Including GST</div>
                  <div className="pricing__content__course">{value.course}</div>
                  <Divider />
                  <div className="pricing__content__body">
                    <div className="content__tick" style={{color: "#fff"}}>
                      <CheckCircleIcon className="icon" />
                      {value.pt1}
                    </div>
                    <div className="content__tick" style={{color: "#fff"}}>
                      <CheckCircleIcon className="icon" />
                      {value.pt2}
                    </div>
                    <div className="content__tick" style={{color: "#fff"}}>
                      <CheckCircleIcon className="icon" />
                      {value.pt3}
                    </div>
                    <div className="content__tick" style={{color: "#fff"}}>
                      <CheckCircleIcon className="icon" />
                      {value.pt4}
                    </div>
                  </div>
                  <div className="pricing__content__button">
                    <Button className="btn" variant="contained" color="primary">
                      <a href="#query__page">Sign Up</a>
                    </Button>
                  </div>
                </div>
              </div>
            );
          }
          return (
            <div className="pricing__main" key={value.id}>
              <div className="pricing__content">
                <div className="pricing__content__price">{value.price}</div>
                <div className="pricing__content__gst">Including GST</div>
                <div className="pricing__content__course">{value.course}</div>
                <Divider />
                <div className="pricing__content__body">
                  <div className="content__tick">
                    <CheckCircleIcon className="icon" />
                    {value.pt1}
                  </div>
                  <div className="content__tick">
                    <CheckCircleIcon className="icon" />
                    {value.pt2}
                  </div>
                  <div className="content__tick">
                    <CheckCircleIcon className="icon" />
                    {value.pt3}
                  </div>
                  <div className="content__tick">
                    <CheckCircleIcon className="icon" />
                    {value.pt4}
                  </div>
                </div>
                <div className="pricing__content__button">
                  <Button className="btn" variant="contained" color="primary">
                    <a href="#query__page">Sign Up</a>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Pricing;
