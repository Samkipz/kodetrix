<div className="flex flex-col px-4 w-full md:w-1/2" ref={textRef}>
  <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700 text-center md:text-left">
    About Us
  </h2>
  <p className="mt-4 md:mt-6 lg:mt-8 text-sm sm:text-base text-center md:text-left">
    Kodetrix is a licensed firm focused on delivering cutting-edge technology
    solutions to individual clients and corporates. We specialize in harnessing
    the power of data analytics, AI, ML, and IoT to create real-world impact in
    sectors such as Finance, Agriculture, and Health.
  </p>
  <div className="flex flex-col md:flex-row mt-6 md:space-x-4 gap-4">
    <div className="mt-4 md:mt-6 lg:mt-8 text-sm sm:text-base text-center md:text-left">
      <div className="flex justify-center md:justify-normal mb-4 text-primary">
        <Headset size={40} />
      </div>
      <h3 className="font-semibold w-full">Expert Support</h3>
      <p className="text-muted-foreground">
        A diverse team of experts with a wide range of experience in complex
        domains.
      </p>
      <Link href="#" className="text-primary mt-2 hover:underline">
        Learn More
      </Link>
    </div>
    <div className="mt-4 md:mt-6 lg:mt-8 text-sm sm:text-base text-center md:text-left">
      <div className="flex justify-center md:justify-normal mb-4 text-primary">
        <Users size={40} />
      </div>
      <h3 className="font-semibold w-full">Experienced Team</h3>
      <p className="text-muted-foreground">
        A diverse team of experts with a wide range of experience in complex
        domains.
      </p>
      <Link href="#" className="text-primary mt-2 hover:underline">
        Learn More
      </Link>
    </div>
    <div className="mt-4 md:mt-6 lg:mt-8 text-sm sm:text-base text-center md:text-left">
      <div className="flex justify-center md:justify-normal mb-4 text-primary">
        <NotebookTabs size={40} />
      </div>
      <h3 className="font-semibold w-full">One Contract, All support</h3>
      <p className="text-muted-foreground">
        A diverse team of experts with a wide range of experience in complex
        domains.
      </p>
      <Link href="#" className="text-primary mt-2 hover:underline">
        Learn More
      </Link>
    </div>
  </div>
</div>;
