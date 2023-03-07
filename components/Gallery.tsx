/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import styles from "/styles/Gallery.module.scss";

const Gallery = ({ images }: { images: string[] }) => {
    const [isCarouselOpen, setIsCarouselOpen] = useState<boolean>(false);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
        setCurrentIndex(
            e.target instanceof HTMLElement
                ? images.indexOf(e.target.dataset.id!)
                : 0
        );
        setIsCarouselOpen((current) => !current);
    };

    return (
        <div className="">
            <div className={styles.gallery} onClick={(e) => clickHandler(e)}>
                {images.map((image) => (
                    <img
                        key={image}
                        src={`${image}`}
                        className={styles.gallery__item}
                        data-id={image}
                        loading="lazy"
                        alt="project image"
                    />
                ))}
            </div>

            <div
                className={
                    isCarouselOpen
                        ? styles.carousel
                        : styles.carousel + " " + styles["carousel--hidden"]
                }
            >
                {images.map((image, i) => (
                    <img
                        key={image}
                        src={`${image}`}
                        className={
                            styles.carousel__item +
                            " " +
                            (i < currentIndex
                                ? styles["carousel__item--prev"]
                                : i > currentIndex
                                ? styles["carousel__item--next"]
                                : "")
                        }
                        data-id={image}
                        alt="project image"
                        loading="lazy"
                        draggable={false}
                    />
                ))}

                <div
                    className={styles.carousel__left}
                    onClick={() => {
                        setCurrentIndex((current) =>
                            current <= 0 ? 0 : current - 1
                        );
                    }}
                    data-disabled={currentIndex <= 0}
                >
                    <button
                        type="button"
                        className={
                            styles["carousel__btn"] +
                            " " +
                            styles["carousel__btn--left"]
                        }
                        disabled={currentIndex <= 0}
                    >
                        <svg
                            width="10"
                            height="15"
                            viewBox="0 0 8 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6 12L0 6L6 0L7.4 1.4L2.8 6L7.4 10.6L6 12Z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className={styles.carousel__right}
                    onClick={() => {
                        setCurrentIndex((current) =>
                            current >= images.length - 1
                                ? images.length - 1
                                : current + 1
                        );
                    }}
                    data-disabled={currentIndex >= images.length - 1}
                >
                    <button
                        type="button"
                        className={
                            styles["carousel__btn"] +
                            " " +
                            styles["carousel__btn--right"]
                        }
                        disabled={currentIndex >= images.length - 1}
                    >
                        <svg
                            width="10"
                            height="15"
                            viewBox="0 0 8 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.4 12L0 10.6L4.6 6L0 1.4L1.4 0L7.4 6L1.4 12Z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                </div>
                <button
                    type="button"
                    className={
                        styles["carousel__btn"] +
                        " " +
                        styles["carousel__btn--close"]
                    }
                    onClick={() => setIsCarouselOpen(false)}
                >
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"
                            fill="currentColor"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Gallery;
