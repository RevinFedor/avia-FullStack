import React from "react";
import Benedits from "./Benedits";
import FormInput from "./FormInput";
import HowDo from "./HowDo";
import QuestionList from "./QuestionList";
import Slider from "./Slider";

const LandingPage = () => {
  return (
    <section className="section">
      <Slider />
      <Benedits/>
      <QuestionList />
      <HowDo/>
      <FormInput />
    </section>
  );
};

export default LandingPage;
