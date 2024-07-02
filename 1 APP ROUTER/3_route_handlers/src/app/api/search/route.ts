import { NextRequest } from "next/server";
import { data1 } from "../data";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");
    console.log(query);
    const SearchedObj = query? data1.filter(obj => obj.title.includes(query)) : data1[1];
    return Response.json(SearchedObj);
 }