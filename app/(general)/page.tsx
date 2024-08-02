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

export default function HomePage() {
    return (
        <div className="container relative mt-20 px-0">
            <PageHeader className="pb-8">
                <div className="h-full flex justify-center">
                    <Image
                        src="/pray.svg"
                        alt="PRAY"
                        width={300}
                        height={300}
                        className="rounded-2xl"
                    />
                </div>
                <div className="w-full md:w-1/2 mx-auto text-center rounded-lg overflow-hidden relative border-0 border-stone-300 shadow-lg">
                    <div className="absolute inset-0 bg-white bg-opacity-0 backdrop-filter backdrop-blur-md rounded-lg"></div>
                    <div className="relative text-xl drop-shadow-sm p-4">
                        <b>
                            We, the chosen architects of the $PRAY project, have created a path guided by faith and unity. And this path is called $PRAY
                        </b>
                    </div>
                </div>
                <div className="h-full flex justify-center">
                    <PageHeaderHeading className="pb-8">pray with us</PageHeaderHeading>
                </div>
            </PageHeader>
            <PageSection className="text-center">
                <div className="w-full text-center rounded-lg overflow-hidden relative border-0 border-stone-300 shadow-lg mx-auto">
                    <div className="absolute inset-0 bg-white bg-opacity-0 backdrop-filter backdrop-blur-md rounded-lg"></div>
                    <div className="relative text-xl drop-shadow-sm p-4">
                        <b>
                            Inspired by collective enlightenment, we have birthed a free NFT collection in collaboration with Hannah Polza. $PRAY token is launched through the bonding curve. Our team performs the holy buyback ritual, rewarding faithful NFT holders. Collective prayers and meditations in our digital temples amplify our intentions, while our developers, as spiritual monks, infuse each line of code with divine guidance creating Telegram bot, a digital oracle to spiritual journey.
                        </b>
                    </div>
                </div>
            </PageSection>
            <PageSection>
                <h1 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center text-2xl font-bold leading-tight tracking-tight text-transparent drop-shadow-sm md:text-2xl md:leading-[6rem] lg:leading-[1.1]">Team</h1>
                <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-4">
                    <div className="flex items-center justify-center p-4">
                        <a className="flex flex-col items-center gap-2 hover:text-pink-500"
                           href="https://warpcast.com/sasailalka">
                            <Image
                                src="/memberkodak.png"
                                alt="Kodak"
                                width={100}
                                height={100}
                                className="size-36 rounded-2xl"
                            />
                            <p className="text-center">Kodak: media</p>
                        </a>
                    </div>
                    <div className="flex items-center justify-center p-4">
                        <a className="flex flex-col items-center gap-2 hover:text-pink-500"
                           href="https://warpcast.com/rektures">
                            <Image
                                src="/memberrectures.png"
                                alt="Rectures"
                                width={100}
                                height={100}
                                className="size-36 rounded-2xl"
                            />
                            <p className="text-center">Rektures: baker</p>
                        </a>
                    </div>
                    <div className="flex items-center justify-center p-4">
                        <a className="flex flex-col items-center gap-2 hover:text-pink-500"
                           href="https://warpcast.com/i-rat.eth">
                            <Image
                                src="/memberrat.png"
                                alt="Rat"
                                width={100}
                                height={100}
                                className="size-36 rounded-2xl"
                            />
                            <p className="text-center">Rat: coder</p>
                        </a>
                    </div>
                    <div className="flex items-center justify-center p-4">
                        <a className="flex flex-col items-center gap-2 hover:text-pink-500" href="https://instagram.com/olhakaravaieva">
                            <Image
                                src="/memberolya.png"
                                alt="Olya"
                                width={100}
                                height={100}
                                className="size-36 rounded-2xl"
                            />
                            <p className="text-center">Olya: content</p>
                        </a>
                    </div>
                </div>
            </PageSection>
            <PageSection className="text-center">
                <div className="flex flex-col items-center justify-center">
                    <b className="mb-4">Join us, $PRAY with us, and shape your own destiny.</b>
                    <div className="flex items-center justify-center space-x-2">
                        <LinkComponent href={`${siteConfig.links.twitter}`}>
                            <FaTwitter />
                        </LinkComponent>
                        <LinkComponent href={`${siteConfig.links.telegram}`}>
                            <FaTelegram />
                        </LinkComponent>
                    </div>
                </div>
            </PageSection>
        </div>
    )
}