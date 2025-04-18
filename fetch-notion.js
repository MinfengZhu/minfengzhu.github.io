const fs = require('fs');
const axios = require('axios');
const path = require('path');

// 👉 在这里替换为你自己的 Notion 页面地址（必须公开）
const NOTION_PAGE_URL = 'https://minfengzhu.notion.site';

// 用于生成 GitHub Pages 的静态 HTML 页面
async function fetchNotionPage() {
  try {
    const response = await axios.get(NOTION_PAGE_URL);
    const html = response.data;

    const wrappedHTML = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Notion Page</title>
      </head>
      <body>
        ${html}
      </body>
      </html>
    `;

    fs.writeFileSync(path.join(__dirname, 'index.html'), wrappedHTML);
    console.log('✅ Notion 页面抓取完成！');
  } catch (err) {
    console.error('❌ 抓取失败:', err.message);
  }
}

fetchNotionPage();
