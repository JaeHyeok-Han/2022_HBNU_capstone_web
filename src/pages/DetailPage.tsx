import useMovieStore from '../store/movieStore';
import Title from '../components/Title';
import DetailBox from '../components/DetailBox';
import type { MovieDetail } from '../interfaces/movie';

function DetailPage() {
  const { movie } = useMovieStore();

  return (
    <div>
      <Title />
      <DetailBox item={movie as MovieDetail} />
    </div>
  );
}

export default DetailPage;
