import GroupOfProducts from '@/components/GroupOfProducts';
import Hero from '@/components/Hero';
import LatestBlogPosts from '@/components/LatestBlogPosts';
import MeetTheLeadership from '@/components/MeetTheLeadership';
import WhatMemberSay from '@/components/WhatMemberSay';

export default function Home() {
  return (
    <>
      <Hero />
      <LatestBlogPosts />
      <GroupOfProducts />
      <WhatMemberSay />
      {/* <MeetTheLeadership /> */}
    </>
  );
}
