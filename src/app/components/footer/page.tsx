import Link from "next/link";
import "./style.css";

export default function Footer() {
    return (
        <div className="footer">
            <ul className="footer-options">
                <li className="footer-option"><Link href="/">Home</Link></li>
                <li className="footer-option"><Link href="/about">About</Link></li>
                <li className="footer-option"><Link href="/jobs">Jobs</Link></li>
                <li className="footer-option"><Link href="https://webflow.com/dashboard?r=1&workspace=pavels-workspace-53a545">Webflow</Link></li>
                <li className="footer-option"><Link href="https://webflow.com/devlink">DevLink</Link></li>
            </ul>
            <p>© 2023 Visual Development Job Board. This is all fake. Content by ChatGPT , built in Webflow using DevLink</p>
        </div>
    );
}