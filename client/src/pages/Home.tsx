import React from 'react';
import TwitterForm from "../components/TwitterForm/TwitterForm";
import ResultList from "../components/ResultList/ResultList";


function Home() {

  return (
    <div >
      <TwitterForm/>
      <ResultList/>
    </div>
  );
}

export default Home;