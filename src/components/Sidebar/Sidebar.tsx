import styles from "./Sidebar.module.scss";
import samanthaImg from "../../assets/png/samantha.png"; 
import { Link, useLocation } from "react-router-dom";

const sidebarNavLink = [
    "dashboard", 
    "expenses", 
    "wallets", 
    "summary", 
    "accounts", 
    "settings"
];

export default function Sidebar() {
    const location = useLocation();
    let x;
    return (
     <>
    <aside className={styles.sidebar}>
        <div className={styles.sidebarContent}>
            <div className={styles.profileDetails}>
                <div className={styles.profileImageDiv}>
                    <img src={samanthaImg} alt="samantha" />
                    <p className={styles.notifications}>4</p>
                </div>
                <p className={styles.userName}>Samantha</p>
                <p className={styles.userEmail}>samantha@email.com</p>
            </div>
            <nav className={styles.sidebarNav}>
                <ul>
                    {sidebarNavLink.map(sidebarNavLink => 
                   
                        <li key={sidebarNavLink} className={styles.sidebarNavItem}>
                        <Link className={
                                location.pathname === `/${sidebarNavLink}`
                                ? styles.sidebarNavLinkActive 
                                : styles.sidebarNavLink
                            } 
                            to={`/${sidebarNavLink}`} >
                               
                            {sidebarNavLink.charAt(0).toUpperCase() + 
                             sidebarNavLink.slice(1)} 
                              
                        </Link>
                        
                    </li>
                )}
                </ul>
            </nav>
        </div>
    </aside>
    </>
    );
}