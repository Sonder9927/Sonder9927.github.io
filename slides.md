---
theme: seriph
/* background: https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_1600/zht892fiz6h7qxur0gn1.jpg
   */
background: /images/wall.png
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Slidev Starter Template
  Presentation slides.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
title: Presentation
---

# Joplin - Free your notes

Presentation for making notes.

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/laurent22/joplin" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>


---

# What about?

Joplin may be able to help you with these problems:

- **Protection of notes** - Cloud sync, encryption, compatibility.
- **Writing fluently** - Write whatever you want, get rid of mouse clicks.
- **Review** - Fast access, easy to find globally.
- **Customize** - In addition to the officially provided content, you can make the layout according to your own preferences.
- **Community** - An active community means you have access to more and better resources..

<br>
<br>

Read more about [Joplin](https://joplinapp.org/)

<!--
You can have `style` tag in markdown to override the style for the current page.
Learn more: https://sli.dev/guide/syntax#embedded-styles
-->

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# Comparison
The superiority of joplin in cross-platform.
<div>
<img border="rounded" src="https://notable.app/static/images/comparison.png" style="display:block;margin:auto auto;width:100%;">
</div>

Read more about [Notable](https://github.com/notable/notable).

---
class: text-center
---
# Free your notes

<div>
<p>Joplin is an open source note-taking app.</p>
<p>Capture your thoughts and securely access them from any device.</p>
</div>
<div class="m-6">
<img border="rounded" src="https://joplinapp.org/images/home-top-img-2x.webp" style="display:block;margin:auto auto;height:313px;">
</div>

<style>
h1 {
  background-color: #2B90B5;
  background-image: linear-gradient(10deg, #4EC5D4 10%, #146b9c 50%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>


---

# Compatibility


<div>
<p>Images, videos, PDFs and audio files<br>are supported.</p>
<p>Create math expressions and diagrams<br>directly from the app.</p>
<p>Take photos with the mobile app and<br>save them to a note.</p>
</div>
<div>
<img border="rounded" src="https://joplinapp.org/images/home-top-img-2x.webp" style="display:block;margin:-150px 248px;height:388px;width:656px;">
</div>

<!--
An example of sensitivity kernels for a waveform at the period of 50s
windowed using a 300s window with a half cosine taper of 50s on
each end is shown in Fig. 2.
-->

---

# Web Clipper
## Save web pages as notes

Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.

<div grid="~ cols-2 gap-2" m="-t-2">
<img border="rounded" src="/images/web.png" width="350">
<img border="rounded" src="https://joplinapp.org/images/save-web-img.png" width="400">
</div>


---
class: text-center
---

# Appearance

<div class="flip-container" ontouchstart="this.classList.toggle('hover');">
	<div class="flipper">
		<div class="front">
      <img border="rounded" src="/images/ini.png">
		</div>
		<div class="back">
      <img border="rounded" src="/images/iniout.png">
		</div>
	</div>
</div>

<style>
.flip-container {
  margin: 50px 100px;
	perspective: 1000;
}
	.flip-container:hover .flipper, .flip-container.hover .flipper {
		transform: rotateY(180deg);
	}

.flip-container, .front, .back {
	width: 640px;
	height: 580px;
}

.flipper {
	transition: 0.9s;
	transform-style: preserve-3d;
	position: relative;
}

.front, .back {
	backface-visibility: hidden;
	position: absolute;
	top: 0;
	left: 0;
}

.front {
	z-index: 2;
}

.back {
	transform: rotateY(180deg);
}
</style>

<!--
<img border="rounded" src="/images/ini.png" style="display:block;margin:auto 50px;width:550px;">
<img border="rounded" src="/images/iniout.png" style="display:block;margin:-165px 295px;width:550px;">
-->

---
layout: two-cols
---

# Preview
Instances







::right::

# Markdown
```markdown
# header 1
## header 2
Some sentences.
**Bold** and *italic*.
***Bold and italic***.

1. first
1. second

- one
- two

|year|month|day|
|---|---|---|
|2022|5|27|
|2023|6|28|
```
<br>

Have a look at the [Markdown Guide](https://github.com/laurent22/joplin/blob/dev/readme/markdown.md) and [KaTeX](https://katex.org/) for more information.

<!--
Latex

$$
\begin{array}{c}

\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &
= \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\

\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\

\nabla \cdot \vec{\mathbf{B}} & = 0

\end{array}
$$

```mermaid
graph TD;
    A-- >B;
    A-- >C;
    B-- >D;
    C-- >D;
```
-->

---
layout: image
image: https://cdn.shopify.com/s/files/1/0165/4168/files/preview.png
class: text-center
---

<br>
<br>
<br>
<br>
<br>

# go everywhere you want


---

# Searching
Both [Simple FTS Queries](https://www.sqlite.org/fts3.html#simple_fts_queries) and [Full-Text Index Queries](https://www.sqlite.org/fts3.html#full_text_index_queries) are supported.
<br>
<p>Joplin implements the SQLite Full Text Search (FTS4) extension.
<br>
It means the content of all the notes is indexed in real time and<br>search queries return results very fast.</p>
<p>See below for the list of supported queries:</p>

|Search type |	Description|
|---|---|
|Single word|	Returns all the notes that contain this term.|
|Multiple word|	Returns all the notes that contain all these words,<br>but not necessarily next to each other.|
|Phrase|Add double quotes to return the notes that contain<br>exactly this phrase.|
|Prefix|Add a wildcard to return all the notes that contain<br>a term with a specified prefix.

<div class="big-box">
  <img src="/images/lintao.gif">
</div>

<style>
.big-box{
  position: absolute;
  top: 22%;
  left: 65%;
  width: 324px;
  height: 157px;
  border-radius: 5px;
  overflow: hidden;
}
.big-box img{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>


---

# Encryption

<br>

## 100% your data

<div>
<p>The app is open source and your notes are<br>
saved to an open format, so you'll<br>
always have access to them.</p>
<p>Uses End-To-End Encryption (E2EE)<br>
to secure your notes and ensure no-one<br>but yourself can access them.</p>
</div>

<img border="rounded" src="https://joplinapp.org/images/your-data-img.png" style="display:block;margin:-170px 255px;height:313px;width:596px;">

<!--
-->

---

<h1 class="text-center">
Open <span class="frame-bg frame-bg-yellow">Source</span>
</h1>

<div grid="~ cols-2 gap-2">

<img src="/images/in-the-press-img-left.png">

<img src="/images/in-the-press-img-right.png" style="display:block;margin:auto 295px;">
</div>

<img src="/images/comu.png" style="display:block;margin:-415px auto;width:555px;">


<style>
.frame-bg {
	background-size: contain;
	background-position: bottom;
	background-repeat: no-repeat;
	padding-bottom: 1.5px;
}

.frame-bg-yellow {
	background-image: url("/images/frame-yellow.png");
}
</style>

<!--

-->

---

# Conclusion
<br>
<p>Joplin is a free and open-source note-taking app available on Windows,<br>Mac, Android, iOS, and Linux.</p>
<p>It lets you create multiple types of notes, reminders, and alarms, all of which<br>can be synced with a handful of cloud services like Dropbox, NextCloud,<br>OneDrive, and WebDAV.</p>
<p>The app also includes a web clipper tool and even supports handwritten notes,<br>but in my opinion, Joplin's best feature is the built-in end-to-end encryption<br>for keeping your notes private.</p>


<div class="w-60 relative mt-6">
  <div class="relative w-40 h-40">
    <img
      v-motion
      :initial="{ x: 750, y: -100, scale: 1.5, rotate: -50 }"
      :enter="final"
      class="absolute top-0 left-0 right-0 bottom-0"
      src="https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/LinuxIcons/256x256.png"
    />
  </div>

  <div
    class="text-5xl absolute top-14 left-50 text-[#2B90B6] -z-1"
    v-motion
    :initial="{ x: -80, opacity: 0}"
    :enter="{ x: 0, opacity: 1, transition: { delay: 2000, duration: 1000 } }">
    Joplin
  </div>
</div>

<script setup lang="ts">
const final = {
  x: 0,
  y: 0,
  rotate: 0,
  scale: 1,
  transition: {
    type: 'spring',
    damping: 10,
    stiffness: 20,
    mass: 2
  }
}
</script>

<div
  v-motion
  :initial="{ x:235, y: 40, opacity: 0}"
  :enter="{ x: 225, y: -50, opacity: 1, transition: { delay: 3500 } }">

[Learn More](https://lifehacker.com/the-best-note-taking-apps-1837842880)

</div>


---
layout: center
class: text-center
---

# Thank You

[Joplin](https://joplinapp.org/) · [Markdown](http://markdown.p2hp.com/) · [Vim](https://www.vim.org/)
