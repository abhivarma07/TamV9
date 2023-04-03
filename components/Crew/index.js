import React from "react";
import { InfoSection } from "../InfoSection/index";
import {
  tech,
  marketing,
  events,
  photo,
  vfx,
  wiz,
  stage,
  board,
} from "../InfoSection/Data";
import {
  Tech,
  Market,
  Event,
  VFX,
  Wizards,
  Photo,
  Stage,
  Board,
} from "../Slider/data";
import Signin from "../../sections/signin";

const Crew = () => {
  return (
    <div style={{ backgroundColor: "transparent", marginTop: 150 }}>
      <Signin
        data={Board}
        autoplay={false}
        heading={"The Board Members"}
        headingdesc={"EXECUTIVES"}
      />
      <Signin
        data={Market}
        autoplay={false}
        heading={"The Marketing Department"}
        headingdesc={"INFLUENCERS"}
      />
      <Signin
        data={Event}
        autoplay={false}
        heading={"The Events Department"}
        headingdesc={"EVENTERS"}
      />
      <Signin
        data={Tech}
        autoplay={false}
        heading={"The Technical Department"}
        headingdesc={"TECHIES"}
      />
      <Signin
        data={Wizards}
        autoplay={false}
        heading={"The Wizards Department"}
        headingdesc={"ECHANTERS"}
      />
      <Signin
        data={VFX}
        autoplay={false}
        heading={"The VFX Department"}
        headingdesc={"CREATORS"}
      />
      <Signin
        data={Photo}
        autoplay={false}
        heading={"The Photography Department"}
        headingdesc={"PAPARAZZIS"}
      />
      <Signin
        data={Stage}
        autoplay={false}
        heading={"The Stage Department"}
        headingdesc={"STAGEHANDS"}
      />
    </div>
  );
};

export default Crew;
