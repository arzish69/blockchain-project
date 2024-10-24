module.exports = {
  contracts_build_directory: "./src/Build",

  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ganache port
      network_id: "*",       // Match any network id
    },
    // Uncomment or add other networks if needed
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.9",      // Use a specific Solidity version
    }
  },

  mocha: {
    // timeout: 100000
  }
};
