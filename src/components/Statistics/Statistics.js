import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const getRandomColor = () => {
    return Math.floor(Math.random() * 16777215).toString(16);
}

export default function Statistics({ title, stats }) {
    return (
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}

            <ul className={styles.statList}>
                {stats.map(stat => {
                    return (
                        <li className={styles.item} key={stat.id} style={{ backgroundColor: `#${getRandomColor()}` }}>
                            <span className={styles.label}>{stat.label}</span>
                            <span className={styles.percentage}>{stat.percentage}%</span>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            // label: PropTypes.string.isRequired,
            // percentage: PropTypes.number.isRequired,
        })
    ),
}

