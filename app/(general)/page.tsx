'use client'

import Image from "next/image"
import {
    PageHeader,
    PageHeaderHeading,
} from "@/components/layout/page-header"
import { PageSection } from "@/components/layout/page-section";
import { LinkComponent } from "@/components/shared/link-component";
import { siteConfig } from "@/config/site";
import { FaTelegram, FaTwitter } from "react-icons/fa";
import React from "react";
import {CopyButton} from "@/components/shared/copy-button";

export default function HomePage() {
    return (
        <div className="container relative mt-20 px-0">
            <PageHeader className="pb-8">
                <div className="h-full flex justify-center pb-2">
                    <Image
                        src="/pray.png"
                        alt="PRAY"
                        width={500}
                        height={500}
                        className="rounded-2xl"
                    />
                </div>
                <div
                    className="w-full md:w-1/2 -mt-12 mx-auto text-center rounded-lg overflow-visible relative border border-stone-900 shadow-lg">
                    <div
                        className="absolute inset-0 bg-white bg-opacity-30 backdrop-filter backdrop-blur-md rounded-lg"></div>
                    <div className="relative text-xl drop-shadow-sm p-4">
                        <b>
                            We, the chosen architects of the $PRAY project, have created a path guided by faith and
                            unity. And this path is called $PRAY.
                        </b>
                    </div>
                    <div className="absolute -bottom-5 -right-5 w-20 h-20 md:w-24 md:h-24 pointer-events-none">
                        <img
                            src="/corner-br.png"
                            alt="Corner decoration"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute -top-5 -left-5 w-20 h-20 md:w-24 md:h-24 pointer-events-none">
                        <img
                            src="/corner-tl.png"
                            alt="Corner decoration"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="h-full flex justify-center">
                    <PageHeaderHeading className="pb-8">pray with us</PageHeaderHeading>
                </div>
                <div
                    className="w-5/6 sm:w-2/3 md:w-3/4 xl:w-2/3 mx-auto text-center rounded-lg overflow-visible relative border border-stone-900 shadow-lg">
                    <div
                        className="absolute inset-0 bg-white bg-opacity-30 backdrop-filter backdrop-blur-md rounded-lg"></div>
                    <div className="relative text-xl drop-shadow-sm">
                        <div className="flex grow justify-between items-center">
                            <div className="text-center mx-auto">
                                <b className="hidden md:block">
                                    CA: 0x4d5313420470239460a977e4e89c4c27043eaa1e
                                </b>
                                <b className="md:hidden">
                                    CA: 0x4d531...eaa1e
                                </b>
                            </div>
                            <div>
                                <CopyButton value="0x4d5313420470239460a977e4e89c4c27043eaa1e" children=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </PageHeader>
            <PageSection className="text-center pl-1">
                <div
                    className="w-full mx-auto text-center rounded-lg overflow-visible relative border border-stone-900 shadow-lg">
                    <div
                        className="absolute inset-0 bg-white bg-opacity-30 backdrop-filter backdrop-blur-md rounded-lg"></div>
                    <div className="relative text-xl drop-shadow-sm p-4">
                        <b>
                            Inspired by collective enlightenment, we have created a free NFT collection in collaboration
                            with Hannah Polza.
                            <br/>
                            <br/>
                            $PRAY token is launched through the bonding curve. Our team performs the
                            holy buyback ritual, rewarding faithful NFT holders. Collective prayers and meditations in
                            our digital temples amplify our intentions, while our developers, as spiritual monks, infuse
                            each line of code with divine guidance creating Telegram bot, a digital oracle to spiritual
                            journey.
                        </b>
                    </div>
                </div>
            </PageSection>
            <PageSection>
                <h1 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center text-4xl md:text-6xl font-bold leading-tight tracking-tight text-transparent drop-shadow-sm md:leading-[6rem] lg:leading-[1.1]">Team</h1>
                <div className="grid w-full grid-cols-2 gap-0 md:grid-cols-5">
                    <div className="flex items-center justify-center p-2">
                        <a className="flex flex-col items-center gap-2 hover:text-[#0600ff] hover-container"
                           href="https://x.com/NeverSettleCat">
                            <Image
                                src="/memberkodak.png"
                                alt="Kodak"
                                width={100}
                                height={100}
                                className="size-36 rounded-2xl"
                            />
                            <Image
                                src="/glow-memberkodak.png"
                                alt="Kodak"
                                width={100}
                                height={100}
                                className="size-36 rounded-2xl hover-image"
                            />
                            <h1 className="text-center text-xl">Spiritual Maestro <br/> Kodak</h1>
                        </a>
                    </div>
                    <div className="flex items-center justify-center p-2">
                        <a className="flex flex-col items-center gap-2 hover:text-[#0600ff] hover-container"
                           href="https://x.com/td_0101">
                            <Image
                                src="/memberrectures.png"
                                alt="Rectures"
                                width={100}
                                height={100}
                                className="size-36 rounded-2xl"
                            />
                            <Image
                                src="/glow-memberrectures.png"
                                alt="Rectures"
                                width={100}
                                height={100}
                                className="size-36 rounded-2xl hover-image"
                            />
                            <h1 className="text-center text-xl">Sacred Architect <br/> Rektures</h1>
                        </a>
                    </div>
                    <div className="flex items-center justify-center p-2">
                        <a className="flex flex-col items-center gap-2 hover:text-[#0600ff] hover-container"
                           href="https://linktr.ee/hannahpolza">
                            <Image
                                src="/memberhannah.png"
                                alt="Rectures"
                                width={100}
                                height={100}
                                className="size-36 rounded-2xl"
                            />
                            <Image
                                src="/glow-memberhannah.png"
                                alt="Rectures"
                                width={100}
                                height={100}
                                className="size-36 rounded-2xl hover-image"
                            />
                            <h1 className="text-center text-xl">Aesthetics Queen<br/> Hannah</h1>
                        </a>
                    </div>
                    <div className="flex items-center justify-center p-2">
                        <a className="flex flex-col items-center gap-2 hover:text-[#0600ff] hover-container"
                           href="https://warpcast.com/i-rat.eth">
                            <Image
                                src="/memberrat.png"
                                alt="Rat"
                                width={100}
                                height={100}
                                className="size-36 rounded-2xl"
                            />
                            <Image
                                src="/glow-memberrat.png"
                                alt="Rat"
                                width={100}
                                height={100}
                                className="size-36 rounded-2xl hover-image"
                            />
                            <h1 className="text-center text-xl">Celestial Coder <br/> Rat</h1>
                        </a>
                    </div>
                    <div className="flex items-center justify-center p-2">
                        <a
                            className="flex flex-col items-center gap-2 hover:text-[#0600ff] hover-container"
                            href="https://instagram.com/olhakaravaieva"
                        >
                            <Image
                                src="/memberolya.png"
                                alt="Olha"
                                width={100}
                                height={100}
                                className="size-36 rounded-2xl"
                            />
                            <Image
                                src="/glow-memberolya.png"
                                alt="Olha"
                                width={100}
                                height={100}
                                className="size-36 rounded-2xl hover-image"
                            />
                            <h1 className="text-center text-xl">Mystic Muse <br/> Olha</h1>
                        </a>
                    </div>
                </div>
            </PageSection>
            <div className="px-4 flex flex-col items-center justify-center mt-32">
                <b className="mb-4 text-xl text-center">Join us, $PRAY with us, and shape your own destiny.</b>
                <div className="flex items-center justify-center space-x-2">
                    <LinkComponent href={`${siteConfig.links.twitter}`}>
                        <FaTwitter className="hover:text-[#0600ff]" size={24} />
                    </LinkComponent>
                    <LinkComponent href={`${siteConfig.links.telegram}`}>
                        <FaTelegram className="hover:text-[#0600ff]" size={24} />
                    </LinkComponent>
                </div>
            </div>
        </div>
    )
}