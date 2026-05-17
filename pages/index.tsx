import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import InvoiceForm from '../components/InvoiceForm';

const Home: NextPage = () => {
  const [showGenerator, setShowGenerator] = useState(false);

  return (
    <>
      <Head>
        <title>Freelancer Invoice Generator</title>
        <meta name="description" content="Create professional invoices effortlessly" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <section className="hero">
          <h1>Freelancer Invoice Generator</h1>
          <p>
            Quickly create professional invoices, download/print them, and manage
            client billing with ease.
          </p>
          <div className="features">
            <div className="feature">
              <h3>Create invoices fast</h3>
              <p>Generate invoices in seconds with itemised tables and totals.</p>
            </div>
            <div className="feature">
              <h3>Download or print</h3>
              <p>Print invoices directly from the browser or save as PDF using your browser’s print feature.</p>
            </div>
            <div className="feature">
              <h3>Manage clients</h3>
              <p>Simple interface to handle multiple client invoices (no account needed).</p>
            </div>
          </div>
          <p className="price">$39 one‑time</p>
          <p>Pay once and use forever. No subscriptions.</p>
          {/* Replace '#' with your payment URL once available */}
          <button className="primary" onClick={() => alert('Insert payment link in the code and deploy.')}>
            Buy Now
          </button>
        </section>

        <section className="invoice-section">
          <h2>Try the Invoice Generator</h2>
          {!showGenerator && (
            <button className="primary" onClick={() => setShowGenerator(true)}>
              Generate Invoice
            </button>
          )}
          {showGenerator && <InvoiceForm />}
        </section>
      </div>
    </>
  );
};

export default Home;