import { useRef } from "react";
import { Button } from "../components/common";
import BaseToggle from "../components/ui/BaseToggle";

export default function Playground() {
  const btnRef = useRef(null);
  return (
    <main className="w-screen h-screen font-poppins">
      <div className="flex items-center justify-center w-full h-full">
        <BaseToggle ref={btnRef}>
          <div className="text-white bg-black size-44">123</div>
        </BaseToggle>

        <Button ref={btnRef}>here click</Button>
      </div>
    </main>
  );
}
