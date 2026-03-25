import styles from "./MarqueeStrip.module.css";

const CONTENT = "FREE DELIVERY · NEW COLLECTION · SPRING 2025 · LIMITED DROPS · ";
const REPEATED = Array(6).fill(CONTENT).join("");

export default function MarqueeStrip() {
  return (
    <div className={styles.strip}>
      <div className={styles.track}>
        <span className={styles.text}>{REPEATED}</span>
        <span className={styles.text} aria-hidden="true">{REPEATED}</span>
      </div>
    </div>
  );
}
