import {cn} from "@/lib/utils";
import {useState} from "react";
import {BackgroundGradientAnimation} from "./GradientBg";
import {IoCopyOutline} from "react-icons/io5";
import MagicButton from "./MagicButton";
import GridGlobe from "./GridGlobe";
import Lottie from "react-lottie";
import animationData from "@/data/confetti.json";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["NodeJs","ReactJS", "Express", "Typescript"];
  const rightLists = ["PHP", "Laravel", "MySQL", "MongoDB"];
  const [copied, setCopied] = useState(false);
  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const handleCopy = () => {
    const text = "riyazpt@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-8"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>

          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>

          {id === 2 && <GridGlobe />}

          {id === 3 && (
            <div className="mt-4 md:mt-6 lg:mt-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <div className="text-xs md:text-sm text-white-100 mb-2">Certifications</div>
                  <div className="flex flex-wrap gap-2">
                    <a href="https://www.credly.com/badges/bf183bae-2d92-4c6e-9a5b-f45d725f9680/linked_in_profile" target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded-full bg-[#10132E] text-white-100 text-xs md:text-sm hover:bg-[#151a3a] transition">
                      AWS Certified Cloud Practitioner (CLF-C02)
                    </a>
                    <a href="https://www.linkedin.com/learning/certificates/c0d6df8578dadad44515869b2c50258f638be98b6f90d32d37de3725e3538b0c" target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded-full bg-[#10132E] text-white-100 text-xs md:text-sm hover:bg-[#151a3a] transition">
                      Atlassian Agile Project Management
                    </a>
                    <a href="https://www.coursera.org/account/accomplishments/verify/2WQKCX9AKES6?utm_source=ln&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course " target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded-full bg-[#10132E] text-white-100 text-xs md:text-sm hover:bg-[#151a3a] transition">
                      IBM Introduction to DevOps
                    </a>
                  </div>
                </div>
                <div>
                  <div className="text-xs md:text-sm text-white-100 mb-2">Impact</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#10132E] text-white-100 text-xs md:text-sm">80% faster payroll (NIC)</span>
                    <span className="px-3 py-1 rounded-full bg-[#10132E] text-white-100 text-xs md:text-sm">30% faster pages (Mideast)</span>
                    <span className="px-3 py-1 rounded-full bg-[#10132E] text-white-100 text-xs md:text-sm">+15% revenue via automations (Sacoor)</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              >
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
