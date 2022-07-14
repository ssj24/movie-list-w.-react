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
- slick



## 프로젝트 열기

### frontend

```
yarn install
yarn start
```

새 창이 뜨면 주소 뒤에 /list를 붙여주세요

### json-server

```
json-server db.json --routes routes.json --port 8080
```

### api url

- 전체 영화 리스트: `http://localhost:8080/Movies`

- 감독 상세 정보: `http://localhost:8080/Movies/${directorId}`
  
  모든 데이터는 https://www.mockaroo.com/에서 임의로 생성하였습니다.
  
  따라서 영화의 정보와 감독의 정보가 서로 일치하지 않음을 알려드립니다.