const withOffline = require('next-offline');

const nextConfig = {
	workboxOpts: {
		swDest: 'static/service-worker.js',
	},
};

module.exports = withOffline(nextConfig);
