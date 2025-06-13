import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { useLocalStorage } from '@uidotdev/usehooks';

export default function Layout() {

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);


return (
    <>
      <Navbar switchTheme={switchTheme} theme = {theme}/>
      <Outlet/>
      <Footer/>
    </>
  )
}
