import GroupOfProducts from '@/components/GroupOfProducts';
import Hero from '@/components/Hero';
import LatestBlogPosts from '@/components/LatestBlogPosts';
import MeetTheLeadership from '@/components/MeetTheLeadership';
import WhatMemberSay from '@/components/WhatMemberSay';

export default async function Home() {
  await new Promise((r) => setTimeout(r, 2000));
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
