import "../app/globals.css";

function Logo() {
    return (
        <div className="flex h-24 justify-center items-center font-logo text-5xl text-periwinkle md:text-5xl sm:text-2xl">
            <AttachMoneyIcon className="text-2xl md:text-5xl sm:text-2xl text-periwinkle" />{" "}
            <h1>Leilão Legal DCC App</h1>
            <AttachMoneyIcon className="text-2xl md:text-5xl sm:text-2xl text-periwinkle" />
        </div>
    );
}
export default Logo;
