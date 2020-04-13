const li = [
    {
        link: "/",
        text: "Home"
    },
    {
        link: "/about/",
        text: "Présentation"
    },
    {
        link: "/dashboard/",
        text: "Porte Folio"
    },
    {
        link: "/contact/",
        text: "Contact"
    }
];

const NavLink = () => (

    <div>
        {li.map(objLink => (<App link={objLink.link} text={objLink.text} />))}
    </div>
)

export default NavLink;