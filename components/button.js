'use client';
import { amplitude } from "../analytics";

export default function Button() {
    const clickHandler = () => {
        amplitude.track("Button Clicked", {
          text: "Each click is a new event. In this case, people are clicking",
        })
      }
    return (
        <button
        onClick={clickHandler}
        >
            Let&apos;s Go</button>
    )
}