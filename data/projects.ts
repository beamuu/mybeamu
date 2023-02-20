const githubLogo =
  "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png";

export const projects: { [key: string]: Project } = {
  kraikub: {
    title: "KRAIKUB",
    description: "Kasetsart University Identity Provider",
    href: "https://github.com/kraikub",
    imgSrc: "https://avatars.githubusercontent.com/u/113832333?s=200&v=4",
    demoUrl: "https://kraikub.com",
    labels: [
      "Fullstack",
      "OAuth 2.0",
      "OpenID Connect",
      "Nextjs",
      "Redis",
      "MongoDB",
      "Go",
      "Chakra UI",
      "GitHub Actions",
      "DigitalOcean",
      "Cloudflare",
      "Nginx",
      "Kubernetes",
      "Google Cloud Platform",
    ],
  },
  katrade: {
    title: "Katrade",
    description: "Items trading platform for Kasetsart University Student.",
    href: "https://github.com/katrade/katrade-website",
    imgSrc: "https://avatars.githubusercontent.com/u/86873259?s=200&v=4",
    disableImgBorder: true,
    labels: [
      "Frontend",
      "Reactjs",
      "HTML",
      "CSS",
      "Bootstrap",
      "Styled-components",
      "Axios",
      "Firebase",
      "Material UI",
    ],
  },
  "web3-twitter": {
    title: "Web3 Twitter",
    description: "Simple implementation of Twitter using Web 3.0 stacks.",
    href: "https://github.com/beamuu/web3-twitter",
    imgSrc: "https://cdn-icons-png.flaticon.com/512/124/124021.png",
    disableImgBorder: true,
    labels: [
      "Web 3.0",
      "Blockchain",
      "Solidity",
      "IPFS",
      "Pinata",
      "Etherjs",
      "Hardhat",
      "Nextjs",
    ],
  },
  "swap-clone": {
    title: "Pancakeswap Clone (V2)",
    description: "Decentralized Exchange",
    href: "https://github.com/beamuu/swap-frontend",
    imgSrc: githubLogo,
    labels: [
      "Web 3.0",
      "Blockchain",
      "Solidity",
      "Truffle",
      "Web3js",
      "Liquidity Pool",
      "Reactjs",
    ],
  },
  medsproject: {
    title: "MEDPROJECTS",
    description: "Stores medical record on a blockchain.",
    href: "https://github.com/beamuu/medprojects",
    demoUrl: "https://medprojects9.web.app/",
    imgSrc: githubLogo,
    labels: [
      "Web 3.0",
      "Blockchain",
      "Solidity",
      "Truffle",
      "Web3js",
      "Reactjs",
    ],
  },
  cryptoprices: {
    title: "Cryptoprices",
    description: "Display cryptocurrency prices from Bitkub API",
    href: "https://github.com/beamuu/cryptoprices",
    imgSrc: githubLogo,
    demoUrl: "https://cryptonutchanonc.web.app/",
    labels: ["Frontend", "Reactjs", "Styled-components", "Bootstrap"],
  },
  keybong: {
    title: "KEYBONG",
    description: "A Hand Gesture Keyboard",
    href: "https://github.com/beamuu/hand-keyboard",
    imgSrc: githubLogo,
    demoUrl: "https://youtu.be/ECyumn-3JE4",
    labels: ["Backend", "Python", "Websocket", "ESP32"],
  },
  authy: {
    title: "Authy ID Card",
    description: "Smart magnetic card authentication system",
    href: "https://github.com/beamuu/authy-practicum",
    imgSrc: githubLogo,
    demoUrl: "https://www.youtube.com/watch?v=JorYEMPMWxw",
    labels: ["Frontend", "HTML", "CSS"],
  },
  lemoncat: {
    title: "Lemoncat",
    description: "Publicly Shared Notepad",
    href: "https://github.com/beamuu/lemoncat",
    imgSrc: githubLogo,
    labels: ["Frontend", "HTML", "CSS"],
  },
};

export const eduProjects: { [key: string]: Project } = {
  k8s: {
    title: "Try k8s",
    description: "Basic tutorial for Kubernetes",
    href: "https://github.com/beamuu/try-k8s",
    imgSrc: githubLogo,
    labels: ["DevOps", "Kubernetes"],
  },
  "gin-redis": {
    title: "Gin-Redis",
    description: "Tutorial of using RESTful API with Redis",
    href: "https://github.com/beamuu/gin-redis",
    imgSrc: githubLogo,
    labels: ["Go", "Gin", "Redis"],
  },
  "reentrancy": {
    title: "Reentrancy",
    description: "Learn how reentracy attack works in smart contract",
    href: "https://github.com/beamuu/nft-contract-assignment",
    imgSrc: githubLogo,
    labels: ["Solidity", "Ethereum", "Smart Contract Security"],
  },
  "go-ethereum-events": {
    title: "Go Ethereum Events",
    description: "Learn how to subscribe to events on a smart contract",
    href: "https://github.com/beamuu/go-ethereum-events",
    imgSrc: githubLogo,
    labels: ["Go", "Ethereum", "Smart Contract"],
  },

}