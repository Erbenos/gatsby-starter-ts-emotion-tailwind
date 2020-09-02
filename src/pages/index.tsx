import React from 'react';
import { PageProps, Link, graphql } from 'gatsby';
import Layout from '@/components/layout';
import SEO from '@/components/seo';

// Use Tailwind like so:
// import tw, { styled } from 'twin.macro';

interface IndexPageQueryResults {
  site: {
    buildTime: string;
  };
}

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`;

const IndexPage: React.FC<PageProps<IndexPageQueryResults>> = ({
  data,
  path,
}) => (
  <Layout>
    <SEO
      title="Using TypeScript"
      description="Lorem ipsum dolor sit amet."
      lang="cs"
      meta={[]}
    />
    <h1>Hello!</h1>
  </Layout>
);

export default IndexPage;
