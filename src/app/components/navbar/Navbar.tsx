import { NavLink} from 'react-router-dom';
import { routes } from '../../../routes/routeConfig';
import { ThemeSwitch } from '../themeswitch/ThemeSwitch';
import { FaRadio } from 'react-icons/fa6';


const Navbar = () => {
  return (
    <aside className="w-20 lg:w-64 border-r border-slate-200 dark:border-slate-800 flex flex-col items-center lg:items-stretch py-6 px-4 bg-white/50 dark:bg-slate-900/50 glass z-20">

    <nav className="flex flex-col gap-3 px-2 mb-10">
      <div className="header">
       <div className="flex items-center gap-3 px-2 mb-10">
<div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
<FaRadio/>
</div>
<span className="text-xl font-bold hidden lg:block tracking-tight">SonicRadio</span>
</div>
      </div>
      <ul className="flex flex-col gap-3 px-2 mb-10">
        {routes
          .filter(route => route.showInNav)
          .map(route => (
            <li key={route.path} className={ route.children ? 'dropdown' : 'link'}>
              <NavLink
                end
                to={route.path || '#'}
                className={({ isActive }) => 
              `flex items-center lg:gap-4 px-4 py-3 bg-primary/10 rounded-xl ${isActive ? 'active text-primary' : 'link text-gray-500'}`
  }>
                <span className="icon text-lg">{route.icon && <route.icon />}</span>
                <span className="font-medium hidden lg:block">{route.title}</span>
              </NavLink>
              {route.children?
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
:""}
            </li>
          ))}
      </ul>
     <ThemeSwitch/>
    </nav>
    </aside>
  );
};

export default Navbar;
