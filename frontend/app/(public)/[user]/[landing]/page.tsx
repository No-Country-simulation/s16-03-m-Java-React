type Props = {
  params: {
    slug: string;
  };
};

const Landing = ({ params }: Props) => {
  console.log(params.slug);
  return (
    <main>
      <h1>Landing</h1>
    </main>
  );
};

export default Landing;
