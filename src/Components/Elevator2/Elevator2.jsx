import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, CircleArrowLeft, CircleArrowRight, Play  } from 'lucide-react'
import './Elevator2.css'
import apiClient from '../../API/api'
import elevator from '../../assets/images/liftsample.png'
import left from '../../assets/images/left.png'
import right from '../../assets/images/right.png'

export default function ElevatorDisplay() {
  const [cards, setCards] = useState({
    cards: [
      { image: null, title: '' },
      { image: null, title: '' },
      { image: null, title: '' },
      { image: null, title: '' },
      { image: null, title: '' },
      { image: null, title: '' },
      { image: null, title: '' },
      { image: null, title: '' },
      { image: null, title: '' },
      { image: null, title: '' },
      { image: null, title: '' },
      { image: null, title: '' }
    ],
  });
  useEffect(() => {
    const fetchCardSection = async () => {
      try {
        const response = await apiClient.get('/section/product-section');
        setCards({
          cards: response.data.cards 
        });
      } catch (error) {
        console.error('Error fetching products section data:', error);
        alert('Failed to fetch card products data.');
      }
    };

    fetchCardSection();
  }, []);
  const itemsPerPage = 4
  const [currentPage, setCurrentPage] = useState(1)

  
  const elevators = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: 'Altivex-Elevator',
    imageUrl: elevator
  }))

  const totalPages = Math.ceil(elevators.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const visibleElevators = cards.cards.slice(startIndex, startIndex + itemsPerPage)

  return (
    <div className="elevato2r-container">
      <div className="elevator2-grid">
        {visibleElevators.map((elavator) => (
          <div key={elevator.id} className="elevator2-card">
            <img
              src={`http://localhost:5000/${elavator.image}`}
              alt={`Elevator ${elavator.id}`}
              className="elevator2-image"
            />
            <div className="lift-name">
              <h3>{elavator.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button
          className={`pagination-button-nav ${currentPage === 1 ? 'disabled' : ''}`}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          aria-label="Previous page"
        >
          <img src={left} className='icon' alt="" />
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
          <button
            key={pageNum}
            className={`pagination-button ${currentPage === pageNum ? 'active' : ''}`}
            onClick={() => setCurrentPage(pageNum)}
            aria-label={`Page ${pageNum}`}
            aria-current={currentPage === pageNum ? "page" : undefined}
          >
            {pageNum}
          </button>
        ))}

        <button
          className={` pagination-button-nav ${currentPage === totalPages ? 'disabled' : ''}`}
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          aria-label="Next page"
        >
          <img src={right} alt="" className='icon'/>
        </button>
      </div>
    </div>
  )
}