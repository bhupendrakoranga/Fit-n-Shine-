import React, { Container, Form, Button, Breadcrumb } from 'react-bootstrap';
import SelectBox from '../../SelectBox/SelectBox';
import './CategoryHead.css';
import locPin from '../../../images/location-pin.svg';
import search from '../../../images/search.svg';
import finessIcn from '../../../images/icon-fitness2.svg';
const CategoryHead = () => {
  const locOptions = [
    { value: 'India', label: 'India' },
    { value: 'USA', label: 'USA' },
    { value: 'UK', label: 'UK' },
  ];
  return (
    <>
      <div className="category-head">
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
          <div className="head-content d-flex justify-content-between align-items-center">
            <div className="info">
              <h2 className="info-title">Fitness</h2>
              <Breadcrumb>
                <Breadcrumb.Item href="#">Gym</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Zumba</Breadcrumb.Item>
                <Breadcrumb.Item active>Callisthenics</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <span className="info-icn">
              <img src={finessIcn} alt="icon" />
            </span>
          </div>
        </Container>
      </div>
    </>
  );
};
export default CategoryHead;
