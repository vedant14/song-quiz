import Head from "next/head";
import React from "react";

export function SEO({ title, description }) {
  if (title === undefined) {
    title = "Songtastic";
  } else {
    title = title + " | Songtastic";
  }
  if (description === undefined) {
    description = "Fun quiz to test your song knowlege!";
  }
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:url" content="https://quiz.songtastic.xyz/" />
      <meta property="og:type" content="website" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="Anishi Raj" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="https://quiz.songtastic.xyz/meta.png"
      />
    </Head>
  );
}
