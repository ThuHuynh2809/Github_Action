import React from 'react';

type Params = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Params) {
  // Tạo tiêu đề dựa trên giá trị của slug
  let title = '';
  if (params.slug === 'Huỳnh Minh Thủ') {
    title = 'Tiêu đề cho Huỳnh Minh Thủ';
  } else if (params.slug === '123') {
    title = 'Tiêu đề cho 123';
  } else {
    title = `Tiêu đề mặc định cho ${params.slug}`;
  }

  return { title };
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
    { params: { slug: 'Huỳnh Minh Thủ' } },
    { params: { slug: '123' } },
    // Thêm các tham số khác nếu cần
  ];
}
