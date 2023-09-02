import { NextResponse } from "next/server";
import { POKE_API_URL } from "@config/constants";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;
    const offset = limit * (page - 1);
    const apiUrl = `${POKE_API_URL}/pokemon?offset=${offset}&limit=${limit}`;
    const res = await fetch(apiUrl);

    if (!res.ok) {
      throw new Error("Error");
    }

    const data = await res.json();

    const resData = {
      meta: {
        limit,
        page,
        total: data?.count,
        totalPage: Math.ceil(data?.count / limit),
      },
      data: data?.results?.map((item: any) => ({
        name: item?.name,
      })),
    };
    return NextResponse.json({ status: 200, data: resData });
  } catch (error) {
    throw error;
  }
}
