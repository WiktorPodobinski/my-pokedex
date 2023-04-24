import Head from "next/head";
import Image from "next/image";
import pokeball from "public/pokeball.png";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>My Pokedex</title>
        <link rel="icon" href="/pokeball.png" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20">
        <h1 className="text-6xl font-bold text-center">
          Welcome to my Pokedex
        </h1>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href="#"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600 bg-blue text-white"
          >
            <div className="flex items-center">
              <h3 className="text-2xl font-bold mr-2">Pokedex</h3>
              <Image
                src={pokeball}
                alt="pokeball"
                width={16}
                height={16}
                className="ml-1"
              />
            </div>
            <p className="mt-4 text-xl">Explore the world of Pokemon</p>
          </a>

          <a
            href="#"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600 bg-blue text-white"
          >
            <div className="flex items-center">
              <h3 className="text-2xl font-bold mr-2">Your pokemon</h3>
              <Image
                src={pokeball}
                alt="pokeball"
                width={16}
                height={16}
                className="ml-1"
              />
            </div>
            <p className="mt-4 text-xl">Draw your pokemon</p>
          </a>

          <a
            href="#"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600 bg-blue text-white"
          >
            <div className="flex items-center">
              <h3 className="text-2xl font-bold mr-2">Quiz</h3>
              <Image
                src={pokeball}
                alt="pokeball"
                width={16}
                height={16}
                className="ml-1"
              />
            </div>
            <p className="mt-4 text-xl">Test your knowledge of Pokemon</p>
          </a>

          <a
            href="#"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600 bg-blue text-white"
          >
            <div className="flex items-center">
              <h3 className="text-2xl font-bold mr-2">Search </h3>
              <Image
                src={pokeball}
                alt="pokeball"
                width={16}
                height={16}
                className="ml-1"
              />
            </div>
            <p className="mt-4 text-xl">
              Search for a pokemon by name, ability etc.
            </p>
          </a>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          by !V
        </a>
      </footer>
    </div>
  );
}
