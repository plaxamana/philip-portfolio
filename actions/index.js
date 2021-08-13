import useSWR from "swr";

const fetcher = url => fetch(url).then(res => res.json())

export const useGetPosts = (initialData) => {
  return useSWR('api/posts', fetcher, { initialData })
}

export const useGetProjects = (initialData) => {
  return useSWR('api/projects', fetcher, { initialData })
}