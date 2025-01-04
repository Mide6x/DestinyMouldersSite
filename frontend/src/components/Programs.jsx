import { useImages } from '../context/ImagesContext';

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
              {images[key] ? (
                <img 
                  src={`http://localhost:5001${images[key].imageUrl}`} 
                  alt={title} 
                  style={{
                    width: '300px',
                    height: '200px',
                    objectFit: 'cover',
                    margin: '0 auto'
                  }}
                />
              ) : (
                <div className="placeholder-image" style={{
                  width: '300px',
                  height: '200px',
                  backgroundColor: '#f0f0f0',
                  margin: '0 auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {title} Image
                </div>
              )}
              <h3>{title}</h3>
              <p>Ages: {age}</p>
              <ul>
                {features.map((feature, i) => (
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