import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  children?: React.ReactNode;
}

export default function SEO({
  title,
  description,
  path = '',
  children,
}: SEOProps) {
  const url = `https://tritondroids.org${path}`;
  const fullTitle = `${title} | Triton Droids`;
  const defaultImage = 'https://tritondroids.org/og-logo.svg';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Triton Droids',
    url: 'https://tritondroids.org',
    logo: 'https://tritondroids.org/og-logo.svg',
    description:
      'Triton Droids is a UCSD student team building autonomous humanoid robots to expand global access to robotics.',
  };

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={defaultImage} />
      <meta property="og:site_name" content="Triton Droids" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={defaultImage} />

      {/* JSON-LD Structured Data */}
      {path === '/' && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}

      {children}
    </Helmet>
  );
}
