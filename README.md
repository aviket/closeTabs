# 🧹 Auto Tab Closer

**Auto Tab Closer** is a simple Chrome extension that automatically closes tabs with specified URLs after a configurable amount of time. Great for reducing distractions or managing browser clutter.

## 🔧 Features

- Monitors tabs with specific URLs (e.g. social media, news sites).
- Automatically closes them after a set amount of time.
- Lightweight, runs in the background.
- No UI required — set it and forget it.

## 🛠️ Installation (For Development)

1. Clone or download this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** (top right).
4. Click **Load unpacked** and select the folder where this extension is located.
5. Done!

## ⚙️ Configuration

URLs and timeout settings are configured in `background.js` (or `config.js` if you choose to import it):

```js
const config = {
  monitoredUrls: [
    "https://www.facebook.com",
    "https://facebook.com"
  ],
  closeAfterSeconds: 300 // Time in seconds (e.g. 300 = 5 minutes)
};
