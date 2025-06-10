import React from 'react';

const EditCategoryPage = async ({ params }: { params: Promise<{ categoryId: string }> }) => {
  const productId = (await params).categoryId;
  return <div>EditCategoryPage ID: {productId}</div>;
};

export default EditCategoryPage;
