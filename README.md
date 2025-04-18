```markdown
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
```

You can add more URLs to the `monitoredUrls` list to extend functionality.

## 📁 File Overview

| File           | Purpose                                                  |
|----------------|----------------------------------------------------------|
| `manifest.json`| Chrome extension metadata and permissions                |
| `background.js`| Core logic: monitors tabs and closes them after timeout  |
| `config.js`    | Optional config file for easier customization            |

## 🚀 How It Works

- When you open a tab and navigate to a monitored URL, the extension:
  - Waits the configured number of seconds.
  - Automatically closes the tab if it's still open.
- If the tab is closed before the timer expires, the timer is canceled.

## 🛡 Permissions

This extension uses the following permissions:

- `tabs` — to interact with and manage open tabs.
- `<all_urls>` — to monitor all tabs regardless of domain (filtered manually in the script).

## 📌 Notes

- Currently there is no UI — all settings are in code.
- Works with Chrome Manifest V3 and uses a background service worker.
- Tested on latest Chrome versions.

## 📃 License

MIT — feel free to use and modify!

---

Made with ☕ by [Avinash Ketkar]
```

---
