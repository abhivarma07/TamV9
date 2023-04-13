const timelineElements = [
  {
    id: 1,
    title: "TAM v9 Opening Ceromony",
    location: "Auditorium, St.Martin's Engineering College",
    description:
      "TAM stands to be a knowledge-parting legacy from years! We are more than proud to introduce version 8 of TAM for the year 2021-22. Come and join us to be a part of the biggest intelligence-rave of St. Martin’s Engineering College.",
    date: "3rd April 2023 : 11:00 am",
    icon: "work",
  },
  {
    id: 2,
    title: "General Quiz",
    location: "Seminar Hall, St.Martin's Engineering College",
    description:
      "Make full use of your general knowledge, gear-up and explore the topics of current affairs, history, economics, and new advances in the field of science.",
    buttonText: "Register Here",
    link: "https://forms.gle/qAU63HujLdBTCPkH6 ",
    date: "4th April 2023 : 11:00 am",
    icon: "school",
  },
  {
    id: 7,
    title: "Sports Quiz",
    location: "Seminar Hall, St.Martin's Engineering College",
    description:
      "All work and no play, makes Jack a dull man! We know, nobody wants to be that! So join us for this quiz, to test your skills and know your knack for sports!",
    buttonText: "Register Here",
    date: "13th April 2023 : 11:00 am",
    icon: "work",
    link: "https://forms.gle/x6wEs1NTQRGBSUE29",
  },
  {
    id: 14,
    title: "TAM talk show : Technical",
    location: "Seminar Hall, St.Martin's Engineering College",
    description:
      "Technology is something that is gaining increasing importance in the world today. Wherever you look, there is technology. Even the device you are using to read this article uses technology. In simple words, technology is when we use science to apply it for practical purposes.",
    buttonText: "Register Here",
    date: "17th April 2023",
    icon: "school",
    link: "https://forms.gle/U22DKb8jxoXR1W7Y6",
  },
  {
    id: 12,
    title: "Digital Marketing Workshop",
    location: "Seminar Hall, St.Martin's Engineering College",
    description:
      "Cyber security is the application of technologies, processes and controls to protect systems, networks, programs, devices and data from cyber attacks. It aims to reduce the risk of cyber attacks and protect against the unauthorised exploitation of systems, networks and technologies.",
    buttonText: "Register Here",
    date: "19th-20th April 2023",
    icon: "school",
    link: "https://forms.gle/QUULsmiDaNLrTtx78",
  },
  {
    id: 9,
    title: "TAM talk show : NON-TECHNICAL",
    location: "Seminar Hall, St.Martin's Engineering College",
    description:
      "Mental health refers to cognitive, behavioral, and emotional well-being. It is all about how people think, feel, and behave. People sometimes use the term “mental health” to mean the absence of a mental disorder. Mental health can affect daily living, relationships, and physical health.",
    buttonText: "Register Here",
    date: "24th April 2023",
    icon: "work",
    link: "https://forms.gle/7ZVz1jygqPuRyvvcA",
  },
  {
    id: 4,
    title: "Entertainment Quiz-1st Years",
    location: "Seminar Hall, St.Martin's Engineering College",
    description:
      "Are you a Bollywood person? Or a Hollywood person? Or a total Tollywood-kutti? Doesn't matter, Entertainment is entertainment! Getting you the best of every industry, to put your movie-mind on a kindle!",
    buttonText: "Register Here",
    date: "25th April 2023",
    icon: "school",
    link: "https://forms.gle/sGixP7Y51zxrBrAQ6",
  },
  {
    id: 8,
    title: "Youth Parliament",
    location: "Seminar Hall, St.Martin's Engineering College",
    description:
      "The objective of the Youth Parliament is to strengthen the roots of democracy, inculcate healthy habits of discipline, tolerance of the view of others and to enable the student community to know about practices and procedures of the Parliament.",
    buttonText: "Register Here",
    date: "25th April 2023",
    icon: "school",
    link: "https://forms.gle/HqxHMQ238f3ZVZiE7",
  },
  {
    id: 19,
    title: "HTML/CSS Workshop",
    location: "Seminar Hall, St.Martin's Engineering College",
    description:
      " The HTML and CSS Workshop takes you on a journey to learning how to create beautiful websites using your own content, understanding how they work, and how to manage them long-term",
    buttonText: "Register Here",
    date: "28th-29th April 2023",
    icon: "school",
    link: "https://forms.gle/suZCfzKAB593aT1C8",
  },
  {
    id: 15,
    title: "Codevita Quiz",
    location: "Seminar Hall, St.Martin's Engineering College",
    description:
      "If you're a person that LOVES and WORSHIPS coding! Here is an event where YOU can hone those amazing coding skills of yours! Charge up your coding battery and join us on this event!",
    buttonText: "Register Here",
    date: "2nd May 2023",
    icon: "work",
    link: "https://forms.gle/AywvmLe8xNmQYp9D9",
  },
  {
    id: 4,
    title: "Entertainment Quiz 2nd 3rd 4th Year",
    location: "Seminar Hall, St.Martin's Engineering College",
    description:
      "Are you a Bollywood person? Or a Hollywood person? Or a total Tollywood-kutti? Doesn't matter, Entertainment is entertainment! Getting you the best of every industry, to put your movie-mind on a kindle!",
    buttonText: "Register Here",
    date: "4th May 2023",
    icon: "school",
    link: "https://forms.gle/bHL6aiq3jyzHHPFr7",
  },
  {
    id: 19,
    title: "Arduino Workshop",
    location: "Seminar Hall, St.Martin's Engineering College",
    description:
      "Whatever your skill level, you'll have fun as you learn to harness the power of the Arduino for your own DIY projects.Uses the Arduino Uno board",
    buttonText: "Register Here",
    date: "5th-6th May 2023",
    icon: "school",
    link: "https://vq11ir53vlc.typeform.com/to/OPTGj7mh",
  },
  {
    id: 3,
    title: "React Js",
    location: "Seminar Hall, St.Martin's Engineering College",
    description:
      "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
    buttonText: "Register Here",
    date: "25th-26th May 2023",
    icon: "work",
    link: "https://forms.gle/CERoUDz1HvRfWxbJ9",
  },
  // {
  //   id: 4,
  //   title: "Entertainment Quiz",
  //   location: "Seminar Hall, St.Martin's Engineering College",
  //   description:
  //     "Are you a Bollywood person? Or a Hollywood person? Or a total Tollywood-kutti? Doesn't matter, Entertainment is entertainment! Getting you the best of every industry, to put your movie-mind on a kindle!",
  //   buttonText: "Register Here",
  //   date: "Upcoming",
  //   icon: "school",
  //   link: "https://vq11ir53vlc.typeform.com/to/OPTGj7mh",
  // },
  // {
  //   id: 5,
  //   title: "Group Discussions MECH & CIVIL",
  //   location: "Seminar Hall, St.Martin's Engineering College",
  //   description:
  //     "A group always has the advantage of varied views. This is because a group always has more than one member, and since every member is unique, there is bound to be a variety in their views also. As group decisions tend to cover a greater area, they provide a better insight for decision-making.",
  //   buttonText: "Register Here",
  //   date: "Upcoming",
  //   icon: "work",
  //   link: "https://mqewridd.paperform.co",
  // },
  // {
  //   id: 10,
  //   title: "Group Discussions CSE & IT",
  //   location: "Seminar Hall, St.Martin's Engineering College",
  //   description:
  //     "A group always has the advantage of varied views. This is because a group always has more than one member, and since every member is unique, there is bound to be a variety in their views also. As group decisions tend to cover a greater area, they provide a better insight for decision-making.",
  //   buttonText: "Register Here",
  //   date: "Upcoming",
  //   icon: "school",
  //   link: "https://mqewridd.paperform.co",
  // },
  // {
  //   id: 11,
  //   title: "Group Discussions ECE & EEE",
  //   location: "Sports Room, St.Martin's Engineering College",
  //   description:
  //     "A group always has the advantage of varied views. This is because a group always has more than one member, and since every member is unique, there is bound to be a variety in their views also. As group decisions tend to cover a greater area, they provide a better insight for decision-making.",
  //   buttonText: "Register Here",
  //   date: "Upcoming",
  //   icon: "work",
  //   link: "https://3kxjdeei.paperform.co/",
  // },
  // {
  //   id: 13,
  //   title: "Group Discussions Final Round",
  //   location: "Seminar Hall, St.Martin's Engineering College",
  //   description:
  //     "A group always has the advantage of varied views. This is because a group always has more than one member, and since every member is unique, there is bound to be a variety in their views also. As group decisions tend to cover a greater area, they provide a better insight for decision-making.",
  //   date: "Upcoming",
  //   icon: "work",
  // },
  // {
  //   id: 12,
  //   title: "Cyber Security Workshop",
  //   location: "Seminar Hall, St.Martin's Engineering College",
  //   description:
  //     "Cyber security is the application of technologies, processes and controls to protect systems, networks, programs, devices and data from cyber attacks. It aims to reduce the risk of cyber attacks and protect against the unauthorised exploitation of systems, networks and technologies.",
  //   buttonText: "Register Here",
  //   date: "Upcoming",
  //   icon: "school",
  //   link: "https://noncn51y.paperform.co",
  // },
  // {
  //   id: 9,
  //   title: "TAM talk show : NON-TECHNICAL",
  //   location: "Seminar Hall, St.Martin's Engineering College",
  //   description:
  //     "Mental health refers to cognitive, behavioral, and emotional well-being. It is all about how people think, feel, and behave. People sometimes use the term “mental health” to mean the absence of a mental disorder. Mental health can affect daily living, relationships, and physical health.",
  //   buttonText: "Register Here",
  //   date: "Upcoming",
  //   icon: "work",
  //   link: "https://qsej7rzj.paperform.co",
  // },
  // {
  //   id: 14,
  //   title: "TAM talk show : TECHNICAL",
  //   location: "Seminar Hall, St.Martin's Engineering College",
  //   description:
  //     "Technology is something that is gaining increasing importance in the world today. Wherever you look, there is technology. Even the device you are using to read this article uses technology. In simple words, technology is when we use science to apply it for practical purposes.",
  //   buttonText: "Register Here",
  //   date: "Upcoming",
  //   icon: "school",
  //   link: "https://bakehegc.paperform.co",
  // },
  // {
  //   id: 15,
  //   title: "Codevita Quiz",
  //   location: "Seminar Hall, St.Martin's Engineering College",
  //   description:
  //     "If you're a person that LOVES and WORSHIPS coding! Here is an event where YOU can hone those amazing coding skills of yours! Charge up your coding battery and join us on this event!",
  //   buttonText: "Register Here",
  //   date: "Upcoming",
  //   icon: "work",
  //   link: "https://iym6g0rl.paperform.co",
  // },
  // {
  //   id: 6,
  //   title: "Circuitronics Quiz",
  //   location: "Seminar Hall, St.Martin's Engineering College",
  //   description:
  //     "Digital electronics and circuits are just like our brain! All connected in the right way, yet messy to look at! Circuitronics is all about it! So join us for this event to test your skills!",
  //   buttonText: "Register Here",
  //   date: "Upcoming",
  //   icon: "school",
  //   link: "https://vq11ir53vlc.typeform.com/to/X0IaHKRQ",
  // },
  // {
  //   id: 8,
  //   title: "Youth Parliament",
  //   location: "Seminar Hall, St.Martin's Engineering College",
  //   description:
  //     "The objective of the Youth Parliament is to strengthen the roots of democracy, inculcate healthy habits of discipline, tolerance of the view of others and to enable the student community to know about practices and procedures of the Parliament.",
  //   buttonText: "Register Here",
  //   date: "Upcoming",
  //   icon: "school",
  //   link: "https://vq11ir53vlc.typeform.com/to/ZdgaIC0u",
  // },
  {
    id: 17,
    title: "TAM v9 Closing Ceremony",
    location: "Seminar Hall, St.Martin's Engineering College",
    description:
      "On this note let’s conclude a remarkable, memorable and knowledgeable Valedictory session. On behalf of the institution we sincerely thank the dignitaries for being with us this evening and enlightening us with their enthusiastic remarks. I shower my heartfelt gratitude to the professors and everyone of TAM family for their whole-hearted support rendered in the success of this valedictory session. Thank you very much for joining us.   ",
    date: "29th May 2023 : 11:00 am",
    icon: "work",
  },
];

export default timelineElements;
