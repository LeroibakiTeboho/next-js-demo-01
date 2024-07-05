"use client";
import React from "react";
import type { RootState } from "@/app/store/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "@/app/store/slice";
import Link from "next/link";

const Counter = () => {
  const count = useSelector((state: RootState) => state.value);
  const dispatch = useDispatch();
  return (
    <main className="max-w-4xl mx-auto pt-10">
      <div className="text-center my-8 flex flex-col gap-4">
        <div className="navbar text-[1.2rem]">
          <Link href="/">Home</Link>
          <Link className="px-3" href="./counter">
            Counter
          </Link>
        </div>
        <h1 className="text-4xl mb-4 font-bold">Redux Couter Sample</h1>
        <div>
          <button className="btn btn-primary"
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
          <span className="px-5 text-2xl">{count}</span>
          <button className="btn btn-primary"
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
        </div>
      </div>
    </main>
  );
};

export default Counter;
