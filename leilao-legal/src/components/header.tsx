import Image from "next/image";
import Link from "next/link";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Logo from "./Logo";

function Header() {
    return (
        <div className="flex bg-dark-slate-gray h-24 justify-between p-4 items-center ">
            <div className="flex justify-center h-15 w-18 ml-2">
                <Link href="/">
                    <Image
                        src="/logo-dcc-01.png"
                        width={100}
                        height={100}
                        alt="Picture of the author"
                        layout="fixed"
                    />
                </Link>
            </div>
            <Logo />
            <Link href="/" className="mr-4">
                <p className="text-periwinkle text-lg">
                    Minha Conta <AccountBoxIcon className="w-12 h-12" />
                </p>
            </Link>
        </div>
    );
}
export default Header;
