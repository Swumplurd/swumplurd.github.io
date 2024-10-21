import { useEffect, useState } from "react";

export const ThemeShifter = () => {
    const [currentTheme, setCurrentTheme] = useState("")
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const userPrefersDark =
                typeof window !== "undefined" &&
                window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches;
            const currentTheme = localStorage.getItem("theme") || (userPrefersDark ? "dark" : "light");
                setCurrentTheme(currentTheme)
            if (currentTheme === "dark") {
                document.documentElement.classList.add("dark");
            }
        }
    }, [])

    const toggleDarkMode = () => {
        document.documentElement.classList.toggle("dark");
        const theme = document.documentElement.classList.contains("dark")
            ? "dark"
            : "light";
        localStorage.setItem("theme", theme);
        setCurrentTheme(theme)
    };
    return (
        <button className="p-1 bg-gray-900 dark:bg-gray-200 rounded shadow" onClick={toggleDarkMode}>{currentTheme === "dark" ? "☀️":"🌙"}</button>
    )
}
