import React from 'react';

const EditProductPage = async ({ params }: { params: Promise<{ productId: string }> }) => {
  const productId = (await params).productId;
  return <div>EditProductPage ID: {productId}</div>;
};

export default EditProductPage;
