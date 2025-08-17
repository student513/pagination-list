## 기술 스택

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **API**: JSONPlaceholder (https://jsonplaceholder.typicode.com/posts)

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 애플리케이션을 확인하세요.

### 빌드

```bash
npm run build
```

### 프로덕션 실행

```bash
npm start
```

## 프로젝트 구조

```
src/
├── app/
│   ├── layout.tsx      # 루트 레이아웃
│   ├── page.tsx        # 메인 페이지
│   └── globals.css     # 전역 스타일
├── components/
│   ├── post-card.tsx   # 포스트 카드 컴포넌트
│   └── pagination.tsx  # 페이지네이션 컴포넌트
└── types/
    └── post.ts         # Post 타입 정의
```

## API 응답 형식

```typescript
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
```
