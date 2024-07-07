import {connect} from "@/dbConfig/dbConfig"
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel"
import bcryptjs from 'bcryptjs'
import jwt from "jsonwebtoken"

connect();

export async function POST(request: NextRequest){
    try{    
        const reqBody = await request.json();
        const {email, password} = reqBody;
        const user = await User.findOne({email});

        if(!user){
            return NextResponse.json({error: "user with given email does not exists"}, {status: 400})
        }
        const validPassword = await bcryptjs.compare(password, user.password);
        if(!validPassword){
            return NextResponse.json({error: "Wrong password"}, {status: 400})
        } 
        // creating & storing JWT in browesr cookies
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        };

        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: '1d'});

        const response = NextResponse.json({
            message: "Logged in successfully",
            success: true
        })

        response.cookies.set("token", token, {
            httpOnly: true   //will make sure that user cannot modify token
        })

        return response;
    } 
    catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}