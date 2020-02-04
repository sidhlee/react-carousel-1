import React from "react";

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace(/.*/, "img" + index)] = r(item);
  });
  console.log(images);
  return images;
}

const images = importAll(
  //require.context(directory, useSubdirectories = true, regExp = /^\.\/.*$/, mode = 'sync');
  require.context("./", false, /.*.jpg$/i)
);

const imgs = Object.entries(images).map(([key, value], index) => {
  return {
    img: value,
    title: "Happy Day",
    content: <p>Cafe MonJube</p>
  };
});

export default imgs;
