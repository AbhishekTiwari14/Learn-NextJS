import {connect} from "@/dbConfig/dbConfig"
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel"

import { getdatafromjwt } from "@/utils/getdatafromjwt";

connect();

export async function POST(request: NextRequest){
    const userId = await getdatafromjwt(request);
    const user = await User.findOne({_id: userId}).select("-password"); //password ko chorr kar baki data de do
    if(!user){
        throw new Error("user not found");
    }
    return NextResponse.json({
        message: "user found",
        data: user
    })
}