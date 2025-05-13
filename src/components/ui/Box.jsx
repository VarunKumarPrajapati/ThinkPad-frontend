export default function Box({
  heading,
  list = [],
  className,
  type,
  onClick = () => {},
}) {
  const renderList = list.map((item, key) => {
    switch (type) {
      case "color":
        return (
          <BoxColorItem key={key} color={item} onClick={() => onClick(item)} />
        );
      default:
        return null;
    }
  });
  return (
    <div
      className={`md:min-w-[610px] md:max-w-[610px] w-11/12 my-4 bg-white shadow-card animate-slide-up ${className}`}
    >
      <div className="relative flex items-center p-2.5 text-sm ">
        <span className="flex-1 font-medium first-letter:uppercase">
          {heading}
        </span>
        {/* <button className="px-6 py-2 text-blue-500 rounded-md hover:bg-[rgb(95,99,104,4%)] absolute top-0.5 right-1">
          More
        </button> */}
      </div>
      <div className="flex flex-row flex-wrap">{renderList}</div>
    </div>
  );
}

function BoxColorItem({ color, onClick }) {
  return (
    <span
      title={color}
      className="cursor-pointer rounded-full size-12 border-[1px] border-[rgb(0,0,0,42%)] hover:border-[rgb(0,0,0,87%)] border-slate-400 m-3.5"
      style={{ backgroundColor: colors[color] }}
      onClick={onClick}
    ></span>
  );
}

// function BoxItem({ color }) {
//   return (
//     <div>
//       <div className="">
//         <div className=""></div>
//         <div className=""></div>
//       </div>
//     </div>
//   );
// }

const colors = {
  Default: "rgb(255,255,255)",
  Coral: "rgb(250,175,168)",
  Peach: "rgb(243,159,118)",
  Sand: "rgb(255,248,184)",
  Mint: "rgb(226,246,211)",
  Sage: "rgb(180,221,211)",
  Fog: "rgb(212,228,237)",
  Storm: "rgb(174,204,220)",
  Duck: "rgb(211,191,219)",
  Blossom: "rgb(246,226,221)",
  Clay: "rgb(233,227,212)",
  Chalk: "rgb(239,239,241)",
};
