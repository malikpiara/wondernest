'use client';
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Amplitude from "../../../analytics";
import Button from "../../../components/button";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Events({ params }) {
  const [event, setEvent] = useState(null)
  const supabase = createClientComponentClient();

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await supabase
          .from("events")
          .select()
          .match({ id: params.id })
          .limit(1)
          .single()
            setEvent(data)
    } catch (error) {
        console.error("Failed to get event data:", error);
  }
};
    getData()
  }, [params, supabase])

  Amplitude()

    // Show loading state
    //if (!data) return <div>Loading...</div>

    // 404 if the event id in the url bar does not exist.
    //if (!data) notFound();
    
    return (
        <>
        {event && <EventDetails event={event}/>}
        </>
    )
}

function EventDetails({ event }) {
    const timestamp = event.starting_time;
    
    // Convert the timestamp to a JavaScript Date object
    const date = new Date(timestamp);

    // Convert the date to a more readable format
    const optionsDate = { weekday: 'long', day: 'numeric', month: 'long', timeZone: 'Europe/Berlin' };
    const optionsTime = { hour: '2-digit', minute:'2-digit', timeZone: 'Europe/Berlin' };

    // Format the date
    const formattedDate = date.toLocaleDateString('en-US', optionsDate);
    const formattedTime = date.toLocaleTimeString('en-US', optionsTime);

    return (
        <div className="content-cards-wrapper">
      <div className="content-card">
        <h1 className="header">{event.title}</h1>
        <p className="">
          Hosted by <a href="https://t.me/malikpiara">{event.hosts}</a>
        </p>
        
            <div className="time-location-container mobile-flex-column">
                <div className="time-container">
                <div className="title">{formattedDate}</div>
                <div>Starts at {formattedTime.toLowerCase()}</div>
                </div>
                <div className="location-container">
                    <div className="title">{event.location}</div>
                    <div>{event.city}</div>
                </div>
                    <div>
                    <div className="title">Capacity</div>
                    <div>6 seats (intimate)</div>
                    </div>
        </div>
        
        
      </div>

      <div className="content-card">
        <h3>Join the Event</h3>
        <p>Hi! To join the event, please register below. The button will take you to our community channel on Telegram.</p>     
        <Button/>
      </div>

      <div className="content-card col-gap-20">
      <h3>About the participants</h3>
        <div className="people-card col-mobile">
        <Image
          width={170}
          height={170}
          src={"/malik.jpeg"}
          alt="Malik"
          className="avatar2 image"
          style={{ height: 170, width: 170 }}
        />
        <div>
        <h3>What are you currently reading and why?</h3>
        <p>I believe our ability to deal with people is our most important asset. Reading &quot;How to Win Friends and Influence People&quot; by Dale Carnegie for the 20th time because it reminds me of important principles I already know but hardly ever put in practice.</p>
        </div>
        
        </div>
      </div>

      <div className="content-card">
        <h3>About the Event</h3>
        <div dangerouslySetInnerHTML={{__html: event.description}}/>
      </div>
      
    </div>
    )
}