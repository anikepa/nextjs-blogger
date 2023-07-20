import connectionFactory from "@/utils/db";
import { NextResponse } from "next/server";
import Users from "../../../models/User"
export const GET = async (request) => {
    try {
        await connectionFactory();


        const user = await Users.find()

        return new NextResponse({ user }, { status: 200 });
    } catch (err) {
        return new NextResponse(err, { status: 500 });
    }
};
