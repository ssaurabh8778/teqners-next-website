import styles from "/styles/Services.module.scss";

type serviceCardProps = {
    img: any;
    title: string;
    children: string;
};

const ServiceCard: React.FC<serviceCardProps> = ({
    img,
    title,
    children,
}: serviceCardProps) => {
    return (
        <div className={styles.row}>
            <picture className={styles.rowImg}>
                <img src={img.src} alt={img.alt && ""} {...img} />
            </picture>
            <div className={styles.rowContent}>
                <h3 className={styles.rowTitle}>{title}</h3>
                <p className={styles.rowDesc}>{children}</p>
            </div>
        </div>
    );
};
const Services: React.FC = () => {
    const servicesList = [
        {
            id: 1,
            img: { src: "/web-dev-icon.svg", "aria-hidden": true },
            title: "Web Development",
            desc: "Take your business online or upgrade your existing website to convert visitors into customers and grow your business worldwide.",
        },
        {
            id: 2,
            img: { src: "/app-dev-icon.svg", "aria-hidden": true },
            title: "App Development",
            desc: "Go mobile first with a mobile app for your growing business.",
        },
        {
            id: 3,
            img: { src: "/blockchain-dev-icon.svg", "aria-hidden": true },
            title: "Blockchain Development",
            desc: "Web 3.0 has arrived and is growing fast. We use the unique features of blockchain technology to solve problems and create opportunities.",
        },
    ];
    return (
        <div className={styles.services} id="services">
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h2 className={"section-title"}>Services</h2>
                    <h3 className={"section-subtitle"}>How we add value</h3>
                </div>

                <div className={styles.rowsContainer}>
                    {servicesList.map(({ id, img, title, desc }) => (
                        <ServiceCard key={id} img={img} title={title}>
                            {desc}
                        </ServiceCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
