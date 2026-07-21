# WaCare EDM

這個專案只保留四個重點：

- `index.html`：文字內容與區塊結構
- `css/style.css`：顏色、字體、版面與手機版樣式
- `js/main.js`：影片、按鈕網址、數字動畫與滑動效果
- `images/`：未來放圖片

## 最常修改的位置

### 更換文案或數字
修改 `index.html`

### 更換顏色或版面
修改 `css/style.css`

### 更換影片或職涯連結
修改 `js/main.js`

```js
const VIDEO_IDS = {
  googleCheckup: "",
  humanitarian: ""
};

const CAREER_URL = "#";
```

YouTube 影片 ID 是網址 `watch?v=` 後面的字串。

### 新增圖片
把圖片放進 `images/`，再於 HTML 中使用：

```html
<img src="images/圖片檔名.jpg" alt="圖片說明">
```

## GitHub Desktop 更新流程

1. 修改檔案
2. 回到 GitHub Desktop
3. 填寫 Summary
4. 點 `Commit to main`
5. 點 `Push origin`
