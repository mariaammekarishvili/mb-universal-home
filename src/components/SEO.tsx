/* eslint-disable @typescript-eslint/no-explicit-any */
import { Helmet } from "react-helmet-async";

const SEO = ({ pageTitle }: any) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{pageTitle} | MB Universal Home</title>
        <meta name="robots" content="noindex, follow" />
        <meta name="description" content="MB Universal Home home improvement services" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Helmet>
    </>
  );
};

export default SEO;