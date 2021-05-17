import { Divider } from "@material-ui/core";
import React from "react";
import GoogleMap from "../GoogleMap/GoogleMap";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import "./Locate.scss";
import CallIcon from "@material-ui/icons/Call";
import Mobile__location from '../../Mobile__components/Mobile__Location/Mobile__location'
const addressData = [
  {
    id: 1,
    address:
      "#130/B1, Pallavaram - Thorapakkam Radial Road, Opp. Chettinad Cement Godown,\nKellakattalai, Chennai -600 117.",
    phone: "9677129433 / 7397766596",
    emailID: "mds@vishnucars.com",
    lat: 12.948658231144655,
    lng: 80.19743886833004,
  },
  {
    id: 2,
    address:
      "#15, 16-A, GST Road,(Near Le Royal Meridian Hotel), Kathipara Junction, Chennai - 600 016.",
    phone: "7358387858 / 7397249444",
    emailID: "mdskpr@vishnucars.in",
    lat: 12.999067554000279,
    lng: 80.19267709716648,
  },
  {
    id: 3,
    address:
      "No:15, GST Road, Next To Bata Showroom, Guduvanchery,\nChennai - 603 202.",
    phone: "7858024466 / 7339344744",
    emailID: "mdsgdv@vishnucars.in",
    lat: 12.845554096658919,
    lng: 80.05466569887517,
  },
  {
    id: 4,
    address: "#203 - 206, Poonamalle Road, Kattupakkam,\nChennai - 600 056.",
    phone: "7358387857 / 9597111393",
    emailID: "mdsktp@vishnucars.in",
    lat: 13.037558793189108,
    lng: 80.13813539734369,
  },
  {
    id: 5,
    address:
      "No:120, Mambakkam Main Roadm, (Near Medavakkam Panchayath Office),\nMedavakkam, Chennai - 600 109.",
    phone: "7397776487 / 9789992838",
    emailID: "mdsmdk@vishnucars.in",
    lat: 12.9193153195258,
    lng: 80.19213663421552,
  },
  {
    id: 6,
    address:
      "#4/13, Kalasathmman Koil Street, TNEB Office Road, Ramapuram,\nChennai - 600 089",
    phone: "73583878856 / 9629666478",
    emailID: "",
    lat: 13.029918673218619,
    lng: 80.18519836981821,
  },
  {
    id: 7,
    address:
      "No:368/2A/1, Vandalur Walajabad Main Road,Karasangal, Padappai East,\nChennai - 601 301.",
    phone: "95660 00535",
    emailID: "mdsgdvc@vishnucars.in",
    lat: 12.890790042858999,
    lng: 80.03735299716524,
  },
  {
    id: 8,
    address: "#17, CTH Road, Kavarpalayam, Avadi,\n Chennai - 600 054",
    phone: "9566000776 / 7550227111",
    emailID: "mdsavd@vishnucars.in",
    lat: 13.120571139482989,
    lng: 80.08699271185749,
  },
  {
    id: 9,
    address:
      "No:62/2B, Thiruvanchery Village,Tambaram Taluk, Selaiyur, Chennai - 600073",
    phone: "73583 87845",
    emailID: "msdssel@vishnucars.in",
    lat: 12.899287275483953,
    lng: 80.14190721065772,
  },
  {
    id: 10,
    address:
      "No.19, Kundrathur Main Road,\nNear Parimala Theatre,\nMoondram Kattalai, Chennai - 600 069",
    phone: "73583 87846",
    emailID: "msdskdtr@vishnucars.in",
    lat: 13.009056251804223,
    lng: 80.10186393210428,
  },
];

const showInMapClicked = () => {
  window.open(
    "https://www.google.com/maps/search/Vishnu+Cars+chennai/@13.0034368,80.0340192,11z/data=!3m1!4b1"
  );
};

const openLocation = (lat, lng) => {
  window.open("https://maps.google.com?q=" + lat + "," + lng);
};

function Locate() {
  return (
    <div className="locate">
      <div className="locate__desktop">
        <div className="locate__main">
          <div className="locate__address">
            <div className="h1">
              We are
              <br />
              everywhere.
            </div>
            <div className="sentence">
               Finding us made easy, choose your nearest location where you wish to go to.
            </div>
            <Divider />
            {addressData.map((value) => {
              if (value.id !== 1)
                return (
                  <div
                    className="locate__address__main"
                    onClick={() => openLocation(value.lat, value.lng)}
                  >
                    <div className="locate__address__body" key={value.id}>
                      <div className="address__title">
                        <LocationOnIcon className="icon" />
                        Vishnu Cars
                      </div>
                      <div className="address__content">{value.address}</div>
                      {/*<div className="address__content phone">
                        <CallIcon className="call__icon" />
                        {value.phone}
                </div>*/}
                      {/*<div className="address__content email">{value.emailID}</div>*/}
                    </div>
                  </div>
                );
              else
                return (
                  <div
                    className="locate__address__main2"
                    onClick={() => openLocation(value.lat, value.lng)}
                  >
                    <div className="locate__address__body" key={value.id}>
                      <div className="address__title">
                        <LocationOnIcon className="icon" />
                        Vishnu Cars
                      </div>
                      <div className="address__content">{value.address}</div>
                      {/*<div className="address__content phone">
                        <CallIcon className="call__icon" />
                        {value.phone}
                </div>*/}
                      {/*<div className="address__content email">{value.emailID}</div>*/}
                    </div>
                  </div>
                );
            })}
          </div>
          <div className="locate__map" onClick={showInMapClicked}>
            <GoogleMap address={addressData} />
          </div>
        </div>
      </div>
      <div className="locate__mobile">
        <Mobile__location />
      </div>
    </div>
  );
}

export default Locate;
