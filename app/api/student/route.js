import { db } from "@/utils";
import { STUDENTS } from "@/utils/schema";
import { NextResponse } from "next/server";

// Handle POST request to create a new student
export async function POST(req) {
    try {
        const data = await req.json(); // Get the data from the request
        const result = await db.insert(STUDENTS)
            .values({
                name: data?.name,
                grade: data?.grade,
                address: data?.address,
                contact: data?.contact
            });

        return NextResponse.json(result); // Send the result back as JSON
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to create student' }, { status: 500 });
    }
}

// Handle GET request to retrieve students
export async function GET(req) {
    try {
        const result = await db.select().from(STUDENTS); // Get all students
        return NextResponse.json(result); // Send back the list of students
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to fetch students' }, { status: 500 });
    }
}
