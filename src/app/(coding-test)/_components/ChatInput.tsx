import { SendMessageIcon, SettingIcon } from "./Icons";

export default function ChatInput() {
  return (
    <form className="w-full flex items-center px-4 py-2 gap-3 bg-white border border-border-2 rounded-full">
      <button>
        <SettingIcon />
      </button>
      <input
        className="outline-none grow text-black"
        type="text"
        placeholder="AI에게 궁금한 점을 자유롭게 질문해보세요!"
      />
      <button className="flex justify-center items-center w-9 h-9 rounded-full bg-primary">
        <SendMessageIcon />
      </button>
    </form>
  );
}
