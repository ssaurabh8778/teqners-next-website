import Head from "next/head";
import type { NextPage } from "next";
import Gallery from "../../components/Gallery";
import styles from "/styles/projects/projects.module.scss";
import Link from "next/link";

const GALLERY_DIR = "/static/projects/solarhub/";

const images = Array.from(
    { length: 13 },
    (_, i) => GALLERY_DIR + (1 + i) + ".png"
);

const Projects: NextPage = () => {
    return (
        <>
            <Head>
                <title>Project - Teqners</title>
                <meta
                    name="description"
                    content="Projects that Teqners has served"
                />
            </Head>

            <div className={styles.container}>
                <h1 className={styles.projectTitle}>
                    <Link href={"https://www.solarhub24.de/"}>SolarHub</Link>
                </h1>
                <Gallery images={images} />
            </div>
        </>
    );
};

// export async function getServerSideProps() {
//     // console.log(req);
//     // const images = [
//     //     "https://images.unsplash.com/photo-1674574124345-02c525664b65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=2000&q=60 ",
//     //     "https://images.unsplash.com/photo-1678110370796-48057d9202a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
//     //     "https://images.unsplash.com/photo-1507499739999-097706ad8914?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=240&ixid=MnwxfDB8MXxyYW5kb218MHx8c3BhY2V8fHx8fHwxNjc3OTcwNzc1&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=320",
//     //     "https://images.unsplash.com/photo-1517816452803-f688e3d9536d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8bW9kZXJufHx8fHx8MTY3Nzk2OTIyNg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=640",
//     //     "https://images.unsplash.com/photo-1678008583224-cd4f9582ef37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60",
//     //     "https://images.unsplash.com/photo-1678081396973-6055905c7b36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1375&q=80",
//     //     "https://images.unsplash.com/photo-1677864385734-a4c23b15dd34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     // ];

//     const count = getFilesCount("/projects/solarhub/");
//     return { props: { count } };
// }

export default Projects;
