import React from "react";
import * as ReactDOMClient from "react-dom/client";

const textPlace = "Writing now";
const input = <input placeholder={textPlace} />;

const root = document.getElementById("root");
const app = ReactDOMClient.createRoot(root);

app.render(input);
