import http from 'k6/http';
import { check } from 'k6';
// import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '20s', target: 100 }, // below normal load
    { duration: '30s', target: 100 },
    { duration: '20s', target: 200 }, // normal load
    { duration: '40s', target: 200 },
    { duration: '20s', target: 300 }, // around the breaking point
    { duration: '40s', target: 300 },
    { duration: '20s', target: 400 }, // beyond the breaking point
    { duration: '1m', target: 400 },
    { duration: '2m', target: 0 }, // scale down. Recovery stage.
  ],
};

export default function() {

  var random = Math.round(Math.random() * 10000000)

  let res = http.get(`http://localhost:3002/pg_search_id/${random}`);
  // let success = check(res, {
  //   'status is 200': r => r.status === 200
  // });

  // sleep(1);
}