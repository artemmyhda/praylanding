// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Site
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
interface SiteConfig {
  name: string
  title: string
  emoji: string
  description: string
  localeDefault: string
  links: {
    twitter: string
    telegram: string
  }
}

export const siteConfig: SiteConfig = {
  name: "Pray",
  title: "Pray with us on BASE",
  emoji: "🙏",
  description:
    "Official PRAY on base memecoin website.",
  localeDefault: "en",
  links: {
    twitter: "https://x.com/prayers_club",
    telegram: "https://t.me/prayers_club",
  },
}

export const DEPLOY_URL =
  "https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fturbo-eth%2Ftemplate-web3-app&project-name=TurboETH&repository-name=turbo-eth&demo-title=TurboETH&env=NEXTAUTH_SECRET,DATABASE_URL&envDescription=How%20to%20get%20these%20env%20variables%3A&envLink=https%3A%2F%2Fgithub.com%2Fturbo-eth%2Ftemplate-web3-app%2Fblob%2Fintegrations%2F.env.example"
