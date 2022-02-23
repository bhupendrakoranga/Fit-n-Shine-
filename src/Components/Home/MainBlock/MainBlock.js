import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as API from '../../../constants/APIs';
import * as actions from '../../../redux/actions/auth';
import { toast, ToastContainer } from 'react-toastify';
import Slider from 'react-slick';
import ServiceCard from '../../ServiceCard/ServiceCard';
import FitnessCard from '../../FitnessCard/FitnessCard';
import previous1 from '../../../images/previous1.jpg';
import previous2 from '../../../images/previous2.jpg';
import previous3 from '../../../images/previous3.jpg';
import yoga1 from '../../../images/yoga1.jpg';
import yoga2 from '../../../images/yoga2.jpg';
import yoga3 from '../../../images/yoga3.jpg';
import beauty1 from '../../../images/beauty1.jpg';
import beauty2 from '../../../images/beauty2.jpg';
import beauty3 from '../../../images/beauty3.jpg';
import hair1 from '../../../images/hair1.jpg';
import hair2 from '../../../images/hair2.jpg';
import hair3 from '../../../images/hair3.jpg';
import spa1 from '../../../images/spa1.jpg';
import spa2 from '../../../images/spa2.jpg';
import spa3 from '../../../images/spa3.jpg';
import nails1 from '../../../images/nails1.jpg';
import nails2 from '../../../images/nails2.jpg';
import nails3 from '../../../images/nails3.jpg';
import heart1 from '../../../images/heart1.png';
import style from '../../Home/MainBlock/MainBlock.css';
//import {FavoriteBorderIcon} from '@mui/icons-material/FavoriteBorder';
import './MainBlock.css';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const MainBlock = (props) => {
  const history = useHistory();
  const { postCode } = useParams();
  const [state, setState] = useState({
    latitude: "25.47086",
    Longitude: "81.8333549",
  })
  // const [latitude, setLatitude] = useState();
  // const [longitude, setongitude] = useState();

  const HeadContent = [
    {
      MainTitle: 'Previously Booked',
      MainDesc: 'Book quicly from past service',
      Rating: 3.9,
      cardImg1: previous1,
      cardImg2: previous2,
      cardImg3: previous3,
      cardImg4: previous3,
      Ctitle1: 'Pumping house',
      Ctitle2: 'Zen Zumba Classes',
      Ctitle3: 'Flydream Gym',
      Ctitle4: 'Flydream Gym',
    },
    {
      MainTitle: 'Yoga',
      MainDesc: '50+ partners available',
      Rating: 3.9,
      cardImg1: yoga1,
      cardImg2: yoga2,
      cardImg3: yoga3,
      cardImg4: yoga3,
      Ctitle1: 'Calm Yoga Centre',
      Ctitle2: 'Body Mind & Soul',
      Ctitle3: 'Escape In Peace',
      Ctitle4: 'Kardim’s Play',
    },

    {
      MainTitle: 'Fitness',
      MainDesc: '50+ partners available',
      Rating: 3.9,
      cardImg1: previous1,
      cardImg2: previous2,
      cardImg3: previous3,
      cardImg4: previous3,
      Ctitle1: 'Pumping house',
      Ctitle2: 'Zen Zumba Classes',
      Ctitle3: 'Flydream Gym',
      Ctitle4: 'Flydream Gym',
    },
    {
      MainTitle: 'Beauty',
      MainDesc: '50+ partners available',
      Rating: 3.9,
      cardImg1: beauty1,
      cardImg2: beauty2,
      cardImg3: beauty3,
      cardImg4: beauty3,
      Ctitle1: 'Looks',
      Ctitle2: 'Perfect Skin',
      Ctitle3: 'Beauty And You',
      Ctitle4: 'Feel Special',
    },
    {
      MainTitle: 'Hair',
      MainDesc: '50+ partners available',
      Rating: 3.9,
      cardImg1: hair1,
      cardImg2: hair2,
      cardImg3: hair3,
      cardImg4: hair3,
      Ctitle1: 'Mane Beautilocks',
      Ctitle2: 'Cappiello Salon',
      Ctitle3: 'Bombshell Studio',
      Ctitle4: 'Cute Cut',
    },
    {
      MainTitle: 'Spa',
      MainDesc: '50+ partners available',
      Rating: 3.9,
      cardImg1: spa1,
      cardImg2: spa2,
      cardImg3: spa3,
      cardImg4: spa3,
      Ctitle1: 'Body and Soul spa',
      Ctitle2: 'Queen of the day',
      Ctitle3: 'One Massage Away',
      Ctitle4: 'Free Mind spa',
    },
    {
      MainTitle: 'Nails',
      MainDesc: '50+ partners available',
      Rating: 3.9,
      cardImg1: nails1,
      cardImg2: nails2,
      cardImg3: nails3,
      cardImg4: nails3,
      Ctitle1: 'Get Nailed!',
      Ctitle2: 'Filed Away',
      Ctitle3: 'Sin City Nails',
      Ctitle4: 'Dream Nails',
    },
  ];
  const settings1 = {
    dots: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    mobileFirst: true,
    centerMode: false,
    variableWidth: true,
    centerPadding: '18px',
  };
  const settings2 = {
    dots: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    mobileFirst: true,
    centerMode: false,
    variableWidth: true,
    centerPadding: '18px',
  };

  //service card
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        // getPinCode()
      });
    }
    props.getService()
    props.getFavourite()
    window.scrollTo(0, 0)
  }, []);


  const getCurrentPositionData = () => {

    setState({
      ...state,
      latitude: props.position.coords.latitude,
      longitude: props.position.coords.longitude
    });
  };

  // favourite card
  useEffect(() => {


  }, [])

  //View Service
  const viewService = (e, id, postCode) => {
    history.push(`/category/${id}/${postCode}`);
  };

  return (
    <>
      <section className="main-section service-sec">
        <Container>
          <div className="main-head service-head">
            <h2 className="main-title">Service Tyes</h2>
            <p className="main-desc">More than 1,000 partners to choose from</p>
          </div>

          {props.data.length > 0 ? (
            <Slider className="service-slider d-block" {...settings1}>
              {props.data.length > 0 &&
                props.data.map((service, index) => (
                  <div
                    className="service-item itm1"
                    onClick={(e) =>
                      viewService(e, service._id, service.postCode)
                    }
                  >
                    <ServiceCard
                      cardImg={service.image}
                      cardTitle={service.name}
                      cardDesc={'50+ partners available'}
                    />
                  </div>
                ))}
              {props.favourite.length > 0 &&
                props.favourite.map((service, index) => (
                  <div
                    className="service-item itm1"
                    onClick={(e) =>
                      viewService(e, service._id, service.postCode)
                    }
                  >
                    <ServiceCard
                      cardImg={service.image ? service.image : heart1}
                      // cardImg={<FavoriteBorderIcon/>}
                      cardTitle={service.name}
                      cardDesc={'50+ partners available'}
                    />
                  </div>
                ))}
            </Slider>
          ) : (
            <div>No Record Found</div>
          )}
        </Container>
      </section>

      {HeadContent.map((item, index) => (
        <section className="main-section">
          <Container>
            <div className="main-head">
              <h2 className="main-title">{item.MainTitle}</h2>
              <p className="main-desc">{item.MainDesc}</p>
            </div>
            <Slider className="fitness-slider d-block" {...settings2}>
              <Link to="/center-details" className="fit-item d-block">
                <FitnessCard
                  cardImg={item.cardImg1}
                  cardTitle={item.Ctitle1}
                  cardRate={item.Rating}
                />
              </Link>
              <Link to="/center-details" className="fit-item d-block">
                <FitnessCard
                  cardImg={item.cardImg2}
                  cardTitle={item.Ctitle2}
                  cardRate={item.Rating}
                />
              </Link>
              <Link to="/center-details" className="fit-item d-block">
                <FitnessCard
                  cardImg={item.cardImg3}
                  cardTitle={item.Ctitle3}
                  cardRate={item.Rating}
                />
              </Link>
              <Link to="/center-details" className="fit-item d-block">
                <FitnessCard
                  cardImg={item.cardImg4}
                  cardTitle={item.Ctitle4}
                  cardRate={item.Rating}
                />
              </Link>
            </Slider>
          </Container>
        </section>
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.Auth.data,
    favourite: state.Auth.favourite,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getService: () =>
      dispatch(actions.getService()),

    getFavourite: () =>
      dispatch(actions.getFavourite()),
  };
};
export default compose(connect(mapStateToProps, mapDispatchToProps))(MainBlock);
