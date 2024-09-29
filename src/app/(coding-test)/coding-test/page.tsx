"use client";

import { Splitter, SplitterPanel } from "primereact/splitter";
import { useState } from "react";
import {
  CODING_BUTTONS,
  CODING_TAB_BAR_MENU,
  dummyChats,
} from "../_constants/constants";
import CodeEditor from "../_components/CodeEditor";
import ChatInput from "../_components/ChatInput";

export default function CodingTestPage() {
  // 현재 선택된 코딩 메뉴 탭
  const [selectedTab, setSelectedTab] = useState(CODING_TAB_BAR_MENU[0]);
  // 문제 정답 여부
  const [hasSolved, setHasSolved] = useState(false);

  return (
    <Splitter className="w-full h-screen pt-16">
      {/* 채팅창 공간 */}
      <SplitterPanel className="bg-bg-1 flex flex-col">
        {/* 메세지 표시 공간 */}
        <div className="grow flex flex-col px-6 py-8 gap-6 overflow-y-scroll">
          {dummyChats.map((chat, index) => (
            <div
              key={index}
              className={`bubble ${
                chat.role === "gpt"
                  ? "bg-white"
                  : "bg-primary text-white font-bold self-end"
              }`}
            >
              {chat.content}
            </div>
          ))}
        </div>
        {/* 채팅 입력칸 */}
        <div className="px-6 pb-8">
          <ChatInput />
        </div>
      </SplitterPanel>
      {/* 코드 관련 공간 */}
      <SplitterPanel className="flex flex-col px-6 py-8 gap-4">
        {/* 코드 에디터 */}
        <div className="grow border border-border-2 rounded-2xl overflow-hidden">
          <CodeEditor />
        </div>
        {/* 탭바 */}
        <div className="w-full h-[52px] flex justify-between border-b border-border-2">
          {/* 탭 버튼 */}
          <nav className="flex">
            {CODING_TAB_BAR_MENU.map((el, index) => (
              <div
                key={index}
                className={`pr-4 text-sm cursor-pointer ${
                  index !== 0 && "pl-4"
                }`}
                onClick={() => setSelectedTab(el)}
              >
                <span
                  className={`flex items-center h-full ${
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
        {/* 컴파일러 / 메모장 */}
        <div className="w-full h-[200px] border border-border-2 rounded-2xl"></div>
        {/* 구분선 */}
        <div className="division" />
        {/* 하단 버튼 */}
        <div className="flex gap-4 self-end">
          {CODING_BUTTONS.map((btn, index) => (
            <button
              key={index}
              disabled={index === 0 && !hasSolved}
              className={`${
                index === CODING_BUTTONS.length - 1
                  ? "btn-primary"
                  : index !== 0
                  ? "btn-default"
                  : hasSolved
                  ? "btn-default"
                  : "btn-disabled"
              }`}
            >
              {btn.content}
            </button>
          ))}
        </div>
      </SplitterPanel>
    </Splitter>
  );
}
