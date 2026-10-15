# 홍길동 개인 프로필 웹사이트

HTML, CSS, JavaScript로 만든 정적 웹사이트입니다. 빌드 도구나 외부 Node.js 패키지가 필요하지 않습니다.

## 로컬에서 실행

Node.js가 설치된 상태에서 프로젝트 폴더에서 다음 명령을 실행합니다.

```bash
node server.js
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 엽니다. 파일을 수정할 때 서버를 자동 재시작하려면 `node --watch server.js`를 사용하세요. `npm start`와 `npm run dev` 스크립트도 사용할 수 있으며, 다른 포트를 사용하려면 `PORT` 환경 변수를 지정할 수 있습니다.

## Vercel에 정적 배포

Vercel 프로젝트의 Framework Preset을 **Other**로 설정하고 Output Directory를 `public`으로 지정하면 됩니다. 빌드 명령은 필요하지 않습니다. 웹사이트 파일은 `public/`에 있으며, 로컬 Node.js 서버(`server.js`)는 배포 결과에 포함할 필요가 없습니다.
