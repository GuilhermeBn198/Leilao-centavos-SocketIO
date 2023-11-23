import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import "../app/globals.css";

function Logo() {
    return (
        <div className="flex h-24 justify-center items-center font-logo">
            <AttachMoneyIcon /> <h3>Leilão Legal DCC App</h3><AttachMoneyIcon />
        </div>
    );
}
export default Logo;
