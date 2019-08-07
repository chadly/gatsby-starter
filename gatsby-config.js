/* eslint-disable import/no-commonjs */

const siteMetadata = {
	title: "My Site",
	description: "My site with stuff"
};

const plugins = [
	"gatsby-plugin-react-helmet",
	"gatsby-plugin-jss",
	{
		resolve: "gatsby-plugin-typography",
		options: {
			pathToConfigModule: "src/theme"
		}
	}
];

if (process.env.GOOGLE_ANALYTICS_TRACKING_ID) {
	plugins.push({
		resolve: "gatsby-plugin-google-analytics",
		options: {
			trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID
		}
	});
}

plugins.push("gatsby-plugin-netlify"); // needs to be last

module.exports = { siteMetadata, plugins };
