import React from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import { createUseStyles } from "react-jss";

import { scale, rhythm } from "../theme";

const Homepage = ({
	data: {
		site: {
			siteMetadata: { title, description }
		}
	}
}) => {
	const classes = useStyles();

	return (
		<>
			<Helmet>
				<title>{title}</title>
			</Helmet>

			<header className={classes.hero}>
				<div className={classes.heroInner}>
					<h1 className={classes.heroTagline}>{description}</h1>
					<div className={classes.heroCallToAction}>
						<Link
							className={classes.heroCallToActionButton}
							to="/getting-started/"
						>
							Get Started
						</Link>
					</div>
				</div>
			</header>

			<section className={classes.features}>
				<div className={classes.featureItem}>
					<span
						alt="Ready for Translations"
						className="featureImage"
						style={{
							fontSize: "100px"
						}}
					>
						🏋️
					</span>

					<h3>Feature 1 </h3>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
						quidem vel vero atque dicta, deserunt numquam officia libero animi
						quos cupiditate repudiandae. Nesciunt, ex reprehenderit. Consectetur
						reprehenderit et asperiores neque?
					</p>
				</div>
				<div className={classes.featureItem}>
					<span
						alt="Ready for Translations"
						className="featureImage"
						style={{
							fontSize: "100px"
						}}
					>
						💪
					</span>

					<h3>Feature 2</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
						consequatur corporis itaque voluptatibus dolores labore ratione
						minima maiores quae omnis at quisquam maxime reprehenderit
						aspernatur saepe, natus vitae explicabo accusamus?
					</p>
				</div>
				<div className={classes.featureItem}>
					<span
						alt="Ready for Translations"
						className="featureImage"
						style={{
							fontSize: "100px"
						}}
					>
						⚡️
					</span>

					<h3>Feature 3</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
						natus itaque libero exercitationem non, a facilis veniam impedit
						dolores minus temporibus voluptas esse tempora aliquid labore
						quidem. Sunt, ullam labore.
					</p>
				</div>
			</section>
		</>
	);
};

const maxWidth = 1000;

const useStyles = createUseStyles({
	hero: {
		backgroundColor: "#2b3137",
		padding: 48,
		paddingTop: 100
	},
	heroInner: {
		margin: "0 auto",
		maxWidth,
		padding: "0 20px"
	},
	heroTagline: {
		color: "#fff",
		...scale(2),
		margin: 0
	},
	heroCallToAction: {
		marginTop: 24
	},
	heroCallToActionButton: {
		border: "1px solid #3578e5",
		display: "inline-block",
		...scale(1.5),
		textDecoration: "none",
		textTransform: "uppercase",
		borderRadius: 8,
		borderWidth: 2,
		color: "#fff",
		fontWeight: "bold",
		padding: rhythm(0.5),

		"&:hover": {
			color: "#fff"
		}
	},
	features: {
		padding: `${rhythm(2)} 0`,
		maxWidth,
		margin: "0 auto",
		display: "flex",
		justifyContent: "center"
	},
	featureItem: {
		textAlign: "center",
		padding: rhythm(0.5)
	}
});

export default Homepage;

export const homeQuery = graphql`
	query HomeQuery {
		site {
			siteMetadata {
				title
				description
			}
		}
	}
`;
