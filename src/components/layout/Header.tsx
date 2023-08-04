import React, { PropsWithChildren } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const Header = () => {
    // return a react component that renders the header with a sign in button on the right using existing tailwind css classes
    const supabase = createClientComponentClient()
    if (typeof window !== "undefined") {
        window.handleSignin = async (googleUser: any) => {
            const { data, error } = await supabase.auth.signInWithIdToken({
                provider: 'google',
                token: googleUser.credential,
            })
        }
    }
    // return a react component that renders the header with a sign in button on the right using existing tailwind css classes
    return (
        <header className="flex flex-row-reverse justify-start p-4">
            <div>
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

        </header>
    )
};

export default Header;

