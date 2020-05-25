import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #222;
  /* padding: 0 10px; */
`;
export const Content = styled.View`
  flex: 1;
  background: #222;
  padding: 0 10px;
  margin-top: 35px;
`;
export const Logo = styled.ImageBackground.attrs({
  resizeMode: 'cover',
})`
  height: 100px;
  margin-top: 130px;
  margin-bottom: 100px;
  justify-content: center;
`;
export const Title = styled.Text`
  font-weight: bold;
  font-size: 26px;
  line-height: 30px;
  padding-left: 4px;
  color: #fff;
`;
export const ConfigIcon = styled.View`
  justify-content: flex-start;
  align-items: flex-end;
  /* background: red; */
  margin: 0;
  padding: 0;
  height: 30px;
`;
