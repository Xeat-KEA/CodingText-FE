import { create } from "zustand";
import { ITabStore } from "./_interfaces/interfaces";

// 탭바 메뉴 관련 전역변수
export const useTabStore = create<ITabStore>((set) => ({
  tab: "", // 현재 선택된 탭
  setTab: (newTab: string) => set({ tab: newTab }),
}));
