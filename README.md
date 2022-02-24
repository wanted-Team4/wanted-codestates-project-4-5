# 🧥 wanted-codestates-project-4-5

데이터 뷰어, 이미지 드래그를 구현한 프로젝트입니다.

### 📌 &nbsp;[Team4의 과제 확인하러 가기](https://competent-mcnulty-34dc65.netlify.app/)

### <br/>

###

## 🧥 View

|   Question 1    | Question 2 | 
| :--------: | :------------: | 
|![Q1_view](https://user-images.githubusercontent.com/48751435/155338509-55fd744b-04c9-4ecf-a0ff-14f286b11828.gif) | ![Q2_view](https://user-images.githubusercontent.com/48751435/155338591-fd08a992-2c78-4f78-94db-074c1a2d1b49.gif)|

### <br/>

###

## 🧥 Implement

### Stack

`Javascript` `React` `Redux` `Styled-Components`

### Features

#### ✅ Question 1

상품 패션 카테고리, 속성 등의 정보가 담긴 데이터를 눈으로 확인할 수 있는 뷰어입니다.

- [X] 반응형 웹페이지
- [X] PXL 로고 클릭 이벤트 시 검색창으로 이동
- [X] url에 검색 데이터 표시
- [X] Loading UI.
- [X] More 버튼 
- [X] 로딩된 데이터는 메모리 캐시.
- [X] 에러 처리


#### ✅ Question 2 

이미지의 특정 영역을 드래그해 해당 영역의 이름을 적용할 수 있습니다.

- [X] 지정한 영역 이름 적용
- [X] 지정한 영역 이름 저장
- [X] 지정한 영역 삭제
- [X] 겹치는 영역 구현

### <br/>

###

## 🧥 Directory

```
├── public/
├── src/
│   ├── actions/                      - redux action 설정
│   ├── components/                   - page components
│   ├── constants/                    - exporting action type
│   ├── hooks/                        - custom hook(toggle, input)
│   ├── images/                       - img 파일
│   ├── reducers/                     - redux 설정
│   ├── store/                        - redux 연결
│   └── pages/                        - routed pages
│
├── App.js                            - page routing
├── index.js                          - entry point
├── README.md                         - 리드미(프리뷰, 배포링크, 코드컨벤션)
└── package.json                      - 사용 package 목록
```

### <br/>

###

## 🧥 Code Convention

### Getting Started

1. `clone` the repository,

```
$ git clone "https://github.com/wanted-Team4/wanted-codestates-project-4-5.git"
```

2. `Install` dependencies,

```
$ npm install
```

3. `Setting` prettier,

```
$ npx prettier --write .
```

4. `start` the project,

```
$ npm start
```

### Commit Emoji

|   emoji    | commit message |       when to use it        |
| :--------: | :------------: | :-------------------------: |
|   :tada:   |     start      |        프로젝트 시작        |
| :sparkles: |      feat      |      새로운 기능 추가       |
|   :bug:    |      fix       |          버그 수정          |
| :recycle:  |    refactor    |        코드 리팩터링        |
| :lipstick: |     style      |   스타일 추가 및 업데이트   |
| :package:  |     chore      |   패키지 추가 및 업데이트   |
|  :books:   |      docs      | 그 외 문서 추가 및 업데이트 |

### <br/>

###
