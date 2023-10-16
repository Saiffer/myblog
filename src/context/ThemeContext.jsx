"use client"

import { createContext,useState,useEffect } from "react";

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
    if (typeof window !== 'undefined') {
        const value = localStorage.getItem("theme");
        console.log("I AM VALUE", value)
        return value || "light";
    }
}

export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState(()=> {
        return getFromLocalStorage();
    });

    const toggle = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    useEffect(()=>{
        localStorage.setItem("theme", theme)
    }, [theme]);

    return<ThemeContext.Provider value={{theme,toggle}}>{children}</ThemeContext.Provider>
}