import React from 'react'
import useTheme from '../../contexts/Theme'

export const ThemeBtn = () => {
    const { themeMode, lightTheme, darkTheme } = useTheme()
    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked
        if (darkModeStatus) {
            darkTheme()
        } else {
            lightTheme()
        }
    }

    return (
        <label className="relative inline-flex items-center cursor-pointer"> <input type="checkbox" className="sr-only peer" onChange={onChangeBtn} checked={themeMode === "dark"} /> <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-checked:bg-blue-600 rounded-full transition-all"></div> <span className="absolute top-[2px] left-[2px] flex items-center justify-center w-5 h-5 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"> 🌙 </span> </label>


    )
}
