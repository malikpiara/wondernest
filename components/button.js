'use client';
import { amplitude } from "../analytics";

export default function Button() {
    const clickHandler = () => {
        amplitude.track("click_join_event_telegram", {
          text: "Each click is a new event. In this case, people are clicking in the button to join the event via Telegram",
        })
      }
    return (
        <button
        onClick={clickHandler}
        >
            Let&apos;s Go</button>
    )
}