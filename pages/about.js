import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import AboutMe from "../components/AboutMe";

export default function about() {
  return (
    <ContainerBlock
      title="About - Henry Willmott"
      description="Learn more about Henry Willmott, a full-stack developer and context engineer based in Amsterdam. Discover his passion, skills, and journey."
      keywords="about, Henry Willmott, developer, Amsterdam, skills, journey, context engineer"
    >
      <AboutMe />
    </ContainerBlock>
  );
}
