const Projections = () => {
  return (
    <section className="md:mx-20 ">
      <div className="container  py-12">
        <h2 className="text-xl text-center font-bold">Future Projections</h2>
        <p className="text-center">
          This is where well display charts and future projections.
        </p>

        {/* Grid for images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="flex justify-center items-center">
            <img
              src="/images/graph1.jpg"
              alt="Graph 1"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="/images/graph2.webp"
              alt="Graph 2"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projections;
