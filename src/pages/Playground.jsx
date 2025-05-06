import ColorPalette from "../components/CreateNote/Features/ColorPalette/ColorPalette";
export default function Playground() {
  return (
    <main className="w-screen h-screen font-poppins">
      <div className="flex items-center justify-center w-full h-full">
        <ColorPalette colors={colors} />
      </div>
    </main>
  );
}

const colors = [
  { name: "Default", code: "white" },
  { name: "Coral", code: "rgb(250,175,168)" },
  { name: "Peach", code: "rgb(243,159,118)" },
  { name: "Sand", code: "rgb(255,248,184)" },
  { name: "Mint", code: "rgb(226,246,211)" },
  { name: "Sage", code: "rgb(180,221,211)" },
  { name: "Fog", code: "rgb(212,228,237)" },
  { name: "Storm", code: "rgb(174,204,220)" },
  { name: "Duck", code: "rgb(211,191,219)" },
  { name: "Blossom", code: "rgb(246,226,221)" },
  { name: "Clay", code: "rgb(233,227,212)" },
  { name: "Chalk", code: "rgb(239,239,241)" },
];
