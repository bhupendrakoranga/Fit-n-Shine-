import React, { Container, Form, Button } from 'react-bootstrap';
import SelectBox from '../../SelectBox/SelectBox';
import './HomeBanner.css';
import locPin from '../../../images/location-pin.svg';
import search from '../../../images/search.svg';
import bannerObg1 from '../../../images/banner-img01.jpg';
import bannerObg2 from '../../../images/banner-img02.jpg';
import bannerObg3 from '../../../images/banner-img03.jpg';
import bannerObg4 from '../../../images/banner-img04.jpg';
import bannerObg5 from '../../../images/banner-img05.jpg';
const HomeBanner = () => {
  const locOptions = [
    { value: 'India', label: 'India' },
    { value: 'USA', label: 'USA' },
    { value: 'UK', label: 'UK' },
  ];

  return (
    <>
      <div className="home-banner">
        <div className="img-obg img-obg1 d-none d-lg-block">
          <img src={bannerObg1} alt="Image" />
        </div>
        <div className="img-obg img-obg2 d-none d-lg-block">
          <img src={bannerObg2} alt="Image" />
        </div>
        <div className="img-obg img-obg3 d-none d-lg-block">
          <img src={bannerObg3} alt="Image" />
        </div>
        <div className="img-obg img-obg4 d-none d-lg-block">
          <img src={bannerObg4} alt="Image" />
        </div>
        <div className="img-obg img-obg5 d-none d-lg-block">
          <img src={bannerObg5} alt="Image" />
        </div>
        <Container>
          <div className="banner-content text-left">
            <h1 className="banner-title">Discover Best Service around you</h1>
            <Form className="d-md-flex justify-content-between">
              <Form.Group>
                <span className="loc-icn">
                  <img src={locPin} alt="icon" />
                </span>
                <SelectBox placeHolder="Street P…" options={locOptions} />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Search service or anything"
                />
                <Button className="search-btn" type="submit">
                  <img src={search} alt="search" />
                </Button>
              </Form.Group>
            </Form>
          </div>
        </Container>
      </div>
    </>
  );
};
export default HomeBanner;
