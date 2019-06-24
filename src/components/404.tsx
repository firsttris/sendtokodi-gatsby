import { Link } from 'gatsby';
import Img, { FixedObject } from 'gatsby-image';
import * as React from 'react';
import { getTranslatedLabel } from './../translations/provider';

const containerStyle: React.CSSProperties = {
  textAlign: 'center',
  fontFamily: 'monospace',
  position: 'absolute',
  width: '100%',
  height: '100vh',
  paddingTop: '100px'
};

const spacerStyle: React.CSSProperties = { height: '80px' };

interface Props {
  locale: string;
  unicorn: FixedObject;
  background: FixedObject;
}

export const NotFound = (props: Props) => (
  <div style={{ ...containerStyle, ...{ backgroundImage: `url(${props.background})` } }}>
    <Img fixed={props.unicorn} />
    <h2>{getTranslatedLabel('ERROR_TEXT', props.locale)}</h2>
    <div>{getTranslatedLabel('ERROR_NOT_FOUND', props.locale)}</div>
    <div>{getTranslatedLabel('ERROR_CONTACT_US', props.locale)}</div>
    <div>
      <div className="spacer" style={spacerStyle} />
      <div>
        <b>{getTranslatedLabel('CONTACT_TITLE', props.locale)}</b>
      </div>
      <div>
        <a href="https://www.teufel-it.de">www.teufel-it.de</a>
      </div>
      <div>
        <a href="mailto:info@teufel-it.de">info@teufel-it.de</a>
      </div>
      <br />
      <Link to={`/${props.locale}/`} className="btn btn-dark">
        {getTranslatedLabel('ERROR_START', props.locale)}
      </Link>
    </div>
  </div>
);
