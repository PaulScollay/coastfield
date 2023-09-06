import { useState } from 'react';
import { Inter } from 'next/font/google'
import { Row, Col, Button} from 'react-bootstrap';
import { getAllBlogs } from '/lib/api';
import PageLayout from 'components/PageLayout';
import AuthorIntro from '@/components/AuthorIntro';
import CardListItem from '@/components/CardListItem';
import CardItem from '@/components/CardItem';
import { useGetBlogs } from '@/actions';
import FilteringMenu from 'components/FilteringMenu';
import moment from 'moment';

import { useGetBlogsPages } from 'actions/pagination';

export const BlogList = ({data = [], filter}) => {
  // debugger
  return data.map(page => page.map(blog =>
    //filter.view.list ?
      // <Col key={`${blog.slug}-list`} md="9">
      //   <CardListItem
      //     author={blog.author}
      //     title={blog.title}
      //     subtitle={blog.subtitle}
      //     date={moment(blog.date).format('LL')}
      //     link={{
      //       href: '/blogs/[slug]',
      //       as: `/blogs/${blog.slug}`
      //     }}
      //   />
      // </Col>
      // :
      <Col key={blog.slug} lg="4" md="6">
        <CardItem
          author={blog.author}
          title={blog.title}
          subtitle={blog.subtitle}
          date={moment(blog.date).format('LL')}
          image={blog.coverImage}
          link={{
            href: '/blogs/[slug]',
            as: `/blogs/${blog.slug}`
          }}
        />
      </Col>
  ))
}
export default function Home({blogs}) {
  const [filter, setFilter] = useState({
    view: { list: 0 }
  });

  const { 
    data,
    size, 
    setSize, 
    hitEnd } = useGetBlogsPages({filter});


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
        <BlogList
           data={data || [blogs]}
           filter={filter}
          />
      </Row>
      <div style={{textAlign: 'center'}}>
        <Button
          onClick={() => setSize(size + 1)}
          disabled={hitEnd}
          size="lg"
          variant="outline-secondary">
          Load More
        </Button>
      </div>
    </PageLayout>
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
