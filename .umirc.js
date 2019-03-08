const path = require('path');
const srcPath = path.resolve('src');
export default {
    outputPath: './docs',
    hash: true,
    routes: [
        {
            path: '/', component: './layouts',
        },
    ],
    alias: {
        'Utils': path.resolve(srcPath, 'utils'),
        'Components': path.resolve(srcPath, 'components'),
        'Modules': path.resolve(srcPath, 'models'),
        'Pages': path.resolve(srcPath, 'pages'),
        'JSON': path.resolve('static', 'json'),
        'Static': path.resolve(srcPath, 'static'),
    },
    //copy: [
    //    {
    //        from: 'static/',
    //        to: 'static/',
    //    }
    //],
    plugins: [
        [
            'umi-plugin-react',
            {
                antd: false,
                dva: {
                    immer: true,
                },
                routes: {
                    exclude: [
                        /model\.(j|t)sx?$/,
                        /service\.(j|t)sx?$/,
                        /models\//,
                        /components\//,
                        /services\//,
                    ],
                },
            },
        ],
    ],
};
