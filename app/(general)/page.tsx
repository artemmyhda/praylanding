'use client'

import Image from "next/image"
import {
    PageHeader,
    PageHeaderHeading,
} from "@/components/layout/page-header"
import {PageSection} from "@/components/layout/page-section";
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


const tokenomicsChartData = {
    labels: ["Liquidity", "Team", "Influencers", "Airdrops", "Treasury"],
    datasets: [
        {
            data: [69, 6.9, 5, 5, 14.1],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(54, 192, 54, 0.8)',
                'rgba(162, 162, 23, 0.8)',
                'rgba(162, 162, 162, 0.8)',
            ],
            borderWidth: 1,
        },
    ],
};

const tokenomicsChartOptions = {
    plugins: {
        legend: {
            display: true,
            position: "right" as "right",
        }
    }
}

ChartJS.register(ArcElement, Tooltip, Legend);

export default function HomePage() {
  return (
    <div className="container relative mt-20 px-0">
        <PageHeader className="pb-8">
            <div className="h-full">
                <Image
                    src="/pray.svg"
                    alt="PRAY"
                    width={800}
                    height={800}
                    className="size-64 rounded-2xl"
                />
            </div>
            <div className="h-full">
                <PageHeaderHeading>pray with us</PageHeaderHeading>
            </div>
        </PageHeader>
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
                           href="https://warpcast.com/">Olya: content</a>
                    </div>
                </div>
            </div>
        </PageSection>
        <PageSection>
            <h1 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center text-2xl font-bold leading-tight tracking-tight text-transparent drop-shadow-sm dark:from-stone-100 dark:to-yellow-200 md:text-2xl md:leading-[6rem] lg:leading-[1.1]">Tokenomics</h1>
            <div className="flex size-full items-center justify-center">
                <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2">
                    <div className="w-full">
                        <Pie
                            data={tokenomicsChartData}
                            options={tokenomicsChartOptions}
                        />
                    </div>
                    <div className="w-full pt-8">
                        <p>With God&apos;s help and your prayers, we will soon write a beautiful text about our tokenomics.</p>
                    </div>
                </div>
            </div>
        </PageSection>
    </div>
)
}
