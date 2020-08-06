import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import Participant1 from "../../images/Participant1.jpg";
import sweater from "../../images/sweater.jpg";
import slippers from "../../images/slippers.JPG";
import Gifts from "../../images/Gifts.jpg";
import blanket from "../../images/blanket.jpg";
import lobby from "../../images/lobby.JPG";
import gDrive from "../../images/gDrive.jpg";
import open from "../../images/open.jpg";
import happy from "../../images/happy.jpg";
import puzzle from "../../images/puzzle.jpg";

class MyComponent extends Component {
  render() {
    const images = [
      { original: Participant1 },
      { original: sweater },
      { original: slippers },
      { original: puzzle },
      { original: Gifts },
      { original: blanket },
      { original: lobby },
      { original: gDrive },
      { original: open },
      { original: happy },
    ];

    const someComponent = (props) => {
      // console.log(props.someProps.objectKey)
      return <div>{/* {props.someProps.objectKey} */}</div>;
    };

    return (
      <ImageGallery
        items={images}
        // defaultImage={defaultImage}
        // showBullets={false}
        // showIndex={false}
        lazyLoad={true}
        showPlayButton={false}
        // renderCustomControls={someComponent}
        autoPlay={true}
        showNav={false}
        slideDuration={425}
      />
    );
  }
}

export default MyComponent;