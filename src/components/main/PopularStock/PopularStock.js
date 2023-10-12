// PopularStock.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './PopularStock.module.css'; 

const PopularStock = () => {

  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setStockData(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);

        const response = await axios.get(
          'https://gapi.shinhansec.com:8443/openapi/v1.0/ranking/rising',
          // {
          //   headers: {
          //     'Authorization': `Bearer ${apiKey}`,
          //     // Add other headers as needed
          //   },
          // }
        );
        setStockData(response.data.dataBody.list); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  // if (loading) return <div>로딩중..</div>;
  // if (error) return <div>에러가 발생했습니다</div>;
  // if (!stockData) return null;

  return (
    <div className={styles.popularsector}>
      <div className={styles.topgroup}>
        <h2>인기 종목</h2>
        <p>실시간 현재가 조회수가 높은 종목</p>
      </div>
      <div className={styles.line}></div>
      <div className={styles.rectangle}>
        {/* <ul>
        {stockData.map(stock  => (
          <li key={stock.dd_cmpr_rank}>
              {`${stock.stbd_nm} (${stock.stock_code})`}
          </li>
        ))}
        </ul> */}
        <div className={styles.bottomgroup}>
          <div className={styles.timegroup}>
              <p>현재 시간(추후)</p>
            {/* 여기에 실시간 시간을 표시하는 코드를 추가 */}
          </div>
          <div className={styles.moreinfo}>
            <p>더보기</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularStock;
