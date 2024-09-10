import { HeaderProps } from "@/types";
import { Fragment } from "react/jsx-runtime";

/**
 * A table header that divides its value into separate lines, split by '/',
 * with a horizontal gray line separating each part.
 *
 * @example
 * <DividedHeader value="foo/bar" />
 * <div>
 *   <span>foo</span>
 *   <span className="w-full h-px bg-gray-200 my-1"></span>
 *   <span>bar</span>
 * </div>
 */
const DividedHeader: React.FC<Readonly<HeaderProps>> = ({ value }) => {
  const values = value.split("/");
  return (
    <div className="flex flex-col items-center">
      {values.map((val, index) => (
        <Fragment key={index}>
          <span>{val}</span>
          {index < values.length - 1 && (
            <span className="w-full h-px bg-gray-200 my-1"></span>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export { DividedHeader };
