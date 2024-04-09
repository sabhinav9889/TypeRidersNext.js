"use client"
import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

// Step 1: Define the context
export const messageData = createContext<ValueProps | null>(null);

// Step 2: Define the interface for context value
interface ValueProps {
    theme: number;
    setTheme: Dispatch<SetStateAction<number>>;
    countDown: number;
    setCountDown: Dispatch<SetStateAction<number>>;
    diff: number;
    setDiff: Dispatch<SetStateAction<number>>;
    begin: boolean;
    setBegin: Dispatch<SetStateAction<boolean>>;
    start: boolean;
    setStart: Dispatch<SetStateAction<boolean>>;
    music: boolean;
    setMusic: Dispatch<SetStateAction<boolean>>;
}

// Step 3: Create the context provider component
const Context: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<number>(3);
    const [countDown, setCountDown] = useState<number>(15);
    const [diff, setDiff] = useState<number>(0);
    const [begin, setBegin] = useState<boolean>(false);
    const [start, setStart] = useState<boolean>(false);
    const [music, setMusic] = useState<boolean>(false);

    const value: ValueProps = { theme, setTheme , countDown, setCountDown, diff, setDiff, begin, setBegin, start, setStart, music, setMusic};

    return (
        <messageData.Provider value={value}>
            {children}
        </messageData.Provider>
    );
};

export default Context;