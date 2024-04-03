'use client'
import {createContext, useState, ReactNode} from 'react';

export const messageData = createContext(null);
function context({children}: { children: ReactNode }){
    const [theme, setTheme] = useState(3);
    const [countDown, setCountDown] = useState(15);
    const [diff, setDiff] = useState(0);
    const [begin, setBegin] = useState(false);
    const [start, setStart] = useState(false);
    const value = { theme, setTheme , countDown, setCountDown, diff, setDiff, begin, setBegin, start, setStart};
    return (
        <messageData.Provider value={value}>
            {children}
        </messageData.Provider>
    )
}

export default context;