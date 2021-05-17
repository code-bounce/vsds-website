import React from "react";
import "./Stats.scss";
import logo1 from "../../assets/steering-wheel.svg";
import logo2 from "../../assets/car.svg";
import logo3 from "../../assets/clipboard.svg";
import logo4 from "../../assets/recycle.svg";
import CountUp from "react-countup";
import Steps from "../Steps/Steps";
const statsData = [
  {
    id: 1,
    count: "8649",
    title: "Students are trained every year by our instructor",
    icon: logo1,
  },
  {
    id: 2,
    count: "10",
    title: "Locations in Chennai",
    icon: logo2,
  },
  {
    id: 3,
    count: "100",
    title: "We bring the best driver in you",
    icon: logo3,
  },
  {
    id: 4,
    count: "3472",
    title: "Our students drive so many kilometers every days",
    icon: logo4,
  },
];

function Stats() {
  return (
    <div className="stats">
     <div className='extra1'></div>
     <div className='extra2'></div>
      <div className="stats__info">
        <div className="stats__top">
          <div className="top__head">
            Our Main aim is satifying our customers.
          </div>
          <div className="top__body">
            We at Vishnu Cars always focus on providing the best for you, making
            a better driver out of you is our aim. <br /> Come join our family.
          </div>
          <div className="booking__explained">
            <Steps />
          </div>
        </div>
        <div className="stats__bottom">
            <img
              className="bg1"
              src="https://firebasestorage.googleapis.com/v0/b/vishnu-msds.appspot.com/o/Design%2Falert.svg?alt=media&token=caf57e5c-7a98-4fb8-b669-30e6ef244e87"
              alt=""
            />
            <img
              className="bg2"
              src="https://firebasestorage.googleapis.com/v0/b/vishnu-msds.appspot.com/o/Design%2Ftraffic-light%20(2).svg?alt=media&token=e0780423-87ad-4007-b10e-2bee9e006f6c"
              alt=""
            />
            <img
              className="bg3"
              src="https://firebasestorage.googleapis.com/v0/b/vishnu-msds.appspot.com/o/Design%2Fturn.svg?alt=media&token=bcf70e2e-fffe-436f-b9f9-49d7a0c6c8ab"
              alt=""
            />
            <img
              className="bg4"
              src="https://firebasestorage.googleapis.com/v0/b/vishnu-msds.appspot.com/o/Design%2Fright-turn.svg?alt=media&token=edc2f65d-fade-48c3-8d60-84f21dae3d0a"
              alt=""
            />
            <img
              className="bg5"
              src="https://firebasestorage.googleapis.com/v0/b/vishnu-msds.appspot.com/o/Design%2Ftraffic-sign%20(3).svg?alt=media&token=3ff949d6-8212-417d-86ff-b1ba14c741dd"
              alt=""
            />
            <img
              className="bg6"
              src="https://firebasestorage.googleapis.com/v0/b/vishnu-msds.appspot.com/o/Design%2Ftraffic-sign%20(2).svg?alt=media&token=6108ae2f-d453-4bba-b09a-73f2c5118b91"
              alt=""
            />
            <img
              className="bg7"
              src="https://firebasestorage.googleapis.com/v0/b/vishnu-msds.appspot.com/o/Design%2Ftraffic-sign%20(1).svg?alt=media&token=207edd21-d562-42b7-95dc-71ffad944894"
              alt=""
            />
            <img
              className="bg8"
              src="https://firebasestorage.googleapis.com/v0/b/vishnu-msds.appspot.com/o/Design%2Fstop.svg?alt=media&token=ac5bb015-f93b-44c3-8a2a-f90a55101365"
              alt=""
            />
            <img
              className="bg9"
              src="https://firebasestorage.googleapis.com/v0/b/vishnu-msds.appspot.com/o/Design%2Fpedestrian-crossing.svg?alt=media&token=6a662276-33a0-4413-8adc-32fe0ecad936"
              alt=""
            />
            <img
              className="bg10"
              src="https://firebasestorage.googleapis.com/v0/b/vishnu-msds.appspot.com/o/Design%2Fwarning.svg?alt=media&token=62f0e056-95d5-4689-bf0a-9a03ce3501ff"
              alt=""
            />
          {statsData.map((value) => {
            if (value.id === 1)
              return (
                <div className="stats__main" key={value.id}>
                  <div className="stats__content">
                    <div className="stats__content__count">
                      <img className="img" src={value.icon} alt=""></img>
                      <CountUp end={value.count} duration={2.5} delay={0.5} />+
                    </div>
                    <div className="stats__content__title">{value.title}</div>
                  </div>
                </div>
              );
            else if (value.id === 3)
              return (
                <div className="stats__main" key={value.id}>
                  <div className="stats__content">
                    <div className="stats__content__count">
                      <img className="img" src={value.icon} alt=""></img>
                      <CountUp end={value.count} duration={2.5} delay={0.5} />%
                    </div>
                    <div className="stats__content__title">{value.title}</div>
                  </div>
                </div>
              );
            else
              return (
                <div className="stats__main" key={value.id}>
                  <div className="stats__content">
                    <div className="stats__content__count">
                      <img className="img" src={value.icon} alt=""></img>
                      <CountUp end={value.count} duration={2.5} delay={0.5} />
                    </div>
                    <div className="stats__content__title">{value.title}</div>
                  </div>
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
}

export default Stats;
