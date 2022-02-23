import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Breadcrumb } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as API from '../../../constants/APIs';
import * as actions from '../../../redux/actions/auth';
import { toast, ToastContainer } from 'react-toastify';
import FitnessCard from '../../FitnessCard/FitnessCard';
import '../../Home/MainBlock/MainBlock.css';
import './CategoryBlock.css';
import fillstar from '../../../images/star-ratings.svg';
import emptystar from '../../../images/star-ratings-empty.svg';
import filterIcn from '../../../images/filter-alt.svg';
import catFit1 from '../../../images/cate-fit-1.png';
import catFit2 from '../../../images/cate-fit-2.png';
import catFit3 from '../../../images/cate-fit-3.png';
import catFit4 from '../../../images/cate-fit-4.png';
import catFit5 from '../../../images/cate-fit-5.png';
import catFit6 from '../../../images/cate-fit-6.png';
import catFit7 from '../../../images/cate-fit-7.png';
import catFit8 from '../../../images/cate-fit-8.png';
import catFit9 from '../../../images/cate-fit-9.png';

const CategoryBlock = (props) => {
  const { id, postCode } = useParams();
  const [categoryData, setgetCardData] = useState([

  ]);

  const history = useHistory();
  const HeadContent = [
    {
      Rating: 3.9,
      cardImg: catFit1,
      Ctitle: 'Pumping house',
    },
    {
      Rating: 3.9,
      cardImg: catFit2,
      Ctitle: 'Gym Heroes',
    },
    {
      Rating: 3.9,
      cardImg: catFit3,
      Ctitle: 'Pump It Up',
    },
    {
      Rating: 3.9,
      cardImg: catFit4,
      Ctitle: 'Center of Strength',
    },
    {
      Rating: 3.9,
      cardImg: catFit5,
      Ctitle: 'Power Zone',
    },
    {
      Rating: 3.9,
      cardImg: catFit6,
      Ctitle: 'Home of Fit Kids',
    },
    {
      Rating: 3.9,
      cardImg: catFit7,
      Ctitle: 'The Muscle Bar',
    },
    {
      Rating: 3.9,
      cardImg: catFit8,
      Ctitle: 'Strength Palace',
    },
    {
      Rating: 3.9,
      cardImg: catFit9,
      Ctitle: 'Total Body Gym',
    },
  ];

  //View Service
  const categoryPage = (e, id) => {
    e.preventDefault();
    history.push(`/center-details/${id}`);
  };

  //Get PostCode
  useEffect(() => {
    window.scrollTo(0, 0)
    props.getAllServiceCard(id, postCode);
  }, []);

  //heart icon
  useEffect(() => {
    getCardData()
    // localStorage.setItem('business_id', id);
  }, [props.categoryData])



  const getCardData = () => {
    setgetCardData(props.categoryData)
  };

  //onclick event
  const handleClick = (e, isFavourite, id, index) => {

    e.preventDefault();
    e.stopPropagation();
    let category = [...categoryData];
    categoryData[index].myFavourite = !isFavourite;
    setgetCardData(category)
    isFavourite ? props.removeFavourite(id) : props.submitAllFavourite(id);

    // props.submitAllFavourite(myFavourite: true)
  }


  return (
    <>
      <div className="category-block">
        <Container>
          <div className="category-wrp d-md-flex align-items-start">
            <div className="cate-filter">
              <span className="filter-title">
                {' '}
                Filter{' '}
                <i className="filter-icn">
                  <img src={filterIcn} alt="" />
                </i>{' '}
              </span>
              <div className="wrp">
                <div className="fil-blk">
                  <span className="blk-title">Rating</span>
                  <div className="rating d-flex align-items-center">
                    <span className="star"> <img src={fillstar} alt="star" /> </span>
                    <span className="star">
                      <img src={fillstar} alt="star" />
                    </span>
                    <span className="star">
                      <img src={fillstar} alt="star" />
                    </span>
                    <span className="star">
                      <img src={fillstar} alt="star" />
                    </span>
                    <span className="star">
                      <img src={emptystar} alt="star" />
                    </span>
                    <p className="desc">4 Stars &amp; Up</p>
                  </div>
                  <div className="rating d-flex align-items-center">
                    <span className="star">
                      <img src={fillstar} alt="star" />
                    </span>
                    <span className="star">
                      <img src={fillstar} alt="star" />
                    </span>
                    <span className="star">
                      <img src={fillstar} alt="star" />
                    </span>
                    <span className="star">
                      <img src={emptystar} alt="star" />
                    </span>
                    <span className="star">
                      <img src={emptystar} alt="star" />
                    </span>
                    <p className="desc">3 Stars &amp; Up</p>
                  </div>
                  <div className="rating d-flex align-items-center">
                    <span className="star">
                      <img src={fillstar} alt="star" />
                    </span>
                    <span className="star">
                      <img src={fillstar} alt="star" />
                    </span>
                    <span className="star">
                      <img src={emptystar} alt="star" />
                    </span>
                    <span className="star">
                      <img src={emptystar} alt="star" />
                    </span>
                    <span className="star">
                      <img src={emptystar} alt="star" />
                    </span>
                    <p className="desc">2 Stars &amp; Up</p>
                  </div>
                  <div className="rating d-flex align-items-center">
                    <span className="star">
                      <img src={fillstar} alt="star" />
                    </span>
                    <span className="star">
                      <img src={emptystar} alt="star" />
                    </span>
                    <span className="star">
                      <img src={emptystar} alt="star" />
                    </span>
                    <span className="star">
                      <img src={emptystar} alt="star" />
                    </span>
                    <span className="star">
                      <img src={emptystar} alt="star" />
                    </span>
                    <p className="desc">1 Stars &amp; Up</p>
                  </div>
                </div>
                <div className="fil-blk">
                  <span className="blk-title">Service</span>
                  <p className="desc">Yoga</p>
                  <span className="blk-title"></span>
                  <p className="desc">Zumba</p>
                </div>
              </div>
            </div>
            <div className="all-category">
              <div className="main-head">
                <h2 className="main-title">Centres Nearby</h2>
                <p className="main-desc">350+ partners nearby</p>
              </div>


              <div className="category-fitness d-md-flex flex-wrap justify-content-between ">
                {categoryData.length > 0 &&
                  categoryData.map((row, index) => (
                    <div className="fit-item" onClick={(e) => categoryPage(e, row._id)}  >
                      <FitnessCard
                        cardImg={row.image ? row.image : catFit1}
                        cardTitle={row.name}
                        cardRate={row.rating}
                        handleClick={handleClick}
                        id={row._id}
                        index={index}
                        myFavourite={row.myFavourite}
                      // myFavourite={row.reFavourite}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  ;
  return {
    categoryData: state.Auth.serviceDocs,
    addID: state.Auth.addID,
    removeID: state.Auth.removeID,
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    getAllServiceCard: (id, postCode) =>
      dispatch(actions.getAllServiceCard(id, postCode)),

    submitAllFavourite: (favourite) =>
      dispatch(actions.submitAllFavourite(favourite)),

    removeFavourite: (favourite) =>
      dispatch(actions.removeFavourite(favourite)),

  };
};
export default compose(connect(mapStateToProps, mapDispatchToProps))(CategoryBlock);
