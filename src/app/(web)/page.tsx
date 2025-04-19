import GroupOfProducts from '@/components/GroupOfProducts';
import Hero from '@/components/Hero';
import LatestBlogPosts from '@/components/LatestBlogPosts';
import MeetTheLeadership from '@/components/MeetTheLeadership';
import WhatMemberSay from '@/components/WhatMemberSay';
import { Suspense } from 'react';
import Loading from './loading';

export default async function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <Hero />
      <LatestBlogPosts />
      <GroupOfProducts />
      <WhatMemberSay />
      {/* <MeetTheLeadership /> */}
    </Suspense>
  );
}
