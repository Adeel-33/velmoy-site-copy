import Image from "next/image";
import verified from "../../public/collaboration/verified.svg";
import figma from "../../public/collaboration/figma.svg";
import perspective from "../../public/collaboration/Perspective.svg";
import wegrowth from "../../public/collaboration/WeGrowth.svg";
import leadfeed from "../../public/collaboration/Leadfeed.svg";
import pandadoc from "../../public/collaboration/Pandadoc.svg";
import webflow from "../../public/collaboration/webflow.svg";
import meta from "../../public/collaboration/meta.svg";

const Collaboration = () => {
  const collaborations = [
    {
      id: 1,
      img: figma,
      title: "Figma",
    },
    {
      id: 2,
      img: perspective,
      title: "Perspective",
    },
    {
      id: 3,
      img: wegrowth,
      title: "WeGrowth",
    },
    {
      id: 4,
      img: leadfeed,
      title: "Leadfeed",
    },
    {
      id: 5,
      img: pandadoc,
      title: "Pandadoc",
    },
  ];

  return (
    <>
      {/* Our Partners And Collaboration */}
      <section className="space-y-12 px-4 sm:px-8 py-12">
        {/* heading and paragraph */}
        <div className="text-left sm:text-center relative z-10">
          <h1 className="font-bold text-[32px] md:text-[42px] text-[#000D0D]">
            Unsere Partner & Kooperationen
          </h1>
          <p className="font-normal text-[16px] text-[#4E4E4E]">
            Strategische Partnerschaften, die Vertrauen, Expertise und Qualität
            zeigen
          </p>
        </div>

        <div className="flex flex-col md:flex-row  gap-8 items-center justify-center z-10 ">
          {/* cards  */}
          <div className="relative z-10 col-span-1 flex flex-row flex-wrap  md:flex-col gap-2 items-center justify-center">
            {/* card 1 */}
            <div className="max-w-[411] ">
              <Image src={webflow} alt="webflow" />
            </div>

            {/* card 2  */}
            <div className="w-full max-w-[411] ">
              <Image src={meta} alt="meta" />
            </div>
          </div>

          {/* partners */}
          <div className="relative z-10 flex flex-col gap-4 w-full max-w-[416px]">
            {collaborations.map((c) => (
              <div
                key={c.id}
                className="px-4 flex justify-between items-center w-full md:w-[416px] h-[72px] rounded-[15px] bg-[#FFFFFF] border border-[#EBEBF2]"
              >
                <div className="flex  items-center gap-4">
                  <Image alt={c.title} src={c.img} width={41} height={41} />
                  <h1 className="font-bold text-[16px] text-[#000D0D]">
                    {c.title}
                  </h1>
                </div>
                <Image
                  alt="verified icon"
                  src={verified}
                  height={23}
                  width={23}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Collaboration;
