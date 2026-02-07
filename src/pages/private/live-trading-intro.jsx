import { Link } from "react-router-dom";
import BouncyButton from "../../components/bouncy-button";

export default function LiveTradingIntro() {

    return (
        <div className="live-video-content-height relative">
            <video controls src="https://res.cloudinary.com/dbfynwrbk/video/upload/v1705428678/media/live-trade.mp4" style={{ width: '100%', boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;" }}></video>
            <Link to="/dashboard-live-trading-plans" className="absolute right-[50px] bottom-[25px]">
                <BouncyButton />
            </Link>
        </div>
    )
}