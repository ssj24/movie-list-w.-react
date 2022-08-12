# 영화 목록

리액트를 이용해 구현한 영화 목록 페이지입니다

세일하는 영화 목록을 슬릭을 이용하여 상단에 캐루젤로 구현하고

전체 영화 목록을 페이지네이션했습니다

영화 아이템을 누르면 영화 감독의 상세를 알려주는 모달이 뜹니다



## 기술스택

- React
- JavaScript
- react-router
- axios
- react-slick



## 프로젝트 열기

### frontend

```
yarn install
yarn start
```

새 창이 뜨면 주소 뒤에 /movie를 붙여주세요

### json-server

```
json-server db.json --routes routes.json --port 8080
```

### api url

- 전체 영화 리스트: `http://localhost:8080/Movies`

- 감독 상세 정보: `http://localhost:8080/Movies/${directorId}`

  모든 데이터는 https://www.mockaroo.com/에서 임의로 생성하였습니다.

  따라서 영화의 정보와 감독의 정보가 서로 일치하지 않습니다.



## react-slick

슬릭을 커스텀하여

전체 영화 목록을 보여줄 때는 프로그레스 바를,

제일 세일폭이 큰 다섯 개의 영화 목록을 보여줄 때는 네브 닷을 이용했습니다



react-slick에서는 슬릭의 slickSetOption을 사용할 수 없으므로

settings 변수를 만드는 대신

Slider 엘리먼트에 직접 설정을 넣어서 필요한 옵션을 동적으로 바꿨습니다.