import { Link } from 'react-router-dom';
import React, { Container, Form, Button, Breadcrumb } from 'react-bootstrap';
import SelectBox from '../../SelectBox/SelectBox';
import './OngoingHead.css';
import locPin from '../../../images/location-pin.svg';
import search from '../../../images/search.svg';
const OngoingHead = () => {
  const locOptions = [
    { value: 'India', label: 'India' },
    { value: 'USA', label: 'USA' },
    { value: 'UK', label: 'UK' },
  ];
  return (
    <>
      <div className="center-head ongoing-head">
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
          <div className="info d-flex align-items-center">
            <h2 className="info-title">Bookings</h2>
            <Link to="#!" className="btn">
              Ongoing
            </Link>
            <Link to="#!" className="btn history-btn">
              History
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};
export default OngoingHead;
