import React from "react";

export default function FormattedDate(props) {
  let days = [
    //let days wird erstellt damit wirklich ein TAg und net nur a Zahl erscheint.
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let minutes = props.date.getMinutes(); //mit props.date hab i den Wert von response.data.dt*1000 also die aktuelle Zeit in dieses component geholt und mit getMinutes() holt der PC sich nur die Minuten; des gleiche gilt für getDay und getHous;
  if (minutes < 10) {
    //also anstatt 5:00 soll 05:00 angezeigt werden
    minutes = `0${minutes}`;}
  
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  return (
    <div>
      {day} {hours}:{minutes}
    </div>
  );
  }
