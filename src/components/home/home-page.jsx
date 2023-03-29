import Link from "next/link"
import Image from "next/image"

export const HomePage = ({ data }) => (
    <main>
    {data.map(ev => 
    <Link legacyBehavior key={ev.id} href={`/events/${ev.id}` } passHref>
    <a> 
    <Image width={200} height={200} alt={ev.title} src={ev.image}></Image> 
    <h2>{ev.title}</h2> 
    <p> {ev.description}</p> 
    </a>
    </Link>
    ) }
    </main>
    )
