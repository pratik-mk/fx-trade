export function recommendChartType(data) {
  if (!Array.isArray(data) || data.length === 0) {
    return "No data available for chart recommendation.";
  }

  const firstDataPoint = data[0];

  if (typeof firstDataPoint === "number") {
    return "Line chart or bar chart might be suitable for numeric data.";
  }

  if (typeof firstDataPoint === "string") {
    return "Bar chart or categorical chart could be appropriate for categorical data.";
  }

  if (firstDataPoint && typeof firstDataPoint === "object") {
    const keys = Object.keys(firstDataPoint);

    if (keys.includes("x") && keys.includes("y")) {
      return "Scatter plot might be suitable for the provided data.";
    }

    if (keys.includes("label") && keys.includes("value")) {
      return "Pie chart might be suitable for the provided data.";
    }
  }

  return "Unable to determine a specific chart recommendation based on the provided data.";
}
