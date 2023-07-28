'use client'
import { useCallback, useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Avatar from './avatar'

export default function AccountForm({ session }) {
  const supabase = createClientComponentClient()
  const [loading, setLoading] = useState(true)
  const [fullname, setFullname] = useState(null)
  const [username, setUsername] = useState(null)
  const [aboutme, setAboutme] = useState(null)
  const [currently_reading, setCurrently_reading] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)
  const user = session?.user

  const getProfile = useCallback(async () => {
    try {
      setLoading(true)

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`full_name, username, aboutme, currently_reading, avatar_url`)
        .eq('id', user?.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setFullname(data.full_name)
        setUsername(data.username)
        setAboutme(data.aboutme)
        setCurrently_reading(data.currently_reading)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      alert('Error loading user data!')
    } finally {
      setLoading(false)
    }
  }, [user, supabase])

  useEffect(() => {
    getProfile()
  }, [user, getProfile])

  async function updateProfile({ username, aboutme, currently_reading, avatar_url }) {
    try {
      setLoading(true)

      let { error } = await supabase.from('profiles').upsert({
        id: user?.id,
        full_name: fullname,
        username,
        aboutme,
        currently_reading,
        avatar_url,
        updated_at: new Date().toISOString(),
      })
      if (error) throw error
      alert('Profile updated!')
    } catch (error) {
      alert('Error updating the data!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="form-widget">
      <Avatar
      uid={user.id}
      url={avatar_url}
      size={150}
      onUpload={(url) => {
        setAvatarUrl(url)
        updateProfile({ fullname, username, aboutme, currently_reading, avatar_url: url })
      }}
    />
      <div className='form-item'>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={session?.user.email} disabled />
      </div>
      <div className='form-item'>
        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          type="text"
          value={fullname || ''}
          onChange={(e) => setFullname(e.target.value)}
        />
        <small>This is your public display name.</small>
      </div>
      <div className='form-item'>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username || ''}
          onChange={(e) => setUsername(e.target.value)}
        />
        <small>This affects your profile URL.</small>
      </div>
      <div className='form-item'>
        <label htmlFor="username">Telegram Account</label>
        <input
          id="username"
          type="text"
          value={username || ''}
          onChange={(e) => setUsername(e.target.value)}
        />
        <small>We need this to get in touch with you.</small>
      </div>
      <div className='form-item'>
        <label htmlFor="aboutme">About Me</label>
        <textarea
          id="aboutme"
          className='form-textarea'
          type="text"
          placeholder='What are some things you enjoy doing?'
          value={aboutme || ''}
          onChange={(e) => setAboutme(e.target.value)}
        />
      </div>

      <h2>Earnest Questions</h2>
      <p className='m0'>Let people know what you are currently exploring</p>

      <div className='form-item'>
        <label htmlFor="currently_reading">What I&apos;m reading right now...</label>
        <input
          id="currently_reading"
          type="text"
          value={currently_reading || ''}
          onChange={(e) => setCurrently_reading(e.target.value)}
        />
      </div>

      <div>
        <button
          className="button primary block"
          onClick={() => updateProfile({ fullname, username, aboutme, avatar_url })}
          disabled={loading}
        >
          {loading ? 'Loading ...' : 'Update'}
        </button>
      </div>
      
      <div>
        <form action="/auth/signout" method="post">
          <button className="button block" type="submit">
            Sign out
          </button>
        </form>
      </div>
    </div>
  )
}