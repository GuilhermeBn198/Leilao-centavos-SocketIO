import Image from "next/image";
import Link from "next/link";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Logo from "./Logo";
import classNames from "classnames";

function Header() {
    return (
        <div className="flex bg-dark-slate-gray h-24 justify-between p-4 items-center ">
            <div className="flex justify-center w-24 ml-2">
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
            <Link href="/user/[id].js" className="mr-4">
                <p className="text-periwinkle text-lg font-bold ">
                    Minha Conta <AccountBoxIcon className="w-12 h-12" />
                </p>
            </Link>
        </div>
    );
}
export default Header;
