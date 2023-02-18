const networkConfig = {
    31337: {
        name: "hardhat",
        mintFee: 10000000000
    },
    3141: {
        name: "hyperspace",
        mintFee: 90,
    }
}

const DEVELOPMENT_NETWORKS = ["hardhat", "local-host"]



module.exports = {
    networkConfig,
    DEVELOPMENT_NETWORKS
}