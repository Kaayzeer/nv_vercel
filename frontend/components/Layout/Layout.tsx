import * as React from "react";
import Head from "next/head";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";

//stripe imports globally
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);
export interface ILayoutProps {
  children: React.ReactNode;
  title: string | "Next Venture | follow your dreams";
  description: string | "Find the latest and other domains";
  keywords: string | "domain, web, cheap, diverse";
}

export default function Layout({
  children,
  title,
  keywords,
  description,
}: ILayoutProps) {
  return (
    <>
      <Elements stripe={stripePromise}>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
        </Head>
        <Nav />
        {children}
        <Footer />
      </Elements>
    </>
  );
}
