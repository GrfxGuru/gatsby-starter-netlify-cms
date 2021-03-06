import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Img from 'gatsby-image';
import Sidebar from '../components/sidebar';
import Footer from '../components/footer';
import Card from '../components/Card';
import Search from '../components/Search';

const NavLink = props => {
	if (!props.test) {
		return <Link to={props.url}>{props.text}</Link>;
	} else {
		return <span>{props.text}</span>;
	}
};

const IndexPage = ({ pageContext }) => {
	const { group, index, first, last, pageCount } = pageContext;
	const previousUrl = index - 1 == 1 ? '' : (index - 1).toString();
	const nextUrl = (index + 1).toString();

	return (
		<Layout>
			<div className="pwArrowBackground" />
			<section className="section">
				<div className="container">
					<div className="column2">
						<div className="cardSetContainer">
							<div className="cardSet">
								<Card title={'JAM Stack'} cardDesign={'singleCard singleCardJAMstack'} text={'JavaScript API and Markdown. Learn more...'} cardLink={'/tags/jam-stack/'} />
								<Card title={'Swift'} cardDesign={'singleCard singleCardSwift'} text={'Learn about the Swift programming language.'} cardLink={'/tags/swift/'} />
								<Card title={'Videos'} cardDesign={'singleCard singleCardPodcast'} text={'Lots of tutorials covering many topics.'} cardLink={'/tags/videos/'} />
								<Card title={'Podcasts'} cardDesign={'singleCard singleCardVideo'} text={'Podcast on all things creative to inspire.'} cardLink={'/podcasts/'} />
								<Card title={'Contact'} cardDesign={'singleCard singleCardContact'} text={"Let's talk, I like people who say hello."} cardLink={'/contact/'} />
								<Card title={'Photography'} cardDesign={'singleCard singleCardPhotography'} text={'Visit my Photography Portfolio'} cardLink={'https://www.grfxmedia.com'} />
							</div>
							<Search classNames={'searchBox'} />
						</div>
						<div>
							<h1 className="indexBlogPostTitle">Blog Posts</h1>
							{group.map(({ node }) => (
								<div className="contentindex" style={{ border: '1px solid #333', padding: '2em 4em' }} key={node.id}>
									<p>
										<Link className="has-text-primary" to={node.frontmatter.slug}>
											{node.frontmatter.title}
										</Link>
										<br />
										<small>{node.frontmatter.date}</small>
									</p>
									<p>
										{node.frontmatter.blurb || node.excerpt}
										<br />
										<br />
										<Link className="button is-small" to={node.frontmatter.slug}>
											{' '}
											Keep Reading →
										</Link>
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</Layout>
	);
};
export default IndexPage;
