import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { useState, useEffect } from "react";
import { TermsData } from "../Data/TermsData";
import { Newsletter } from "../components/elements/NewSteller";

function Terms(): JSX.Element {
	const [isActive, setIsActive] = useState(false);
	const [isDesktop, setIsDesktop] = useState(true);
	const isBrowser = typeof window !== 'undefined';
	const [windowWidth, setWindowWidth] = useState(isBrowser ? window.innerWidth : 0);

	useEffect(() => {
		setIsDesktop(window.innerWidth > 990);
		if (isBrowser) {
			const handleResize = () => {
				setWindowWidth(window.innerWidth);
				setIsDesktop(window.innerWidth > 990);
			};
			window.addEventListener('resize', handleResize);

			return () => {
				window.removeEventListener('resize', handleResize);
			};
		}
	}, [isBrowser]);

	const handleToggle = () => {
		setIsActive(!isActive);
		console.log(windowWidth);
	};

	const handleLinkClick = (event: any) => {
		event.preventDefault();
		const targetId = event.currentTarget.getAttribute('href').split('#')[1];
		const targetElement = document.querySelector('#' + targetId);
		let topOffset;
		if (windowWidth >= 1200) {
			topOffset = -140;
		} else if (windowWidth > 990) {
			topOffset = -100;
		}
		 else if (windowWidth > 480) {
			topOffset = -550;
		} else {
			topOffset = -550;
		}

		if (targetElement) {
			const topPosition = targetElement.getBoundingClientRect().top + window.scrollY;
			window.scrollTo({
				top: topPosition + topOffset,
				behavior: 'smooth',
			});
		}
	};
	return (
		<>
			<Layout>
				<section className="section-box mt-50 mb-50">
					<div className="container text-center">
						<h1 className="text-heading-1">Terms and Conditions</h1>
					</div>
				</section>
				<section className="section-box mt-50">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 mx-auto">
								<div className="row">
									<div className="col-lg-2">
										{isDesktop && <div className="table-of-content">
											<h6 className="mb-15">Table of content</h6>
											<ul>
												{TermsData && TermsData.map(item =>
													<li key={item.id}>
														<Link to={`#section-${item.id}`} onClick={handleLinkClick}>{item.title}</Link>
													</li>
												)}
											</ul>
										</div>}
										{!isDesktop && <div className={isActive ? "has-children active table-of-content mb-30" : "has-children table-of-content mb-30"} onClick={() => handleToggle()} >
											<div className="d-flex justify-content-between align-items-center ptb-10">
												<h6>Table of content</h6>
												<span className="menu-expand">
													<i className="fi-rr-angle-small-down"></i>
												</span>
											</div>
											<ul className={isActive ? "sub-menu mx-2 mx-sm-4 mb-5 row" : "sub-menu d-none"}>
												{TermsData && TermsData.map(item =>
													<li key={item.id}>
														<Link to={`#section-${item.id}`} onClick={handleLinkClick}>{item.title}</Link>
													</li>
												)}
											</ul>
										</div>}
									</div>
									<div className="col-lg-8">
										<div className="single-detail"><img width={856} height={413} className="img-responsive bdr-16" src="/assets/imgs/page/terms/img.png" alt="Dionysus" />
											{TermsData && TermsData.map(term =>
												<div id={`section-${term.id}`} key={term.id}>
													<h6 className="mt-35 mb-25">{term.title}</h6>
													<p>{term.description}</p>
												</div>
											)}
										</div>
									</div>
									<div className="col-lg-2">
										<div className={`d-flex ${isDesktop ? "flex-column mt-150" : "flex-row justify-content-center mt-20"}`}>
											<h3 className={`text-heading-6 color-gray-400 ${isDesktop ? "mb-20" : "hidden"}`}>Share</h3>
											<Link to="https://facebook.com" className="share-social share-fb" target="_blank" rel="noreferrer" ></Link>
											<Link to="https://twitter.com" className="share-social share-tw" target="_blank" rel="noreferrer" ></Link>
											<Link to="https://www.pinterest.com" className="share-social share-pi" target="_blank" rel="noreferrer" ></Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<Newsletter newsletterImgUrl="/assets/imgs/template/img-newsteller-2.png" chartImgUrl="/assets/imgs/template/chart.png" />
			</Layout>
		</>
	)
}

export default Terms;