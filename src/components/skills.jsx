import React, { useEffect, useState } from "react";

export default function Skills() {
  const skillsArray = [
    {
      language: "JavaScript",
      image: "../src/assets/skills/css.png",
    },
    {
      language: "CSS",
      image: "../src/assets/skills/css.png",
    },
    {
      language: "HTML",
      image: "../src/assets/skills/css.png",
    },
    {
      language: "MERN",
      image: "../src/assets/skills/css.png",
    },
    {
        language: "React Native",
        image: "../src/assets/skills/css.png",
      },
      {
        language: "Tailwind CSS",
        image: "../src/assets/skills/css.png",
      },
      {
        language: "Spring Boot",
        image: "../src/assets/skills/css.png",
      },
      {
        language: "MySQL",
        image: "../src/assets/skills/css.png",
      },
      {
        language: "MongoDB",
        image: "../src/assets/skills/css.png",
      },
      {
        language: "Firebase",
        image: "../src/assets/skills/css.png",
      },
      {
        language: "Bootstrap",
        image: "../src/assets/skills/css.png",
      },
  ];
  return (
    
      <div className=" grid grid-cols-5  hover:shadow-[#025a62]  shadow-md rounded-3xl p-16 pl-  ">
        {skillsArray.map((item, index) => (
          <div key={index} className=" flex flex-col rounded-2xl   justify-center w-fit mb-5 p-" >
            <div className="  flex justify-center rounded-2xl    ">
              {/* <img className=""  src={item.image}></img> */}
            </div>
            <div className=" text-[#ffffff] flex justify-center py-1 px-4 w-40 rounded-md bg-gradient-to-r from-[#46c7f6] to-[#0c4a84]"><p className="text-lg ">{'# '}{item.language}</p></div>
          </div>
        ))}
      </div>
  );
}