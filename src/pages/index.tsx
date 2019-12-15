import { navigate } from 'gatsby';
import * as React from 'react';


export default (): JSX.Element => {
  if (typeof window !== 'undefined') {
    let locale = 'en';
    if (navigator.language.includes('de')) {
      locale = 'de';
    }
    navigate(`/${locale}/`);
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div className="fas fa-5x fa-spinner fa-spin" style={{ color: 'Red', margin: 'auto 0' }} />
    </div>
  );
};
