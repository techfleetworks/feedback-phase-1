import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import { useProducersQuery } from '../generated';
import { Navbar, Footer } from '../components';
// import EvaluationFormCheese from '../components/EvaluationFormCheese';
import Hero from '../components/Hero';
import FeatureSection from '../components/FeatureSection';
import HowItWorksSection from '../components/HowItWorksSection';
import PricingSection from '../components/PricingSection';

const Home: NextPage = () => {
  const { data, error, loading } = useProducersQuery();

  if (loading) return <main className={styles.main}>Loading...</main>;
  if (error) return <main className={styles.main}>{error.message}</main>;

  // From here, { data } can be referenced
  return (
    <div>
      <Navbar />
      <Hero />
      <FeatureSection />
      <HowItWorksSection />
      <PricingSection />
      <Footer />
      {/* <div>
        <div className="text-center">
          <h1>Hello, {data?.producers?.data[0].attributes?.name}</h1>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
