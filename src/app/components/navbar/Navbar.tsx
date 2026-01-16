import { NavLink} from 'react-router-dom';
import { routes } from '../../../routes/routeConfig';
import './Navbar.css';
import { ThemeSwitch } from '../themeswitch/ThemeSwitch';

const Navbar = () => {
  return (
    <nav>
      <ul>
        {routes
          .filter(route => route.showInNav)
          .map(route => (
            <li key={route.path} className={ route.children ? 'dropdown' : 'link'}>
              <NavLink
                end
                to={route.path || '#'}
                
              >
                {route.title}
              </NavLink>
               <ul className='dropdownMenu'>
                  {route.children?.map((child) => (
                    <li key={child.path}>
                      <NavLink
                        to={child.path!}
                        className={({ isActive }) =>
                          isActive
                            ? 'active'
                            : 'link'
                        }
                      >
                        {child.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
            </li>
          ))}
      </ul>
     <ThemeSwitch/>
    </nav>
  );
};

export default Navbar;
