import { useEffect, useMemo, useState } from "react";
import styles from "/styles/Portfolio.module.scss";

type portfolioCardProps = {
    img: {
        src: string;
        alt: string;
    };
    title: string;
    desc: string;
    codeUrl: string;
    liveUrl: string;
    category: string;
    className?: string;
};

type portfolioItem = {
    id: number;
    img: {
        src: string;
        alt: string;
    };
    title: string;
    desc: string;
    codeUrl: string;
    liveUrl: string;
    category: string;
    className?: string;
};

const PortfolioCard: React.FC<portfolioCardProps> = ({
    img,
    title,
    desc,
    codeUrl,
    liveUrl,
    category,
    className,
}: portfolioCardProps) => {
    return (
        <div className={className ? className : styles.portfolioCard}>
            <p className={styles.workCategory}>{category}</p>
            <picture className={styles.workImg}>
                <img src={img.src} alt={img.alt} />
            </picture>
            <div className={styles.workDetails}>
                <h3 className={styles.workTitle}>{title}</h3>
                <p className={styles.workDesc}>{desc.slice(0, 100)}</p>
            </div>
            <div className={styles.workLinkGroup}>
                {codeUrl && <a href={codeUrl}>Code</a>}
                {liveUrl && <a href={liveUrl}>Live</a>}
            </div>
        </div>
    );
};

const Portfolio: React.FC = () => {
    const projectsList = useMemo(
        () => [
            {
                id: 1,
                img: { src: "/static/project1.png", alt: "Amazing project" },
                title: "Amazing project",
                desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum facere qui fuga eligendi consequatur. Voluptate esse culpa aut nulla enim!",
                codeUrl: "https://github.com",
                liveUrl: "https://google.com",
                category: "web",
            },
            {
                id: 2,
                img: { src: "/static/project2.png", alt: "Amazing project2" },
                title: "Amazing project2 of my work history",
                desc: "This is an amazing project2",
                codeUrl: "https://github.com",
                liveUrl: "https://google.com",
                category: "web",
            },
            {
                id: 3,
                img: { src: "/static/project1.png", alt: "Amazing project3" },
                title: "Amazing project3",
                desc: "This is an amazing project3",
                codeUrl: "https://github.com",
                liveUrl: "https://google.com",
                category: "app",
            },
            {
                id: 4,
                img: { src: "/static/project2.png", alt: "Amazing project4" },
                title: "Amazing project4",
                desc: "This is an amazing project4",
                codeUrl: "https://github.com",
                liveUrl: "https://google.com",
                category: "app",
            },

            {
                id: 5,
                img: { src: "/static/project1.png", alt: "Amazing project5" },
                title: "Amazing project5",
                desc: "This is an amazing project5",
                codeUrl: "https://github.com",
                liveUrl: "https://google.com",
                category: "blockchain",
            },
            {
                id: 6,
                img: { src: "/static/project2.png", alt: "Amazing project5" },
                title: "Amazing project6",
                desc: "This is an amazing project6",
                codeUrl: "https://github.com",
                liveUrl: "https://google.com",
                category: "blockchain",
            },
        ],
        []
    );
    const [portfolio, setPortfolio] =
        useState<Array<portfolioItem>>(projectsList);
    const filters = ["all", "web", "app", "blockchain"];
    const [activeFilter, setActiveFilter] = useState("all");
    const changeFilter = (newFilter: string) => {
        if (newFilter == "all") {
            setPortfolio(projectsList);
        } else {
            // This changes class of all the portfolio items, if they belong to the current filter they fade in otherwise they fade out.
            // implementation is not complete
            // setPortfolio(
            //     () =>
            //         projectsList.map((item) => {
            //             if (item.category == newFilter) {
            //                 return {
            //                     ...item,
            //                     className: styles.fadeIn,
            //                 };
            //             } else {
            //                 return {
            //                     ...item,
            //                     className: styles.fadeOut,
            //                 };
            //             }
            //         })
            // );
            setPortfolio(() =>
                projectsList.filter((item) => item.category == newFilter)
            );
        }
        setActiveFilter(newFilter);
    };
    // useEffect(() => {
    //     setPortfolio(projectsList);
    // }, [projectsList]);

    return (
        <div className={styles.work} id="projects">
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h2 className={"section-title"}>Projects</h2>
                </div>
                <div className={styles.filters}>
                    {filters.map((filter, i) => (
                        <button
                            type="button"
                            className={
                                activeFilter == filter
                                    ? styles.filterButtonActive
                                    : styles.filterButton
                            }
                            key={i}
                            onClick={() => changeFilter(filter)}
                        >
                            {filter[0].toUpperCase() + filter.slice(1)}
                        </button>
                    ))}
                </div>
                <div className={styles.portfolio}>
                    {portfolio.slice(0, 4).map((item) => (
                        <PortfolioCard {...item} key={item.id}></PortfolioCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
