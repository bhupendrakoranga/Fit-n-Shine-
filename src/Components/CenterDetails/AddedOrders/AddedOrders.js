import * as React from 'react';
import { Link } from 'react-router-dom';
import MembershipCard from '../../MembershipCard/MembershipCard';
import './AddedOrders.css';
import memberImg1 from '../../../images/member-img1.png';
import memberImg2 from '../../../images/member-img2.png';

const AddedOrders = (props) => {
  return (
    <div className="added-orders">
      <MembershipCard
        cardImg={memberImg1}
        crdTitle={'Zumba premium classes + Diet plan'}
        crdDesc={
          'You will get 2 hours zumba session with the top instructor. Diet plan will be given to you for free.'
        }
        crdPrice={120}
        crdBtn={'Added'}
        adCls={'sec-btn'}
      />
      <MembershipCard
        cardImg={memberImg2}
        crdTitle={'Calisthenics classes + Diet plan'}
        crdDesc={
          'You will get 2 hours zumba session with the top instructor. Diet plan will be given to you for free.'
        }
        crdPrice={120}
        crdBtn={'Added'}
        adCls={'sec-btn'}
      />
    </div>
  );
};

export default AddedOrders;
