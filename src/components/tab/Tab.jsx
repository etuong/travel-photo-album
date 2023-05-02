import React from "react";

export const Tab = () => {
  const openTab = (evt, cityName) => {
    let i, tabContent, tabLinks;

    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }

    tabLinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "flex";

    evt.currentTarget.className += " active";
  };

  return (
    <div class="tab">
      <button
        class="tab-links"
        onClick={openTab(event, "Tokyo")}
        id="defaultOpen"
      >
        Tokyo
      </button>
      <button class="tab-links" onClick={openTab(event, "Kyoto")}>
        Kyoto
      </button>
      <button class="tab-links" onClick={openTab(event, "Osaka")}>
        Osaka
      </button>
      <button class="tab-links" onClick={openTab(event, "Kobe")}>
        Kobe
      </button>
      <button class="tab-links" onClick={openTab(event, "Nara")}>
        Nara
      </button>
      <button class="tab-links" onClick={openTab(event, "Seoul")}>
        Seoul
      </button>
    </div>
  );
};
