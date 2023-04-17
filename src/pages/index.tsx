import React from "react"

import { gql } from "@apollo/client"

import { AboutSection } from "@components/home/AboutSection"
import { ContactSection } from "@components/home/ContactSection"
import { CoreValuesSection } from "@components/home/CoreValuesSection"
import { HeroSection } from "@components/home/HeroSection"
import { LoadingScreen } from "@components/home/LoadingScreen"
import { RemoteSection } from "@components/home/RemoteSection"
import { SatisfactionSection } from "@components/home/SatisfactionSection"
import { SelectedWorks } from "@components/home/SelectedWorks"

import type { NextPageWithLayout } from "./_app"
import AppLayout from "../layouts/AppLayout"
import client from "../lib/apollo-client"

const Home: NextPageWithLayout = ({
  coreValues,
}: {
  coreValues: { cvTitle: string; cvSubtitle: string; cvDesc: string }[]
}) => {
  return (
    // bg-gradient-to-b from-gray-50 via-gray-50 to-gray-100
    <main className="min-h-screen bg-gray-100">
      <LoadingScreen />
      <HeroSection />
      <AboutSection />
      <CoreValuesSection coreValues={coreValues} />
      <SatisfactionSection />
      <SelectedWorks />
      <RemoteSection />
      <ContactSection />
    </main>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      fragment CoreValueFields on CoreValue {
        cvTitle
        cvSubtitle
        cvDesc
      }
      query {
        coreValues(first: 10) {
          nodes {
            ...CoreValueFields
          }
        }
      }
    `,
  })

  return {
    props: {
      coreValues: data.coreValues.nodes.slice(0, 4),
    },
  }
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <AppLayout>{page}</AppLayout>
}

export default Home
