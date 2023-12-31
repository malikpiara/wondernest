export default function Breakfast() {
    return (
        <LoginCard/>
    )
}

function LoginCard() {
    return (
        <div className="content-cards-wrapper">
      <div className="content-card">
        <h1 className="header">Breakfasts for Good: Meta, Threads and Twitter</h1>
        <p className="">
          Hosted by <a href="https://t.me/malikpiara">Malik</a>
        </p>
        
            <div className="time-location-container mobile-flex-column">
                <div className="time-container">
                <div className="title">Sunday, 16 July</div>
                <div>Starts at 10:30am</div>
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
        <p>Every Sunday, Malik organises a breakfast to get people from different backgrounds and who value human connection to meet and talk about the impact of technology on society and everything around it. — You don&apos;t have to be an expert to join.
        </p>

        <p>
            If you&apos;re new in Berlin or would like to leave your bubble and meet people who are driven and open minded, join us this Sunday.
        </p>

        <p>
        To create a safe space for vulnerability and more intimate conversations, there are only 6 seats available. Malik personally handpicks people from the waiting list so you can leave the breakfast with a warm and fuzzy feeling.
        </p>

        <p>
        Our community is made of people who care about improving society with their work. And to increase our impact, we&apos;re committing a fee of 5€ per person to help innocent children, civilians and the soldiers get health supplies that are hard to come by amidst the war. The money is donated in its entirety to <a href="https://www.suppliesforukraine.com/">Supplies for Ukraine</a>.
        </p>
      </div>
      
    </div>
    )
}