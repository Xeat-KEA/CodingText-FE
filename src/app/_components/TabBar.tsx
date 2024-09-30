import { useRecoilState } from "recoil";
import { ITabBar } from "../_interfaces/interfaces";
import { selectedTabAtom } from "../atoms";
import { useEffect } from "react";

export default function TabBar({ menuList }: ITabBar) {
  const [selectedTab, setSelectedTab] = useRecoilState(selectedTabAtom);

  useEffect(() => {
    setSelectedTab(menuList[0]);
  }, []);

  return (
    <div className="w-full h-[52px] flex justify-between shrink-0 border-b border-border-2">
      {/* 탭 버튼 */}
      <nav className="flex">
        {menuList.map((el, index) => (
          <div
            key={index}
            className={`pr-4 cursor-pointer ${index !== 0 && "pl-4"}`}
            onClick={() => setSelectedTab(el)}
          >
            <span
              className={`flex items-center text-sm text-black  h-full ${
                el === selectedTab &&
                "font-bold border-b-[3px] border-primary pt-[3px]"
              }`}
            >
              {el}
            </span>
          </div>
        ))}
      </nav>
    </div>
  );
}
