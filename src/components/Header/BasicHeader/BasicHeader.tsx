import { HeaderProps } from "@/types";

/**
 * A table header that renders its value as a paragraph, with a height of
 * 120px and centered vertically.
 *
 * @example
 * <BrokenHeader value="foo" />
 * <p className="flex h-[120px] items-center">foo</p>
 */
const BasicHeader: React.FC<Readonly<HeaderProps>> = ({ value }) => {
  return <p className="flex h-[120px] items-center">{value}</p>;
};

export { BasicHeader };
