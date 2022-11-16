import { Movie } from '../interfaces/movie';

function RankingItem({ item }: { item: Movie }) {
  return <div>{item.movieNm}</div>;
}

export default RankingItem;
