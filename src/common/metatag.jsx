import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import metaData from "../data/metadata.json";

const MetaTag = ({ title, description, imageUrl, imageAlt }) => (
  <Head>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={metaData.name.hostname + imageUrl} />
    <meta property="og:url"content={metaData.hostname + window.location.pathname + window.location.search} />
    <meta name="twitter:card" content="twiter" />
    <meta name="twitter:image:alt" content={imageAlt} />
    <meta name="twitter:site" content={metaData.name.twitterUsername} />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <meta name="robots" content="noindex, follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <link rel="icon" href="/favicon.png" />
  </Head>
);

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
};

export default MetaTag;