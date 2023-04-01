import React from "react";

export default function BiComponent(props) {
  const { data, dateChange, currentDate } = props;

  function dateChangeHandler(e) {
    console.log(e.target.value);
    dateChange(e.target.value);
  }

  function prevDayHandler() {
    const prevDay = new Date(currentDate);
    prevDay.setDate(prevDay.getDate() - 1);
    dateChange(prevDay.toISOString().split("T")[0]);
    document
      .querySelectorAll("button")
      .forEach((button) => (button.style.fontSize = "200%"));
  }

  function nextDayHandler() {
    const nextDay = new Date(currentDate);
    nextDay.setDate(nextDay.getDate() + 1);
    dateChange(nextDay.toISOString().split("T")[0]);
    document
      .querySelectorAll("button")
      .forEach((button) => (button.style.fontSize = "200%"));
  }

  if (!data) return <h3>Yükleniyor...</h3>;
  return (
    <div className="row App__Container">
      <div className="column grow2 basis40">
        <div className="row">
          <div className="column baslik">ASTRONOMY PICTURE OF THE DAY</div>
        </div>
        <div className="row grow2">
          <div className="column date-input">
            <label htmlFor="apodDate"></label>
            <input
              onChange={(e) => dateChangeHandler(e)}
              type="date"
              value={currentDate}
              name="apodDate"
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <button onClick={prevDayHandler}>Prev</button>
          </div>
          <div className="column">
            <button onClick={nextDayHandler}>Next</button>
          </div>
        </div>
      </div>
      <div className="column grow2 basis40">
        <div className="row">
          <div className="column"></div>
        </div>
        <div className="row">
          <div className="column orta">
            {" "}
            {data.media_type === "image" && (
              <img
                src={data.url}
                alt={data.title}
                style={{ maxWidth: "400px", height: "auto" }}
              />
            )}
            {data.media_type === "video" && (
              <iframe
                width="420"
                height="315"
                src={data.url}
                frameBorder="0"
                allowFullScreen
                title={data.title}
              ></iframe>
            )}
          </div>
        </div>
        <div className="row">
          <div className="column">
            <p>{data.explanation}</p>
          </div>
        </div>
      </div>
      <div className="column basis20">
        <div className="row">
          <div className="column">
            <a href="#">Archives</a>
          </div>
        </div>
        <div className="column">
          <div className="row">
            <div className="column"></div>
          </div>
          <div className="row">
            <div
              className="column"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <a href="https://www.facebook.com/">Facebook</a>
              <a href="https://www.twitter.com/">Twitter</a>
              <a href="https://www.instagram.com/">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
