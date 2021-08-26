import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SelectionItem from '../components/SelectionItem';

const StyledHome = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Home = () => {
  return (
    <StyledHome>
      <Link to="/DEATH_NOTE/killing-start">
        <SelectionItem
          text="Do Your Job"
          img="https://www.firstpost.com/wp-content/uploads/2017/08/13245470_1129092717162553_622982228854157952_n-Copy-2.jpg"
        />
      </Link>
      <Link to="/DEATH_NOTE/community">
        <SelectionItem
          text="Community"
          img="https://c4.wallpaperflare.com/wallpaper/791/198/515/death-note-kira-1920x1200-anime-death-note-hd-art-wallpaper-preview.jpg"
        />
      </Link>
      <Link to="/DEATH_NOTE/ranking">
        {' '}
        <SelectionItem
          text="Ranking"
          img="https://c4.wallpaperflare.com/wallpaper/162/325/134/art-kira-death-note-detective-wallpaper-preview.jpg"
        />
      </Link>
    </StyledHome>
  );
};

export default Home;
