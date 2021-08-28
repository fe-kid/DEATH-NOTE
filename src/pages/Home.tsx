import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SelectionItem from '../components/SelectionItem';

const StyledHome = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  height: 80vh;
  max-width: 1000px;
  margin: 0 auto;
  a {
    text-decoration: none;
  }
`;

const Home = () => {
  return (
    <StyledHome>
      <Link to="/killing-start">
        <SelectionItem
          text="키라 활동하기"
          img="https://www.firstpost.com/wp-content/uploads/2017/08/13245470_1129092717162553_622982228854157952_n-Copy-2.jpg"
        />
      </Link>
      <Link to="/community">
        <SelectionItem
          text="커뮤니티"
          img="https://c4.wallpaperflare.com/wallpaper/791/198/515/death-note-kira-1920x1200-anime-death-note-hd-art-wallpaper-preview.jpg"
        />
      </Link>
      <Link to="/ranking">
        {' '}
        <SelectionItem
          text="랭킹"
          img="https://c4.wallpaperflare.com/wallpaper/162/325/134/art-kira-death-note-detective-wallpaper-preview.jpg"
        />
      </Link>
    </StyledHome>
  );
};

export default Home;
