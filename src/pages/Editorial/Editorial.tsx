import React from 'react';
import './Editorial.css';
import viewMore from '../../assets/home-page-assets/view-more.svg';
// import EditorialFooter from '../../components/editorialfooter/EditorialFooter';
import share from '../../assets/home-page-assets/share_img.png';


const Editorial: React.FC = () => {



    return (
        <>
            <div className='editorial-body'>
                <div >
                    <img className="horizontal-ads" src="/src/assets/home-page-assets/temp-adv.png" alt="Advertize" />
                </div>

                <div className='editorial'>
                    <div className='editorial-heading'>
                        <h3 className='editorial-heading-text'>2023</h3>
                        <a href='#' className='editorialviewMoreImg'>
                            <img src={share} className="share-image" />
                        </a>
                    </div>
                </div>

                <div className='editorial-items'>
                    <div className='editorial-item'>
                        <div className='editorial-img'></div>
                        <div className='editorial-title'>19 Dec 2023</div>

                    </div>
                    {/* <div className='editorial-item'>
                            <div className='editorial-img'></div>
                            <div className='editorial-title'>19 Dec 2022</div>
                           
                        </div>
                        <div className='editorial-item'>
                            <div className='editorial-img'></div>
                            <div className='editorial-title'>19 Dec 2022</div>
                           
                        </div>
                        <div className='editorial-item'>
                            <div className='editorial-img'></div>
                            <div className='editorial-title'>19 Dec 2022</div>
                          
                        </div>
                        <div className='editorial-item'>
                            <div className='editorial-img'></div>
                            <div className='editorial-title'>19 Dec 2022</div>
                           
                        </div>
                        <div className='editorial-item'>
                            <div className='editorial-img'></div>
                            <div className='editorial-title'>19 Dec 2022</div>
                           
                        </div> */}
                </div>

                <div className='editorial'>
                    <div className='editorial-heading'>
                        <h3 className='editorial-heading-text'>2022</h3>
                        <a href='#' className='editorialviewMoreImg'>
                            <img src={viewMore} />
                        </a>
                    </div>
                </div>

                <div className='editorial-items'>
                    <div className='editorial-item'>
                        <div className='editorial-img'></div>
                        <div className='editorial-title'>19 December 2022</div>

                    </div>
                    <div className='editorial-item'>
                        <div className='editorial-img'></div>
                        <div className='editorial-title'>19 December 2022</div>

                    </div>
                    <div className='editorial-item'>
                        <div className='editorial-img'></div>
                        <div className='editorial-title'>19 December 2022</div>

                    </div>
                    <div className='editorial-item'>
                        <div className='editorial-img'></div>
                        <div className='editorial-title'>19 December 2022</div>

                    </div>
                    <div className='editorial-item'>
                        <div className='editorial-img'></div>
                        <div className='editorial-title'>19 December 2022</div>

                    </div>
                    <div className='editorial-item'>
                        <div className='editorial-img'></div>
                        <div className='editorial-title'>19 December 2022</div>

                    </div>
                </div>

                <div className='editorial'>
                    <div className='editorial-heading'>
                        <h3 className='editorial-heading-text'>2021</h3>
                        <a href='#' className='editorialviewMoreImg'>
                            <img src={viewMore} />
                        </a>
                    </div>
                </div>

                <div className='editorial-items'>
                    <div className='editorial-item'>
                        <div className='editorial-img'></div>
                        <div className='editorial-title'>19 December 2021</div>

                    </div>
                    <div className='editorial-item'>
                        <div className='editorial-img'></div>
                        <div className='editorial-title'>19 December 2021</div>

                    </div>
                    <div className='editorial-item'>
                        <div className='editorial-img'></div>
                        <div className='editorial-title'>19 December 2022</div>

                    </div>
                    <div className='editorial-item'>
                        <div className='editorial-img'></div>
                        <div className='editorial-title'>19 December 2021</div>

                    </div>
                    <div className='editorial-item'>
                        <div className='editorial-img'></div>
                        <div className='editorial-title'>19 December 2021</div>

                    </div>
                    <div className='editorial-item'>
                        <div className='editorial-img'></div>
                        <div className='editorial-title'>19 December 2021</div>

                    </div>
                </div>



                <div className='editorial'>
                    <div className='editorial-heading'>
                        <h3 className='editorial-heading-text'>2020</h3>
                        <a href='#' className='editorialviewMoreImg'>
                            <img src={viewMore} />
                        </a>
                    </div>
                </div>

                <div className='editorial-items'>
                    <div className='editorial-item'>
                        <div className='editorial-img'></div>
                        <div className='editorial-title'>19 December 2020</div>

                    </div>
                    <div className='editorial-item'>
                        <div className='editorial-img'></div>
                        <div className='editorial-title'>19 December 2020</div>

                    </div>
                    <div className='editorial-item'>
                        <div className='editorial-img'></div>
                        <div className='editorial-title'>19 December 2020</div>

                    </div>
                    <div className='editorial-item'>
                        <div className='editorial-img'></div>
                        <div className='editorial-title'>19 December 2020</div>

                    </div>
                    <div className='editorial-item'>
                        <div className='editorial-img'></div>
                        <div className='editorial-title'>19 December 2020</div>

                    </div>
                    <div className='editorial-item'>
                        <div className='editorial-img'></div>
                        <div className='editorial-title'>19 December 2020</div>

                    </div>
                </div>

            </div>
        </>
    );
};

export default Editorial;



