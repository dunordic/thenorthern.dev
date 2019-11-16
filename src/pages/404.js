import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&apos;t exist.</p>
    </Layout>
  )
}

export default NotFoundPage
