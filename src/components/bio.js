/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

function Bio({author}) {
  if (!(author && author.profileImg && author.profileImg.childImageSharp && author.profileImg.childImageSharp.fixed)) {return null;}
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={author.profileImg.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Written by <strong>{author.name}</strong>.
        {author.blurbet}
        {` `}
        <a href={`https://twitter.com/${author.socials.twitter}`}>
          You should follow {author.pronouns.them} on Twitter
        </a>
      </p>
    </div>
  )
}

export default Bio
