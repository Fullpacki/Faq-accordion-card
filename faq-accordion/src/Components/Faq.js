import Supervisorillustration from "../images/icon-supervisor.svg";
import CalcIllustration from "../images/icon-calculator.svg";
import KarmaIllustation from "../images/icon-karma.svg";
import TeamBuilderIllustration from "../images/icon-team-builder.svg";

function Faq() {
  return (
    <div className="flex flex-col px-8 py-5 xl:py-0 gap-4 xl:gap-8 justify-center items-center">
      {/* Header content */}
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl text-center text-[#bbbabd] xl:text-4xl xl:font-light">
          Reliable, efficient delivery
        </h2>
        <h1 className="text-2xl text-center font-semibold xl:text-4xl text-[#4B495F]">
          Powered by Technology
        </h1>
      </div>
      <p className="text-sm text-center xl:w-1/2 text-[#bbbabd] xl:text-base">
        Our artificial intelligence powered tools use millions of project data{" "}
        points to ensure that your project is successful
      </p>
      {/* Header content */}

      {/* Card content */}
      <div className="flex flex-col xl:flex-row justify-center items-center gap-6 mt-5 xl:gap-8">
        {/* Card */}
        <div className="flex flex-col justify-between p-6 gap-6 bg-white rounded-xl relative shadow-xl border-t-[0.4em] border-[#9dd8d7] xl:max-w-xs xl:min-h-[15em]">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold text-[#4B495F]">Supervisor</h3>
            <p className="text-sm text-gray-500 ">
              Minotors activity to indetify project roadblocks
            </p>
          </div>
          <div className="flex flex-row justify-end">
            <img className="w-14" src={Supervisorillustration} alt="" />
          </div>
        </div>

        {/* Div who takes 2 cards for css build */}
        {/* Card */}
        <div className="flex flex-col gap-6 xl:gap-10 xl:max-w-xs">
          <div className="flex flex-col justify-between p-6 gap-6 bg-white rounded-xl relative shadow-xl border-t-[0.4em] border-[#d17b86] xl:min-h-[15em]">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold text-[#4B495F]">Team Builder</h3>
              <p className="text-sm text-gray-500 ">
                Scans our talent network to create the optimal team for your
                project
              </p>
            </div>
            <div className="flex flex-row justify-end">
              <img className="w-14" src={TeamBuilderIllustration} alt="" />
            </div>
          </div>
          {/* EndCard */}
          <div className="flex flex-col justify-between p-6 gap-6 bg-white rounded-xl relative shadow-xl border-t-[0.4em]  border-[#ecc584] xl:min-h-[15em]">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold text-[#4B495F]">Karma</h3>
              <p className="text-sm text-gray-500 ">
                Regularly evalues our talent to ensure quality
              </p>
            </div>
            <div className="flex flex-row justify-end">
              <img className="w-14" src={KarmaIllustation} alt="" />
            </div>
          </div>
          {/* EndCard */}
        </div>

        {/* Card */}
        <div className="flex flex-col justify-between p-6 gap-6 bg-white rounded-xl relative shadow-xl border-t-[0.4em] border-[#a3c4db] xl:max-w-xs xl:min-h-[15em]">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold text-[#4B495F]">Calculator</h3>
            <p className="text-sm text-gray-500 ">
              Uses data from past projects to provide better delivery estimates
            </p>
          </div>
          <div className="flex flex-row justify-end">
            <img className="w-14" src={CalcIllustration} alt="" />
          </div>
        </div>
      </div>
      {/* End Card content */}
    </div>
  );
}

export default Faq;
