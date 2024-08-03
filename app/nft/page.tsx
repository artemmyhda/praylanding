"use client"

import Image from "next/image"
import {PageSection} from "@/components/layout/page-section";
import {Button} from "@/components/ui/button";
import React from "react";

export default function PageNFT() {
    const handleMintClick = () => {
        window.location.href = "https://zora.co/collect/base:0xb3bac69e40482af1ec53cc46fd6ed8bf63b96419/1";
    };
  return (
      <div>
        <PageSection>
            <div className="w-full align-center justify-center md:align-right">
                <div className="hidden md:block">
                    <div className="w-full grid grid-cols-2 gap-5">
                        <div className="grid grid-cols-1 gap-5">
                            <div className="relative w-full">
                                <Image
                                    src="/nft.webp"
                                    alt="PRAY"
                                    layout="responsive"
                                    width={400}
                                    height={400}
                                    className="rounded-lg w-full object-cover border-0 border-stone-300 shadow-lg"
                                />
                                <Button
                                    className="pt-2 w-full mt-2 rounded-lg bg-gradient-to-r from-stone-500 to-stone-700 text-white border-0 border-stone-300 shadow-lg"
                                    onClick={handleMintClick}
                                >
                                    MINT
                                </Button>
                            </div>
                        </div>
                        <div>
                            <div className="relative">
                            <div
                                className="absolute w-11/12 inset-0 bg-white bg-opacity-30 backdrop-filter backdrop-blur-md rounded-lg border border-stone-900 shadow-lg"></div>
                                <div className="relative w-11/12 text-xl drop-shadow-sm p-4 text-center">
                                    <b>
                                        Hannah Polza is an NFT artist; her work is a blend of digital art, AI art, and
                                        post-photography.
                                        <br/>
                                        <br/>
                                        She completed several art schools and also has a degree in fashion design and
                                        worked as
                                        a fashion stylist for a while. Polza is currently active in the NFT space.
                                        <br/>
                                        <br/>
                                        Exhibited in New York, Chicago, Berlin, Dubai, and other cities.
                                    </b>
                                    <div
                                        className="absolute -bottom-10 -right-10 w-48 h-48 pointer-events-none">
                                        <img
                                            src="/corner-br.png"
                                            alt="Corner decoration"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:hidden">
                    <div className="container w-full grid grid-cols-1 gap-5 align-center mx-auto">
                        <div className="relative w-full">
                        <Image
                                src="/nft.webp"
                                alt="PRAY"
                                layout="responsive"
                                width={300}
                                height={300}
                                className="rounded-2xl w-full object-cover"
                            />
                            <Button
                                className="pt-2 w-full mt-2 rounded-lg bg-gradient-to-r from-stone-500 to-stone-700 text-white"
                                onClick={handleMintClick}
                            >
                                MINT
                            </Button>
                        </div>
                        <div className="relative">
                            <div
                                className="absolute inset-0 bg-white bg-opacity-30 border border-stone-900 shadow-lg backdrop-filter backdrop-blur-md rounded-lg"></div>
                            <div className="relative text-xl drop-shadow-sm p-2 text-center">
                                <b>
                                    Hannah Polza is an NFT artist; her work is a blend of digital art, AI art, and
                                    post-photography.
                                    <br/>
                                    <br/>
                                    She completed several art schools and also has a degree in fashion design and worked
                                    as
                                    a fashion stylist for a while. Polza is currently active in the NFT space.
                                    <br/>
                                    <br/>
                                    Exhibited in New York, Chicago, Berlin, Dubai, and other cities.
                                </b>
                                <div
                                    className="absolute -bottom-10 -right-10 w-48 h-48 pointer-events-none">
                                    <img
                                        src="/corner-br.png"
                                        alt="Corner decoration"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageSection>
      </div>
  )
}
