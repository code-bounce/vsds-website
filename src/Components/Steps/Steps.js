import React from "react";
import "./Steps.scss";

function Steps() {
  return (
    <div className="steps">
      <div className='steps__head'>We make it easy for you.</div>
      <div className="steps__content">
        <div className="info">
          <img src="https://firebasestorage.googleapis.com/v0/b/vishnu-msds.appspot.com/o/Steps%2Freading.svg?alt=media&token=60d5bb06-36b3-4dbc-9df8-6af208e98df1" alt="" />
          <div className="info__head">Book Online</div>
        </div>
        <img className='arrow' src='https://firebasestorage.googleapis.com/v0/b/vishnu-msds.appspot.com/o/Steps%2Fright-arrow-of-straight-thin-line.svg?alt=media&token=65aabf48-36f9-4416-a457-873db4af492c' alt='' />
        <div className="info">
          <img src="https://firebasestorage.googleapis.com/v0/b/vishnu-msds.appspot.com/o/Steps%2Fcustomer-service.svg?alt=media&token=16056b13-566b-4d34-8377-25abc824e1d0" alt="" />
          <div className="info__head">Get in Touch</div>
        </div>
        <img className='arrow' src='https://firebasestorage.googleapis.com/v0/b/vishnu-msds.appspot.com/o/Steps%2Fright-arrow-of-straight-thin-line.svg?alt=media&token=65aabf48-36f9-4416-a457-873db4af492c' alt='' />
        <div className="info">
          <img src="https://firebasestorage.googleapis.com/v0/b/vishnu-msds.appspot.com/o/Steps%2Flearner.svg?alt=media&token=12381db8-7634-474c-8e47-50d82d6abff0" alt="" />
          <div className="info__head">Learn</div>
        </div>
        <img className='arrow' src='https://firebasestorage.googleapis.com/v0/b/vishnu-msds.appspot.com/o/Steps%2Fright-arrow-of-straight-thin-line.svg?alt=media&token=65aabf48-36f9-4416-a457-873db4af492c' alt='' />
        <div className="info">
          <img src="https://firebasestorage.googleapis.com/v0/b/vishnu-msds.appspot.com/o/Steps%2Fcap.svg?alt=media&token=3bcfec8a-b51b-4b6d-a0d5-002ebc05872d" alt="" />
          <div className="info__head">Excell</div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
