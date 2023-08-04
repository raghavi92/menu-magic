import Image from 'next/image';
import { NextPage } from 'next';
import Link from 'next/link';

type Dish = {
  id: string;
  name: string;
}


const Home: NextPage = () => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}
    >
      <h1 className="text-6xl font-bold text-center">Menu Magic</h1>
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/logo.svg"
          alt="Menu Magic Logo"
          width={200}
          height={200}
          className="mb-8"
        />
        <p className="text-2xl text-center">
          Menu Magic is a meal planning app that helps you plan your meals for
          the week.
        </p>
      </div>
      <div className="center m-24">
        <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8 mr-8" href="/explore">Explore</Link>
      </div>
    </main>
  )
}

export default Home
