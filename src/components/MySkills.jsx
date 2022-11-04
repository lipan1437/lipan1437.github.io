import React from "react";
import "./MySkillsStyles.css";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import chakraUI from "../assets/chakraUI.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import mongodb from "../assets/mongodb.png";
import redux from "../assets/redux.png";
import dataS from "../assets/dataS.png";
import softS from "../assets/softS.png";
const MySkills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 6,
      src: chakraUI,
      title: "Chakra UI",
      style: "shadow-sky-400",
    },
    {
      id: 12,
      src: redux,
      title: "Redux",
      style: "shadow-purple-500",
    },
    {
      id: 13,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 14,
      src: express,
      title: "Express",
      style: "shadow-white",
    },
    {
      id: 15,
      src: node,
      title: "NodeJs",
      style: "shadow-green-700",
    },
    {
      id: 16,
      src: dataS,
      title: "Data Structure",
      style: "shadow-red-500",
    },
    {
      id: 17,
      src: softS,
      title: "Soft skills",
      style: "shadow-blue-500",
    },
  ];
  return (
    <div>
      <div className="heading">
      </div>
      <div className="skill">
        {techs.map(({ id, src, title, style }) => (
          <div key={id}>
            <img src={src} alt={title} />
            <p>{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
