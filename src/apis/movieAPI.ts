import { makeDateString } from '../utils/date';
import type { Movie } from '../interfaces/movie';
import type { ErrorDTO } from '../interfaces/common';

const KEY = `43f6b744f893ec067ba399f6e2f19cd7`;

async function getRanking(): Promise<Movie[] | ErrorDTO> {
  const date = makeDateString();
  const count = 5;
  try {
    const response = await fetch(
      `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${KEY}&targetDt=${date}&itemPerPage=${count}`,
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

export { getRanking };
