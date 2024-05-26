import React from "react";

const DonorDetailsPage = ({ params }: { params: { id: string } }) => {
  console.log(params.id);

  return <div>DonorDetailsPage</div>;
};

export default DonorDetailsPage;
