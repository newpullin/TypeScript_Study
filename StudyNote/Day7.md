# 실습 프로젝트 구성

* 노드 제이에스의 fs 패키지가 제공하는 비동기 방식 API들의 promise방식 구현
* range, zip 같은 유틸리티 함수 구현
* change 패키지를 사용해 그럴듯한 가짜 데이터 생성 코드 구현
* CSV 파일 포맷 데이터를 읽고 쓰는 코드 구현


## 몽고 DB에 데이터 저장하기

* 몽고DB란?

- 몽고DB는 NoSQL 시스템으로, SQL을 사용하지 않고, 다른 방식의 질의어를 사용합니다.

* 몽고DB 설치

(
    scoop 설치 방법, 관리자 권한으로 윈도우 파워셸 실행
    Set-ExecutionPolicy RemoteSigned -scope CurrentUser
    $env:SCOOP='C:\Scoop'
    iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
    scoop install aria2
    scoop install git
)

scoop install mongodb
mongod --install
net start mongodb


* 몽고DB vs 관계형 DB

   문서   -  레코드
  컬렉션  -  테이블