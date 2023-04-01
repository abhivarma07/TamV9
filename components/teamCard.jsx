"use client";

import React from "react";

const TeamCard = () => {
  return (
    <>
      <div class="profile-card">
        <div class="img">
          <img src="/people-01.png" />
        </div>
        <div class="caption">
          <h3>Vin Diesel</h3>
          <p>Senior App Developer</p>
          <div class="social-links">
            <a href="#">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
