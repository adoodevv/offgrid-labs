import GroupOfProducts from '@/components/GroupOfProducts'

export const metadata = {
   title: 'Products | Offgrid Labs',
   description: 'Join us in our mission to Enable Borderless Access with Technology.',
   keywords: 'Offgrid Labs, Products, Technology, Borderless Access',
   openGraph: {
      title: 'Products | Offgrid Labs',
      description: 'Join us in our mission to Enable Borderless Access with Technology.',
   },
}

const Products = () => {
   return (
      <div>
         <GroupOfProducts />
      </div>
   )
}

export default Products
