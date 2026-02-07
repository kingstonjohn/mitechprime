import { Link } from "react-router-dom";
import { APP_NAME } from "../constants";

export default function Logo() {

    return (
        <Link to='/' className="flex gap-2 items-center notranslate">
            <img src="/fizomarkt.png" alt="Logo" className="h-[38px]" />
            <h1 className="text-primary font-bold text-[18px]">{APP_NAME}</h1>
        </Link>
    )
}