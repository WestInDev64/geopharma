module.exports = {
    preset: "ts-jest",
    testEnvironment: 'node',

    // Hyper important pour les chemins absolus des import de module
    modulePaths: [
        "<rootDir>"
      ],
    moduleDirectories: ["node_modules", "src"],
    coverageDirectory: "./coverage",
    testMatch: [
        "**/?(*.)+(spec|test).ts"
    ],
    resetMocks: true,
    clearMocks: true
}