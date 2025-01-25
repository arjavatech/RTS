
import HomeHeader from "./HomeHeader";
import HomeBody from "./HomeBody.jsx";
import HomeFooter from "./HomeFooter.jsx";
import facebook from "./assets/facebook.png";
import instagram from "./assets/insta.jpg";

export default function App() {
    return (
        <div className="about-us">
            <HomeHeader />
            <HomeBody />
            <div id="footer">
                <HomeFooter facebook={facebook} instagram={instagram} />
            </div>
        </div>
    )
}

