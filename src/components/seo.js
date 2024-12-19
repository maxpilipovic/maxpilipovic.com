import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ description, children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <>
      <title>Max Pilipovic</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content="Max Pilipovic" />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:creator"
        content={site.siteMetadata?.social?.twitter || ``}
      />
      <meta name="twitter:title" content="Max Pilipovic" />
      <meta name="twitter:description" content={metaDescription} />
      {children}
    </>
  )
}

export default Seo
