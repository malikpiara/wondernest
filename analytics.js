'use client';
import * as amplitude from '@amplitude/analytics-browser';
import { useEffect } from "react"

export default function Amplitude() {
    useEffect(() => {
        amplitude.init(process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY);
    }, []);
}
