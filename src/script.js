import { race } from "./racing-bars.js";

const options = {
  dataType: "csv",
  dataShape: "wide",
  title: "Deaths in Israeli/Palestinian conflicts",
  subTitle: "",
  caption: "Source: OCHA",
  dateCounter: "YYYY",
  showIcons: true,
  labelsPosition: "outside",
  colorMap: {
    Palestinians: "#1abb57",
    Israelis: "#2f62d8",
  },
  fixedScale: true,
  topN: 3,
  dataTransform: (data) => data.map((d) => ({
    ...d,
    date: d.date + '-01-02',
  })),
};
race("./data.csv", "#race", options);
