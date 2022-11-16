import Title from '../components/Title';
import SearchBox from '../components/SearchBox';
import EmptyBar from '../components/EmptyBar';
import RankingBox from '../components/RankingBox';

function MainPage() {
  return (
    <div>
      <Title />
      <SearchBox />
      <EmptyBar value={50} />
      <RankingBox />
    </div>
  );
}

export default MainPage;
