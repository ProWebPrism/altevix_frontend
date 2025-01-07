import { useState } from 'react'
import { ChevronLeft, ChevronRight, CircleArrowLeft, CircleArrowRight, Play  } from 'lucide-react'
import './Elevator2.css'
import elevator from '../../assets/images/elevators.jpg'
import left from '../../assets/images/left.png'
import right from '../../assets/images/right.png'

export default function ElevatorDisplay() {
  const itemsPerPage = 3
  const [currentPage, setCurrentPage] = useState(1)

  
  const elevators = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: 'Altivex-Elevator',
    imageUrl: elevator
  }))

  const totalPages = Math.ceil(elevators.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const visibleElevators = elevators.slice(startIndex, startIndex + itemsPerPage)

  return (
    <div className="elevato2r-container">
      <div className="elevator2-grid">
        {visibleElevators.map((elavator) => (
          <div key={elevator.id} className="elevator2-card">
            <img
              src={elavator.imageUrl}
              alt={`Elevator ${elavator.id}`}
              className="elevator2-image"
            />
            <div className="elevator2-title">
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