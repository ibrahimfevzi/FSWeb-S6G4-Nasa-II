import React from "react";

export default function BiComponent(props) {
  const { data, dateChange, currentDate } = props;
  function dateChangeHandler(e) {
    console.log(e.target.value);
    dateChange(e.target.value);
  }
  if (!data) return <h3>Yükleniyor...</h3>;
  return (
    <div className="row App__Container">
      <div className="column grow2">
        <div className="row">
          <div className="column text--white">row column</div>
        </div>
        <div className="row grow2">
          <div className="column">row column</div>
        </div>
        <div className="row">
          <div className="column">row column</div>
        </div>
      </div>
      <div className="column grow2">
        <div className="row">
          <div className="column">
            <label htmlFor="apodDate">apodDate:</label>
            <input
              onChange={(e) => dateChangeHandler(e)}
              type="date"
              value={currentDate}
              name="apodDate"
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="column">row column</div>
        </div>
        <div className="row">
          <div className="column">
            {/* {data.media_type === "image" && (
        <img src={data.hdurl} alt={data.title} width="500" height="600" />
      )} */}
            <p>{data.service_version}</p>
            <p>{data.title}</p>
            {/* {data.media_type === "video" && (
        <iframe width="420" height="315" src={data.url}></iframe>
      )} */}
            <p>{data.explanation}</p>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="row">
          <div className="column">
            <p>{data.date}</p>
          </div>
        </div>
        <div className="row">
          <div className="column">row column</div>
        </div>
      </div>
    </div>
  );
}
