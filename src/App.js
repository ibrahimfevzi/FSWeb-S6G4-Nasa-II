import React from "react";
import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import ApodContainer from "./components/ApodContainer";

const mockDataArray = [
  {
    date: "2022-08-21",
    explanation:
      "At the core of the Crab Nebula lies a city-sized, magnetized neutron star spinning 30 times a second. Known as the Crab Pulsar, it is the bright spot in the center of the gaseous swirl at the nebula's core. About twelve light-years across, the spectacular picture frames the glowing gas, cavities and swirling filaments near the Crab Nebula's center.  The featured picture combines visible light from the Hubble Space Telescope in purple, X-ray light from the Chandra X-ray Observatory in blue, and infrared light from the Spitzer Space Telescope in red.  Like a cosmic dynamo the Crab pulsar powers the emission from the nebula, driving a shock wave through surrounding material and accelerating the spiraling electrons. With more mass than the Sun and the density of an atomic nucleus,the spinning pulsar is the collapsed core of a massive star that exploded. The outer parts of the Crab Nebula are the expanding remnants of the star's component gasses. The supernova explosion was witnessed on planet Earth in the year 1054.   Explore Your Universe: Random APOD Generator",
    hdurl:
      "https://apod.nasa.gov/apod/image/2208/Crab_HubbleChandraSpitzer_3600.jpg",
    media_type: "image",
    service_version: "v1",
    title: "The Spinning Pulsar of the Crab Nebula",
    url: "https://apod.nasa.gov/apod/image/2208/Crab_HubbleChandraSpitzer_1080.jpg",
  },
  {
    date: "2022-08-22",
    explanation:
      "Is our Earth warming? Compared to the past 250 million years, the Earth is currently enduring a relative cold spell, possibly about four degrees Celsius below average.  Over the past 120 years, though, data indicate that the average global temperature of the Earth has increased by nearly one degree Celsius.  The featured visualization video depicts Earth's recent global warming in graphic terms. The depicted temperatures are taken from the Goddard Institute for Space Studies' Surface Temperature Analysis. Already noticeable by many, Earth's recent warming trend is causing sea levels to rise, precipitation patterns to change, and pole ice to melt.  Few now disagree that recent global warming is occurring, and the Intergovernmental Panel on Climate Change (IPCC) has concluded that we humans have created a warming surge that is likely to continue.  A continuation could impact many local agricultures and even the global economy.  Although there seems to be no simple solutions, geoengineering projects that might help include artificial cloud creation to reduce the amount of sunlight heating the Earth's surface.",
    media_type: "video",
    service_version: "v1",
    title: "Earth's Recent Climate Spiral",
    url: "https://www.youtube.com/embed/ACaPI2M4GyU?rel=0",
  },
  {
    copyright: "Julien Looten",
    date: "2022-08-23",
    explanation:
      "Careful planning made this a nightscape to remember. First, the night itself was chosen to occur during the beginning of this year's Perseid Meteor Shower.  Next, the time of night was chosen to be before the bright Moon would rise and dominate the night sky's brightness. The picturesque foreground was selected to be a rocky beach of the Mediterranean Sea in Le Dramont, France, with, at the time, île d’Or island situated near the ominously descending central band of our Milky Way Galaxy.  Once everything was set and with the weather cooperating, all of the frames for this seemingly surreal nightscape were acquired within 15 minutes. What you can't see is that, on this night, the astrophotographer brought along his father who, although unskilled in modern sky-capture techniques, once made it a point to teach his child about the sky.    Perseid Meteor Shower 2022 Gallery: Notable Submissions to APOD",
    hdurl: "https://apod.nasa.gov/apod/image/2208/MeteorGalaxy_Looten_6325.jpg",
    media_type: "image",
    service_version: "v1",
    title: "Meteor & Milky Way over the Mediterranean",
    url: "https://apod.nasa.gov/apod/image/2208/MeteorGalaxy_Looten_1000.jpg",
  },
];

function App() {
  const [apodData, setApodData] = useState();
  const [datePicker, setDatePicker] = useState(
    new Date("2022-03-30").toISOString().slice(0, 10)
  );

  useEffect(() => {
    // Optionally the request above could also be done as
    /*  axios
      .get("https://api.nasa.gov/planetary/apod", {
        params: {
          api_key: "5dqIKcC152afcVcE1kaWF70uoMkXN5WlcXKV0jt5",
          date: datePicker,
        },
      })
      .then(function (response) {
        console.log(response);
        setApodData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      }); */
    setApodData(mockDataArray[2]);
    console.log("sayfam render oldu");
  }, [datePicker]);

  return (
    <div className="App">
      <ApodContainer
        data={apodData}
        dateChange={setDatePicker}
        currentDate={datePicker}
      />
    </div>
  );
}

export default App;
