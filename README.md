# Mark CVE
---
[![github]](https://github.com/emo-crab/scap-rs/tree/main/extensions)

[![firefox]](https://addons.mozilla.org/zh-CN/firefox/addon/mark-cve/)

[github]: https://img.shields.io/badge/github-8da0cb?style=for-the-badge&labelColor=555555&logo=github
[firefox]: https://img.shields.io/amo/dw/mark-cve?style=for-the-badge&logo=firefox


- Mark the current page CVE.
- The original project https://github.com/emo-crab/scap-rs, Now as a project development.

## Option

- You can also set it as the official website,like: https://nvd.nist.gov/vuln/detail/

![](docs/option.png)

## Using

- Install the plugin, open a webpage with a CVE number, click on the plugin, and you will see a button added after the CVE.

![](docs/AttackerKB.png)

## Bookmark JavaScript
- Create a bookmark, Edit the `URL` as the following `javascript:` [script](content-script.js).

![](docs/bookmark.png)

## Tampermonkey

- Install from [greasyfork](https://greasyfork.org/zh-CN/scripts/488293-mark-cve)
