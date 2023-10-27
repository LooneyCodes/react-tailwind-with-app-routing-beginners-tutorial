import React from 'react';

import Footer from '../components/Footer';

function Home() {
  return (
    <main className="flex flex-col justify-between min-h-screen bg-[url('/landing-bkg.jpg')] bg-cover bg-center">
      <div className="mt-8 layout">
        <h1 className="text-5xl sm:text-center sm:text-6xl">
          Penguins of Antarctica
        </h1>
      </div>
      <Footer />
    </main>
  );
}

export default Home;
