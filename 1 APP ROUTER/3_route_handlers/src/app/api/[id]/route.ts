import { NextRequest } from "next/server";
import { data1 } from "../data";
import { redirect } from "next/navigation";


export async function GET(
    _request: Request,
    { params }: { params: { id: string } }
  ) {
    if (parseInt(params.id) > data1.length) {
      redirect("/api");
    }
    const searchObj = data1.find(
      (obj) => obj.id === parseInt(params.id)
    );
    return Response.json(searchObj);
}

export async function PATCH(request: Request, { params } : {params: {id: string}}){
    const body = await request.json();
    const { title } = body;
    const index = data1.findIndex((obj) => obj.id === parseInt(params.id));
    data1[index].title = title;
    return Response.json(data1[index]);
}
 
export async function DELETE(request: Request, { params } : {params: {id: string}}){
    const index = data1.findIndex((obj) => obj.id === parseInt(params.id));
    const deletedObj = data1[index]
    data1.splice(index, 1);
    return Response.json(deletedObj);
}

