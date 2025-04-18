const fs = require('fs');
const axios = require('axios');
const path = require('path');

const NOTION_URL = 'https://www.notion.so/minfengzhu/Minfeng-Zhu-1b2cdcbe6cc380849b03d3b5038c2c5d?pvs=4';

async function fetchNotionPage() {
  try {
    const response = await axios.get(NOTION_URL);
    const html = response.data;

    // 输出到 index.html
    fs.writeFileSync(path.join(__dirname, 'index.html'), html);
    console.log('✅ Notion 页面抓取完成');
  } catch (err) {
    console.error('❌ 抓取失败：', err.message);
  }
}

fetchNotionPage();
