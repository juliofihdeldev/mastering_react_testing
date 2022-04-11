import React from "react";
import Map from "./Map";

export default function Contact(props) {
  const center = { lat: 0, long: 0 };
  return (
    <div>
      <address>
        Contact {props.name} via{" "}
        <a data-testid="email" href={"mailto:" + props.email}>
          email
        </a>
              or on their
        <a data-testid="site" href={props.site}>
          website
        </a>.
      </address>
      <Map center={center} />
    </div>
  );
}