import styles from "./Expenses.module.scss"

export default function Expenses() {
    return (
        <main className={styles.expenses}>
            <div className={styles.expensesCard}>
                <section className={styles.expensesOverview}>
                    <div className={styles.expensesHeader}>
                        <p className={styles.expensesTitle}>Expenses</p>
                    </div>
                </section>
            </div>
        </main>
    )
}
