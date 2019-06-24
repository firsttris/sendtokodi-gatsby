import * as React from 'react';

const Lines = require('../assets/images/backgrounds/lines.png');

const containerStyle: React.CSSProperties = {
  backgroundImage: `url(${Lines})`,
  position: 'absolute',
  width: '100%',
  paddingTop: '100px'
};

interface Props {
  html: any;
}

export const Privacy = (props: Props) => (
  <div style={containerStyle}>
    <div className="container">
      <div className="row">
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: props.html }} />
      </div>
    </div>
  </div>
);
