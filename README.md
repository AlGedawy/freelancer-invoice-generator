import React, { useState } from 'react';

import type { NextPage } from 'next';

import Head from 'next/head';

import InvoiceForm from '../components/InvoiceForm';



const Home: NextPage = () => {

&#x20; const \[showGenerator, setShowGenerator] = useState(false);



&#x20; return (

&#x20;   <>

&#x20;     <Head>

&#x20;       <title>Freelancer Invoice Generator</title>

&#x20;       <meta name="description" content="Create professional invoices effortlessly" />

&#x20;       <link rel="icon" href="/favicon.ico" />

&#x20;     </Head>

&#x20;     <div className="container">

&#x20;       <section className="hero">

&#x20;         <h1>Freelancer Invoice Generator</h1>

&#x20;         <p>

&#x20;           Quickly create professional invoices, download/print them, and manage

&#x20;           client billing with ease.

&#x20;         </p>

&#x20;         <div className="features">

&#x20;           <div className="feature">

&#x20;             <h3>Create invoices fast</h3>

&#x20;             <p>Generate invoices in seconds with itemised tables and totals.</p>

&#x20;           </div>

&#x20;           <div className="feature">

&#x20;             <h3>Download or print</h3>

&#x20;             <p>Print invoices directly from the browser or save as PDF using your browser’s print feature.</p>

&#x20;           </div>

&#x20;           <div className="feature">

&#x20;             <h3>Manage clients</h3>

&#x20;             <p>Simple interface to handle multiple client invoices (no account needed).</p>

&#x20;           </div>

&#x20;         </div>

&#x20;         <p className="price">$39 one‑time</p>

&#x20;         <p>Pay once and use forever. No subscriptions.</p>

&#x20;         {/\* Replace '#' with your payment URL once available \*/}

&#x20;         <button className="primary" onClick={() => alert('Insert payment link in the code and deploy.')}>

&#x20;           Buy Now

&#x20;         </button>

&#x20;       </section>



&#x20;       <section className="invoice-section">

&#x20;         <h2>Try the Invoice Generator</h2>

&#x20;         {!showGenerator \&\& (

&#x20;           <button className="primary" onClick={() => setShowGenerator(true)}>

&#x20;             Generate Invoice

&#x20;           </button>

&#x20;         )}

&#x20;         {showGenerator \&\& <InvoiceForm />}

&#x20;       </section>

&#x20;     </div>

&#x20;   </>

&#x20; );

};



export default Home;

