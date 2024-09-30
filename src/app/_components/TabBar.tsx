import { useEffect } from "react";
import { ITabBar } from "../_interfaces/interfaces";
import { useTabStore } from "../stores";

export default function TabBar({ menuList }: ITabBar) {
  // 전역 변수
  const { tab, setTab } = useTabStore();

  useEffect(() => {
    setTab(menuList[0]);
  }, []);

  return (
    <div className="w-full h-[52px] flex justify-between shrink-0 border-b border-border-2">
      {/* 탭 버튼 */}
      <nav className="flex">
        {menuList.map((el, index) => (
          <div
            key={index}
            className={`pr-4 cursor-pointer ${index !== 0 && "pl-4"}`}
            onClick={() => setTab(el)}
          >
            <span
              className={`flex items-center text-sm text-black  h-full ${
                el === tab && "font-bold border-b-[3px] border-primary pt-[3px]"
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
