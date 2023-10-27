import React, { useState } from 'react';

import Footer from '../components/Footer';

const FACTS = [
  `Around 13 penguins have been rescued from illegal hunting through the help of our donations`,
  `This is may or may not be a fact but... penguins are one of the most elegant sea creatures in earth`,
  `Every quartely we host a charity skiing event that is open to the public to participate and have fun in`,
];

const generateRandomIndex = (arrLength) => Math.floor(Math.random() * arrLength);

function FactCard({ fact, onClick }) {
  return (
    <div className="max-w-sm px-4 py-4 mx-auto text-center rounded-lg bg-secondary min-h-[16rem] flex flex-col items-center justify-between drop-shadow-md md:min-h-[20rem] w-full">
      <h1 className="text-2xl md:text-3xl">Did You Know</h1>
      <p className="mx-auto text-xl md:text-2xl">{fact}</p>
      <button
        type="button"
        className="px-4 text-xl rounded-full h-[42px] bg-accent hover:animate-bounce"
        onClick={onClick}
      >
        Another One?
      </button>
    </div>
  );
}

function AboutUs() {
  const [selectedFact, setSelectedFact] = useState(FACTS[0]);

  const toggleAnotherFact = () => {
    setSelectedFact(() => {
      const randIdx = generateRandomIndex(FACTS.length);
      return FACTS[randIdx];
    });
  };

  return (
    <main className="flex flex-col justify-between min-h-screen">
      <div className="layout grid grid-rows-[1fr,min-content] md:grid-rows-1 md:grid-cols-2 items-center md:gap-x-24 my-12">
        <div className="mb-6 sm:mb-10 md:mb-0">
          <h1 className="text-4xl sm:text-5xl sm:text-center">Who Are We</h1>
          <div className="[&>p]:mt-4 [&>p]:sm:text-lg">
            <p>
              We are a non-profit organization which is dedicated to the preservation of the
              delightful penguins that roam in Antarctica.
            </p>
            <p>
              It&apos;s our mission to keep the globe aware of the conditions of these penguins to
              ensure they never face the threat of being endangered or anything of that nature.
            </p>
            <p>
              With that said, we hope that you enjoy the various, exciting events our team hosts in
              Antarctica such as the “The Great Penguin Ski” that takes place every year on the
              snowiest month of the year.
            </p>
          </div>
        </div>
        <FactCard fact={selectedFact} onClick={toggleAnotherFact} />
      </div>
      <Footer />
    </main>
  );
}

export default AboutUs;
