import React, { useState, useEffect } from 'react';
import CommonSection from '../shared/CommonSection';
import '../styles/tour.css';
import TourCard from '../shared/TourCard';
import SearchBar from '../shared/SearchBar';
import Newsletter from '../shared/Newsletter';
import { Col, Container, Row } from 'reactstrap';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';

const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const { data: tours, loading, error } = useFetch(`${BASE_URL}/tours?page=${page}&limit=5`); // Keep 5 for flexibility
  const { data: tourCount } = useFetch(`${BASE_URL}/tours/search/getTourCount`);

  useEffect(() => {
    if (tourCount) {
      const pages = Math.ceil(tourCount / 5);
      setPageCount(pages);
    }
    window.scrollTo(0, 0);
  }, [page, tourCount]);

  // Dynamically calculate column width based on number of tours
  const colWidth = tours ? Math.floor(12 / Math.min(tours.length, 4)) : 3; // Max 4 columns

  return (
    <>
      <CommonSection title={'All Tours'} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>
          {loading && <h4 className='text-center pt-5'>Loading...</h4>}
          {error && <h4 className='text-center pt-5'>{error}</h4>}
          {!loading && !error && (
            <Row>
              {tours?.length > 0 ? (
                tours.map((tour) => (
                  <Col
                    lg={colWidth}
                    md={colWidth > 6 ? 6 : colWidth * 2}
                    sm={12}
                    className='mb-4'
                    key={tour._id}
                  >
                    <TourCard tour={tour} />
                  </Col>
                ))
              ) : (
                <Col lg='12'>
                  <h4 className='text-center'>No tours found</h4>
                </Col>
              )}
              <Col lg='12'>
                <div className='pagination d-flex align-items-center justify-content-center mt-4 gap-3'>
                  {[...Array(pageCount).keys()].map((number) => (
                    <span
                      key={number}
                      onClick={() => setPage(number)}
                      className={page === number ? 'active__page' : ''}
                    >
                      {number + 1}
                    </span>
                  ))}
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default Tours;