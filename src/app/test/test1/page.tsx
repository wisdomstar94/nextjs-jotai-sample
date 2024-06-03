"use client"

import { counterAtom } from "@/atoms/counter.atom";
import { useAtom } from "jotai";

export default function Page() {
  const [count, setCounter] = useAtom(counterAtom);

  return (
    <>
      <div className="w-full relative text-black font-bold text-lg">
        /test/test1
      </div>
      <div className="w-full relative">
        count : { count }
      </div>
      <div className="w-full relative flex flex-wrap gap-2">
        <button className="inline-flex px-3 py-1.5 text-xs border border-slate-500 cursor-pointer hover:bg-slate-200" onClick={() => {
          setCounter(prev => prev + 1);
        }}>
          count 1 증가시키기
        </button>
        <button className="inline-flex px-3 py-1.5 text-xs border border-slate-500 cursor-pointer hover:bg-slate-200" onClick={() => {
          setCounter(prev => prev - 1);
        }}>
          count 1 감소시키기
        </button>
      </div>
    </>
  );
}