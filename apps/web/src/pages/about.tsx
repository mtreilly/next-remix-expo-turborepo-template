import React from "react";

const About = ({ data }: { data: string }) => {
  console.log(data);
  return (
    <div>
      <div>
        <h1>About</h1>
      </div>
      <div>
        <h3>All about this</h3>
        <p>{data}</p>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch("http://127.0.0.1:8000/api/v1/hello");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default About;
