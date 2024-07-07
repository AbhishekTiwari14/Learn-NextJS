import {connect} from "@/dbConfig/dbConfig"
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json();
        const { token } = reqBody;

        const user = await User.findOne({verifyToken: token, verifyTokenExpiry: {$gt: Date.now()}}); //gt => greater than
        if(!user){
            return NextResponse.json({error : "Invalid token"}, {status: 400})
        }
        console.log(user);
        user.isVerfied = true;
        user.verifyToken = undefined;
        user.verifyTokenExpiry = undefined;

        await user.save();
        return NextResponse.json({
            message: "User Verified Successfully",
            success: true
        }, { status: 500})

    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}