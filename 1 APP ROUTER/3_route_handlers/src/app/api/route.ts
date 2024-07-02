import { data1 } from "./data";

export async function GET(){
   
   return Response.json(data1);
}

export async function POST(request: Request) {
   const input = await request.json();
   const newData = { id: data1.length + 1, title: input.title };
   data1.push(newData);
   return new Response(JSON.stringify(newData), {
     headers: { "Content-Type": "application/json" },
     status: 201,
   });
}



