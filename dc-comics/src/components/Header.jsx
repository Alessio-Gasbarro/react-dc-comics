import logo from '../assets/img/dc-logo.png'

const links = [
    {
        id: 1,
        href: "#",
        label: "Characters",
        current: false,
    },
    {
        id: 2,
        href: "#",
        label: "Comics",
        current: true,
    },
    {
        id: 3,
        href: "#",
        label: "Movies",
        current: false,
    },
    {
        id: 4,
        href: "#",
        label: "TV",
        current: false,
    },
    {
        id: 5,
        href: "#",
        label: "Games",
        current: false,
    },
    {
        id: 6,
        href: "#",
        label: "Collectibles",
        current: false,
    },
    {
        id: 7,
        href: "#",
        label: "Videos",
        current: false,
    },
    {
        id: 8,
        href: "#",
        label: "Fans",
        current: false,
    },
    {
        id: 9,
        href: "#",
        label: "News",
        current: false,
    },
    {
        id: 10,
        href: "#",
        label: "Shop",
        current: false,
    }
]

const Header = () => {
    return (
        <>
            <header className='container'>
                <div>
                    <figure>
                        <img src={logo} alt="" />
                    </figure>
                </div>
                <div>
                    <ul>
                        {links.map((link) => (
                            <li key={`link-${link.id}`} href={link.href} className=''>{link.label}</li>
                        ))};
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header;