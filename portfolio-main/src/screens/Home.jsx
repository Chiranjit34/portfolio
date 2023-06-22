import React, { lazy } from "react";
const HomeSection = lazy(() => import("../components/HomeSection"));
const AboutMe = lazy(() => import("../components/AboutMe"));
const Services = lazy(() => import("../components/Services"));
const Work = lazy(() => import("../components/Work"));
// const NoteWorthyProjects = lazy(() =>
//   import("../components/NoteWorthyProjects")
// );
const Contact = lazy(() => import("../components/Contact"));
// const GithubCalender = lazy(() => import("../components/GithubCalender"));

export default function Home() {
  return (
    <>
      <HomeSection />
      <AboutMe />
      <Services />
      <Work />
      {/* <NoteWorthyProjects /> */}
      {/* <GithubCalender /> */}
      <Contact />
    </>
  );
}
