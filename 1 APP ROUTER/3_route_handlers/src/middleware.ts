import { type NextRequest, NextResponse } from "next/server";
// M1
// export function middleware(request: NextRequest){
//     return NextResponse.redirect(new URL("/", request.url));
// }

// export const config = {
//     matcher: "/api",
// };

//M2
export function middleware(request: NextRequest){
    if(request.nextUrl.pathname === "/api"){
        return NextResponse.redirect(new URL("/", request.url));
    }
}