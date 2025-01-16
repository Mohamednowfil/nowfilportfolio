import React from 'react';

const Projects = () => {
  const projects = [
    { 
      title: 'AI-Powered Invoice Data Extraction', 
      description: (
        <>
          1. Developed an AI-powered solution to extract structured data from food bill images and convert it into JSON format, eliminating the need for manual processing. <br /><br />
          2. Utilized the Donut Transformer model fine-tuned on the CORD dataset for accurate and efficient receipt data understanding without relying on traditional OCR techniques.
          <br /><br />
          <strong>Tech Stack:</strong> Python, PyTorch, Transformers (Donut Model), Pillow (PIL), Vision Transformer (ViT), Beam Search Decoding, Regex.
        </>
      ),
      link: 'https://github.com/Mohamednowfil/Imagetotext',
      image: 'image2text.png'
    },
    { 
      title: 'Invoice Generator',
      description: (
        <>
          1.Developed a frontend invoice generation app using React, allowing users to create invoices with customized details, including itemized lists, taxes, and discounts.
          <br /><br />
          2.Implemented dynamic calculations, supporting both dollar-based and percentage-based pricing for items, taxes, and discounts, to meet varied business needs.
          <br /><br />
          3.Enabled users to generate and download a well-structured PDF invoice directly from the browser, featuring a "From" address, recipient details, itemized list, and total calculations.
          <br /><br />
          <strong>Tech Stack:</strong> React, JavaScript, HTML, CSS, PDFMake (for PDF generation), local storage.
        </>
      ),
      link: 'https://invoice--generator.vercel.app/',
      image: 'INVOICE.png'
    },
    { 
      title: 'Multi-Chain NFT',
      description: (
        <>
          1.The contract allows NFTs to be bridged between multiple blockchains like Ethereum, BNB Chain, Polygon, and more, providing seamless multi-chain support.
          <br /><br />
          2.Integrated with a decentralized exchange (DEX) router for easy token swaps between various ERC20 tokens, enhancing flexibility and usability for users.
          <br /><br />
          3.Users can mint unique NFTs, burn and bridge them across chains, and pause/unpause the contract for security purposes, ensuring control over contract operations.
          <br /><br />
          <strong>Tech Stack:</strong> Solidity, OpenZeppelin (ERC721, Ownable, Pausable, SafeMath), Cross-Chain Bridge Protocol, DEX Router, ERC20 Tokens.
        </>
      ),
      link: 'https://github.com/Mohamednowfil/MultiChainNFT',
      image: 'multichain.jpg'
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-box">
            <img src={project.image} alt={`${project.title} image`} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p>{project.description}</p>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="view-button"
            >
              View Project
            </a>
          </div>
        ))}
      </div>

      <style jsx>{`
        /* Styling for the project section */
        #projects {
          padding: 20px;
        }

        .projects-container {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
        }

        .project-title {
          font-size: 1.5rem;
          margin-bottom: 10px;
        }

        .project-image {
          width: 100%;
          height: auto;
          border-radius: 8px;
          margin-bottom: 10px;
        }

        strong {
          font-weight: bold;
        }

        /* Mobile-Friendly Design */
        @media (max-width: 768px) {
          .projects-container {
            flex-direction: column;
            align-items: center;
          }

          .project-box {
            width: 90%;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
