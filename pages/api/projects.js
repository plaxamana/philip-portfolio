import { getAllProjects } from "@/lib/api";

export default async function getProjects(req, res) {
  const data = await getAllProjects()
  res.status(200).json(data)
}