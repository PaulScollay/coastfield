import { useState } from 'react';
import { Inter } from 'next/font/google'
import { Row, Col} from 'react-bootstrap';
import { getAllBlogs } from '/lib/api';
import PageLayout from 'components/PageLayout';
import AuthorIntro from '@/components/AuthorIntro';
import CardListItem from '@/components/CardListItem';
import CardItem from '@/components/CardItem';
import { useGetBlogs } from '@/actions';
import FilteringMenu from 'components/FilteringMenu';
import useSWR from 'swr';

const inter = Inter({ subsets: ['latin'] })

const fetcher = (url) =>  fetch(url).then(r => r.json());

export default function Home({blogs: initalData}) {
  const [filter, setFilter] = useState({
    view: { list: 0 }
  });

  //alert(JSON.stringify(initalData))
  const { data:blogs, error } = useGetBlogs(initalData);

  return ( 
    <div>
    <PageLayout>
      <AuthorIntro />
      {/* <FilteringMenu
        filter={filter}
        onChange={(option, value) => {
          debugger
          setFilter({...filter, [option]: value});
        }}
      /> */}
      <hr/>
      {/* className from props */}
      <Row className="mb-5">
        { blogs.map(blog =>
            // filter.view.list ?
            // <Col key={`${blog.slug}-list`} md="9">
            //   <CardListItem
            //     author={blog.author}
            //     title={blog.title}
            //     subtitle={blog.subtitle}
            //     date={blog.date}
            //     link={{
            //       href: '/blogs/[slug]',
            //       as: `/blogs/${blog.slug}`
            //     }}
            //   />
            // </Col>
            // :
            <Col key={blog.slug} md="4">
              <CardItem
                author={blog.author}
                title={blog.title}
                subtitle={blog.subtitle}
                date={blog.date}
                image={blog.coverImage}
                link={{
                  href: '/blogs/[slug]',
                  as: `/blogs/${blog.slug}`
                }}
              />
            </Col>
          ) }
      </Row>
    </PageLayout>
      {/* <hr/>{JSON.stringify(blogs)} */}
      </div>
  )
}

export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs
    }
  }
}
