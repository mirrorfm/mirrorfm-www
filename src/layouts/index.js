import * as PropTypes from "prop-types"
import React from "react"
import {graphql, Link, PageRenderer, useStaticQuery} from "gatsby"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"
import GatsbyGramModal from "../components/modal"
import Header from "../components/header";
import "./layout.css"

class Layout extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    isModal: PropTypes.bool,
  }

  render() {
    const { location } = this.props
  //   const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
    console.log(this)
    return (
        <ModalRoutingContext.Consumer>
          {({ modal }) => (
              modal ? (
                  <GatsbyGramModal
                      location={location}
                      channels={this.props.channels}
                  >
                    {this.props.children}
                  </GatsbyGramModal>
              ) : (
                  <>
                    <Header siteTitle="ewf" genres={this.props.genres}/>
                    <div
                        style={{
                          margin: `0 auto`,
                          maxWidth: 1280,
                          padding: `0px 1.0875rem 1.50rem`,
                          paddingTop: 0,
                        }}
                    >
                      <main>{this.props.children}</main>
                      <footer style={{ "textAlign": "center" }}>
                      </footer>
                    </div>
                  </>
              )
          )}
        </ModalRoutingContext.Consumer>
    )
  }
}

export default Layout