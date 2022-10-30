import { useContext, useState } from "react";
import Link from "next/link";
import Galaxygon from "../../context/context";

const NavBar = () => {
  const { connect, wallet, provider, signer } = useContext(Galaxygon);

  return (
    <div className="py-6 px-28 2xl:px-52 flex items-center justify-between bg-brand-darkBlue shadow-2xl z-[100]">
      <div className="flex items-center gap-10">
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="text-lg font-extrabold tracking-tight logo text-white font-orbitron">
              Galaxygon
            </div>
          </div>
        </Link>
      </div>
      <div
        onClick={() => connect()}
        className="bg-gradient-to-tr from-brand-lightBlue to-brand-lightCyan uppercase text-white font-semibold px-6 py-2 rounded-xl cursor-pointer font-orbitron hover:opacity-90"
      >
        {wallet
          ? wallet.accounts[0].address.substring(0, 5) +
            "..." +
            wallet.accounts[0].address.substring(39)
          : "Connect"}
      </div>
    </div>
  );
};

export default NavBar;
