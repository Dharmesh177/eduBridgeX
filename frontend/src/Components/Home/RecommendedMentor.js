import React from 'react'
import "./me.css"
import Tabs from 'react-bootstrap/Tabs';
import Tag from "../Common/Tag";
import Tab from 'react-bootstrap/Tab';
import { Link } from 'react-router-dom';
function RecommendedMentor({ mentor }) {
  const Tags = ['WEB', 'REACT', 'MERN', 'COUNCELLING'];
  const visibilityStyle = {
    backgroundColor: "#D5E3FE",
    color: "#2C5EFF",
    fontSize: 15,
    fontWeight: "bold",
    margin: "4px"
  };
  return (

    <div className="popo">
      <div className="container">
        <div className="row width-card-menter " >
          <div className="main-div mt-3 p-3 col-md-8 col-sm-6">
            <div className="row">
              <div class="tw-rounded-xl tw-bg-white tw-shadow-sm tw-relative tw-overflow-hidden tw-p-5">
                <div class="part1">
                  <div className='left'>
                    {/* <img alt=" menter avatar" test_id="avatar" class="imgstyle" src="img/nv1.jpg" lazy="loaded"></img> */}
                    <img alt=" menter avatar" test_id="avatar" class="imgstyle" src="img/nv1.jpg" lazy="loaded"></img>
                  </div>

                  <div className='mid'>
                    <div className='mentor-name'>
                      <div class="mentor-name ">
                        <a href="https://app.growthmentor.com/mentors/foti-panagio" target="_blank" class="menter-link">
                          <h2 class="" style={{ fontWeight: "bold" }}>
                            {mentor?.Name}
                          </h2></a>
                      </div>
                    </div>
                    <div>
                      <div class="pos"> Founder @ GrowthMentor  </div>
                    </div>
                    <div className='dd' style={{ display: "flex", flexDirection: "column" }}>
                      <div class="desc1">
                        <span class="launage">
                          <svg viewBox="0 0 12 16" fill="none" class="svgstyle">
                            <path d="M11.5 6c0 4.5-5.5 9.5-5.5 9.5S.5 10.5.5 6a5.5 5.5 0 1111 0v0z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 8.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                            </path></svg>
                          Athens, Greece (+02:00 UTC) </span>
                        <span class="launage">
                          <svg viewBox="0 0 16 16" fill="none" class="svgstyle">
                            <path d="M3.707 1.85c.49.372.9.84 1.205 1.376.3.51.98 1.928.361 2.73-.7.904-2.728 1.21-2.728 2.044 0 .628.889 1.344 1.364 2.045a2.433 2.433 0 010 2.728 2.543 2.543 0 01-.882.841M13.91 3.382a16.228 16.228 0 01-3.865 1.209c-.712.05-.818-.535-1.363-1.364-.409-.622-1.364-1.4-1.364-2.045a2.1 2.1 0 01.089-.66" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M8 15.5a7.5 7.5 0 100-15 7.5 7.5 0 000 15z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M12.782 8.616c.029 2.1-2.708 4.725-4.1 4.157-1.22-.5-.36-1.458-.672-4.157C7.88 7.494 9.078 6.57 10.4 6.57a2.244 2.244 0 012.382 2.045v0z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                          Hindi, English </span><span class="" style={{ marginBottom: "0.5rem" }}> Surat, India </span>
                      </div></div>
                  </div>

                  <div className='right'>
                    <div class="ratingsession">
                      <div class="star">
                        <div class="tw-shrink-0">
                          <svg viewBox="0 0 18 17" fill="none" class="svgstyle" style={{ color: "orange", marginRight: "8px", marginBottom: "8px" }}>
                            <path d="M12.865 16.771c1.072.564 2.108-.187 1.903-1.383l-.77-4.483c.008.044 3.247-3.14 3.247-3.14.868-.846.473-2.063-.727-2.238l-4.502-.654c.044.007-1.983-4.057-1.983-4.057-.537-1.087-1.816-1.088-2.353 0L5.667 4.895c.02-.04-4.472.632-4.472.632-1.2.175-1.595 1.39-.727 2.238l3.257 3.175c-.031-.031-.78 4.448-.78 4.448-.205 1.195.83 1.948 1.903 1.383l4.027-2.117c-.04.021 3.99 2.117 3.99 2.117z" fill="currentColor">
                            </path></svg></div><span>
                          {mentor?.Rating}</span></div>
                      <div class="reviewsession"> 253 reviews / 458 sessions </div>
                      <div class="tw-mt-3 tw-flex tw-items-center tw-space-x-2 tw-font-semibold">
                        <span class="fees"> Free </span><svg viewBox="0 0 16 12" fill="none" class="svgstyle" style={{ color: "rgb(190 199 215 / var(1));" }}>
                          <path d="M16 3V1c0-.6-.4-1-1-1H1C.4 0 0 .4 0 1v2h16zM0 5v6c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V5H0zm6 4H2V8h4v1zm8 0h-2V8h2v1z" fill="currentColor"></path></svg></div></div>
                  </div>
                </div>
              </div>
            </div>
            <hr class=" linestyle"></hr>
            <div className="row">
              <div className='col-8 start'>
                <p class=" menparagraph" > As VP of Growth at EuroVPS, I had to make a LOT of decisions, daily. This got exhausting, especially if I had multiple good ideas on how to do something, but wasn't sure which to choose. Moments like these inspired me to build GrowthMentor. Does this resonate? If so, I'd love to try and help you.  </p>

                <Tabs defaultActiveKey="first" style={{}}>
                  <Tab eventKey="first" title="EXPERTISE">
                    <div className="row">
                      <div className="col-12 d-flex align-items-baseline justify-content-left" style={{ margin: "9px" }}>
                        {mentor.Domain1 && <Tag
                          title={mentor.Domain1}
                          customeStyle={visibilityStyle}
                        />}
                        {mentor.Domain2 && <Tag
                          title={mentor.Domain2}
                          customeStyle={visibilityStyle}
                        />}
                        {mentor.Domain3 && <Tag
                          title={mentor.Domain3}
                          customeStyle={visibilityStyle}
                        />}
                        {/* {
                          Tags.map((element, index) => {
                            return <Tag
                              title={element}
                              customeStyle={visibilityStyle}
                            />
                          })
                        } */}
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="second" title="INDUSTRY">
                    <div className="row">
                      <div className="col-12 d-flex  align-items-baseline justify-content-left" style={{ margin: "9px" }}>
                        <Tag
                          title={"CLOUD COMUTING"}
                          customeStyle={visibilityStyle}
                        />
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="third" title="TOOLS">
                    <div className="row">
                      <div className="col-12 d-flex align-items-baseline justify-content-left" style={{ margin: "9px" }}>
                        <Tag
                          title={"VS CODE"}
                          customeStyle={visibilityStyle}
                        />
                        <Tag
                          title={"PYVHARM"}
                          customeStyle={visibilityStyle}
                        />
                        <Tag
                          title={"NODE-JS"}
                          customeStyle={visibilityStyle}
                        />

                      </div>
                    </div>

                  </Tab>
                </Tabs>
              </div>
              <div className='col-4 end'>
                <div class="schedule">
                  <svg viewBox="0 0 15 15" fill="none" class="svgstyle"><path d="M13.242 1.172h-.703V0h-1.172v1.172H3.633V0H2.46v1.172h-.703A1.76 1.76 0 000 2.93v10.312C0 14.212.789 15 1.758 15h11.484A1.76 1.76 0 0015 13.242V2.93a1.76 1.76 0 00-1.758-1.758zm.586 12.07a.587.587 0 01-.586.586H1.758a.587.587 0 01-.586-.586V5.508h12.656v7.734zm0-8.906H1.172V2.93c0-.323.263-.586.586-.586h.703v1.172h1.172V2.344h7.734v1.172h1.172V2.344h.703c.323 0 .586.263.586.586v1.406z" fill="currentColor"></path>
                    <path d="M3.398 6.738H2.227V7.91h1.171V6.738zm2.344 0H4.57V7.91h1.172V6.738zm2.344 0H6.914V7.91h1.172V6.738zm2.344 0H9.258V7.91h1.172V6.738zm2.343 0h-1.171V7.91h1.171V6.738zM3.398 9.082H2.227v1.172h1.171V9.082zm2.344 0H4.57v1.172h1.172V9.082zm2.344 0H6.914v1.172h1.172V9.082zm2.344 0H9.258v1.172h1.172V9.082zm-7.032 2.344H2.227v1.172h1.171v-1.172zm2.344 0H4.57v1.172h1.172v-1.172zm2.344 0H6.914v1.172h1.172v-1.172zm2.344 0H9.258v1.172h1.172v-1.172zm2.343-2.344h-1.171v1.172h1.171V9.082z" fill="currentColor"></path></svg>
                  <span> Next available - Monday, <br /> October 10, 2022 3:30 PM IST </span></div>

                <div class="tw-mt-4 tw-flex tw-flex-col tw-space-y-2" style={{ marginTop: "1rem", display: "flex", flexDirection: "column" }}>
                  <div class="tw-inline-block">
                    <a href="https://morning-escarpment-67980.onrender.com/">
                      <button class="search-bar-button edited1">
                        Request a Call </button>
                    </a>
                  </div>
                  <button href="https://app.growthmentor.com/mentors/foti-panagio" target="_blank" class="search-bar-button edited1 edited2">
                    View Profile </button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default RecommendedMentor
