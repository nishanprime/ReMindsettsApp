import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import { login } from '../../actions/userActions';
import { Loader } from '../../component';
const Signin = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const professionalLogin = useSelector((state) => state.professionalLogin);
  const { profLoading, profError, professionalInfo } = professionalLogin;
  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (userInfo || professionalInfo) {
      navigate('/');
    }
  }, [userInfo, professionalInfo, navigate]);

  return (
    <div className="sign-in-page">
      <div className="sign-in-form-section">
        <div className="container">
          <h2>
            Welcome to Mindsetts! Find the perfect Therapist or Coach for You.
          </h2>
          <h4>FREE to join.</h4>
          <p>
            At MindSETTS, our promise to you is your personal information will
            be kept safe and completely confidential, there will be no follow-up
            ,spam or pressure to book a session.
          </p>
          <form onSubmit={loginHandler}>
            {/* <input
                type="hidden"
                name="_token"
                defaultValue="p4gLL9gU20elXZfoviUNA94Zig15QIkl5NR8iiBL"
              /> */}
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                className="form-control"
                defaultValue
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error || (profError && <h1>{error || profError}</h1>)}
            {loading || profLoading ? (
              <h1>Loading...</h1>
            ) : (
              <div className="signin-button-part">
                <input
                  type="submit"
                  className="signin-button"
                  defaultValue="Sign In"
                />
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
