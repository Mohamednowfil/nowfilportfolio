import React from 'react';

const Certifications = () => {
  const certifications = [
    { 
      title: ' Javascript For Beginners Complete Course', 
      description: 'Udemy',
      link: 'https://www.udemy.com/certificate/UC-67a5a31c-2efd-450a-b31f-da97acda3b96/' // Link for Certification 1
    },
    { 
      title: 'Python', 
      description: 'Guvi', 
      link: 'https://www.guvi.in/share-certificate/s32z60cCT9Y0153698' // Link for Certification 2
    },
    { 
      title: 'Cybersecurity Essentials', 
      description: 'CISCO', 
      link: 'https://www.netacad.com/certificates?issuanceId=1cebdd7c-cdae-436d-850c-0fe6f059631f' // Link for Certification 2
    },
    { 
      title: 'Digital Marketing', 
      description: 'etagfree', 
      link: 'https://www.entrepreneurtamil.com/share-certificate?serialno=YWZIXLU1' // Link for Certification 2
    },
    { 
      title: 'Networking Essentials', 
      description: 'CISCO', 
      link: 'https://www.netacad.com/certificates?issuanceId=d2fb1d30-c3e8-48d6-aedf-0d53edca6807' 
    },
    
  ];

  return (
    <section id="certifications">
      <h2>Certifications</h2>
      <div className="certifications-container">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-box">
            <h3 className="cert-title">{cert.title}</h3>
            <p>{cert.description}</p>
            <a 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="view-button"
            >
              View Certification
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;