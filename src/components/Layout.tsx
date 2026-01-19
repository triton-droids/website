import { Link, useLocation } from 'react-router-dom'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation()

  const isActive = (path: string): boolean => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <nav className="flex justify-end items-center p-8 gap-12">
          <Link
            to="/"
            className={`text-main-text no-underline hover:underline hover:scale-105 transition-transform ${
              isActive('/') ? 'text-accent' : ''
            }`}
          >
            Home
          </Link>
          <Link
            to="/join"
            className={`text-main-text no-underline hover:underline hover:scale-105 transition-transform ${
              isActive('/join') ? 'text-accent' : ''
            }`}
          >
            Join
          </Link>
          <Link
            to="/team"
            className={`text-main-text no-underline hover:underline hover:scale-105 transition-transform ${
              isActive('/team') ? 'text-accent' : ''
            }`}
          >
            Team
          </Link>
          <Link
            to="/projects"
            className={`text-main-text no-underline hover:underline hover:scale-105 transition-transform ${
              isActive('/projects') ? 'text-accent' : ''
            }`}
          >
            Projects
          </Link>
          <Link
            to="/sponsorship"
            className={`text-main-text no-underline hover:underline hover:scale-105 transition-transform ${
              isActive('/sponsorship') ? 'text-accent' : ''
            }`}
          >
            Sponsorship
          </Link>
        </nav>
        <hr className="border-muted-text/20" />
      </header>

      <main className="mx-20 flex-1">{children}</main>

      <footer>
        <hr className="border-muted-text/20" />
        <div className="flex gap-4 p-4">
          <button className="text-main-text">Logo</button>
          <button className="text-main-text">Logo</button>
          <button className="text-main-text">Logo</button>
          <button className="text-main-text">Logo</button>
        </div>
      </footer>
    </div>
  )
}
