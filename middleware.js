import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

export async function middleware(req) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user && req.nextUrl.pathname === '/breakfast') {
    return NextResponse.redirect(new URL('/account', req.url))
  }

  if (!user && req.nextUrl.pathname === '/account') {
    return NextResponse.redirect(new URL('/breakfast', req.url))
  }

  return res
}

export const config = {
  matcher: ['/', '/account', '/breakfast'],
}