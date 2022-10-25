import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  KakaoLoginAsync,
  userToken,
} from '../../features/kakaoLogin/kakaoLoginSlice';
import { useCookies } from 'react-cookie';
import styled from 'styled-components';

const LoginResult = () => {
  const [cookies, setCookie] = useCookies(['token']);
  const serverToken = useAppSelector(userToken);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const code = searchParams.get('code');
  const onlogin = new Promise(function (resolve) {
    resolve(code && dispatch(KakaoLoginAsync(code)));
  });
  onlogin
    .then(() => {
      setCookie('token', serverToken, { path: '/', maxAge: 1800 });
    })
    .then(() => navigate(-1));
  return (
    <>
      <Background>
        <LoadingText>로그인중 입니다...</LoadingText>
        <img src={process.env.PUBLIC_URL + '/icons/Rolling-2.4S.gif'}/>
      </Background>
    </>
  );
};

export default LoginResult;
export const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img{
    width: 7%;
    height : 7%;
  }
`;

export const LoadingText = styled.div`
  text-align: center;
`;
