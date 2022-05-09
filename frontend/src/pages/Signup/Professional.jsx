import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { register } from '../../actions/professionalAction';
import { Footer } from '../../component';
import MainLayout from '../../layouts/MainLayout';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import StripeCheckout from 'react-stripe-checkout';
const Professional = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState();
  const [insured, setInsured] = useState();
  const [bio, setBio] = useState('');
  const [expertise, setExpertise] = useState();
  const [uploading, setUploading] = useState();
  const [businessName, setBusinessName] = useState('');
  const [membership, setMembership] = useState('annual');
  const [paymentInfo, setPaymentInfo] = useState(null);
  const [intro, setIntro] = useState();
  // For payment
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [focus, setFocus] = useState('');
  const [showLoader, setShowLoader] = useState('none');
  //
  const [justOnce, setJustOnce] = useState(true);

  const dispatch = useDispatch();

  const professionalLogin = useSelector((state) => state.professionalLogin);
  const { profLoading, profError, professionalInfo } = professionalLogin;

  const navigate = useNavigate();

  useEffect(() => {
    if (professionalInfo) {
      navigate('/');
    }
  }, [professionalInfo, navigate]);
  const ref = useRef(null);

  const uploadFileHandler = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('intro', file);
    setUploading(true);
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
      const { data } = await axios.post('/api/uploads', formData, config);
      setIntro(data);
      setUploading(false);
    } catch (error) {
      setUploading(false);
    }
  };

  const handleRegistrationFormSubmit = (e) => {
    e.preventDefault();
    if (!paymentInfo) {
      return window.alert('Payment required before signing up');
    }
    setShowLoader(true);
    const data = {
      firstName,
      lastName,
      email,
      phone,
      password,
      gender,
      insured: insured === 'Yes' ? true : false,
      bio,
      expertise,
      uploading,
      businessName,
      membership,
      paymentInfo,
      intro,
    };
    dispatch(register(data));
    setShowLoader(false);
  };
  const makePayment = async (token) => {
    setPaymentInfo(null);
    const body = {
      token,
      email,
      membership,
      payment: membership === 'annual' ? 179 : 15.99,
    };
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post('/api/payment', body, config);
    setPaymentInfo(data);
  };
  return (
    <>
      <div className="professional-signup-area">
        <div className="professional-signup-section">
          <div className="container">
            <h2>START CONNECTING TO CLIENTS</h2>
            <h6>
              Choose the right clients in a safe and confidential space: Simply
              register, record your video, and relax.
            </h6>
            <p>
              At Mindsetts, our promise to you is that your personal details
              will always be safe with us.
            </p>
            <div className="professional-signup-form-part">
              <form
                action
                method="POST"
                id="professionals-signup-form"
                encType="multipart/form-data"
                onSubmit={handleRegistrationFormSubmit}
              >
                <input
                  type="hidden"
                  name="_token"
                  defaultValue="p4gLL9gU20elXZfoviUNA94Zig15QIkl5NR8iiBL"
                />{' '}
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="first_name"
                    placeholder="First Name"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="last_name"
                    placeholder="Last Name"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label
                    id="email-error"
                    className="error"
                    htmlFor="email"
                    style={{ display: 'none' }}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    placeholder="Phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label
                    id="password-error"
                    className="error"
                    htmlFor="password"
                    style={{ display: 'none' }}
                  />
                </div>
                <div className="form-group">
                  <select
                    className="form-control"
                    id="OptionSelect1"
                    name="gender"
                    required
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value hidden>
                      Select Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <select
                    className="form-control"
                    id="OptionSelect2"
                    name="insured"
                    required
                    onChange={(e) => setInsured(e.target.value)}
                  >
                    <option value hidden>
                      Are you insured?
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="bio"
                    placeholder="Bio"
                    rows={5}
                    required
                    defaultValue={''}
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                  />
                </div>
                <div className="form-group specialities">
                  <select
                    className="form-control"
                    id="specialities"
                    name="specialities[]"
                    multiple="multiple"
                    required
                    onChange={(e) => {
                      setExpertise(e.target.value);
                    }}
                  >
                    <option value={1}>Hypnobirthing</option>
                    <option value={2}>Depression</option>
                    <option value={3}>Eating problems</option>
                    <option value={4}>Exam stress</option>
                    <option value={5}>Female sexual problems</option>
                    <option value={6}>Blushing</option>
                    <option value={7}>Anxiety</option>
                    <option value={8}>Addiction</option>
                    <option value={9}>Anger management</option>
                    <option value={10}>Bruxism (teeth grinding)</option>
                    <option value={11}>Irritable bowel syndrome</option>
                    <option value={12}>Low self-confidence</option>
                    <option value={13}>Low self-esteem</option>
                    <option value={14}>Male sexual problems</option>
                    <option value={15}>Obsessions and compulsions</option>
                    <option value={16}>Pain management</option>
                    <option value={17}>PTSD</option>
                    <option value={18}>Public speaking</option>
                    <option value={19}>Relationship issues</option>
                    <option value={20}>Relaxation</option>
                    <option value={21}>Sleep problems</option>
                    <option value={22}>Sports performance</option>
                    <option value={23}>Stress</option>
                    <option value={24}>Stuttering</option>
                    <option value={25}>Tinnitus</option>
                    <option value={26}>Weight loss</option>
                    <option value={27}>Insomnia</option>
                    <option value={28}>Alcohol abuse</option>
                    <option value={29}>Drug addiction</option>
                    <option value={30}>Quit smoking</option>
                    <option value={31}>Gambling addiction</option>
                    <option value={32}>Sex addiction</option>
                    <option value={33}>Food addiction</option>
                    <option value={34}>Fear of flying</option>
                    <option value={35}>Panic attacks</option>
                    <option value={36}>Phobias</option>
                    <option value={37}>Fertility</option>
                  </select>
                  <label
                    id="specialities-error"
                    className="error"
                    htmlFor="specialities"
                    style={{ display: 'none' }}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Business Name"
                    name="business_name"
                    required
                    value={businessName}
                    onChange={(e) => {
                      setBusinessName(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control video-upload"
                    type="file"
                    accept="video/*"
                    name="video_upload"
                    onChange={uploadFileHandler}
                    // required
                  />
                  {uploading && (
                    <div
                      className="main-loader"
                      id="main-loader"
                      style={{ display: 'flex' }}
                    >
                      <div className="main-loader-inner" />
                      <h1>Uploading</h1>
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <p className="small-title">Membership</p>
                  <div className="custom-radio-button">
                    <select
                      onChange={(e) => {
                        setMembership(e.target.value);
                      }}
                    >
                      <option value={'annual'} selected>
                        Annual
                      </option>
                      <option value={'monthly'}>Monthly</option>
                    </select>
                  </div>
                  <label
                    id="member_ship-error"
                    className="error"
                    htmlFor="member_ship"
                    style={{ display: 'none' }}
                  />
                </div>
                <div className="form-group">
                  <p className="small-title">Payment Details</p>

                  {!paymentInfo && membership && email && (
                    <StripeCheckout
                      name={`${membership.toUpperCase()} subscription`}
                      amount={membership === 'annual' ? 179 * 100 : 15.99 * 100}
                      currency="EUR"
                      stripeKey="pk_test_51Ioi4TAb9jqpcp3cwyloCqrniFapDRF6GScWptpkONo7I3EsugACDc3Hms33HqNyZL7tkHk0i9TQJ4OcwbCENqDG00Xy9JWnPK"
                      email={email ? email : ''}
                      billingAddress
                      zipCode
                      token={makePayment}

                      // opened={console.log('Popup opened')}
                      // closed={console.log('Popup closed')}
                    >
                      <button type="button" className="btn btn-primary">
                        Pay with card
                      </button>
                    </StripeCheckout>
                  )}
                  {paymentInfo && paymentInfo.paymentInfo.amount && (
                    <div>
                      <p>{`${membership.toUpperCase()} membership subscription purchased`}</p>
                      <p>
                        Total amount paid: ${paymentInfo.paymentInfo.amount}
                      </p>
                    </div>
                  )}
                </div>
                <div className="signin-button-part">
                  <input
                    type="submit"
                    className="signin-button"
                    defaultValue="Sign Up"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        className="main-loader"
        id="main-loader"
        style={{ display: showLoader }}
      >
        <div className="main-loader-inner" />
      </div>
    </>
  );
};

export default Professional;
