import useSWRInfinite from 'swr/infinite'
import { getBlogs } from 'actions';

export const useGetBlogsPages = ({filter}) => {
  const result = useSWRInfinite(
    (index, previousPageData) => {
      if (index === 0 ) {
        return `/api/blogs`
        //return `/api/blogs?date=${filter.date.asc ? 'asc' : 'desc'}`
      }

      if (!previousPageData.length) {
        return null
      }

      //return `/api/blogs?offset=${index * 3}`
      return `/api/blogs?offset=${index * 1}`
    },
    getBlogs,
     { persistSize: true
    }
  )

  let hitEnd = false;
  const { data } = result;

  if (data) {
    hitEnd = data[data.length - 1].length === 0
  }

  return {...result, hitEnd}
}