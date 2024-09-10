import { IndicatedSlider } from "../ui/indicatedSlider";

interface CustomSliderProps {
  maxLimit: number;
  numberOfEntries: number;
  setNumberOfEntries: React.Dispatch<React.SetStateAction<number>>;
}

const CustomSlider: React.FC<Readonly<CustomSliderProps>> = ({
  maxLimit,
  numberOfEntries,
  setNumberOfEntries,
}) => {
  return (
    <div className="flex items-center gap-4">
      <span className="text-sm">0</span>
      <IndicatedSlider
        defaultValue={[numberOfEntries]}
        max={maxLimit}
        step={2}
        onValueCommit={(e) => setNumberOfEntries(e[0])}
        className="w-44"
      />
      <span className="text-sm">{maxLimit}</span>
    </div>
  );
};

export { CustomSlider };
