import { notFound } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const supabase = createServerComponentClient({ cookies });

export default async function Breakfast({ params }) {
    //const events = EventsData();
    //const event = events.find((event) => event.id === params.id);

    const { data: event } = await supabase
    .from("events")
    .select()
    .match({ id: params.id })
    .limit(1)
    .single()

    // Show loading state
    if (!event) return <div>Loading...</div>

    // 404 if the event id in the url bar does not exist.
    if (!event) notFound();
    
    return (
        <>
        <EventDetails event={event}/>
        </>
    )
}

function EventDetails({ event }) {
    const timestamp = event.starting_time;
    
    // Convert the timestamp to a JavaScript Date object
    const date = new Date(timestamp);

    // Convert the date to a more readable format
    const optionsDate = { weekday: 'long', day: 'numeric', month: 'long' };
    const optionsTime = { hour: '2-digit', minute:'2-digit' };

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
                    <div className="title">Five Elephant Kreuzberg</div>
                    <div>Berlin, Germany</div>
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
        <form action="https://piara.li/breakfast">
        <button>Let&apos;s Go</button>
        </form>
      </div>

      <div className="content-card">
        <h3>About the Event</h3>
        <div dangerouslySetInnerHTML={{__html: event.description}}/>
      </div>
      
    </div>
    )
}