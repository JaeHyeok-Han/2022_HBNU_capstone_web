import { makeDateString } from '../utils/date';
import type { Movie, MovieDetail } from '../interfaces/movie';
import type { ErrorDTO } from '../interfaces/common';

const kobisKEY = `43f6b744f893ec067ba399f6e2f19cd7`;
const kmdbKEY = `7D26ELZ22G9D906GZ432`;

async function getRanking(): Promise<Movie[] | ErrorDTO> {
  const date = makeDateString();
  const count = 5;
  try {
    const response = await fetch(
      `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${kobisKEY}&targetDt=${date}&itemPerPage=${count}`,
    );
    if (response.ok) {
      const jsonRes = await response.json();
      return jsonRes.boxOfficeResult.dailyBoxOfficeList;
    } else {
      return {
        error: true,
        message: response.statusText,
      };
    }
  } catch (err) {
    return {
      error: true,
      message: '서버오류로 인해 영화순위를 가져오지 못했습니다.',
    };
  }
}

async function getMovieInfo(title: string): Promise<MovieDetail | ErrorDTO> {
  try {
    const response = await fetch(
      `https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=${kmdbKEY}&listCount=1&title=${title}&detail=Y&sort=prodYear,1`,
    );
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse.Data[0].Result[0];
    } else {
      return {
        error: true,
        message: response.statusText,
      };
    }
  } catch (err) {
    return {
      error: true,
      message: '서버오류로 인해 영화순위를 가져오지 못했습니다.',
    };
  }
}

export { getRanking, getMovieInfo };
