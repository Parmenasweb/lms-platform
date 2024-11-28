"use client";

const LearningApproach = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 dark:text-white">
          Our Learning Approach
        </h2>
        <div className="grid gap-6 items-center">
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-[600px] mx-auto">
            Our courses combine theoretical knowledge with hands-on practice.
            Watch our instructors demonstrate real-world repair scenarios and
            follow along with your own projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LearningApproach;
