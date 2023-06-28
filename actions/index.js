import useSWR from 'swr';

const fetcher = (url) =>  fetch(url).then(r => r.json());

export const useGetHello = () => useSWR('/api/hello', fetcher)

export const useGetBlogs = (initialData) => {
    return useSWR(`../api/blogs`, fetcher, {
        fallbackData: initialData
    })
}
