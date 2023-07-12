export default function Breakfast() {
    return (
        <LoginCard/>
    )
}

function LoginCard() {
    return (
        <div className="content-cards-wrapper">
      <div className="content-card">
        <h1 className="header">Breakfasts for Good</h1>
        <p className="">
          Hosted by <a href="https://t.me/malikpiara">Malik</a>
        </p>
        <div className="flex column">
            <div className="time-location-container">
                <div className="time-container">
                <div className="title">Sunday, 16 July</div>
                <div>Starts at 10:30am</div>
                </div>
                <div className="location-container">
                <div>Five Elephant Kreuzberg, Reichenberger Straße, Berlin</div>
            </div>
        </div>
        </div>
        
      </div>

      <div className="content-card">
        <h3>Registration</h3>
        <p>Hi! To join the event, please register below.</p>
        <form action="https://piara.li/breakfast">
        <button>Join the Event</button>
        </form>
      </div>

      <div className="content-card">
        <h3>About the Event</h3>
        <p>Every Sunday, Malik organises a breakfast to get people from different backgrounds to meet and talk about the impact of technology on society and everything around it.
        </p>

        <p>
            If you're new in Berlin or would like to leave your bubble and meet people who are driven and open minded, join us this Sunday.
        </p>

        <p>
        To create a safe space for vulnerability and more intimate conversations, there are only 6 seats available.
        </p>

        <p>
        Our community is made of people who want to help improve society with everything they do. And to increase our impact, we're committing a fee of 5€ per person to help innocent children, civilians and the soldiers get health supplies that are hard to come by amidst the war. The money is donated in its entirety to <a href="https://www.suppliesforukraine.com/">Supplies for Ukraine</a>.
        </p>
      </div>
      
    </div>
    )
}