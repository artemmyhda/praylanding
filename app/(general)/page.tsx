'use client'

import Image from "next/image"
import {
    PageHeader,
    PageHeaderHeading,
} from "@/components/layout/page-header"
import {PageSection} from "@/components/layout/page-section";
import {LinkComponent} from "@/components/shared/link-component";
import {siteConfig} from "@/config/site";
import {FaTelegram, FaTwitter} from "react-icons/fa";
import React from "react";


export default function HomePage() {
  return (
    <div className="container relative mt-20 px-0">
        <PageHeader className="pb-8">
            <div className="h-full">
                <Image
                    src="/pray.svg"
                    alt="PRAY"
                    width={300}
                    height={300}
                    className="rounded-2xl"
                />
            </div>
            <div className="w-1/2 text-center">
                <b className="bg-gradient-to-br text-xl from-stone-950 to-black bg-clip-text text-centerx leading-tight tracking-tight text-transparent drop-shadow-sm">
                    We, the chosen architects of the $PRAY project, have created a path guided by faith and unity. And this path is called $PRAY
                </b>
            </div>
            <div className="h-full">
                <PageHeaderHeading className="pb-8">pray with us</PageHeaderHeading>
            </div>
        </PageHeader>
        <PageSection className="text-center">
            <h1></h1>
            <b>Inspired by collective enlightenment, we have birthed a free NFT collection in collaboration with Hannah Polza. $PRAY token is launched through the bonding curve. Our team performs the holy buyback ritual, rewarding faithful NFT holders. Collective prayers and meditations in our digital temples amplify our intentions, while our developers, as spiritual monks infuse each line of code with divine guidance creating Telegram bot, a digital oracle to spiritual journey.</b>
        </PageSection>
        <PageSection>
            <h1 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center text-2xl font-bold leading-tight tracking-tight text-transparent drop-shadow-sm dark:from-stone-100 dark:to-yellow-200 md:text-2xl md:leading-[6rem] lg:leading-[1.1]">Team</h1>
            <div className="grid w-full grid-cols-2 gap-2 md:grid-cols-4 md:gap-4">
                <div className="flex size-full items-center justify-center">
                    <div className="grid grid-cols-1 gap-1">
                        <Image
                            src="/memberkodak.png"
                            alt="Kodak"
                            width={100}
                            height={100}
                            className="size-32 rounded-2xl"
                        />
                        <a className="flex w-full items-center justify-center"
                           href="https://warpcast.com/sasailalka">Kodak: media</a>
                    </div>
                </div>
                <div className="flex size-full items-center justify-center">
                    <div className="grid grid-cols-1 gap-1">
                        <Image
                            src="/memberrectures.png"
                            alt="Rectures"
                            width={100}
                            height={100}
                            className="size-32 rounded-2xl"
                        />
                        <a className="flex w-full items-center justify-center"
                           href="https://warpcast.com/rektures">Rektures: baker</a>
                    </div>
                </div>
                <div className="flex size-full items-center justify-center">
                    <div className="grid grid-cols-1 gap-1">
                        <Image
                            src="/memberrat.png"
                            alt="Rat"
                            width={100}
                            height={100}
                            className="size-32 rounded-2xl"
                        />
                        <a className="flex w-full items-center justify-center"
                           href="https://warpcast.com/i-rat.eth">Rat: coder</a>
                    </div>
                </div>
                <div className="flex size-full items-center justify-center">
                    <div className="grid grid-cols-1 gap-1">
                        <Image
                            src="/memberolya.png"
                            alt="Olya"
                            width={100}
                            height={100}
                            className="size-32 rounded-2xl"
                        />
                        <a className="flex w-full items-center justify-center"
                           href="https://instagram.com/olhakaravaieva">Olya: content</a>
                    </div>
                </div>
            </div>
        </PageSection>
        <PageSection>
            <b>Join us, $PRAY with us, and shape your own destiny.</b>
            <div className="flex items-center space-x-2">
                <LinkComponent href={`${siteConfig.links.twitter}`}>
                    <FaTwitter/>
                </LinkComponent>
                <LinkComponent href={`${siteConfig.links.telegram}`}>
                    <FaTelegram/>
                </LinkComponent>
            </div>
        </PageSection>
    </div>
  )
}
