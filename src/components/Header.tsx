import { Link, useLocation } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import logo from '../assets/logo.svg';
import NavDropdown, { DropdownMenu } from './NavDropdown';
import { donationUrl } from '../data/links';

interface DropdownItem {
  to: string;
  label: string;
}

interface NavItem {
  to?: string;
  label: string;
  dropdown?: DropdownItem[];
}

function HamburgerIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="17"
      height="7"
      viewBox="0 0 17 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="17" height="2" rx="1" fill="currentColor" />
      <rect y="5" width="17" height="2" rx="1" fill="currentColor" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M18 6L6 18M6 6l12 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M1 1L5 5L9 1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Header() {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedCategory, setMobileExpandedCategory] = useState<
    string | null
  >(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
        setMobileMenuOpen(false);
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
        openDropdown || mobileMenuOpen ? 'pb-8' : ''
      }`}
    >
      <nav className="relative flex items-center justify-between px-4 pt-8 pb-4 md:px-8 md:py-6 md:pt-6 md:pb-6">
        <Link to="/" className="flex items-center gap-3 no-underline z-10">
          <img
            src={logo}
            alt="Triton Droids"
            className="h-6 w-20 object-contain md:h-auto md:w-36"
          />
        </Link>

        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen((prev) => !prev);
              setMobileExpandedCategory(null);
            }}
            className="shrink-0 w-6 h-6 flex items-center justify-center text-main-text hover:text-accent transition-colors"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <CloseIcon className="size-6" />
            ) : (
              <HamburgerIcon className="w-[17px] h-[7px]" />
            )}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-4">
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

          <a
            href={donationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-accent text-button-text font-bold rounded-full hover:bg-slate-400 active:bg-accent/80 transition-all duration-200 ease-out z-10"
          >
            DONATE
          </a>
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

      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col overflow-hidden px-4">
          <div className="flex flex-col items-start w-full min-w-0">
            {navItems.map((item) =>
              item.dropdown ? (
                <div
                  key={item.label}
                  className="flex flex-col items-stretch w-full min-w-0 pb-2"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setMobileExpandedCategory((prev) =>
                        prev === item.label ? null : item.label
                      )
                    }
                    className="flex gap-4 items-center px-4 py-4 w-full min-w-0 text-left text-main-text text-base"
                  >
                    <span className="flex-1">{item.label}</span>
                    <span
                      className={`shrink-0 transition-transform ${
                        mobileExpandedCategory === item.label
                          ? 'rotate-180'
                          : ''
                      }`}
                    >
                      <ChevronDownIcon className="w-[10px] h-[6px]" />
                    </span>
                  </button>
                  {mobileExpandedCategory === item.label && (
                    <div className="flex flex-col gap-1 w-full min-w-0 pl-6">
                      {item.dropdown.map((d) => (
                        <Link
                          key={d.to}
                          to={d.to}
                          className={`border border-[#2A2B2D] flex items-center px-4 py-4 rounded-lg no-underline transition-all text-main-text text-base min-w-0 truncate ${
                            isActive(d.to)
                              ? 'text-accent'
                              : 'hover:bg-white/5'
                          }`}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setMobileExpandedCategory(null);
                          }}
                        >
                          {d.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.to || '/'}
                  className={`flex items-center px-4 py-4 w-full min-w-0 no-underline transition-all text-base ${
                    isActive(item.to || '')
                      ? 'text-accent'
                      : 'text-main-text hover:bg-white/5'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="pt-6 pb-8 px-4 w-full min-w-0">
              <a
                href={donationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-accent text-button-text font-bold text-sm rounded-full hover:bg-slate-400 active:bg-accent/80 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                DONATE
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
