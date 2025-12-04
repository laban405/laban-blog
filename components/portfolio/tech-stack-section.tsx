const technologies = [
  "Angular",
  "React",
  "TypeScript",
  "JavaScript",
  "Flutter",
  "Ionic",
  "Capacitor",
  "GraphQL",
  "Node.js",
  "NX",
  "Docker",
  "Webpack",
  "Jest",
  "Cypress",
  "Nginx",
  "Azure",
  "AWS",
  "GCP",
];

export default function TechStackSection() {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Tech Stack
          </h2>
          <p className="text-lg text-muted-foreground">
            Technologies and tools I work with
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

