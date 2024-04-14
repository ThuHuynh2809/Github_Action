import React from 'react';

type Params = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` }
}

const Page: React.FC<Params> = ({ params }) => {
  return (
    <div>
      <h1>Slug: {params.slug}</h1>
      <p>Huỳnh Minh Thủ</p>
      <p>123</p>
    </div>
  );
}

export default Page;

// Thêm hàm generateStaticParams() vào cuối file
export async function generateStaticParams() {
  // Thực hiện logic để tạo ra các tham số tĩnh
  return [
    { params: { slug: 'example-slug-1' } },
    { params: { slug: 'example-slug-2' } },
    // Thêm các tham số khác nếu cần
  ];
}
