import React from 'react'

const Main = () => {
    return(
        <div id='main'>
            <div id='motto-box'
                style= {{
                    backgroundImage: 'url(https://glisten-windows-cleaning.s3.us-east-2.amazonaws.com/background-photos/lake-background.jpg)'
                }}
            >
                {/* <h1 id='motto'>Make Those Windows Glisten</h1>
                <p>
                    Founded in 2020, and serving Utah County, Glisten Window Cleaning is at the forefront of window cleaning technology. Our technicians use a deionized water cleaning system that is guaranteed not to leave streaks or spots, and will leave your windows clean and clear for much longer than windows cleaned with squeegees and soap. 
                </p> */}
            </div>
            <div id='body'>
                <div id='body-box'>
                    <div id='text-box'> 
                        <h2>The Glisten Promise</h2>
                        <p id='paragraph'>
                            When you use Glisten Window Cleaning's service, you get a degree of professionalism, reliability, and an attention to detail that you'll be very hard pressed to find elsewhere.
                        </p>
                        <div id='hours'>
                            {/* <div id='icon'>
                                <i className="fas fa-clock fa-8x" ></i>
                            </div> */}
                            <div id='hours-subdiv'>
                                <h2>Hours</h2>
                                <p>We are available Monday-Saturday 8AM-5PM</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='body-box'>
                    <div id='text-box'>   
                        <h2>Estimates</h2>
                        <p>
                            In order to provide the best pricing possible for each individual job, we prefer to provide an estimate onsite, rather than over the phone or via text. Text or call us at (385)-999-9481 with your full name and address, and we will coordinate with you to schedule a time for us to come out to your house and make the estimate in person. 
                        </p>
                        <p>
                            If we don't reply right away, not to worry! We are probably busy providing the best possible service to another satisfied customer, and will be in touch with you within 24 hours. 
                        </p>
                    </div>
                    <p id='small-script'>
                        *At this time, our service is limited to residents of Utah County
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main