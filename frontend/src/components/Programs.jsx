import { useImages } from '../hooks/useImages';

const Programs = () => {
  const { images } = useImages();
  
  const programs = [
    {
      key: 'creche',
      title: 'Creche',
      age: '3 months - 2 years',
      features: [
        "Nurturing Environment",
        "Early Childhood Development",
        "Professional Care",
        "Age-appropriate Activities"
      ]
    },
    {
      key: 'preschool',
      title: 'Preschool',
      age: '2 - 3 years',
      features: [
        "Montessori Learning",
        "Social Development",
        "Basic Skills Introduction",
        "Creative Activities"
      ]
    },
    {
      key: 'nursery',
      title: 'Nursery',
      age: '3 - 4 years',
      features: [
        "Foundational Learning",
        "Phonics & Numbers",
        "Interactive Learning",
        "Character Development"
      ]
    },
    {
      key: 'kindergarten',
      title: 'Kindergarten',
      age: '4 - 5 years',
      features: [
        "Advanced Preparation",
        "Reading & Writing",
        "Basic Mathematics",
        "Social Skills"
      ]
    },
    {
      key: 'primary',
      title: 'Primary',
      age: '5 - 11 years',
      features: [
        "Core Subjects",
        "Computer Studies",
        "Moral Education",
        "Extra-curricular Activities"
      ]
    },
    {
      key: 'afterSchool',
      title: 'After School',
      age: 'All ages',
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
          {programs.map(({ key, title, age, features }, index) => (
            <div className="program-card" key={key} style={{
              borderTop: `4px solid var(${
                index === 0 ? '--yellow' :
                index === 1 ? '--blue' :
                index === 2 ? '--secondary-purple' :
                index === 3 ? '--light-blue' :
                index === 4 ? '--primary-purple' :
                '--pink'
              })`
            }}>
              <div className="leader-image">
                {images[key] ? (
                  <img 
                    src={images[key].imageUrl}
                    alt={title} 
                  />
                ) : (
                  <div className="placeholder-image">
                    <span>{title}</span>
                  </div>
                )}
              </div>
              <div className="program-content">
                <h3>{title}</h3>
                <p className="age">Ages: {age}</p>
                <ul className="features">
                  {features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs; 