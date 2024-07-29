"use client"

import { motion } from "framer-motion"

import { FADE_DOWN_ANIMATION_VARIANTS } from "@/config/design"
import { WalletAddress } from "@/components/blockchain/wallet-address"
import { WalletBalance } from "@/components/blockchain/wallet-balance"
import { WalletEnsName } from "@/components/blockchain/wallet-ens-name"
import { IsWalletConnected } from "@/components/shared/is-wallet-connected"
import { IsWalletDisconnected } from "@/components/shared/is-wallet-disconnected"
import {PageHeader, PageHeaderHeading} from "@/components/layout/page-header";

export default function PageClaim() {
  return (
    <div>
        <PageHeader>
            <PageHeaderHeading>Under construction...</PageHeaderHeading>
        </PageHeader>
    </div>
  )
}
