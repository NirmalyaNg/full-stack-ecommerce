import React from 'react';

const CategoryDetailPage = async ({ params }: { params: Promise<{ categoryId: string }> }) => {
  const productId = (await params).categoryId;
  return <div>CategoryDetailPage ID: {productId}</div>;
};

export default CategoryDetailPage;
