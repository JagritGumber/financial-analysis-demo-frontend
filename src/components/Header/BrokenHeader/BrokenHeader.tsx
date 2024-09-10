import { HeaderProps } from "@/types";
import { Fragment } from "react/jsx-runtime";

/**
 * This component is used to render a broken header.
 * It takes a string as a prop, and renders each word on a new line.
 * The component is marked as readonly, as it is not intended to be modified.
 * @example
 * <BrokenHeader value="foo bar" />
 * <div>
 *   <span>foo</span>
 *   <br />
 *   <span>bar</span>
 * </div>
 */
const BrokenHeader: React.FC<Readonly<HeaderProps>> = ({ value }) => {
  return (
    <p className="flex h-[120px] items-center">
      {value.split(" ").map((val, index) => (
        <Fragment key={index}>
          {val} <br />
        </Fragment>
      ))}
    </p>
  );
};

export { BrokenHeader };
