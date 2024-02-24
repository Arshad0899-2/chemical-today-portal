import './CoverPage.css';
import TempAds from "../../assets/home-page-assets/temp-adv.png";
import posts from '../../utils/posts';
import Post from '../../components/ui/Post/Post';
import viewMore from '../../assets/home-page-assets/view-more.svg';
import greyImg from '../../assets/home-page-assets/grayTempImg.svg';
import blueAds from "../../assets/home-page-assets/Post-assets/balnk_ads.svg";
import blankImg from "../../assets/home-page-assets/Post-assets/blank_img.svg";
import editorsChoice from "../../assets/home-page-assets/editors-choice.png";


const CoverPage: React.FC = () => {

    const postDetails = posts;
    const singlePost = {
        id: 1,
        url: blankImg,
        heading: "Image One",
        description: "This description for Image One explains its context, the story behind the photograph, and its significance in the broader collection. This description for Image One explains its context, the story behind the photograph, and its significance in the broader co"
    };

    const sidePostStyle: React.CSSProperties = {
        width: 'auto',
        display: 'flex',
        flexDirection: 'column',
        flex: '0 1 calc(33.333% - 10px)',
        marginRight: '15px',
        marginBottom: '10px',
    }

    return (
        <>
            <img className='horizantal-ads' src={TempAds} alt="Advertize" />
            <div className='main-body'>

                <div className='cover-container'>
                    <div className='cover-item'>
                        <img src={blankImg} className='cover-item-img' />
                        <h3 className='cover-item-text'>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since</h3>
                    </div>
                    <div className='cover-details'>
                        <div className='cover-details-latest'>
                            <div className='latest-stores'>
                                Latest stories
                            </div>
                            <div className='latest-text'>
                                <div>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since</div>
                                <div>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since</div>
                                <div>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since</div>
                                <div>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since</div>
                            </div>
                        </div>
                        <div className='editors-choice'>
                            <div className='latest-stores'>
                                Editors Choice
                            </div>
                            <div className='editor-choice'>
                                <div className='editor-choice-img'>
                                    {/* if <a> is replacing with <Link> the replace the style on line 74 */}
                                    <a href="#"><img src={editorsChoice} /></a>
                                    <div className='editor-chice-btn'>Magazine</div>
                                    <div className='editor-chice-text'>Read latest issue of Business & Finance Magazine here</div>
                                </div>
                                <div className='editor-choice-img-side'>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='cover-post'>
                    <div className='cover-post-heading'>
                        <h3 className='cover-post-heading-text'>Post</h3>
                        <a href='#' className='viewMoreImg'>
                            <img src={viewMore} />
                        </a>
                    </div>
                    <div className='cover-post-items'>

                        <Post
                            redirectTo="/target-path/"
                            widthInPx="420px"
                            posts={postDetails}
                            isActive={true}
                        />
                    </div>
                    <div className='spotlight-ads'>

                    </div>
                </div>

                <div className='insights'>
                    <div className='cover-post-heading'>
                        <h3 className='cover-post-heading-text'>Insights</h3>
                        <a href='#' className='viewMoreImg'>
                            <img src={viewMore} />
                        </a>
                    </div>
                    <div className='insights-container'>
                        < div className='insights-items'>
                            <div className='insights-item'>orem Ipsum is simply dummy text of the printing</div>
                            <div className="img-text">
                                <p className='text'>Repots</p>
                            </div>
                            {/* <Link to={redirectTo} className='overlay-text'>{post.description}</Link> */}
                            <p className='overlay-text spotlight-desc'>orem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <button className='insights-btn'>Read More</button>
                        </div >
                        < div className='insights-items'>
                            <div className='insights-item'>orem Ipsum is simply dummy text of the printing</div>
                            <div className="img-text">
                                <p className='text'>Case Studies</p>
                            </div>
                            {/* <Link to={redirectTo} className='overlay-text'>{post.description}</Link> */}
                            <p className='overlay-text spotlight-desc'>orem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <button className='insights-btn'>Read More</button>
                        </div >
                        < div className='insights-items'>
                            <div className='insights-item'>orem Ipsum is simply dummy text of the printing</div>
                            <div className="img-text">
                                <p className='text'>White Paper</p>
                            </div>
                            {/* <Link to={redirectTo} className='overlay-text'>{post.description}</Link> */}
                            <p className='overlay-text spotlight-desc'>orem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <button className='insights-btn'>Read More</button>
                        </div >
                        < div className='insights-items'>
                            <div className='insights-item'>orem Ipsum is simply dummy text of the printing</div>
                            <div className="img-text">
                                <p className='text'>Repots</p>
                            </div>
                            {/* <Link to={redirectTo} className='overlay-text'>{post.description}</Link> */}
                            <p className='overlay-text spotlight-desc'>orem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <button className='insights-btn'>Read More</button>
                        </div >
                    </div>
                    <div className='insights-ads'>
                    </div>

                </div>

                <div className='spotlight'>
                    <div className='cover-post-heading'>
                        <h3 className='cover-post-heading-text'>Spotlight</h3>
                        <a href='#' className='viewMoreImg'>
                            <img src={viewMore} />
                        </a>
                    </div>
                    <div className='spotlight-body'>
                        <div className='spotlight-container'>
                            <div className='spotlight-body-post'>

                                < div style={sidePostStyle} className='postStyle' >
                                    <img src={singlePost.url} />
                                    <div className="img-text">
                                        <p className='text'>{singlePost.heading}</p>
                                    </div>
                                    {/* <Link to={redirectTo} className='overlay-text'>{post.description}</Link> */}
                                    <p className='overlay-text spotlight-desc'>{singlePost.description}</p>
                                </div >

                            </div>
                            <div className='spotlight-body-manage'>
                                <div>
                                    <p className='management-title'>Management</p>
                                </div>
                                <div className='management-items'>
                                    <div className='management-item'>
                                        <img src={blankImg} />
                                        <h6>Lorem Ipsum</h6>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since</p>
                                    </div>
                                    <div className='management-item'>
                                        <img src={blankImg} />
                                        <h6>Lorem Ipsum</h6>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since</p>
                                    </div>
                                    <div className='management-item'>
                                        <img src={blankImg} />
                                        <h6>Lorem Ipsum</h6>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since</p>
                                    </div>
                                    <div className='management-item'>
                                        <img src={blankImg} />
                                        <h6>Lorem Ipsum</h6>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since</p>
                                    </div>
                                </div>
                            </div>
                            <div className='spotlight-body-ads'>

                            </div>
                        </div>
                        <div className='spotlight-ads'>

                        </div>

                    </div>

                </div>

                <div className='cover-post'>
                    <div className='cover-post-heading'>
                        <h3 className='cover-post-heading-text'>Products</h3>
                        <a href='#' className='viewMoreImg'>
                            <img src={viewMore} />
                        </a>
                    </div>
                    <div className='cover-post-items'>
                        <Post
                            redirectTo="/target-path/"
                            widthInPx="420px"
                            posts={postDetails}
                            isActive={true}
                        />
                    </div>
                </div>

                <div className='equipment'>
                    <div className='cover-post-heading'>
                        <h3 className='cover-post-heading-text'>Equipment</h3>
                        <a href='#' className='viewMoreImg'>
                            <img src={viewMore} />
                        </a>
                    </div>
                    <div className='euip-items'>
                        <div className='euip-item'>
                            <div className='equip-img'></div>
                            <div className='equip-title'>Equipment Name</div>
                            <div className='equip-desc'>orem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                        </div>
                        <div className='euip-item'>
                            <div className='equip-img'></div>
                            <div className='equip-title'>Equipment Name</div>
                            <div className='equip-desc'>orem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                        </div>
                        <div className='euip-item'>
                            <div className='equip-img'></div>
                            <div className='equip-title'>Equipment Name</div>
                            <div className='equip-desc'>orem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                        </div>
                        <div className='euip-item'>
                            <div className='equip-img'></div>
                            <div className='equip-title'>Equipment Name</div>
                            <div className='equip-desc'>orem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                        </div>
                        <div className='euip-item'>
                            <div className='equip-img'></div>
                            <div className='equip-title'>Equipment Name</div>
                            <div className='equip-desc'>orem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                        </div>
                        <div className='euip-item'>
                            <div className='equip-img'></div>
                            <div className='equip-title'>Equipment Name</div>
                            <div className='equip-desc'>orem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                        </div>
                    </div>
                    <div className='largeAds'>
                    </div>
                </div>

                <div className='event'>
                    <div className='cover-post-heading'>
                        <h3 className='cover-post-heading-text'>Event</h3>
                        <a href='#' className='viewMoreImg'>
                            <img src={viewMore} />
                        </a>
                    </div>
                    <div className='cover-event-body'>
                        <div className='cover-event-body-img'>
                            <div className='event-img'>
                                <button className='event-img-btn'>New Industry</button>
                            </div>
                            <div className='event-img'>
                                <button className='event-img-btn'>New Industry</button>
                            </div>
                            <div className='event-img'>
                                <button className='event-img-btn'>New Industry</button>
                            </div>
                            <div className='event-img'>
                                <button className='event-img-btn'>New Industry</button>
                            </div>
                        </div>
                        <div className='event-ads'>
                        </div>
                    </div>
                </div>

                <div className='sustain'>
                    <div className='cover-post-heading'>
                        <h3 className='cover-post-heading-text'>Sustainability</h3>
                        <a href='#' className='viewMoreImg'>
                            <img src={viewMore} />
                        </a>
                    </div>
                    <div className='cover-sustainability-body'>
                        <a className='sustain-img-body'>
                            <img src={greyImg} className='sustain-img' />
                            <p className='sustain-caption'>orem Ipsum is simply dummy text of the printing</p>
                        </a>
                        <a className='sustain-img-body'>
                            <img src={greyImg} className='sustain-img' />
                            <p className='sustain-caption'>orem Ipsum is simply dummy text of the printing</p>
                        </a>
                        <a className='sustain-img-body'>
                            <img src={greyImg} className='sustain-img' />
                            <p className='sustain-caption'>orem Ipsum is simply dummy text of the printing</p>
                        </a>
                        <a className='sustain-img-body'>
                            <img src={greyImg} className='sustain-img' />
                            <p className='sustain-caption'>orem Ipsum is simply dummy text of the printing</p>
                        </a>
                        <div className='sustain-ads'>
                            <img src={blueAds} className='sustain-ads-img' />
                        </div>
                    </div>

                </div>

                <div className='cover-post'>
                    <div className='cover-post-heading'>
                        <h3 className='cover-post-heading-text'>Digitalization</h3>
                        <a href='#' className='viewMoreImg'>
                            <img src={viewMore} />
                        </a>
                    </div>
                    <div className='cover-post-items'>
                        <Post
                            redirectTo="/target-path/"
                            widthInPx="420px"
                            posts={postDetails}
                            isActive={true}
                        />
                    </div>
                </div>

            </div>
        </>
    );
};

export default CoverPage;