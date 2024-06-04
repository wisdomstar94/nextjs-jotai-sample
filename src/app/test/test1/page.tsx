"use client";

import { counterAtom } from "@/atoms/counter.atom";
import { localStorageValueAtom } from "@/atoms/localstorage-value";
import { sessionStorageValueAtom } from "@/atoms/sessionstorage-value";
import { useAtomWithStorage } from "@/hooks/use-atom-with-storage/use-atom-with-storage.hook";
import { useAtom } from "jotai";
import { useState } from "react";

export default function Page() {
  const [count, setCounter] = useAtom(counterAtom);
  const localStorageValue = useAtomWithStorage(localStorageValueAtom);
  const sessionStorageValue = useAtomWithStorage(sessionStorageValueAtom);
  const [inputedText, setInputedText] = useState("");
  const [inputedText2, setInputedText2] = useState("");

  return (
    <>
      <div className="w-full relative text-black font-bold text-lg">
        /test/test1
      </div>
      <div className="w-full relative">
        count : {count} <br />
        <span>
          {!localStorageValue.isMounted ? (
            "loading..."
          ) : (
            <>localStorageValue : {localStorageValue.value}</>
          )}
        </span>
        <br />
        <span>
          {!sessionStorageValue.isMounted ? (
            "loading..."
          ) : (
            <>sessionStorageValue : {sessionStorageValue.value}</>
          )}
        </span>
        <br />
      </div>
      <div className="w-full relative flex flex-wrap gap-2">
        <button
          className="inline-flex px-3 py-1.5 text-xs border border-slate-500 cursor-pointer hover:bg-slate-200"
          onClick={() => {
            setCounter((prev) => prev + 1);
          }}
        >
          count 1 증가시키기
        </button>
        <button
          className="inline-flex px-3 py-1.5 text-xs border border-slate-500 cursor-pointer hover:bg-slate-200"
          onClick={() => {
            setCounter((prev) => prev - 1);
          }}
        >
          count 1 감소시키기
        </button>
      </div>
      <div className="w-full relative flex flex-wrap gap-2">
        <input
          type="text"
          className="inline-flex border border-red-500 px-3 py-1.5 text-xs text-black"
          value={inputedText}
          onChange={(e) => setInputedText(e.target.value)}
        />
        <button
          className="inline-flex px-3 py-1.5 text-xs border border-slate-500 cursor-pointer hover:bg-slate-200"
          onClick={() => {
            localStorageValue.setValue(inputedText);
          }}
        >
          localStorageValue 변경하기
        </button>
      </div>
      <div className="w-full relative flex flex-wrap gap-2">
        <input
          type="text"
          className="inline-flex border border-red-500 px-3 py-1.5 text-xs text-black"
          value={inputedText2}
          onChange={(e) => setInputedText2(e.target.value)}
        />
        <button
          className="inline-flex px-3 py-1.5 text-xs border border-slate-500 cursor-pointer hover:bg-slate-200"
          onClick={() => {
            sessionStorageValue.setValue(inputedText2);
          }}
        >
          sessionStorageValue 변경하기
        </button>
      </div>
    </>
  );
}
