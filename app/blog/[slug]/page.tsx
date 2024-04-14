import React from 'react';

type Params = {
  params: {
    slug: string
  }
}

// Hàm generateMetadata nhận đối số là một đối tượng Params và trả về một promise chứa một đối tượng metadata
export async function generateMetadata({ params }: Params): Promise<{ title: string }> {
  return { title: `Post: ${params.slug}` };
}

// Component Page nhận một đối tượng Params và hiển thị nội dung dựa trên slug trong params
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
