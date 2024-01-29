import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title: string;
  description?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description }) => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{title}</title>
    <meta name="description" content={description || ''} />
    {/* Add other SEO-related meta tags here */}
  </Helmet>
);

export default SEO;