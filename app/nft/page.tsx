"use client"

import { motion } from "framer-motion"

import Image from "next/image"
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/config/design"
import { WalletAddress } from "@/components/blockchain/wallet-address"
import { WalletBalance } from "@/components/blockchain/wallet-balance"
import { WalletEnsName } from "@/components/blockchain/wallet-ens-name"
import { IsWalletConnected } from "@/components/shared/is-wallet-connected"
import { IsWalletDisconnected } from "@/components/shared/is-wallet-disconnected"
import {PageHeader, PageHeaderHeading} from "@/components/layout/page-header";
import {PageSection} from "@/components/layout/page-section";
import {Button} from "@/components/ui/button";

export default function PageNFT() {
    const handleMintClick = () => {
        window.location.href = "https://zora.co/collect/base:0xb3bac69e40482af1ec53cc46fd6ed8bf63b96419/1";
    };
  return (
      <div>
        <PageSection>
            <div className="container w-full align-center justify-center md:align-right">
                <div className="hidden md:block">
                    <div className="w-full grid grid-cols-2 gap-5 align-right">
                        <div className="w-72 grid grid-cols-1 gap-5 align-right">
                            <Image
                                src="/nft.webp"
                                alt="PRAY"
                                width={300}
                                height={300}
                                className="rounded-2xl"/>
                            <Button className="pt-2" onClick={handleMintClick}>MINT</Button>
                        </div>
                        <b>
                            Hannah Polza is an NFT artist, her work is a blend of digital art, art using AI and
                            post-photography.
                            <br/>
                            <br/>
                            She completed several art schools and also have a degree in fashion design, and I worked as
                            a fashion stylist for a while. Polza is currently active in the NFT space.
                            <br/>
                            <br/>
                            Exhibited in New York, Chicago, Berlin, Dubai and other cities.
                        </b>
                    </div>
                </div>
                <div className="md:hidden">
                    <div className="container w-80 grid grid-cols-1 gap-5 align-center">
                        <Image
                            src="/nft.webp"
                            alt="PRAY"
                            width={300}
                            height={300}
                            className="rounded-2xl"/>
                        <Button className="pt-2" onClick={handleMintClick}>MINT</Button>
                        <b>
                            Hannah Polza is an NFT artist, her work is a blend of digital art, art using AI and
                            post-photography.
                            <br/>
                            <br/>
                            She completed several art schools and also have a degree in fashion design, and I worked as
                            a fashion stylist for a while. Polza is currently active in the NFT space.
                            <br/>
                            <br/>
                            Exhibited in New York, Chicago, Berlin, Dubai and other cities.
                        </b>
                    </div>
                </div>
            </div>
        </PageSection>
      </div>
  )
}
