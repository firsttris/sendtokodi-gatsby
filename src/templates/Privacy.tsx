import { graphql } from 'gatsby';
import * as React from 'react';
import { Privacy } from './../components/Privacy';

interface Props {
  location: Location;
  data: any;
  pageContext: { locale: string };
}

export default (props: Props) => <Privacy html={props.data.markdownRemark.html} />;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { title: { eq: $slug } }) {
      html
      frontmatter {
        title
        name
      }
    }
  }
`;
