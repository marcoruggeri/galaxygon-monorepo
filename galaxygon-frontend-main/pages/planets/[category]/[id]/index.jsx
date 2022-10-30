import { ethers } from "ethers";
import { useRouter } from "next/router";
import { useContext } from "react";
import InnerLayout from "../../../../components/_shared/InnerLayout";
import Galaxygon from "../../../../context/context";
import { allPlanets } from "../../../../lib/planets";

const App = () => {
  const router = useRouter();
  const { planetsInfo } = useContext(Galaxygon);

  const rootSplit = router.asPath.split("/");
  const rootPath = rootSplit[3].toLowerCase();

  const item = allPlanets[Number(rootPath) - 1];

  return (
    <InnerLayout>
      <div className="h-full flex flex-col">
        <div className="flex gap-6 items-start">
          <div className="w-1/2 2xl:w-3/5 rounded-xl p-0.5 bg-gradient-to-tr from-brand-lightBlue to-brand-lightCyan">
            <img src={item?.img} className="w-full rounded-xl" />
          </div>
          <div className="w-1/2 2xl:w-2/5 h-full text-center flex flex-col justify-between">
            <div>
              <div className="text-4xl font-bold font-audiowide text-brand-lightBlue uppercase">
                {item?.name}
              </div>
              <div className="text-xl mt-8">{item?.desc}</div>
            </div>
            {planetsInfo.map((p, i) => {
              if (i + 1 == item.name) {
                return (
                  <div key={i} className="flex flex-col">
                    <div className="flex items-center justify-between mb-14 w-3/4 self-center">
                      <div className="flex items-center gap-2">
                        <div className="w-10 rounded-full p-1 bg-gradient-to-tr from-brand-lightBlue to-brand-lightCyan">
                          <div className="w-full rounded-full bg-brand-darkestBlue flex items-center justify-center">
                            <img src="/brand/metal-icon.png" />
                          </div>
                        </div>
                        <div>{ethers.utils.formatUnits(p.metal, 0)}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-10 rounded-full p-1 bg-gradient-to-tr from-brand-lightBlue to-brand-lightCyan">
                          <div className="w-full rounded-full bg-brand-darkestBlue flex items-center justify-center">
                            <img src="/brand/crystal-icon.png" />
                          </div>
                        </div>
                        <div>{ethers.utils.formatUnits(p.crystal, 0)}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-10 rounded-full p-1 bg-gradient-to-tr from-brand-lightBlue to-brand-lightCyan">
                          <div className="w-full rounded-full bg-brand-darkestBlue flex items-center justify-center">
                            <img src="/brand/eth.png" />
                          </div>
                        </div>
                        <div>{ethers.utils.formatUnits(p.ethereus, 0)}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 self-end">
                      <div>X: {ethers.utils.formatUnits(p.coordinateX, 0)}</div>
                      <div>Y: {ethers.utils.formatUnits(p.coordinateY, 0)}</div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </InnerLayout>
  );
};

export default App;
