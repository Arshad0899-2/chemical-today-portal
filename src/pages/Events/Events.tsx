import './Events.css';

const Events: React.FC = () => {

    return (
        <>

            <div className="events-header">

                <div className="events-header-body">
                    <div className='events-header-cont-1'>
                        <h3 className='webinar'>WEBINAR ON</h3>
                        <h3 className='events-header-info'>
                            Simulating Corrosion & Corrosion Protection for Oil and Gas Equipment
                        </h3>
                        <p className='event-time'>March 10th 2023 (11:00 a.m to 1:00 p.m)</p>
                        <button className="btn join-now-btn w-10">Join Now</button>
                    </div>
                    <div className='event-box'>
                        <div className='event-boxs'>
                            <div className='event-box-number'></div>
                            <div className='event-box-number'></div>
                            <div className='event-box-number'></div>
                            <div className='event-box-number'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='events-posts'>
                <div className='events-posts-insider'>
                    <div className='events-details'>
                        <div className='events-detail-icon'></div>
                        <p className='events-details-heading'>
                            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                        </p>
                        <p className='events-details-desc'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div className='events-details'>
                        <div className='events-detail-icon'></div>
                        <p className='events-details-heading'>
                            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                        </p>
                        <p className='events-details-desc'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div className='events-details'>
                        <div className='events-detail-icon'></div>
                        <p className='events-details-heading'>
                            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                        </p>
                        <p className='events-details-desc'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </div>
            <div>

                <div className="join">
                    <input className="join-item btn rounded-none" type="radio" name="options" aria-label="ORP Summit 2022" />
                    <input className="join-item btn rounded-none" type="radio" name="options" aria-label="Radio 2" />
                    <input className="join-item btn rounded-none" type="radio" name="options" aria-label="Radio 3" />
                </div>

            </div>
        </>
    )
}

export default Events;