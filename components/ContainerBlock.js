import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import userData from "@constants/data";

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: "Henry Willmott - Developer, Creative, Crypto",
    description: `I've contributing on cool projects whilst learning development.`,
    image: "/avatar.png",
    type: "website",
    keywords: "Henry Willmott, developer, portfolio, full-stack, web development, crypto, Amsterdam, projects, JavaScript, React, Next.js",
    author: userData.name,
    ...customMeta,
  };

  // Structured data for Person schema
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": userData.name,
    "jobTitle": userData.designation,
    "url": "https://hrwillmott.com",
    "image": "https://hrwillmott.com" + userData.avatarUrl,
    "email": userData.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Amsterdam",
      "addressCountry": "NL"
    },
    "sameAs": [
      userData.socialLinks.github,
      userData.socialLinks.telegram
    ],
    "knowsAbout": [
      "JavaScript",
      "TypeScript", 
      "React",
      "Next.js",
      "Full-Stack Development",
      "Web Development",
      "Crypto",
      "Context Engineering"
    ]
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#3B82F6" />
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta name="keywords" content={meta.keywords} />
        <meta name="author" content={meta.author} />
        <meta
          property="og:url"
          content={`https://hrwillmott.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://hrwillmott.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Henry Willmott" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@hrwillmott" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <meta name="twitter:creator" content="@hrwillmott" />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <main className="dark:bg-gray-800 w-full">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
