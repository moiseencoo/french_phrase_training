const path = require("path");

function resolve(dir) {
  return path.join(__dirname, "./src", dir);
}

module.exports = {
  configureWebpack: {
    module: {
        rules: [{
            test: /\.scss$/,
            use: ['sass-loader', {
                loader: 'style-resources-loader',
                options: {
                    patterns: [
                        './src/styles/_variables.scss'
                    ]
                }
            }]
        }]
    },
    resolve: {
      alias: {
        "@": resolve("/"),
        "@components": resolve("/components"),
        "@assets": resolve("/assets")
      }
    },
  },
};
