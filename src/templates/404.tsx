import { graphql } from 'gatsby';
import * as React from 'react';
import { NotFound } from './../components/404';

interface Props {
  location: Location;
  data: any;
  pageContext: { locale: string; data: any };
}

export default (props: Props) => (
  <NotFound
    locale={props.pageContext.locale}
    unicorn={props.data.unicorn.childImageSharp.fixed}
    background={props.data.lines.childImageSharp.fixed.src}
  />
);

export const query = graphql`
  query {
    unicorn: file(relativePath: { eq: "NotFound/unicorn-small.png" }) {
      childImageSharp {
        fixed(width: 327) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    lines: file(relativePath: { eq: "backgrounds/lines.png" }) {
      childImageSharp {
        fixed(quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
