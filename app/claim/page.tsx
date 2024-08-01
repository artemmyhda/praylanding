"use client";

import { motion } from "framer-motion";

import { FADE_DOWN_ANIMATION_VARIANTS } from "@/config/design";
import { WalletAddress } from "@/components/blockchain/wallet-address";
import { WalletBalance } from "@/components/blockchain/wallet-balance";
import { WalletEnsName } from "@/components/blockchain/wallet-ens-name";
import { IsWalletConnected } from "@/components/shared/is-wallet-connected";
import { IsWalletDisconnected } from "@/components/shared/is-wallet-disconnected";

export default function PageClaim() {
    return (
        <div className="blur-parent-container">
            <div className="blurred-overlay">
                <div className="centered-message">
                    <p>Feature coming soon...</p>
                </div>
            </div>
        </div>
    );
}
