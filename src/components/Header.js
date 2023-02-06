import { ReactComponent as Logo } from '../assets/svg_logo.svg';
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div 
      className='
        grid 
        grid-cols-[1fr_400px_1fr] 
        text-center 
        text-2xl 
        xl:text-4xl
        pt-4
        [&_a]:transition
        [&_a]:duration-500
        hover:[&_a]:text-thunderbird
        [&_a.active]:text-thunderbird
      '
      >
      <nav className='flex items-center justify-end gap-11'>
          <NavLink
            to="/behind-the-scenes"
            className={({ isActive }) =>
              isActive ? 'active' : undefined
            }
          >
            BEHIND THE SCENES
          </NavLink>
      </nav>
      <span className='block mx-auto w-[135px] h-[135px] md:w-[150px] md:h-[150px]'>
        <NavLink
          to="/"
          >
            <Logo/>
        </NavLink>
      </span>
      <nav className='flex items-center justify-start gap-11'>
          <NavLink
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
          >
            Contact
          </NavLink>
      </nav>
    </div>
  );
}