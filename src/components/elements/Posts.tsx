import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';


interface PostData {
	title: string;
	imageUrl: string;
	author: string;
	authorAvatar: string;
	date: string;
	link: string;
	bgColor: string;
	decription?: string;
}


interface PostsProps {
	bigTitle: string;
	description: string;
	postsData?: PostData[]
}

const Posts: React.FC<PostsProps> = ({ bigTitle, description, postsData }) => {
	const [mainPosts, setMainPosts] = useState<PostData[] | undefined>();
	const [subPosts, setSubPosts] = useState<PostData[] | undefined>();

	useEffect(() => {
		postsData && setMainPosts(postsData.slice(0, 2));
		postsData && setSubPosts(postsData.slice(2, 6));
	}, [postsData]);

	return (
		<div className="section-box mt-80">
			<div className="container mt-70">
				<div className="row">
					<div className="col-lg-1 col-sm-1 col-12"></div>
					<div className="col-lg-10 col-sm-10 col-12 text-center">
						<h2 className="text-heading-1 color-gray-900 mb-10">{bigTitle}</h2>
						<p className="text-body-lead-large color-gray-600 mt-20">{description}</p>
					</div>
					<div className="col-lg-1 col-sm-1 col-12"></div>
				</div>
			</div>
			<div className="container mt-60">
				<div className="row">
					{mainPosts && mainPosts.map((post, i) =>
						<div className="col-lg-4 col-sm-6 pr-30 mb-30" key={i}>
							<div className="card-grid-style-4">
								<div className={`grid-4-img mb-20 ${post.bgColor}`}>
									<Link to={post.link}><img width={396} height={465} src={post.imageUrl} alt="Moirai" /></Link>
								</div>
								<Link to={post.link} className="text-heading-5 color-gray-900">{post.title}</Link>
								<p className="text-body-text color-gray-500 mt-10">{post.decription}</p>
								<div className="blog-img-user">
									<div className="img-user img-user-round"><img width={56} height={56} src={post.authorAvatar} alt="Moirai" /></div>
									<h4 className="text-heading-6 color-gray-900">{post.author}</h4>
									<p className="text-body-small color-gray-500">{post.date}</p>
								</div>
							</div>
						</div>
					)}
					<div className="col-lg-4 col-sm-12 pr-30 mb-30">
						{subPosts && subPosts.map((post, i) =>
							<div className="card-list-style-1" key={i + 2}>
								<Link to={post.link} className="text-heading-6">{post.title}</Link>
								<div className="blog-img-user">
									<div className="img-user img-user-round"><img width={41} height={41} src={post.authorAvatar} alt="Moirai" /></div>
									<h4 className="text-body-lead color-gray-500">{post.author}</h4>
									<p className="text-body-small color-gray-500">{post.date}</p>
								</div>
								<div className={`style-1-img ${post.bgColor}`}>
									<Link to={post.link}><img width={110} height={110} src={post.imageUrl} alt="Moirai" /></Link>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Posts;