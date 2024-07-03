import React from "react";
import gitHub from "../img/icons/gitHub-black.svg";

export default function BtnGitHub() {
  return (
    <a href="#!" className="btn-outline">
      <img src={gitHub} alt="" />
      GitHub repo
    </a>
  );
}
