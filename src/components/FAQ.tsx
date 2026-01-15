"use client";
import localFont from "next/font/local";
export const Inter = localFont({
  src: "../fonts/inter/static/Inter_18pt-Regular.ttf",
  variable: "--font-inter",
});

export const Satoshi = localFont({
  src: "../fonts/satoshi/fonts/Satoshi-Regular.woff2",
  variable: "--font-satoshi",
});

import Image from "next/image";

import plusCricle from "../../public/FAQs/plus-circle.svg";
import negativeCricle from "../../public/FAQs/negative-circle.svg";
import vector from "../../public/FAQs/vector.svg";
import { useState } from "react";
import Footer from "./Footer";

const FAQ = () => {
  const questions = [
    {
      id: 1,
      question:
        "Worauf muss ich achten, um über meine Website aktiv Kunden zu gewinnen?",
      answer:
        "Damit deine Website aktiv Kunden gewinnt, sollte sie professionell gestaltet, verkaufsoptimiert, mobilfreundlich und SEO-optimiert sein. Außerdem ist ein Design wichtig, das heraussticht und dich von der Konkurrenz abhebt. Achte auf klare Call-to-Actions, schnelle Ladezeiten und überzeugende Inhalte, die deine Zielgruppe direkt ansprechen.",
    },
    {
      id: 2,
      question: "Wann lohnt sich eine professionelle Website?",
      answer:
        "Damit deine Website aktiv Kunden gewinnt, sollte sie professionell gestaltet, verkaufsoptimiert, mobilfreundlich und SEO-optimiert sein. Außerdem ist ein Design wichtig, das heraussticht und dich von der Konkurrenz abhebt. Achte auf klare Call-to-Actions, schnelle Ladezeiten und überzeugende Inhalte, die deine Zielgruppe direkt ansprechen.",
    },
    {
      id: 3,
      question:
        "Wie viel Zeit muss ich selbst in die Website-Erstellung investieren?",
      answer:
        "Damit deine Website aktiv Kunden gewinnt, sollte sie professionell gestaltet, verkaufsoptimiert, mobilfreundlich und SEO-optimiert sein. Außerdem ist ein Design wichtig, das heraussticht und dich von der Konkurrenz abhebt. Achte auf klare Call-to-Actions, schnelle Ladezeiten und überzeugende Inhalte, die deine Zielgruppe direkt ansprechen.",
    },
    {
      id: 4,
      question:
        "Mit welcher Software bzw. welchem CMS wird meine Website umgesetzt?",
      answer:
        "Damit deine Website aktiv Kunden gewinnt, sollte sie professionell gestaltet, verkaufsoptimiert, mobilfreundlich und SEO-optimiert sein. Außerdem ist ein Design wichtig, das heraussticht und dich von der Konkurrenz abhebt. Achte auf klare Call-to-Actions, schnelle Ladezeiten und überzeugende Inhalte, die deine Zielgruppe direkt ansprechen.",
    },
    {
      id: 5,
      question: "Worüber läuft die Kommunikation bei einer Zusammenarbeit?",
      answer:
        "Damit deine Website aktiv Kunden gewinnt, sollte sie professionell gestaltet, verkaufsoptimiert, mobilfreundlich und SEO-optimiert sein. Außerdem ist ein Design wichtig, das heraussticht und dich von der Konkurrenz abhebt. Achte auf klare Call-to-Actions, schnelle Ladezeiten und überzeugende Inhalte, die deine Zielgruppe direkt ansprechen.",
    },
  ];

  const [openQuestionId, setOpenQuestionId] = useState<number | null>(null);

  const toggleQuestion = (id: number) => {
    setOpenQuestionId(openQuestionId === id ? null : id);
  };
  return (
    <>
      <div className="relative max-w-7xl   flex flex-col items-center gap-16 px-4 sm:px-8 ">
        <div className="flex-1 w-full flex flex-col items-center gap-16 md:gap-28">
          {/* vector image    */}

          <div className="absolute z-0 inset-0 overflow-hidden ">
            <Image
              src={vector}
              alt="vector image"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* heading and paragraph */}
          <div className="z-10 flex flex-col text-center gap-2 pt-16 md:pt-28">
            <h1
              className={`${Satoshi.className} font-bold text-[32px] md:text-[42px] text-white`}
            >
              Häufig gestellte Fragen
            </h1>
            <p
              className={`${Inter.className} font-normal text-[16px] text-[#FBFBFB]`}
            >
              Finde schnelle Antworten auf die am häufigsten gestellten Fragen.
            </p>
          </div>

          {/* questions */}
          <div className="z-10 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl  mx-auto">
            {/* left side */}
            <div className="col-span-1 max-w-[499px] md:min-h-[737px] flex flex-col md:justify-between gap-2">
              {questions.slice(0, 3).map((question) => {
                const isOpen = openQuestionId === question.id;
                return (
                  <div
                    key={question.id}
                    className="flex gap-4 px-2 py-6 lg:p-6 max-w-[499px] rounded-[20px] bg-[#1F1F25] min-h-[122px] max-h-full"
                  >
                    {/* plus and negative  circle image */}
                    <div
                      onClick={() => {
                        toggleQuestion(question.id);
                      }}
                      className="shrink-0 flex items-start w-9 mt-1"
                    >
                      <Image
                        src={!isOpen ? plusCricle : negativeCricle}
                        alt="plus-circle"
                        width={36}
                        height={36}
                        className={`transform transition-transform duration-1000 ${
                          isOpen ? "rotate-180" : "rotate-0 "
                        }`}
                      />
                    </div>
                    {/* question and answer */}
                    <div className="flex flex-col gap-4">
                      <h1
                        className={`${Satoshi.className} font-medium text-white text-[16px] lg:text-[20px]`}
                      >
                        {question.question}
                      </h1>

                      <div
                        className={`overflow-hidden transition-all duration-1000 ${
                          isOpen
                            ? "max-h-96 opacity-100 mt-2"
                            : "max-h-0 opacity-0 mt-0"
                        }`}
                      >
                        <p
                          className={`${Inter.className} font-normal text-[14px] lg:text-[16px] text-[#FBFBFB]`}
                        >
                          {question.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* right side */}
            <div className="col-span-1 max-w-[499px] md:min-h-[737px] flex flex-col md:justify-evenly gap-2">
              {questions.slice(3, 5).map((question) => {
                const isOpen = openQuestionId === question.id;
                return (
                  <div
                    key={question.id}
                    className="flex gap-4 px-2 py-6 lg:p-6 w-ful max-w-[499px] rounded-[20px] bg-[#1F1F25] min-h-[122px] max-h-full"
                  >
                    {/* plus and negative  circle image */}
                    <div
                      onClick={() => {
                        toggleQuestion(question.id);
                      }}
                      className="shrink-0 flex items-start w-9 mt-1"
                    >
                      <Image
                        src={!isOpen ? plusCricle : negativeCricle}
                        alt="plus-circle"
                        width={36}
                        height={36}
                        className={`transform transition-transform duration-1000 ${
                          isOpen ? "rotate-180 " : " rotate-0"
                        }`}
                      />
                    </div>
                    {/* question and answer */}
                    <div className="flex flex-col gap-4">
                      <h1
                        className={`${Satoshi.className} font-medium text-white text-[16px] lg:text-[20px]`}
                      >
                        {question.question}
                      </h1>
                      <div
                        className={`overflow-hidden transition-all duration-1000 ${
                          isOpen
                            ? "max-h-96 opacity-100 mt-2"
                            : "max-h-0 opacity-0 mt-0"
                        }`}
                      >
                        <p
                          className={`${Inter.className} font-normal text-[14px] lg:text-[16px] text-[#FBFBFB]`}
                        >
                          {question.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="z-10 ">
          <Footer />
        </div>
      </div>
    </>
  );
};
export default FAQ;
