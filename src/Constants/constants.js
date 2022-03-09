const projectTypes = {
    personal: "PERSONAL",
    hackathon: "HACKATHON"
};

export const miniProjects = [
    {
        name: "Animal Crossing Friendship Tracker",
        description: "A mobile companionship app for Animal Crossing players to track and calculate each of their complex friendships with villagers.",
        tag: projectTypes.personal,
        mockup: require('../Assets/acnh_cover.png'),
        to: "/acnh"
    },
    {
        name: "Dimension",
        description: "An educational 3d platform that allows viewers to experience virtual learning collaboratively and creators to deliver course content using videos.",
        tag: projectTypes.hackathon,
        mockup: require('../Assets/dimension_cover.png'),
        to: "/dimension"
    },
    {
        name: "Friendle",
        description: "A matchmaking mobile app that pairs compatible users with similar interests together and then algorithmically generates a unique hangout session.",
        tag: projectTypes.hackathon,
        mockup: require('../Assets/friendle_cover.png'),
        to: "/friendle"
    },
    {
        name: "KashKitty",
        description: "A gamified budgeting mobile app that gives the user a collection of cats with behaviours determined by the success of their budgets and transactions.",
        tag: projectTypes.hackathon,
        mockup: require('../Assets/kitty_cover.png'),
        to: "/kashkitty"
    },
    {
        name: "Aftr Markt",
        description: "A trendy online marketplace mobile app that provides cryptographically secure auctions and bids by enforcing the authenticity of all merchandise.",
        tag: projectTypes.hackathon,
        mockup: require('../Assets/market_cover.png'),
        to: "/aftrmarkt"
    },
    {
        name: "Glean",
        description: "A gamified mobile app to encourage gleaning by letting users schedule trips to farms and collect crops for donation in exchange for points.",
        tag: projectTypes.hackathon,
        mockup: require('../Assets/glean_cover.png'),
        to: "/glean"
    }
];

export const acnh = {
    title: "Animal Crossing Friendship Tracker",
    subtitle: "A mobile app for avid Animal Crossing players to track their friendships with villagers. Users input their unique interactions with each villager so that the app can determine their friendship levels and what the villager thinks of them. The goal of this app is to help the user with attaining a villager’s photo, the ultimate sign of friendship.",
    github: "https://github.com/christinetrac/ac-friends-app",
    figma: "https://www.figma.com/file/7sbm07fO5qQhoH6igoKyVb/mockups?node-id=0%3A1",
    technologies: ["REACT NATIVE", "JAVASCRIPT", "CSS", "REST API", "FIGMA"],
    highlights: [
        "This tracker is different from your typical Animal Crossing companionship app. Instead of tracking what fishes you’ve caught or what art pieces you own, this app offers a brand new insight into villager friendships. Most players don’t know how strong their bond is with their villagers because the exact mechanics behind friendship have never been revealed. This app allows users to understand their friendship levels with their villagers by calculating and inferring based on interactions and villager behaviour.",
        "I started this project nearing the end of 2020 and am still developing it when I have spare time between school and co-op. This was the first mobile app I ever developed, and was also my first time designing and mocking up an app by myself using Figma. It will be coming soon to the app store!"
    ],
    gifs: [
        require('../Assets/acnh-gif1.gif'),
        require('../Assets/acnh-gif2.gif'),
        require('../Assets/acnh-gif3.gif')
    ]
};

export const dimension = {
    title: "Dimension",
    subtitle: "Dimension is an online learning platform that uses immersive 3d streaming technology to enhance the visual-spatial experience for users. Students can subscribe to different streamers and keep track of their courses. They can watch course content live (with the option of 2d or 3d) alongside others with the ability to ask questions and talk to their peers using a chatbox.",
    github: "https://github.com/christinetrac/dimension",
    devpost: "https://devpost.com/software/d-mension",
    technologies: ["REACT", "THREE.JS", "JAVASCRIPT", "CSS", "PYTHON", "EXPRESS", "CASSANDRA", "NODE.JS", "FIGMA"],
    highlights: "Dimension won 2nd place overall at RU Hacks 2021.",
};

