import React, { useEffect, useState } from "react";
import $ from "jquery";

import '../stylesheet/NavLink.css'

function Menu() {
  const [PageHeight, setPageHeight] = useState([]);
  useEffect(() => {
    pushPageHeight();
    $("a").on("click", function(e) {
      let pageID = e.currentTarget.innerHTML;
      document.getElementById(pageID).scrollIntoView(true);
    });
    window.addEventListener("resize", pushPageHeight, false);
    return () => {
      window.removeEventListener("resize", pushPageHeight, false);
      $("a").off("click");
    };
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", dirActive, false);
    return () => {
      document.removeEventListener("scroll", dirActive, false);
    };
  }, [PageHeight]);

  function dirActive() {
    let i = 0;
    let OnePageHeight = ($("section")[0].scrollHeight * 1) / 4;
    //console.log(window.scrollY);
    for (i; i < PageHeight.length; i++) {
      if (
        PageHeight[i].Height < window.scrollY + OnePageHeight &&
        window.scrollY < PageHeight[i].Height + PageHeight[1].Height
      ) {
        $(".active").removeClass("active");
        $(".MenuList li")[i].children[0].classList.add("active");
      }
    }
  }

  function pushPageHeight() {
    let i = 0;
    let pageArray = [];
    for (i; i < $("section").length; i++) {
      pageArray.push({
        ID: $("section")[i].id,
        Height:
          $("section")[i].scrollHeight > 600
            ? $("section")[i].scrollHeight * i
            : 600 * i
      });
    }
    setPageHeight(pageArray);
  }

  return (
    <nav>
      <ul className="MenuList">
        <li>
          <a className="active" href="javascript:void(0)" onclick="">
            Accueil
          </a>
        </li>
        <li>
          <a onclick="" href="javascript:void(0)">
            Présentation
          </a>
        </li>
        <li>
          <a onclick="" href="javascript:void(0)">
            Compétences
          </a>
        </li>
        <li>
          <a onclick="" href="javascript:void(0)">
            Expériences
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
