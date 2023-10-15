# OFF_Design_System

## Getting Started

```bash
npm install off-design-system
yarn add off-design-system
```

프로젝트 루트에 `index.css` 파일을 추가해주세요.

```tsx
import "off-design-system/dist/index.css";
```

```tsx
import { Button } from "off-design-system";

const App = () => {
  return (
    <div>
      <Button buttonType="outline" label="Serif test" />
    </div>
  );
};
```
