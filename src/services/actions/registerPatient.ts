"use server";

import { FieldValues } from "react-hook-form";

export const registerPatient = async (data: FieldValues) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    }
  );
  const patientInfo = await res.json();
  return patientInfo;
};
