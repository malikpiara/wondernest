'use client';
import { useState, useEffect } from "react";
import Quote from "./quote";
import styles from './loadingPage.module.css'

export default function LoadingPage() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 3000);
    
        return () => clearTimeout(timer);
      }, []);

    return (
        <div>
        { isLoading ? (
            <div className={styles.wrapper}>
                <Quote/>
            </div>
        ) : (
            ""
        )}
        </div>
    )
}
