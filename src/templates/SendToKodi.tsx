import { graphql, navigate } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import { SendToKodi } from './../components/SendToKodi';
import './../assets/fontawesome/css/all.css';
import 'bootstrap/dist/css/bootstrap.css';

interface Props {
  location: Location;
  data: any;
  pageContext: { locale: string; data: any };
}


export default (props: Props) => {
  const onLanguageClick = (pathname: string) => {
    pathname.includes('/de/')
      ? navigate(`/en/`)
      : navigate(`/de/`);
  };

  const languageButton = (<button
    type="button"
    className="btn"
    onClick={() => onLanguageClick(props.location.pathname)}
    style={{ cursor: 'pointer' }}
  >
    {props.pageContext.locale === 'de' ? 'EN' : 'DE'}
  </button>)

  return (
    <div>
      <Helmet>
        <title>SendToKodi</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="SendToKodi Youtube Soundcloud Mixcloud Youtube-dl"
        />
        <link rel="canonical" href={`http://teufel-it.de/${props.pageContext.locale}/sendtokodi`} />
      </Helmet>
      
      <SendToKodi
        locale={props.pageContext.locale}
        languageButton={languageButton}
        reviews={props.data.reviews.nodes}
        sendToKodiScreen1={props.data.sendToKodi1.childImageSharp.fixed}
        sendToKodiScreen2={props.data.sendToKodi2.childImageSharp.fixed}
        sendToKodiScreen3={props.data.sendToKodi3.childImageSharp.fixed}
        sendToKodiScreen4={props.data.sendToKodi4.childImageSharp.fixed}
        logo={props.data.logo.childImageSharp.fixed}
        background={props.data.lines.childImageSharp.fixed.src}
      />
    </div>
  )
};

export const query = graphql`
  query {
    sendToKodi1: file(relativePath: { eq: "SendToKodi/1.jpg" }) {
      childImageSharp {
        fixed(width: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    sendToKodi2: file(relativePath: { eq: "SendToKodi/2.jpg" }) {
      childImageSharp {
        fixed(width: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    sendToKodi3: file(relativePath: { eq: "SendToKodi/3.jpg" }) {
      childImageSharp {
        fixed(width: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    sendToKodi4: file(relativePath: { eq: "SendToKodi/4.jpg" }) {
      childImageSharp {
        fixed(width: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    logo: file(relativePath: { eq: "SendToKodi/logo.jpg" }) {
      childImageSharp {
        fixed(width: 175) {
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
    reviews: allReview {
      nodes {
        title
        text
        rating
        name
      }
    }
  }
`;
