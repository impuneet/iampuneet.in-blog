import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import {SEO}  from '../components/SEO'
import Layout from '../components/layout'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Helmet>
        <meta charSet='utf-8' />
        <meta name="google-site-verification" content="7jBjfenjp4Lz2E2kUVj1V260CUmibcXulcrEQPolsGQ" />
        <title>{post.frontmatter.title} &bull; Puneet Sharma</title>
        <SEO title={post.frontmatter.title}
        description={post.frontmatter.description}
          ></SEO>
      </Helmet>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <hr />
      <p>
        If you liked this post, get updates about new posts by signing up to my
        infrequent newsletter.
      </p>
      <form
        action='https://tinyletter.com/iampuneet'
        method='post'
        target='popupwindow'
        onsubmit="window.open('https://tinyletter.com/iampuneet', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
      >
        <input
          type='text'
          name='email'
          id='tlemail'
          placeholder='hi@whatever.com'
        />
        <input className='submit' type='submit' value='Subscribe' />
      </form>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
