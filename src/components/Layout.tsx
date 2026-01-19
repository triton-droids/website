import { Link, useLocation } from 'react-router-dom';
import { ReactNode, useState } from 'react';
import logo from '../assets/logo.png';
import ucsdLogo from '../assets/UCSanDiegoLogo-White 1.png';

interface LayoutProps {
  children: ReactNode;
}

interface DropdownItem {
  to: string;
  label: string;
}

interface NavItem {
  to?: string;
  label: string;
  dropdown?: DropdownItem[];
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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
      dropdown: [{ to: '/projects', label: 'All Projects' }],
    },
    { to: '/sponsorship', label: 'Sponsorship' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={`w-full bg-stone-950 transition-all duration-300 ease-in-out ${
          openDropdown ? 'pb-8' : ''
        }`}
        onMouseLeave={() => setOpenDropdown(null)}
      >
        <nav className="relative flex items-center justify-between px-8 py-6">
          <Link to="/" className="flex items-center gap-3 no-underline z-10">
            <img src={logo} alt="Triton Droids" className="h-auto w-36" />
          </Link>

          <div className="flex items-center gap-4">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                  >
                    <button
                      className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                        openDropdown === item.label
                          ? 'bg-card-bg text-main-text'
                          : item.dropdown.some((d) => isActive(d.to))
                            ? 'text-accent font-semibold'
                            : 'text-main-text hover:text-accent'
                      }`}
                    >
                      {item.label}
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === item.label ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <Link
                    to={item.to || '#'}
                    className={`flex items-center px-4 py-2 rounded-lg text-main-text no-underline transition-colors ${
                      isActive(item.to || '')
                        ? 'text-accent font-semibold'
                        : 'hover:text-accent'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            <Link
              to="/donate"
              className="px-6 py-2 bg-accent text-button-text font-bold rounded-full hover:bg-accent/90 transition-colors z-10"
            >
              DONATE
            </Link>
          </div>
        </nav>

        {openDropdown && (
          <div className="px-8 pb-4">
            <div className="flex gap-6 justify-center">
              {navItems
                .find((item) => item.label === openDropdown)
                ?.dropdown?.map((dropdownItem) => (
                  <Link
                    key={dropdownItem.to}
                    to={dropdownItem.to}
                    className={`w-96 flex items-center gap-2 px-4 py-2 bg-card-bg rounded-lg text-main-text no-underline transition-colors whitespace-nowrap ${
                      isActive(dropdownItem.to)
                        ? 'text-accent'
                        : 'hover:text-accent'
                    }`}
                    onClick={() => setOpenDropdown(null)}
                  >
                    {dropdownItem.label}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="w-full mt-auto bg-stone-950 grid grid-cols-[1fr_auto_1fr] items-start gap-36 p-20">
        <div className="inline-flex flex-col justify-start items-start gap-6 justify-self-end">
          <img className="w-52 h-auto" src={logo} alt="Triton Droids" />
          <div className="w-96 justify-start text-neutral-100 text-base font-normal font-sans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className="inline-flex justify-start items-start gap-6">
          <div className="w-24 inline-flex flex-col justify-start items-start gap-16">
            <h4 className="text-main-text font-semibold text-base mb-1">
              Organization
            </h4>
            <div className="w-20 flex flex-col justify-start items-start gap-6">
              <Link
                to="/join"
                className="no-underline hover:text-accent transition-colors justify-start text-neutral-100 text-base font-normal font-sans"
              >
                Join
              </Link>
              <Link
                to="/team"
                className="no-underline hover:text-accent transition-colors justify-start text-neutral-100 text-base font-normal font-sans"
              >
                Our Team
              </Link>
              <Link
                to="/alumni"
                className="no-underline hover:text-accent transition-colors justify-start text-neutral-100 text-base font-normal font-sans"
              >
                Alumni
              </Link>
              <Link
                to="/advisor"
                className="no-underline hover:text-accent transition-colors justify-start text-neutral-100 text-base font-normal font-sans"
              >
                Advisors
              </Link>
              <Link
                to="/projects"
                className="no-underline hover:text-accent transition-colors justify-start text-neutral-100 text-base font-normal font-sans"
              >
                Projects
              </Link>
              <Link
                to="/sponsorship"
                className="no-underline hover:text-accent transition-colors justify-start text-neutral-100 text-base font-normal font-sans"
              >
                Sponsors
              </Link>
            </div>
          </div>

          <div className="w-24 inline-flex flex-col justify-start items-start gap-16">
            <div className="justify-start text-neutral-100 text-base font-bold font-sans">
              Socials
            </div>
            <div className="w-16 flex flex-col justify-start items-start gap-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="justify-start text-neutral-100 text-base font-normal font-sans hover:text-accent transition-colors cursor-pointer"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="justify-start text-neutral-100 text-base font-normal font-sans hover:text-accent transition-colors cursor-pointer"
              >
                LinkedIn
              </a>
              <a
                href="https://linktr.ee"
                target="_blank"
                rel="noopener noreferrer"
                className="justify-start text-neutral-100 text-base font-normal font-sans hover:text-accent transition-colors cursor-pointer"
              >
                Linktree
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="justify-start text-neutral-100 text-base font-normal font-sans hover:text-accent transition-colors cursor-pointer"
              >
                Discord
              </a>
            </div>
          </div>
        </div>

        <div className="inline-flex flex-col justify-start items-start gap-6">
          <img className="w-80 h-16" src={ucsdLogo} alt="UC San Diego" />
          <div className="self-stretch justify-start text-neutral-100 text-base font-normal font-sans">
            9500 Gilman Dr, La Jolla, CA 92093
          </div>
        </div>
      </footer>
    </div>
  );
}
