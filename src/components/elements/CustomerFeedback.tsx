
const CustomerFeedback = () => {
    const feedbackData = [
        {
            title: 'So good experience',
            comment: 'The best purchase I\'ve made in recent years. I didn\'t think I could pull off that color so well!',
            name: 'Wade Warren',
            profession: 'Student',
            image: '/assets/imgs/page/homepage2/user-img-1.png'
        },
        {
            title: 'Highly Recommend',
            comment: '"The price is a little higher than I expected, but the quality is god-tier. You get what you pay for at its finest."',
            name: 'Brooklyn Simmons',
            profession: 'Designer',
            image: '/assets/imgs/page/homepage2/user-img-2.png'
        },
        {
            title: 'Wonderful',
            comment: "'The service couldn't be better. I really couldn't have expected more. From item suggestions to final delivery.'",
            name: 'John Wilson',
            profession: 'Content Creator',
            image: '/assets/imgs/page/homepage2/user-img-3.png'
        },
        {
            title: 'Wonderful',
            comment: 'The sense of style is elegant and classy. The way furnitures are put together is fashionable and trendy.',
            name: 'Albert Flores',
            profession: 'Software Engineer',
            image: '/assets/imgs/page/homepage2/user-img-4.png'
        }
    ]

    return (
        <section className="section-box">
            <div className="container mt-120">
                <div className="bdrd-58 box-gray-100">
                    <div className="row">
                        <div className="col-lg-2 col-sm-1 col-12" />
                        <div className="col-lg-8 col-sm-10 col-12 text-center">
                            <span className="text-heading-1 color-gray-900 mt-30">
                                Customers Feedback
                            </span>
                            <p className="text-body-lead-large color-gray-600 mt-20">
                                What are our client talk about us?
                            </p>
                        </div>
                        <div className="col-lg-2 col-sm-1 col-12" />
                    </div>
                    <div className="container mt-70">
                        <div className="row">
                            {feedbackData.map((feedback, index) => (
                                <div key={index} className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="card-grid-style-2 hover-up mb-20">
                                        <h5 className="text-heading-5 color-gray-900">{feedback.title}</h5>
                                        <p className="text-body-text color-gray-600 mt-20 text-comment">{`"${feedback.comment}"`}</p>
                                    <div className="box-img-user">
                                        <div className="img-user">
                                                <img width={80} height={80} src={feedback.image} alt={feedback.name} />
                                        </div>
                                            <h4 className="text-body-lead color-gray-900 mb-5">{feedback.name}</h4>
                                            <p className="text-body-text-md">{feedback.profession}</p>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CustomerFeedback