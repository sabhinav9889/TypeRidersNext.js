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
    durpar: number;
    setDurPar: Dispatch<SetStateAction<number>>;
    stopm: boolean;
    setStopm: Dispatch<SetStateAction<boolean>>;
    cur: boolean;
    setCur: Dispatch<SetStateAction<boolean>>;
    drawer: boolean;
    setDrawer: Dispatch<SetStateAction<boolean>>;
    livewpm: boolean;
    setlivewpm: Dispatch<SetStateAction<boolean>>;
    profile: boolean;
    setProfile: Dispatch<SetStateAction<boolean>>;
    sound: boolean;
    setSound: Dispatch<SetStateAction<boolean>>;
    gar: boolean;
    setGarage: Dispatch<SetStateAction<boolean>>;
    blur: boolean;
    setBlur: Dispatch<SetStateAction<boolean>>;
    carIc: number;
    setCarIc: Dispatch<SetStateAction<number>>;
}

// Step 3: Create the context provider component
const Context: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<number>(2);
    const [countDown, setCountDown] = useState<number>(15);
    const [diff, setDiff] = useState<number>(0);
    const [begin, setBegin] = useState<boolean>(false);
    const [start, setStart] = useState<boolean>(false);
    const [music, setMusic] = useState<boolean>(false);
    const [durpar, setDurPar] = useState<number>(1);
    const [stopm, setStopm] = useState<boolean>(true);
    const [cur, setCur] = useState<boolean>(true);
    const [drawer, setDrawer] = useState<boolean>(false);
    const [livewpm, setlivewpm] = useState<boolean>(true);
    const [profile, setProfile] = useState<boolean>(false);
    const [sound, setSound] = useState<boolean>(true);
    const [gar, setGarage] = useState<boolean>(false);
    const [blur, setBlur] = useState<boolean>(true);
    const [carIc, setCarIc] = useState<number>(0);
    const value: ValueProps = { theme, setTheme , countDown, setCountDown, diff, setDiff, begin, setBegin, start, setStart, music, setMusic, durpar, setDurPar, stopm ,setStopm, cur, setCur, drawer, setDrawer, livewpm, setlivewpm, profile, setProfile, sound, setSound, gar, setGarage, carIc, setCarIc, blur, setBlur};
    return (
        <messageData.Provider value={value}>
            {children}
        </messageData.Provider>
    );
};

export default Context;