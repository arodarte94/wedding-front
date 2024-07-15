import { styled } from "@mui/material";

const dateOptions = {
  year: "numeric",
  month: "short",
  day: "2-digit",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
};

export const multiPartHeader = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};

export const formatDate = (date: string | Date) => {
  return new Date(date).toLocaleString("en-US", dateOptions);
};

export const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export const downloadFile = (file, title) => {
  const url = window.URL.createObjectURL(new Blob([file]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `${title}.xlsx`);
  document.body.appendChild(link);
  link.click();
};

export const filterReportParams = (
  reportParams: any,
  optionsKeys: string[],
) => {
  return Object.keys(reportParams)
    .filter((key) => optionsKeys.includes(key))
    .reduce((obj, key) => {
      return {
        ...obj,
        [key]: reportParams[key],
      };
    }, {});
};

export const parseJsonString = (
  jsonString: string,
  defaultValue: any = null,
) => {
  if (typeof jsonString === "string" && jsonString !== "")
    return JSON.parse(jsonString);

  return defaultValue;
};

export const formatMoney = (value: number, isUsd: boolean = false) => {
  const currency = isUsd ? "USD" : "MXN";

  return (
    new Intl.NumberFormat("en-US", {
      currency: "USD",
      style: "currency",
    }).format(value) +
    " " +
    currency
  );
};
