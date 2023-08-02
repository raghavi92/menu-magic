import Image from 'next/image'
import { type } from 'os';
import { useEffect, useState } from 'react'
import { GetStaticProps, NextPage, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

type Dish = {
  id: string;
  name: string;
}


const Home: NextPage = () => {
  const supabase = createClientComponentClient()
  if (typeof window !== "undefined") {
    window.handleSignin = async (googleUser: any) => {
      const { data, error } = await supabase.auth.signInWithIdToken({
        provider: 'google',
        token: googleUser.credential,
      })
    }
  }

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
        <div id="g_id_onload"
          data-client_id={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
          data-context="signin"
          data-ux_mode="popup"
          data-callback="handleSignin"
          data-nonce=""
          data-auto_prompt="false">
        </div>

        <div className="g_id_signin"
          data-type="standard"
          data-shape="rectangular"
          data-theme="outline"
          data-text="signin_with"
          data-size="large"
          data-logo_alignment="left">
        </div>
      </div>
    </main>
  )
}

export default Home
