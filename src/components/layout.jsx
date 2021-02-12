import React from "react"
import { graphql } from "gatsby"
import { useStaticQuery, Link} from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)
export default function Layout({ children }) {
    const data = useStaticQuery(
        graphql`
        query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `
    )
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
    <header style={{ marginBottom: `1.5rem`}}>
        <Link to="/" style={{ textShadow: `none`}}>
        <h3 style={{ display: `inline`}}>{data.site.siteMetadata.title}</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: 'right'}}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about">About</ListLink>
        </ul>
    </header>
      {children}
    </div>
  )
}
