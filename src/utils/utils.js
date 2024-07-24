export const formatHeader = (header) => {
  return header
    .replace(/_/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export const queryGenerator = (combinedFilters) => {
  return new URLSearchParams(
    Object.fromEntries(
      Object.entries(combinedFilters).filter(([_, v]) => v != null && v !== "")
    )
  ).toString();
};
