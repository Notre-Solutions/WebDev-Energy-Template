import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import MasonryComp from "../components/masonry"
import Img from "gatsby-image"

const Landing = ({ data }) => {
  const {
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img8,
  } = data.markdownRemark.frontmatter.landingPage
  return (
    <Layout current="landing">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="card">
              <div className="card-block">
                <h2>About me</h2>
                <div className="row">
                  <div className="col-md-4">
                    <p>
                      <Img
                        className="img-responsive"
                        alt=""
                        fluid={img1.childImageSharp.fluid}
                      />
                    </p>
                  </div>
                  <div className="col-md-8">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      {" "}
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-block">
                <h2>Projects</h2>
                <div className="row">
                  <div className="col-md-4">
                    <Img
                      className="img-responsive"
                      alt=""
                      fluid={img2.childImageSharp.fluid}
                    />
                    <h3 className="h5">Amelia App</h3>
                    <p>June 2017</p>
                  </div>
                  <div className="col-md-4">
                    <Img
                      className="img-responsive"
                      alt=""
                      fluid={img3.childImageSharp.fluid}
                    />
                    <h3 className="h5">Portland</h3>
                    <p>March 2017</p>
                  </div>
                  <div className="col-md-4">
                    <Img
                      className="img-responsive"
                      alt=""
                      fluid={img4.childImageSharp.fluid}
                    />
                    <h3 className="h5">Denz for Nilon</h3>
                    <p>Jan 2017</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-block">
                <h2>Work</h2>
                <div className="work-experience">
                  <small className="date">2017-2015</small>
                  <h3 className="h5 date-title">
                    Web developer -{" "}
                    <a
                      href="http://en.orson.io"
                      title="Create professionnal website"
                    >
                      Orson.io
                    </a>
                  </h3>

                  <p>
                    Leo vel orci porta non pulvinar neque laoreet suspendisse
                    interdum. Vitae ultricies leo integer malesuada nunc.
                    Imperdiet proin fermentum leo vel orci porta non pulvinar
                    neque. Fermentum leo vel orci porta non. Posuere
                    sollicitudin aliquam ultrices sagittis. Aliquam faucibus
                    purus in massa tempor nec.
                  </p>
                </div>

                <div className="work-experience">
                  <small className="date">2017-2015</small>
                  <h3 className="h5 date-title">
                    Web developer -{" "}
                    <a href="http://mashup-template.com" title="">
                      Mashup Template
                    </a>
                  </h3>

                  <p>
                    Fermentum leo vel orci porta non. Posuere sollicitudin
                    aliquam ultrices sagittis. Aliquam faucibus purus in massa
                    tempor nec.
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-block">
                <h2>Education</h2>
                <div className="row">
                  <div className="col-md-4">
                    <div className="education-experience">
                      <small className="date">2017-2015</small>
                      <h3 className="h5 date-title">Design Master</h3>
                      <p>Chicago University</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="education-experience">
                      <small className="date">2015-2012</small>
                      <h3 className="h5 date-title">Metrics Degree</h3>
                      <p>Ecole 87</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="education-experience">
                      <small className="date">2012-2011</small>
                      <h3 className="h5 date-title">Motion Design Course</h3>
                      <p>Pascal’s Lee Studio</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-block">
                <h2>Language</h2>
                <div className="row">
                  <div className="col-md-4">
                    <div className="language-experience">
                      <h3 className="h5">
                        English <small>Bilingual</small>
                      </h3>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="language-experience">
                      <h3 className="h5">
                        French <small>Fluent</small>
                      </h3>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="language-experience">
                      <h3 className="h5">
                        Russian <small>Beginner</small>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-block">
                <h2>Projects</h2>
                <div
                  id="carousel-example-generic"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  {/* <!-- Wrapper for slides --> */}
                  <div className="carousel-inner" role="listbox">
                    <div className="item active">
                      <Img
                        className="img-responsive"
                        alt=""
                        fluid={img5.childImageSharp.fluid}
                      />
                      <div className="carousel-caption">
                        <h3 className="h5">Jules for Bastion</h3>
                        <p>2017</p>
                      </div>
                    </div>
                    <div className="item">
                      <Img
                        className="img-responsive"
                        alt=""
                        fluid={img6.childImageSharp.fluid}
                      />
                      <div className="carousel-caption">
                        <h3 className="h5">Jules for Bastion</h3>
                        <p>2017</p>
                      </div>
                    </div>

                    <div className="item">
                      <Img
                        className="img-responsive"
                        alt=""
                        fluid={img8.childImageSharp.fluid}
                      />
                      <div className="carousel-caption">
                        <h3 className="h5">Jules for Bastion</h3>
                        <p>2017</p>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Indicators --> */}
                  <ol className="carousel-indicators">
                    <li
                      data-target="#carousel-example-generic"
                      data-slide-to="0"
                      className="active"
                    ></li>
                    <li
                      data-target="#carousel-example-generic"
                      data-slide-to="1"
                    ></li>
                    <li
                      data-target="#carousel-example-generic"
                      data-slide-to="2"
                    ></li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-block">
                <h2>Social Network</h2>
                <div className="row">
                  <div className="col-md-3">
                    <p className="social-buttons">
                      <a href="https://twitter.com/" title="">
                        <span className="social-round-icon fa-icon">
                          <i className="fa fa-twitter"></i>
                        </span>
                        @David_Folley
                      </a>
                    </p>
                  </div>
                  <div className="col-md-3">
                    <p className="social-buttons">
                      <a href="https://www.linkedin.com/" title="">
                        <span className="social-round-icon fa-icon">
                          <i className="fa fa-linkedin"></i>
                        </span>
                        David Folley
                      </a>
                    </p>
                  </div>
                  <div className="col-md-3">
                    <p className="social-buttons">
                      <a href="https://dribbble.com/" title="">
                        <span className="social-round-icon fa-icon">
                          <i className="fa fa-dribbble"></i>
                        </span>
                        David Folley
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-block">
                <h2>Contact</h2>
                <form action="" className="reveal-content">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      rows={5}
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <button type="submit" className=" btn btn-primary">
                      Send message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Landing

export const pageQuery = graphql`
  query LandingPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        landingPage {
          img1 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          img2 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          img3 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          img4 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          img5 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          img6 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          img8 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
