import React from 'react';

function Home() {
  return (
    <main className="flex flex-col justify-between min-h-screen bg-[url('/landing-bkg.jpg')] bg-cover bg-center">
      <div className="mt-8 w-11/12 mx-auto">
        <h1 className="text-5xl sm:text-center sm:text-6xl font-display text-white">
          Penguins of Antarctica
        </h1>
      </div>
    </main>
  );
}

export default Home;
