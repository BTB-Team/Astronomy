
import React from "react";
import FirstImage from "../assets/images/firstimage.webp";
import Secendimage from "../assets/images/secendimage.webp";
import Thredimage from "../assets/images/thredimage.webp";

const courses = [
    {
    id: 1,
    title: "class.data.course1.title",
    image:FirstImage,
    slug: "astronomy",
    content: {
    duration: "class.data.course1.content.duration",
    sessions: "class.data.course1.content.sessions",
    certificate: "class.data.course1.content.certificate",
    topics: "class.data.course1.content.topics"
  }
    
  },
  
 {
    id: 2,
    title: "class.data.course2.title",
    image: Secendimage,
    slug: "astronomy-advanced",

      content: {
    duration: "class.data.course2.content.duration",
    sessions: "class.data.course2.content.sessions",
    certificate: "class.data.course2.content.certificate",
    topics: "class.data.course2.content.topics"
  }
   
  },
 
  {
    id: 3,
    title: "class.data.course3.title",
    image: Thredimage,
    slug: "space-technology",

      content: {
    duration: "class.data.course3.content.duration",
    sessions: "class.data.course3.content.sessions",
    certificate: "class.data.course3.content.certificate",
    topics: "class.data.course3.content.topics"
  }
  },
]; // 🌟 کروشه بسته شدن آرایه که فراموش شده بود اضافه شد

export default courses;
