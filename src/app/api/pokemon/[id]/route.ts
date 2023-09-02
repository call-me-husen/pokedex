import { NextResponse } from "next/server";
import { POKE_API_URL } from "@config/constants";

type TParams = {
  id: string;
};

export async function GET(request: Request, { params }: { params: TParams }) {
  try {
    const apiUrl = `${POKE_API_URL}/pokemon/${params.id}`;
    const res = await fetch(apiUrl);

    if (!res.ok) {
      throw new Error("Error");
    }
    const data = await res.json();

    return NextResponse.json({ status: 200, data });
  } catch (error) {
    throw error;
  }
}
