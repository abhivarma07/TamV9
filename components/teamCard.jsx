"use client";

import React from "react";

const TeamCard = ({ data }) => {
  return (
    <>
      <div class="profile-card">
        <div class="img">
          <img src={data.img} />
        </div>
        <div class="caption">
          <h3 style={{ color: "black" }}>{data.name}</h3>
          <p>{data.role}</p>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
