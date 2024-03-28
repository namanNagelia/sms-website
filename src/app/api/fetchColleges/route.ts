// pages/api/schools.js
import { NextRequest, NextResponse } from "next/server";
interface SchoolFields {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  telephone: string;
}

export async function GET(req: NextRequest, res: NextResponse) {
  const apiUrl =
    "https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-colleges-and-universities&rows=10000&fields=name,address,city,state,zip,telephone";

  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.status}`);
  }
  const data = await response.json();

  // Extract the records array and only include specified fields for each school
  const schools = data.records.map(({ fields }: { fields: SchoolFields }) => ({
    name: fields.name,
    // address: fields.address,
    // city: fields.city,
    // state: fields.state,
    // zip: fields.zip,
    // telephone: fields.telephone,
  }));

  // Return the simplified records
  return NextResponse.json({ schools });
}
