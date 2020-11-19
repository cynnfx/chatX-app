import { connect } from 'react-redux';
// import WeatherComponent from '../../components/weather-component/weather-component';
import LoginComponent from '../components/login-component';
import { getUserSelector } from '../reducers/user-reducer';
import logUser from '../actions/user/loguser';
import updateCred from '../actions/user/updatecred';

const mapStateToProps = (state: Record<string, unknown>) =>
  getUserSelector(state);

const mapDispatchToProps = (
  dispatch: Dispatch<IGetAllAssets | ISetAllAssets>,
) => ({
  logUser: () => dispatch(logUser()),
  updateCred: payload => dispatch(updateCred(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
