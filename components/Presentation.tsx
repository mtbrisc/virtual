/* eslint-disable @next/next/no-img-element */
"use client";

import {
  Deck,
  Heading,
  Appear,
  UnorderedList,
  ListItem,
  fadeTransition,
} from "spectacle";
import { Page } from "@/components/Page";
import { MainTemplate } from "@/components/MainTemplate";
import VirtualizationVisualization from "@/components/VirtualizationVisualization";
import VirtualizationVariableVisualization from "@/components/VirtualizationVariableVisualization";
import dynamic from "next/dynamic";
import Link from "next/link";

export function Presentation() {
  return (
    <div className="bg-gradient-to-tr from-slate-950 via-slate-950 to-slate-900/50 w-screen h-screen fixed inset-0">
      <Deck
        transition={fadeTransition}
        className="!bg-transparent"
        theme={{
          colors: {
            primary: "white",
            secondary: "white",
            tertiary: "white",
            quaternary: "white",
          },
        }}
        template={({ slideNumber, numberOfSlides }) => (
          <MainTemplate
            slideNumber={slideNumber}
            numberOfSlides={numberOfSlides}
          />
        )}
      >
        <Page>
          <Heading>
            <span className="gradient-text text-9xl block mt-24">
              Virtualization
            </span>
          </Heading>
          <Heading className="!font-light">
            <Appear>🚀 Performant React</Appear>
            <Appear>🌌 Massive Scale</Appear>
          </Heading>
        </Page>
        <Page>
          <span className="px-11 text-2xl leading-none text-center block pt-10 font-bold uppercase">
            <span className="gradient-text">Introduction</span>
          </span>
          <Heading>About me</Heading>
          <div className="text-2xl text-center space-y-8 -mt-10">
            <Appear>
              <span className="text-6xl">🛹🎸👨‍👩‍👧‍👧</span>
            </Appear>
            <Appear>
              Software Engineer with 11 years of experience (mostly frontend
              focus)
            </Appear>
            <Appear>
              Have been at large companies like Adobe, as well as small startups
            </Appear>
            <Appear>
              <p>
                Fun fact: received a patent related to virtualization + a11y
              </p>
              <div className="m-auto h-64 aspect-video mt-6 relative">
                <img
                  src="virtualize-patent.png"
                  className="w-full"
                  alt="Virtualization patent"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
              </div>
            </Appear>
          </div>
        </Page>
        <Page>
          <Heading className="leading-none">Presentation Agenda</Heading>
          <div className="grid grid-cols-3 w-full gap-4 px-12">
            <Appear>
              <div className="aspect-[16/9] rounded-xl shadow-xl shadow-slate-500/10 flex items-center justify-center text-6xl bg-gradient-to-tr border border-sky-500/80 ring-sky-500/20 ring-2 from-sky-500/30 to-transparent">
                What
              </div>
            </Appear>
            <Appear>
              <div className="aspect-[16/9] rounded-xl shadow-xl shadow-slate-500/10 flex items-center justify-center text-6xl bg-gradient-to-tr border border-teal-500/80 ring-teal-500/20 ring-2 from-teal-500/30 to-transparent">
                Why
              </div>
            </Appear>
            <Appear>
              <div className="aspect-[16/9] rounded-xl shadow-xl shadow-slate-500/10 flex items-center justify-center text-6xl bg-gradient-to-tr border border-emerald-500/80 ring-emerald-500/20 ring-2 from-emerald-500/30 to-transparent">
                How
              </div>
            </Appear>
            <Appear>
              <div className="aspect-[16/9] rounded-xl shadow-xl shadow-slate-500/10 flex items-center justify-center text-6xl bg-gradient-to-tr border border-indigo-500/80 ring-indigo-500/20 ring-2 from-indigo-500/30 to-transparent">
                Where
              </div>
            </Appear>
            <Appear>
              <div className="aspect-[16/9] rounded-xl shadow-xl shadow-slate-500/10 flex items-center justify-center text-6xl bg-gradient-to-tr border border-purple-500/80 ring-purple-500/20 ring-2 from-purple-500/30 to-transparent">
                When
              </div>
            </Appear>
            <Appear>
              <div className="aspect-[16/9] rounded-xl shadow-xl shadow-slate-500/10 flex items-center justify-center text-6xl bg-gradient-to-tr border border-slate-500/80 ring-slate-500/20 ring-2 from-slate-500/30 to-transparent">
                🛠️
              </div>
            </Appear>
          </div>
        </Page>
        <Page>
          <span className="px-11 text-2xl leading-none pt-10 font-bold uppercase">
            <span className="gradient-text">What</span>
          </span>
          <Heading className="!text-left leading-tight">Introduction</Heading>
          <UnorderedList className="list-disc pl-12">
            <Appear>
              <ListItem className="space-x-2">
                <span className="text-sky-500">Virtualization</span> /{" "}
                <span className="text-cyan-500">Windowing</span> /{" "}
                <span className="text-teal-500">Lazy rendering</span>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <span className="text-4xl block">
                  Virtualization efficiently renders and manages large lists by
                  dynamically loading and rendering only the visible portion,
                  optimizing performance and memory usage.
                </span>
              </ListItem>
            </Appear>
          </UnorderedList>
        </Page>
        <Page>
          <span className="px-11 text-2xl leading-none pt-10 font-bold uppercase">
            <span className="gradient-text">What</span>
          </span>
          <Heading className="!text-left leading-tight !text-6xl !mt-9">
            Fixed Heights
          </Heading>
          <VirtualizationVisualization />
        </Page>
        <Page>
          <span className="px-11 text-2xl leading-none pt-10 font-bold uppercase">
            <span className="gradient-text">What</span>
          </span>
          <Heading className="!text-left leading-tight !text-6xl !mt-9">
            Variable Heights
          </Heading>
          <VirtualizationVariableVisualization />
        </Page>
        <Page>
          <span className="px-11 text-2xl leading-none pt-10 font-bold uppercase">
            <span className="gradient-text">Why</span>
          </span>
          <Heading className="!text-left leading-tight">
            Why should you virtualize?
          </Heading>
          <UnorderedList className="list-disc pl-12">
            <Appear>
              <ListItem>
                Creating scalable experiences with large data sets.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Browser performance issues occur surprisingly quickly
                (especially with complex elements)
              </ListItem>
            </Appear>
          </UnorderedList>
        </Page>
        <Page className="!relative !p-0">
          <iframe
            src="https://codepen.io/helioaxis/full/GRPabgW/00bc767df25b147737791cb1c0751fef"
            className="absolute inset-0 w-full h-full"
          />
        </Page>
        <Page>
          <span className="px-11 text-2xl leading-none pt-10 font-bold uppercase">
            <span className="gradient-text">How</span>
          </span>
          <Heading className="!text-left leading-tight">
            Implementation Techniques
          </Heading>
          <UnorderedList className="list-disc pl-12">
            <Appear>
              <ListItem>Consider your use case</ListItem>
            </Appear>
            <Appear>
              <ListItem>From scratch</ListItem>
            </Appear>
            <Appear>
              <ListItem>Using a library</ListItem>
            </Appear>
          </UnorderedList>
        </Page>
        <Page>
          <span className="px-11 text-2xl leading-none pt-10 font-bold uppercase">
            <span className="gradient-text">How</span>
          </span>
          <Heading className="!mt-32">
            Demo <br />
            <Link href="/demo/scratch">
              <span className="text-cyan-500">From Scratch</span>
            </Link>
          </Heading>
        </Page>
        <Page>
          <span className="px-11 text-2xl leading-none pt-10 font-bold uppercase">
            <span className="gradient-text">How</span>
          </span>
          <Heading className="!mt-32">
            Using a library <br />
            <Link href="/demo/tanstack">
              <span className="text-emerald-500">@tanstack/react-virtual</span>
            </Link>
            <br />
            <Link href="/demo/react-window">
              <span className="text-indigo-500">react-window</span>
            </Link>
          </Heading>
        </Page>
        <Page>
          <span className="px-11 text-2xl leading-none pt-10 font-bold uppercase">
            <span className="gradient-text">Where</span>
          </span>
          <Heading className="!text-left leading-tight">
            Real-World Examples
          </Heading>
          <Appear>
            <Heading className="!text-left leading-tight !text-6xl">
              What <em className="text-pink-500">not</em> to do
            </Heading>
          </Appear>
          <Appear>
            <Heading className="!text-left leading-tight !text-6xl">
              What <em className="text-emerald-500">to</em> do
            </Heading>
          </Appear>
        </Page>
        <Page>
          <span className="px-11 text-2xl leading-none pt-10 font-bold uppercase">
            <span className="gradient-text">When</span>
          </span>
          <Heading className="!text-left leading-tight">
            When to virtualize + Best Practices
          </Heading>
          <UnorderedList className="list-disc pl-12">
            <Appear>
              <ListItem>
                Any time there is a list that could grow to a large size
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Complexity of items lowers the threshold / size
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                It can be quite simple, so consider it early on
              </ListItem>
            </Appear>
          </UnorderedList>
        </Page>
        <Page>
          <span className="px-11 text-6xl leading-none pt-10 font-bold uppercase">
            🛠️
          </span>
          <Heading className="!text-left leading-tight">
            Tools and Resources
          </Heading>
          <UnorderedList className="list-disc pl-12">
            <Appear>
              <Link
                href="https://patterns.dev/posts/virtual-lists"
                target="_blank"
              >
                <ListItem>
                  https://<span className="text-pink-500">patterns.dev</span>
                  /posts/virtual-lists
                </ListItem>
              </Link>
            </Appear>
            <Appear>
              <Link
                href="https://million.dev/docs/virtualization"
                target="_blank"
              >
                <ListItem>
                  https://<span className="text-cyan-500">million.dev</span>
                  /docs/virtualization
                </ListItem>
              </Link>
            </Appear>
            <Appear>
              <Link
                href="https://patents.google.com/patent/US11640228B2"
                target="_blank"
              >
                <ListItem>
                  😴 https://patents.google.com/patent/
                  <span className="text-indigo-500">US11640228B2</span>
                </ListItem>
              </Link>
            </Appear>
          </UnorderedList>
        </Page>
        <Page>
          <Heading className="!text-yellow-500 !mt-32 !text-8xl">
            Thank You!
          </Heading>
          <Heading>Questions?</Heading>
          <Heading className="!text-xl gradient-text">
            https://virtual.brisc.pro
          </Heading>
        </Page>
      </Deck>
    </div>
  );
}
