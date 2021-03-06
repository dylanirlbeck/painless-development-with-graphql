import React from "react";
import { Row } from "../../components/ui/Common";
import ImagesRow from "./components/ImagesRow";

const Author = props => {
  return (
    <div>
      <Row align="center" justify="around">
        <h2>Mitch Masia &nbsp; &middot; &nbsp;</h2>
        <h2>CTO &nbsp;</h2>
        <h2>@ &nbsp;</h2>
        <a
          href="https://eeon.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="https://res.cloudinary.com/eeon/image/upload/v1572446232/fixtures/qrfnrrppxrrdqnrvxq3b.png"
            style={{
              height: 60,
              width: 200,
              marginTop: 14,
            }}
          />
        </a>
      </Row>
      <ImagesRow
        style={{ opacity: 0.7 }}
        images={[
          "https://pluralsight.imgix.net/paths/path-icons/nodejs-601628d09d.png",
          "https://cdn.auth0.com/blog/react-js/react.png",
          "https://camo.githubusercontent.com/1dae7db18ee88a998c9b237c0d33f9c2c71f748f/68747470733a2f2f692e696d6775722e636f6d2f6254373670585a2e706e67",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Clojure_logo.svg/1024px-Clojure_logo.svg.png",
        ]}
      />
      <ImagesRow
        style={{ marginTop: 64, opacity: 0.5 }}
        images={[
          "https://mma.prnewswire.com/media/902553/Guaranteed_Rate_Logo.jpg?p=facebook",
          "https://hexientlabs.com/static/HexientLabs-Logo.png",
          "https://www.move.org/app/uploads/2019/08/loadup-logo2x-300x130.png",
          "https://thumbsterconnect.com/wp-content/uploads/dynamik-gen/theme/images/logo-top-before.png",
        ]}
      />
    </div>
  );
};

export default Author;
