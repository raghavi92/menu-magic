import Image from 'next/image'
import { type } from 'os';
import { useEffect, useState } from 'react'
import supabase from '../supabase/supabase';
import { GetStaticProps, NextPage, InferGetStaticPropsType } from 'next';

type Dish = {
  id: string;
  name: string;
}

export const getStaticProps = async ()  => {
  const props = await supabase()
      .from('dishes')
      .select(`id, name`)
      .then(({ data, error }) => {
        if (error) {
          throw error;
        }
        if (data) {
          return {props: {dishes: [...data]}};
        }
      });
      return props;
}

const Home : NextPage<InferGetStaticPropsType<typeof getStaticProps>>  = (props) => {
  console.log(props.dishes);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}
    >
      <h1 className="text-6xl font-bold text-center">Meal Magic</h1>
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/logo.svg"
          alt="Meal Magic Logo"
          width={200}
          height={200}
          className="mb-8"
        />
        <p className="text-2xl text-center">
          Meal Magic is a meal planning app that helps you plan your meals for
          the week.
        </p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8">Explore</button>
    </main>
  )
}

export default Home
