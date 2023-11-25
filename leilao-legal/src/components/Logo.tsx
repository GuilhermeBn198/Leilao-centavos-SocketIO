import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import "../app/globals.css";

function Logo() {
    return (
        <div className="flex h-24 justify-center items-center font-logo text-5xl text-periwinkle md:text-5xl sm:text-2xl">
            <AttachMoneyIcon className="text-2xl md:text-7xl sm:text-2xl text-periwinkle" />{" "}
            <div className="flex w-52">
                <h1 className=" flex text-2xl md:text-4xl sm:text-2xl text-center">Leilão Legal DCC App</h1>
            </div>
            <AttachMoneyIcon className="text-2xl md:text-7xl sm:text-2xl text-periwinkle" />
        </div>
    );
}
export default Logo;