export const friendle = {
    title: "Friendle",
    subtitle: "Friendle is a mobile app meant to connect users and make starting friendships easier. Users create a profile deck filled with their interests and personality. They get matched with someone based on a compatibility algorithm, then a unique hangout session with music, food, games and movie reccomendations is generated. Make a friend and then match with someone new!",
    github: "https://github.com/christinetrac/friendle-frontend",
    devpost: "https://devpost.com/software/friendle-zm8i0n",
    technologies: ["REACT NATIVE", "JAVASCRIPT", "CSS", "PYTHON", "REST API", "FIREBASE", "NODE.JS", "FIGMA"],
    highlights: "Friendle won 2nd place overall and 1st place for “Telus Best Hack that Leverages Technology to Improve Mental Health” at UofT Hacks 2021.",
    gifs: [
        require('../Assets/friendle-gif1.gif'),
        require('../Assets/friendle-gif2.gif'),
        require('../Assets/friendle-gif3.gif')
    ]
};

export const market = {
    title: "Aftr Markt",
    subtitle: "Aftr Markt is a permission-less auction platform on blockchain that anyone can contribute to and verify on the Ethereum chain for full transparency. Users can put belongings up for a blind auction after their item has been verified by the authenticity system. Conversely, users can also place bids on items in the app.",
    github: "https://github.com/christinetrac/aftrmarkt",
    devpost: "https://devpost.com/software/aftr-markt",
    technologies: ["REACT NATIVE", "JAVASCRIPT", "CSS", "PYTHON", "SOLIDITY", "FLASK", "BLOCKCHAIN", "REDIS", "TWILIO", "FIGMA"],
    highlights: "Aftr Markt won 3rd place overall at Hack Dartmouth 2021.",
    gifs: [
        require('../Assets/market-gif1.gif'),
        require('../Assets/market-gif2.gif'),
        require('../Assets/market-gif3.gif')
    ]
};

export const glean = {
    title: "Glean",
    subtitle: "Glean is a gamified platform for volunteers to find information about farms, schedule and log visits, and keep track of their impact on their communities. Users input their availability and Glean uses a scheduling algorithm to match them to a farm. After harvesting, users log their produce using our crop-recognition model for points. Volunteers have a harvester rank for motivation.",
    github: "https://github.com/christinetrac/glean-frontend",
    devpost: "https://devpost.com/software/glean-aqyz6s",
    technologies: ["REACT NATIVE", "TENSORFLOW.JS", "JAVASCRIPT", "CSS", "PYTHON", "REST API", "FIRESTORE", "TWILIO", "FIGMA"],
    highlights: "Glean won 2nd place overall at HackCU 2021.",
    gifs: [
        require('../Assets/glean-gif1.gif'),
        require('../Assets/glean-gif2.gif'),
        require('../Assets/glean-gif3.gif')
    ]
};

export const kitty = {
    title: "KashKitty",
    subtitle: "Kashkitty is a cute, gamified app that combines cat collecting with budgeting. Users input their transactions and monthly budget. They can keep track of their spending habits for various categories. Each category houses different cats and depending on your transactions, cats will run away because they aren’t happy with your spending. Cats come back at the start of every month.",
    github: "https://github.com/christinetrac/kashKitty",
    devpost: "https://devpost.com/software/kashkitty",
    technologies: ["REACT NATIVE", "JAVASCRIPT", "CSS", "FIGMA"],
    highlights: "KashKitty won 1st place for “Scotiabank Best Hack for Educating Women Between the Age of 10-15 on Finance” at SheHacks 2021.",
    gifs: [
        require('../Assets/kitty-gif1.gif'),
        require('../Assets/kitty-gif2.gif'),
        require('../Assets/kitty-gif3.gif')
    ]
};

export const buddyLinks = {
    rachel: "https://www.linkedin.com/in/rac-help/",
    andrew: "https://www.linkedin.com/in/ajchoi/",
    jacob: "https://www.linkedin.com/in/jacobnishimura/"
}
