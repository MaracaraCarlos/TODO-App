import { useContext } from "react";
import { IoMoonSharp, IoSunnySharp } from "react-icons/io5";
import { FilterContext } from "../context/FilterContext";

const Headers = () => {

  const { theme, changeThemeLight, changeThemeDark } = useContext(FilterContext)

  return (
    <div className='header_container'>
      <h1>TODO</h1>
      <div className={theme === 'light' ? 'icon_theme_container' : 'icon_theme_container_hide'} >
        <IoMoonSharp 
          className='moon_icon'
          onClick={changeThemeDark} />
      </div>
      <div className={theme === 'light' ? 'icon_theme_container_hide' : 'icon_theme_container'}>
        <IoSunnySharp 
          className='sun_icon'
          onClick={changeThemeLight}
        />
      </div>
    </div>
  )
}

export default Headers