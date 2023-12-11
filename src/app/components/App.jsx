import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "./action";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";

function App() {
  const { data, error, status } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, []);

  // console.log(data);

  return (
    <div style={{ backgroundColor: "lightseagreen" }}>
      <h1 style={{ textAlign: "center", color: "purple", marginTop: "30px" }}>
        RealTime Scoreboard Sports{" "}
        <span style={{ color: "purple", textDecoration: "underline" }}>
          News
        </span>{" "}
      </h1>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 4fr" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            // alignItems: "space-between",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "400px",
              height: "400px",
              marginBottom: "50px",
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src="/sports.webp"
            ></img>
          </div>

          <img
            style={{
              width: "250px",
              height: "250px",
              marginBottom: "50px",
              marginLeft: "100px",
              marginBottom: "200px",
            }}
            src="/volleball.webp"
          ></img>

          {/* <img
            style={{ width: "250px", height: "250px", marginBottom: "50px" }}
            src="/football.webp"
          ></img> */}
        </div>

        <div>
          {data?.body?.map((item, index) => (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "0.5fr 10fr 0.5fr",
              }}
            >
              <div></div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.5fr 4fr 1fr",
                  borderLeft: "2px solid lightblue",
                  borderBottom: "2px solid lightblue",
                  borderRadius: index % 2 === 0 ? "90px 0 0 0" : "0 0 90px 0",
                  backgroundColor:
                    index % 3 === 0
                      ? "lightblue"
                      : index % 3 === 1
                      ? "whitesmoke"
                      : "lightgreen",
                  margin: "5px",
                }}
              >
                <div
                  style={{
                    borderRadius: "5px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      display: item.image === "" ? "none" : "block",
                    }}
                    src={item.image}
                  ></img>
                </div>

                <p>
                  {item.title}
                  <a href={item.link}>...Read More</a>
                </p>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // backgroundColor: "red",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faCheckSquare}
                    style={{ fontSize: "50px", color: "green" }}
                  />
                </div>
              </div>

              <div></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
