import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { useState, useEffect } from "react";
import { TermsData } from "../Data/TermsData";

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
		if (windowWidth > 990) {
			topOffset = -240;
		} else if (windowWidth > 480) {
			topOffset = -390;
		} else {
			topOffset = -360;
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
												<li>
													<Link to="#section-1"><a onClick={handleLinkClick}>Limitation of Liability</a></Link>
												</li>
												<li>
													<Link to="#section-2"><a onClick={handleLinkClick}>Licensing Policy</a></Link>
												</li>
												<li>
													<Link to="#section-3"><a onClick={handleLinkClick}>Product Compatibility</a></Link>
												</li>
												<li>
													<Link to="#section-4"><a onClick={handleLinkClick}>Delivery</a></Link>
												</li>
												<li>
													<Link to="#section-5"><a onClick={handleLinkClick}>Ownership</a></Link>
												</li>
												<li>
													<Link to="#section-6"><a onClick={handleLinkClick}>Browser Compatibility</a></Link>
												</li>
												<li>
													<Link to="#section-7"><a onClick={handleLinkClick}>Updates</a></Link>
												</li>
												<li>
													<Link to="#section-8"><a onClick={handleLinkClick}>Template Support</a></Link>
												</li>
												<li>
													<Link to="#section-9"><a onClick={handleLinkClick}>Price Changes</a></Link>
												</li>
												<li>
													<Link to="#section-10"><a onClick={handleLinkClick}>Refund Policy</a></Link>
												</li>
												<li>
													<Link to="#section-11"><a onClick={handleLinkClick}>Email &amp; Newsletter</a></Link>
												</li>
												<li>
													<Link to="#section-12"><a onClick={handleLinkClick}>License Agreement</a></Link>
												</li>
												<li>
													<Link to="#section-13"><a onClick={handleLinkClick}>Severability</a></Link>
												</li>
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
												<li className="col-6">
													<Link to="#section-1"><a onClick={handleLinkClick}>Limitation of Liability</a></Link>
												</li>
												<li className="col-6">
													<Link to="#section-2"><a onClick={handleLinkClick}>Licensing Policy</a></Link>
												</li>
												<li className="col-6">
													<Link to="#section-3"><a onClick={handleLinkClick}>Product Compatibility</a></Link>
												</li>
												<li className="col-6">
													<Link to="#section-4"><a onClick={handleLinkClick}>Delivery</a></Link>
												</li>
												<li className="col-6">
													<Link to="#section-5"><a onClick={handleLinkClick}>Ownership</a></Link>
												</li>
												<li className="col-6">
													<Link to="#section-6"><a onClick={handleLinkClick}>Browser Compatibility</a></Link>
												</li>
												<li className="col-6">
													<Link to="#section-7"><a onClick={handleLinkClick}>Updates</a></Link>
												</li>
												<li className="col-6">
													<Link to="#section-8"><a onClick={handleLinkClick}>Template Support</a></Link>
												</li>
												<li className="col-6">
													<Link to="#section-9"><a onClick={handleLinkClick}>Price Changes</a></Link>
												</li>
												<li className="col-6">
													<Link to="#section-10"><a onClick={handleLinkClick}>Refund Policy</a></Link>
												</li>
												<li className="col-6">
													<Link to="#section-11"><a onClick={handleLinkClick}>Email &amp; Newsletter</a></Link>
												</li>
												<li className="col-6">
													<Link to="#section-12"><a onClick={handleLinkClick}>License Agreement</a></Link>
												</li>
												<li className="col-6">
													<Link to="#section-13"><a onClick={handleLinkClick}>Severability</a></Link>
												</li>
											</ul>
										</div>}
									</div>
									<div className="col-lg-8">
										<div className="single-detail"><img width={856} height={413} className="img-responsive bdr-16" src="/assets/imgs/page/terms/img.png" alt="Moirai" />
											{TermsData && TermsData.map(term =>
												<div id={`section-${term.id}`} key={term.id}>
													<h6 className="mt-35 mb-25">{term.title}</h6>
													<p>{term.description}</p>
												</div>
											)}
											{/* <h6 className="mt-35 mb-25" id="section-1">Limitation of Liability</h6>
											<p>Under no circumstances shall AliThemes be liable for any direct, indirect, special, incidental or consequential damages, including, but not limited to, loss of data or profit, arising out of the use, or the inability to use, the materials on this site, even if AliThemes or an authorized representative has been advised of the possibility of such damages. If your use of materials from this site results in the need for servicing, repair or correction of equipment or data, you assume any costs thereof.</p>
											<h6 className="mt-35 mb-25" id="section-2">Licensing Policy</h6>
											<p>Moirai are released under the GNU General Public License v2 or later. Please refer to licensing policy page for licensing details.</p>
											<h6 className="mt-35 mb-25" id="section-3">Product Compatibility</h6>
											<p>The products are developed to be compatible with the latest version because we always strive to stay up-to-date with the latest version of WordPress. You might experience certain performance or functionality glitches with the products if you use any version prior to that.</p>
											<h6 className="mt-35 mb-25" id="section-4">Delivery</h6>
											<p>Your purchased product(s) information will be emailed to the email address (that you will provide) once we receive your payment. Even though this usually takes a few minutes, it may also take up to 24 hours. You can contact us through our contact page if you do not receive your email after waiting for this time period. You will also have access to your purchased products from your account in AliThemes after logging in.</p>
											<h6 className="mt-35 mb-25" id="section-5">Ownership</h6>
											<p>All the products are the property of Moirai. So you may not claim ownership (intellectual or exclusive) over any of our products, modified or unmodified. Our products come &apos;as is&apos;, without any kind of warranty, either expressed or implied. Under no circumstances can our juridical person be accountable for any damages including, but not limited to, direct, indirect, special, incidental or consequential damages or other losses originating from the employment of or incapacity to use our products.</p>
											<h6 className="mt-35 mb-25" id="section-6">Browser Compatibility</h6>
											<p>We consider it our duty to offer a great experience across most major browsers, which is why our products support the latest modern web browsers including (but not limited to) Firefox, Safari, Chrome &amp; Internet Explorer 9+. However, the performance may vary between different browsers, versions, and operating systems.</p>
											<h6 className="mt-35 mb-25" id="section-7">Updates</h6>
											<p>Our themes are constantly updated to be compatible with the latest stable version. Please ensure that you always use the most current version of our themes.</p>
											<h6 className="mt-35 mb-25" id="section-8">Template Support</h6>
											<p>Please refer to Help and Support Policy page for details.</p>
											<h6 className="mt-35 mb-25" id="section-9">Price Changes</h6>
											<p>Moirai reserves the right to modify or suspend (temporarily or permanently) a subscription at any point of time and from time to time with or without any notice.</p>
											<h6 className="mt-35 mb-25" id="section-10">Refund Policy</h6>
											<p>Please refer to Refund Policy page for details.</p>
											<h6 className="mt-35 mb-25" id="section-11">Email &amp; Newsletter</h6>
											<p>Moirai may occasionally send you emails related to the purchase of product(s) from our company. We may also send you occasional email newsletters relating to Moirai updates and promotions. We will never sell or release your email to any third party vendors. You may opt out of these emails at any time without penalty.</p>
											<h6 className="mt-35 mb-25" id="section-12">License Agreement</h6>
											<p>By purchasing our product(s), you indicate and consent that you have read and agree to the Terms &amp; Conditions listed and detailed on this page. We reserve the right to change or modify the current Terms and Conditions without prior notice or consent.</p>
											<h6 className="mt-35 mb-25" id="section-13">Severability</h6>
											<p>If any part of this agreement is declared unenforceable or invalid, all remaining clauses in this agreement shall remain binding on the customer.</p> */}
										</div>
									</div>
									<div className="col-lg-2">
										<div className={`d-flex ${isDesktop ? "flex-column mt-150" : "flex-row justify-content-center mt-20"}`}>
											<h3 className={`text-heading-6 color-gray-400 ${isDesktop ? "mb-20" : "hidden"}`}>Share</h3>
											<Link to="https://facebook.com"><a className="share-social share-fb" target="_blank" rel="noreferrer" ></a></Link>
											<Link to="https://twitter.com"><a className="share-social share-tw" target="_blank" rel="noreferrer" ></a></Link>
											<Link to="https://www.pinterest.com"><a className="share-social share-pi" target="_blank" rel="noreferrer" ></a></Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="section-box overflow-visible mb-100">
					<div className="container mt-100">
						<div className="row">
							<div className="col-lg-10 mx-auto">
								<div className="bg-6 box-newsletter position-relative">
									<div className="row">
										<div className="col-lg-5 col-md-7"><span className="text-body-capitalized color-gray-500 text-uppercase">newsletter</span>
											<h4 className="text-heading-2 mb-10 mt-10">Subscribe our newsletter</h4>
											<p className="text-body-text color-gray-500">By clicking the button, you are agreeing with our</p>
											<Link to="/page-terms"><a>Term &amp; Conditions</a></Link>
											<div className="box-form-newsletter mt-30">
												<form className="form-newsletter"><input className="input-newsletter" placeholder="Enter your mail .." /><button className="btn btn-send"></button></form>
											</div>
										</div>
										<div className="col-lg-7 col-md-5 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end">
											<div className="block-chart shape-1"><img width={255} height={193} src="/assets/imgs/template/chart.png" alt="Moirai" /></div>
											<div className="img-responsive img-newsletter">
												<img width={332} height={403} src="/assets/imgs/template/img-newsletter-1.png" alt="Moirai" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
	)
}

export default Terms;