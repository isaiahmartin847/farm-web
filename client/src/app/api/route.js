import plantdata from "../PlantData.json"

export function GET() {
    return Response.json(plantdata)
}



