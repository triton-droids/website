import { Link, useLocation } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import logo from '../assets/logo.svg';
import NavDropdown, { DropdownMenu } from './NavDropdown';

interface DropdownItem {
  to: string;
  label: string;
}

interface NavItem {
  to?: string;
  label: string;
  dropdown?: DropdownItem[];
}

export default function Header() {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path: string): boolean => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const navItems: NavItem[] = [
    { to: '/', label: 'Home' },
    { to: '/join', label: 'Join' },
    {
      label: 'About Us',
      dropdown: [
        { to: '/team', label: 'Executive Team' },
        { to: '/alumni', label: 'Alumni' },
        { to: '/advisor', label: 'Advisor' },
      ],
    },
    {
      label: 'Projects',
      // TODO: Add project paths to the dropdown items
      dropdown: [
        { to: '/projects/humanoid', label: 'Humanoid Robot' },
        { to: '/projects/learning-projects', label: 'Learning Projects' },
        { to: '/projects/robocup', label: 'RoboCup' },
      ],
    },
    { to: '/sponsorship', label: 'Sponsorship' },
  ];

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 w-full bg-main-bg shadow-lg transition-all duration-300 ease-in-out ${
        openDropdown ? 'pb-8' : ''
      }`}
    >
      <nav className="relative flex items-center justify-between px-8 py-6">
        <Link to="/" className="flex items-center gap-3 no-underline z-10">
          <img src={logo} alt="Triton Droids" className="h-auto w-36" />
        </Link>

        <div className="flex items-center gap-4">
          {navItems.map((item) => (
            <div key={item.label} className="relative">
              {item.dropdown ? (
                <NavDropdown
                  label={item.label}
                  dropdown={item.dropdown}
                  isOpen={openDropdown === item.label}
                  onToggle={() =>
                    setOpenDropdown((prev) =>
                      prev === item.label ? null : item.label
                    )
                  }
                  onItemClick={() => setOpenDropdown(null)}
                />
              ) : (
                <Link
                  to={item.to || '#'}
                  className={`flex items-center px-4 py-2 rounded-full no-underline transition-all duration-200 ease-out ${
                    isActive(item.to || '')
                      ? 'text-accent'
                      : 'text-main-text hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          <Link
            to="/donate"
            className="px-6 py-2 bg-accent text-button-text font-bold rounded-full hover:bg-slate-400 active:bg-accent/80 transition-all duration-200 ease-out z-10"
          >
            DONATE
          </Link>
        </div>
      </nav>

      {openDropdown && (
        <DropdownMenu
          label={openDropdown}
          dropdown={
            navItems.find((item) => item.label === openDropdown)?.dropdown || []
          }
          isOpen={true}
          onItemClick={() => setOpenDropdown(null)}
        />
      )}
    </header>
  );
}
