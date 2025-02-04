import React from 'react'
import image from '../../assets/images/journey.png'
import image2 from '../../assets/images/contactsection.png'
import catalog from '../../assets/images/journey.png'

const SpareParts = () => {
    const downloadCatalog = () => {
        // Here you would specify the file URL for your catalog
        const catalogFileUrl = catalog; // Use the actual path
      
        // Create a link and trigger the download
        const link = document.createElement('a');
        link.href = catalogFileUrl;  // The actual path to the catalog file
        link.download = 'catalog.pdf'; // Specify the filename when downloaded
        link.click(); // Trigger the download
      };
  return (
    <>
            <div className='journey-section'>
          <div className="wrapper">
            <div className="journey-content">
              <div className="left">
                <div className="bground">
                  <img src={image} alt="" />
                </div>
              </div>
              <div className="right">
                <h3>Great catalogue for <span >Spare parts</span></h3>
              <p>We have an extensive multi-brand catalogue with more than 15.000 references available.

                15.000 encoded references.
                Express delivery within 24 hours throughout National territory and Europe.
                More than 50 years of experience in the sale of spare parts.
                Professionals involved and committed to quality and excellence of customer service.
                Supply of material in stock (24h)</p>
                <button className='catlog-btn' onClick={downloadCatalog}>Get catalog</button>
              </div>
            </div>
    
          </div>
        </div>
       <div className="who-we-are">
                 <div className="wrapper">
                   <div className="who-we-are-content">
                     <div className="left-side">
                       <h3>
                       General <span>catalogue
                       </span>
                       </h3>
                       <p>
                       Access our online spare part shop. We have an extensive multi-brand catalogue with more than 15.000 references available and more than 3.000 in stock
                       </p>
                       <button className='catlog-btn' onClick={downloadCatalog}>Get catalog</button>
                     </div>
                     <div className="right-side">
                       <div className="background">
                         <img
                           src={image2}
                           alt="Decorative"
                           className="decorative-image"
                         />
                       </div>
                     </div>
                     
                   </div>
                 </div>
               </div>

    </>

  )
}

export default SpareParts