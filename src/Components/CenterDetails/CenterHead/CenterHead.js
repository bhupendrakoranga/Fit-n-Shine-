import React, { Container, Form, Button, Breadcrumb } from 'react-bootstrap';
import SelectBox from '../../SelectBox/SelectBox';
import './CenterHead.css';
import locPin from '../../../images/location-pin.svg';
import search from '../../../images/search.svg';
import heartIcn from '../../../images/heary-icn2.svg';
import fillstar from '../../../images/star-ratings.svg';
const CenterHead = () => {
  const locOptions = [
    { value: 'India', label: 'India' },
    { value: 'USA', label: 'USA' },
    { value: 'UK', label: 'UK' },
  ];
  return (
    <>
      <div className="center-head">
        <Container>
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
          <div className="d-flex justify-content-between align-items-center">
            <div className="info">
              <span className="rating">
                <span className="num">3.9</span>
                <span className="star">
                  <img src={fillstar} alt="star" />
                </span>
              </span>
              <h2 className="info-title">Pumping house</h2>
            </div>
            <span className="info-icn">
              <img src={heartIcn} alt="icon" />
            </span>
          </div>
        </Container>
      </div>
    </>
  );
};
export default CenterHead;
