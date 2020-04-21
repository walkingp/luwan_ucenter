const path = require('path');

function resolve(dir) {
    // 路径可能与你的项目不同
    return path.join(__dirname, dir)
}

module.exports = {
    devServer: {
        hot: true,
        inline: true,
        progress: true,
        port: 8008,
        host: '127.0.0.1',
        open: true,
        // 跨域
        proxy: {
            '/api/': {
                target: 'http://localhost',
                changeOrigin: true
            }
        }
    },
    chainWebpack: config => {
        config.module
            .rule('svg')
            .uses.clear()
        config.module
            .rule('svg1')
            .test(/\.svg$/)
            .use('svg-sprite')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()
            .include
            .add(resolve('src/assets/svg'))
            .end()
    }
}