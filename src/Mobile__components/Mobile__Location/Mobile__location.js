import React from 'react'
import './Mobile__location.scss';
import GoogleMapReact from "google-map-react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CallIcon from "@material-ui/icons/Call";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button, IconButton } from '@material-ui/core';
import DirectionsIcon from '@material-ui/icons/Directions';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';

const addressData = [
    {
        id: 1,
        address:
            "#130/B1, Pallavaram - Thorapakkam Radial Road, Opp. Chettinad Cement Godown,\nKellakattalai, Chennai -600 117.",
        phone: "9677129433",
        emailID: "mds@vishnucars.com",
        lat: 12.948658231144655,
        lng: 80.19743886833004,
    },
    {
        id: 2,
        address:
            "#15, 16-A, GST Road,(Near Le Royal Meridian Hotel), Kathipara Junction, Chennai - 600 016.",
        phone: "7358387858",
        emailID: "mdskpr@vishnucars.in",
        lat: 12.999067554000279,
        lng: 80.19267709716648,
    },
    {
        id: 3,
        address:
            "No:15, GST Road, Next To Bata Showroom, Guduvanchery,\nChennai - 603 202.",
        phone: "7858024466",
        emailID: "mdsgdv@vishnucars.in",
        lat: 12.845554096658919,
        lng: 80.05466569887517,
    },
    {
        id: 4,
        address: "#203 - 206, Poonamalle Road, Kattupakkam,\nChennai - 600 056.",
        phone: "7358387857",
        emailID: "mdsktp@vishnucars.in",
        lat: 13.037558793189108,
        lng: 80.13813539734369,
    },
    {
        id: 5,
        address:
            "No:120, Mambakkam Main Roadm, (Near Medavakkam Panchayath Office),\nMedavakkam, Chennai - 600 109.",
        phone: "7397776487",
        emailID: "mdsmdk@vishnucars.in",
        lat: 12.9193153195258,
        lng: 80.19213663421552,
    },
    {
        id: 6,
        address:
            "#4/13, Kalasathmman Koil Street, TNEB Office Road, Ramapuram,\nChennai - 600 089",
        phone: "73583878856",
        emailID: "",
        lat: 13.029918673218619,
        lng: 80.18519836981821,
    },
    {
        id: 7,
        address:
            "No:368/2A/1, Vandalur Walajabad Main Road,Karasangal, Padappai East,\nChennai - 601 301.",
        phone: "9566000535",
        emailID: "mdsgdvc@vishnucars.in",
        lat: 12.890790042858999,
        lng: 80.03735299716524,
    },
    {
        id: 8,
        address: "#17, CTH Road, Kavarpalayam, Avadi,\n Chennai - 600 054",
        phone: "9566000776",
        emailID: "mdsavd@vishnucars.in",
        lat: 13.120571139482989,
        lng: 80.08699271185749,
    },
    {
        id: 9,
        address:
            "No:62/2B, Thiruvanchery Village,Tambaram Taluk, Selaiyur, Chennai - 600073",
        phone: "7358387845",
        emailID: "msdssel@vishnucars.in",
        lat: 12.899287275483953,
        lng: 80.14190721065772,
    },
    {
        id: 10,
        address:
            "No.19, Kundrathur Main Road,\nNear Parimala Theatre,\nMoondram Kattalai, Chennai - 600 069",
        phone: "7358387846",
        emailID: "msdskdtr@vishnucars.in",
        lat: 13.009056251804223,
        lng: 80.10186393210428,
    },
    {
        id: 11
    }
];


const Marker = ({ index, text }) => (
    <div className="marker" key={index}>
        <LocationOnIcon className="icon" />
        {text}
    </div>
);

function Mobile__location() {
    const showDirections = () =>{
        window.open(
            "https://www.google.com/maps/search/Vishnu+Cars+chennai/@13.0034368,80.0340192,11z/data=!3m1!4b1"
          );
    }

    return (
        <div className="mobile__location">

            <div className="gmap" >
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyBg6dYSCm_90P5Rru28cHfJ9rVJFtIJkik" }}
                    defaultCenter={{
                        lat: 12.925852562348817,
                        lng: 80.1160449810846,
                    }}
                    defaultZoom={11}
                    options={{
                        zoomControl: false,
                        fullscreenControl: false
                    }}
                >
                    {addressData.map((value) => {
                        return (
                            <Marker
                                index={value.id}
                                lat={value.lat}
                                lng={value.lng}
                                text="Vishnu Cars"
                            />
                        );
                    })}

                </GoogleMapReact>

                <Swiper
                    className="mobile__locations__cards"
                    spaceBetween={10}
                    slidesPerView={1.5}
                >
                    {
                        addressData.map((value) => {
                            return (
                                <SwiperSlide className="card" key={value.id}>
                                    <div className="address__title"><LocationOnIcon className="icon" />Vishnu Cars</div>
                                    <div className="address__content">{value.address}</div>
                                    <div className="btn__group">
                                        <Button className="location__btn" onClick={showDirections}><DirectionsIcon fontSize='small' /> Directions</Button>
                                        <Button className="location__btn contact"><a href={"tel:" + value.phone}>Contact</a></Button>
                                    </div>
                                </SwiperSlide >
                            )
                        })
                    }
                </Swiper>
            </div>
            <Link to="/" className="back__btn">
                <IconButton className="btn">
                    <ArrowBackIcon />
                </IconButton>
            </Link>
        </div>
    )
}

export default Mobile__location
