import type { Timestamp } from "firebase/firestore";

export const formatMoney = (
  value: number,
) => {
  return new Intl.NumberFormat(
    "vi-VN",
    {
      style: "currency",
      currency: "VND",
    },
  ).format(value);
};

export const formatTimestamp = (
  value?: Timestamp | null,
) => {
  if (!value) return "—";

  try {
    return new Intl.DateTimeFormat(
      "vi-VN",
      {
        dateStyle: "short",
        timeStyle: "short",
      },
    ).format(
      value.toDate(),
    );
  } catch {
    return "—";
  }
};
