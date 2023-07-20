
import connect from "@/utils/db";
import { NextResponse } from "next/server";
import Post from "@/models/Post";

export const GET = async (request) => {
    try {
        await connect();
        console.log("h1");
        const post = await Post.find()
        console.log("h2");
        return new NextResponse(JSON.stringify(post), { status: 200 });
    } catch (err) {
        return new NextResponse(err, { status: 500 });
    }
};
