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
    },
    {
        name: "Dimension",
        description: "An educational 3d platform that allows viewers to experience virtual learning collaboratively and creators to deliver course content using videos.",
        tag: projectTypes.hackathon,
        mockup: require('../Assets/dimension_cover.png'),
    },
    {
        name: "Friendle",
        description: "A matchmaking mobile app that pairs compatible users with similar interests together and then algorithmically generates a unique hangout session.",
        tag: projectTypes.hackathon,
        mockup: require('../Assets/friendle_cover.png'),
    },
    {
        name: "KashKitty",
        description: "A gamified budgeting mobile app that gives the user a collection of cats with behaviours determined by the success of their budgets and transactions.",
        tag: projectTypes.hackathon,
        mockup: require('../Assets/kitty_cover.png'),
    },
    {
        name: "Aftr Markt",
        description: "A trendy online marketplace mobile app that provides cryptographically secure auctions and bids by enforcing the authenticity of all merchandise.",
        tag: projectTypes.hackathon,
        mockup: require('../Assets/market_cover.png'),
    },
    {
        name: "Glean",
        description: "A gamified mobile app to encourage gleaning by letting users schedule trips to farms and collect crops for donation in exchange for points.",
        tag: projectTypes.hackathon,
        mockup: require('../Assets/glean_cover.png'),
    }
];
