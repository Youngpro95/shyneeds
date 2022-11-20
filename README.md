# shyneeds
- dev 브렌치 

# 기존의 [고투게더](https://www.gotogether-s.com/) 홈페이지를 리뉴얼 작업
- FE 4명 BE 2명 디자이너 2명과 협업하는 React 프로젝트 입니다.
- 저는 로그인, 소셜 로그인, 회원가입, 커뮤니티(CRUD), 댓글(CRUD) 기능을 맡았습니다.

## 회원가입
![image](https://user-images.githubusercontent.com/44990343/202211547-bafbcc9e-b8c8-4634-b827-f8fb8a4140a6.png)
- React-hook-form을 이용한 form 관리 및 validation,  axios를 이용한 api 통신을 하였습니다.
## 로그인
![image](https://user-images.githubusercontent.com/44990343/202212051-40b6607e-41d2-4d72-8423-489e100d9dd2.png)
- React-hook-form을 이용하여 기본 Validation을 처리하였고, AsyncThunk를 이용하여 정보가 일치하면 백엔드 서버에서 발급해준 JWT를 보관 하였습니다.
- KakaoLogin도 AsyncThunk를 이용하여 인가코드 및 카카오토큰 발급을 처리하였습니다.
## 커뮤니티(CRUD)
![image](https://user-images.githubusercontent.com/44990343/202212619-0e013bd7-23b8-49ce-ad5b-af9296bf9af6.png)
- 커뮤니티의 페이지네이션은 백엔드에서 준 page 정보들을 이용하여 직접구현하였으며 로그인한 유저 or 여행을 다녀온적이 있는 유저만 작성이 가능하게끔 처리하였습니다.
- 검색 기능 구현
## 게시글 작성
![image](https://user-images.githubusercontent.com/44990343/202213057-c5773f20-2363-43b2-b52a-9aa93ba483af.png)
- NHN에서 만든 Toast-UI를 글쓰기 Editor로 사용하였고 사진 업로드시 base64를 백엔드에 전송 및 URL을 리턴받아 사진 업로드를 처리하였습니다.
## 댓글(CRUD)
![image](https://user-images.githubusercontent.com/44990343/202213341-060c38b8-9e1f-4c57-be24-d69fd47f92ef.png)
- 댓글 CRUD기능을 구현하였고 이모지 라이브러리인 Emoji-Picker-React를 사용하였습니다.
