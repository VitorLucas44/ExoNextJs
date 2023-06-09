import Link from "next/link"

export const Header = () => {
    return (
        <header>
        <nav>
            <Link legacyBehavior href="/" passHref>
            <a>Home</a>
            </Link>
            <Link legacyBehavior href="/events" passHref>
            <a>Event</a>
            </Link>
            <Link legacyBehavior href="/about-us" passHref>
            <a>About us</a>
            </Link>
        </nav>
      </header>
    )
}