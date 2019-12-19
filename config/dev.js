const HOST = 'http://localhost:3000'
module.exports = {
    env: {
        NODE_ENV: '"development"'
    },
        defineConstants: {
    },
    weapp: {},
    h5: {
        devServer: {
            proxy: {
                '/api/': {
                target: HOST,
                pathRewrite: {
                    '^/api/': '/'
                },
                changeOrigin: true
                },
            }
        }
    }
}
