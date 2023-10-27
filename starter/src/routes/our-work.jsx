import React from 'react';

import penguin1Img from '../assets/penguin-1.jpg';
import penguin2Img from '../assets/penguin-2.jpg';
import penguin3Img from '../assets/penguin-3.jpg';

import Footer from '../components/Footer';

import { RiTwitterFill, RiInstagramFill } from 'react-icons/ri';

const PENGUINS_DATA = [
  {
    id: 0,
    imgSrc: penguin1Img,
    nickname: 'Oscar',
    gender: 'M',
    age: '~7 months',
    bio: `He likes to tap his feet on the ground a lot! Other than that, a pretty cool penguin to hang out with when around his fellow buddies`,
  },
  {
    id: 1,
    imgSrc: penguin2Img,
    nickname: 'Pearl',
    gender: 'F',
    age: '~14 months',
    bio: `She's a lovely penguin which loves to admire the beautiful view of her home and its surroundings, as well as apreciating the world around her!`,
  },
  {
    id: 2,
    imgSrc: penguin3Img,
    nickname: 'Skipper',
    gender: 'M',
    age: '~3 months',
    bio: `An intresting penguin which happens to explore unknown places that no other penguin dare to go, and often a few of his friends will come to follow him`,
  },
];

const BioCard = ({ imageSrc, data = [], leadText }) => {
  return (
    <article className="grid max-w-sm lg:max-w-md grid-cols-2 gap-4 px-2 lg:px-4 py-3 rounded lg:grid-cols-none lg:grid-rows-[min-content,8rem] bg-secondary lg:basis-1/2 lg:gap-6">
      <div className="flex flex-col gap-y-2 lg:gap-y-6">
        {imageSrc && (
          <div className="w-[95%] max-w-sm mx-auto">
            <img src={imageSrc} className="mx-auto rounded-sm md:h-36 lg:h-64" />
          </div>
        )}
        <div className="w-full max-w-xs p-2 mx-auto rounded bg-accent">
          {data.map(({ id, label, entry }) => (
            <div key={id} className="flex justify-between">
              <p className="text-sm lg:text-lg">{label}</p>
              <p className="text-sm lg:text-lg">{entry}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="lg:text-lg">{leadText}</p>
    </article>
  );
};

const OurWork = () => {
  return (
    <main className="flex flex-col justify-between min-h-screen">
      <div className="my-12 layout">
        <h1 className="text-4xl sm:text-5xl sm:text-center">What We&apos;ve Been Up To</h1>
        <header className="mt-4">
          <div className="flex justify-center gap-x-4">
            <a href="https://twitter.com" rel="noreferrer" target="_blank">
              <RiTwitterFill size={32} />
            </a>
            <a href="https://instagram.com" rel="noreferrer" target="_blank">
              <RiInstagramFill size={32} />
            </a>
          </div>
          <p className="mt-4 sm:text-lg max-w-[50ch] mx-auto sm:text-center">
            You can check out many of the events we host from our organization by following our
            Instagram and Twitter pages to get the latest updates on what we offer to our penguin
            enthusiasts
          </p>
        </header>
        <section className="mt-6 sm:mt-10">
          <h1 className="text-2xl text-center md:text-3xl">Check Out These Penguins</h1>
          <div className="flex flex-wrap justify-center items-center gap-5 mt-5">
            {PENGUINS_DATA.map(({ id, imgSrc, nickname, gender, age, bio }) => {
              const genderAbbr = gender === 'M' ? 'Male' : 'Female';
              const data = [
                { id: 0, label: 'Nickname', entry: nickname },
                { id: 1, label: 'Gender', entry: genderAbbr },
                { id: 2, label: 'Age', entry: age },
              ];

              return <BioCard key={id} imageSrc={imgSrc} data={data} leadText={bio} />;
            })}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default OurWork;
