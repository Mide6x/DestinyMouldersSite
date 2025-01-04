const Programs = () => {
  const programs = [
    {
      title: "Creche",
      age: "3 months - 2 years",
      features: [
        "Nurturing Environment",
        "Early Childhood Development",
        "Professional Care",
        "Age-appropriate Activities"
      ]
    },
    {
      title: "Preschool",
      age: "2 - 3 years",
      features: [
        "Montessori Learning",
        "Social Development",
        "Basic Skills Introduction",
        "Creative Activities"
      ]
    },
    {
      title: "Nursery",
      age: "3 - 4 years",
      features: [
        "Foundational Learning",
        "Phonics & Numbers",
        "Interactive Learning",
        "Character Development"
      ]
    },
    {
      title: "Kindergarten",
      age: "4 - 5 years",
      features: [
        "Advanced Preparation",
        "Reading & Writing",
        "Basic Mathematics",
        "Social Skills"
      ]
    },
    {
      title: "Primary",
      age: "5 - 11 years",
      features: [
        "Core Subjects",
        "Computer Studies",
        "Moral Education",
        "Extra-curricular Activities"
      ]
    },
    {
      title: "After School",
      age: "All ages",
      features: [
        "Homework Support",
        "Extra Learning",
        "Supervised Activities",
        "Safe Environment"
      ]
    }
  ];

  return (
    <section className="programs-section">
      <div className="container">
        <h2>Our Academic Programs</h2>
        <div className="programs-grid">
          {programs.map((program, index) => (
            <div className="program-card" key={index} style={{
              borderTop: `4px solid var(${
                index === 0 ? '--yellow' :
                index === 1 ? '--blue' :
                index === 2 ? '--secondary-purple' :
                index === 3 ? '--light-blue' :
                index === 4 ? '--primary-purple' :
                '--pink'
              })`
            }}>
              <div className="program-image" style={{
                width: '300px',
                height: '200px',
                backgroundColor: '#f0f0f0',
                margin: '0 auto'
              }}>
                {program.title} Image
              </div>
              <h3>{program.title}</h3>
              <p>Ages: {program.age}</p>
              <ul>
                {program.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs; 