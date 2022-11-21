import type { ErrorDTO } from '../interfaces/common';
import type { CustomAPI } from '../interfaces/movie';

async function getReviewData(movieId: string, movieTitle: string): Promise<CustomAPI | ErrorDTO> {
  try {
    const response = await fetch(
      `http://203.230.103.35:3000/capstone/review?id=${movieId}&title=${movieTitle}`,
    );
    if (response.ok) {
      const jsonRes = await response.json();
      return jsonRes;
    } else {
      return {
        error: true,
        message: response.statusText,
      };
    }
  } catch (err) {
    return {
      error: true,
      message: '서버오류로 인해 리뷰정보를 가져오지 못했습니다.',
    };
  }
}

export { getReviewData };
