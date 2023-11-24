import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import "../app/globals.css";

function Logo() {
    return (
        <div className="flex h-24 justify-center items-center font-logo text-6xl text-periwinkle">
            <AttachMoneyIcon className="text-6xl text-periwinkle"/> <h3 className="text-periwinkle">Leilão Legal DCC App</h3><AttachMoneyIcon className="text-6xl text-periwinkle" />
        </div>
    );
}
export default Logo;
