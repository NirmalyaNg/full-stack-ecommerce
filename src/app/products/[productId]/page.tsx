import React from 'react';

const ProductDetailPage = async ({ params }: { params: Promise<{ productId: string }> }) => {
  const productId = (await params).productId;
  return <div>ProductDetailPage ID: {productId}</div>;
};

export default ProductDetailPage;
