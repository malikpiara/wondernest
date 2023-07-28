'use client'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function AuthForm() {
  const supabase = createClientComponentClient()

  return (
    <Auth
      supabaseClient={supabase}
      view="magic_link"
      appearance={{ theme: ThemeSupa,
        variables: {
          default: {
            colors: {
              brand: '#000000',
              brandAccent: 'hsla(240 5.9% 10% / 0.9)',
              inputBackground: 'white',
              inputLabelText: 'black',
              inputBorder: '#e5e7eb',
            },
            space: {
              buttonPadding: '0.9rem 0.75rem',
              inputPadding: '0.9rem 0.75rem',
            },
            fonts: {
              bodyFontFamily: `inherit`,
              buttonFontFamily: `inherit`,
              inputFontFamily: `inherit`,
              labelFontFamily: `inherit`,
            },
            radii: {
              borderRadiusButton: '7px',
              buttonBorderRadius: '7px',
              inputBorderRadius: '7px',
            },
          },
        }, }}
      showLinks={false}
      providers={['google']}
      redirectTo="http://wondernest.moonwith.com/auth/callback"
    />
  )
}