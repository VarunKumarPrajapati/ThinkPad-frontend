import { Box } from "./Box";

export default function BoxList({ boxes = [] }) {
  const renderBoxes = boxes.map((box, index) => <Box key={index} {...box} />);
  return (
    <div className="flex flex-col items-center justify-center">
      {renderBoxes}
    </div>
  );
}
