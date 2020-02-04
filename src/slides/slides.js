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

const imgData = [
  {
    id: "img0",
    title: "Brother and Sister",
    content:
      "Ethan and Elaine are watching Pokemon together on a bunker bed.",
    position: "top"
  },
  {
    id: "img1",
    title: "My ball!",
    content:
      "Dad and Ethan are kicking some balls at Youido Park under the blue sky.",
    position: "top"
  },
  {
    id: "img2",
    title: "Sunshine Girl",
    content: "Elaine strolling down in her pretty shoes.",
    position: "bottom"
  },
  {
    id: "img3",
    title: "Here goes the cannon ball!",
    content: "Ethan is ready to launch his final attack on dad.",
    position: "top"
  },
  {
    id: "img4",
    title: "Side by Side",
    content: "A sunny afternoon at Han-River Park",
    position: "bottom"
  },
  {
    id: "img5",
    title: "Good Morning Yellow Brick Road",
    content: "Ethan is walking to the Kindergarten with mom and dad.",
    position: "top"
  }
];

const imgs = Object.entries(images).map(([key, value], index) => {
  return {
    img: value,
    title: imgData[index].title,
    content: <p>{imgData[index].content}</p>,
    position: imgData[index].position
  };
});

export default imgs;
