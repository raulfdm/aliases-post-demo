const path = require("path");

module.exports = {
  webpack: (config) => {
    // Mutate the alias configuration
    config.resolve.alias = {
      // Spread everything to avoid remove any alias they might have
      ...config.resolve.alias,
      // Your custom aliases here
      helpers: path.resolve(__dirname, "src/helpers/"),
      components: path.resolve(__dirname, "src/components/"),
    };

    // Important: return the modified config
    return config;
  },
};
