import React from 'react'
import { postsData1 } from "../Data/Blog";
import Layout from '../components/layout/Layout'
import { Posts } from "../components/elements/Blogs";
import { Blogs } from "../components/elements/Blogs";
import { blogsData3 } from "../Data/Blog";
import { Newsletter } from "../components/elements/NewSteller";
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <Layout>
      <section className="section-box bg-gray-100">
        <div className="container mt-60 mb-60 text-center">
          <h2 className="text-heading-1 mb-20">Our Blog</h2>
          <p className="text-heading-5">Welcome to our furniture shop blog, a virtual haven for style  <br className="d-lg-block d-none" /> enthusiasts and trendsetters alike. Here, we dive into the world of <br className="d-lg-block d-none" /> furniture retail, bringing you the latest updates, tips, and inspiration to  <br className="d-lg-block d-none" /> enhance your shopping experience.</p>
        </div>
      </section>
      <Posts bigTitle="Featured Aritcles" description="From Our blog and Event fanpage" postsData={postsData1} />
      <section className='mb-30'>
        <p className='text-heading-1 color-gray-900 text-center mt-90 mb-20'>Latest Blog Posts</p>
        <p className='text-body-lead-large text-center'>From Our blog and Event fanpage</p>
        <Blogs title="" description="" blogsData={blogsData3} />
        <div className='text-center'>
          <Link to="" className='btn btn-black icon-arrow-right-white'>Load more posts</Link>
        </div>
      </section>
      <section className='mb-100'>
        <Newsletter newsletterImgUrl="/assets/imgs/template/img-newsteller-2.png" chartImgUrl="/assets/imgs/template/chart.png" />
      </section>
    </Layout>
  )
}

export default Blog