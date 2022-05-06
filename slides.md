---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Slidev Starter Template
  Presentation slides for group meeting.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
title: Presentation
---

## Regional tomographic inversion of the amplitude and phase

## of Rayleigh waves with 2-D sensitivity kernels


Presentation for meeting

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---

# What about?

Regional tomographic inversion of the amplitude and phase of Rayleigh waves with 2-D sensitivity kernels

- **Tomography** - The effects of heterogeneous structure on the wavefield in a regional surface wave.
- **Sensitivity kernels** - 2-D sensitivity kernels for fundamental-mode Rayleigh waves based on the single-scattering Born approximation.
- **Comparison** - to data obtained from seismic waveforms synthesized by the pseudo-spectral method for plane Rayleigh waves propagating through heterogeneous structure.
- **Inversion method** - applied to synthesized data obtained from a numerical simulation modelling Rayleigh wave propagation over checkerboard structure.

<br>
<br>

Read more about [Tomographic](https://sli.dev/guide/why)

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

# Tomography
Ray theory and finite frequency.
<br>
<div grid="~ cols-2 gap-2" m="-t-2">
<img border="rounded" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fqtts.lamost.org%2Fartical%2Fdata%2Fattachment%2Fforum%2Fmonth_0811%2F20081128_825f9cabc5ef594c80cfdeQe8SXmaJcd.jpg&refer=http%3A%2F%2Fqtts.lamost.org&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654064603&t=d2902e0debf5f4fd8841700592e5302c">

<img border="rounded" src="/images/scatter.png" style="display:block;margin:auto;">

</div>
<br>
<br>

Read more about [Fréchet kernels for finite-frequency traveltimes.](https://academic.oup.com/gji/article/141/1/157/578991).

---

# Sentivity kernels

In this study, we use the 2-D kernels[^1] derived to represent the sensitivity of surface waves to structure.
<br>
<p>

$[o(\omega)-T(\omega)s(\omega)]^2 =$ minimum, in this single-observation case: $T(\omega) = \frac{o(\omega)}{s(\omega)}$
</p>
<p>

In the perturbed earth, $s(\omega)=Ae^{-i\phi}$ and $o(\omega)=(A+\delta A)e^{-i(\phi+\delta\phi)}$
</p>
<p>

In the Born approximation, $o(\omega)=s(\omega)+\delta s(\omega)$
</p>
<div grid="~ cols-2 gap-2" m="-t-2">

The transfer function is perturbed away from unity:<br>
$T(\omega)=1+\delta T(\omega)$, where $\delta T(\omega)=\frac{\delta s(\omega)}{s(\omega)}$.

Correct to first order in the small perturbations, $\delta T(\omega)\approx lnT(\omega)=\delta lnA(\omega)-i\delta\phi(\omega)$
</div>

$$
\delta\phi(\omega)=-Im(\frac{\delta s}{s}),\quad\quad \delta lnA(\omega)=Re(\frac{\delta s}{s})
$$

[^1]: [Zhou, Y., Dahlen, F.A. & Nolet, G., 2004. 3-D sensitivity kernels for surfacewave observables, Geophys. J. Int., 158, 142-168.](https://academic.oup.com/gji/article-abstract/158/1/142/683426)

<style>
.footnotes-sep {
  @apply mt-20 opacity-10;
}
.footnotes {
  @apply text-sm opacity-75;
}
.footnote-backref {
  display: none;
}
</style>

---

# Sentivity kernels

In this study, we use the 2-D kernels[^1] derived to represent the sensitivity of surface waves to structure.
<div grid="~ cols-2 gap-2" m="-t-2">
<div>

### 2-D sensitivity kernels
<br>
<br>
<br>
<br>
<div>

$$
\delta d=\iint_\Omega K^c_d(r,\omega)(\delta c/c)\mathrm{d}x^2
$$
</div>
</div>
<div>
<img border="rounded" src="/images/zhou-2d.png" >
</div>
</div>

[^1]: [Zhou, Y., Dahlen, F.A. & Nolet, G., 2004. 3-D sensitivity kernels for surfacewave observables, Geophys. J. Int., 158, 142-168.](https://academic.oup.com/gji/article-abstract/158/1/142/683426)

<style>
.footnotes-sep {
  @apply mt-15 opacity-10;
}
.footnotes {
  @apply text-sm opacity-75;
}
.footnote-backref {
  display: none;
}
</style>

---

# Sentivity kernels

In this study, we use the 2-D kernels[^1] derived to represent the sensitivity of surface waves to structure.
<div grid="~ cols-2 gap-2" m="-t+20">
<div>

### 2-D sensitivity kernels
<br>
<br>

$$
K^c_{\phi}(r,\omega)=Im(\frac{k^2R''e^{-i[kx''-k\Delta x+\pi/4]}}{R\sqrt{2\pi kx''}})
$$
$$
K^c_A(r,\omega)=-Re(\frac{k^2R''e^{-i[kx''-k\Delta x+\pi/4]}}{R\sqrt{2\pi kx''}})
$$
</div>
<div>
<br>
<br>
<br>
<br>
<br>
<img border="rounded" src="/images/fig1.png" >
</div>
</div>

<!--
They are formulated for single-frequency observables of phase and amplitude from unwindowed
seismograms in the time domain.
-->

---

# Fresnel zones
named after physicist Augustin-Jean Fresnel
<br>
<div grid="~ cols-2 gap-2" m="-t+20">
<div>
<img border="rounded" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Fresnel_zone_disrupted.png/300px-Fresnel_zone_disrupted.png" width="277">
</div>
<div>
<img border="rounded" src="/images/FresnelSVG1.svg" width="800">
</div>
</div>
<div class="abs-br m-6 flex">

Learn more about [Fresnel zones](https://en.wikipedia.org/wiki/Fresnel_zone).
</div>
<!--
Fresnel zones are ellipsoids with the foci at the transmitter and the receiver, where the path length between the direct path and the alternative paths are multiples of half-wavelength (\lambda/2). Rays emanating from odd-numbered Fresnel zones cause destructive interference and the rays from the even-numbered Fresnel zones cause constructive interference.
-->

---

# Map view
<div>
<img border="rounded" src="/images/fig2.png">
</div>

<!--
An example of sensitivity kernels for a waveform at the period of 50s
windowed using a 300s window with a half cosine taper of 50s on
each end is shown in Fig. 2.
-->

<style>
img {
  position: absolute;
  top: 17%;
  left: 20%;
}
</style>

---

# Numerical simulation

### Pseudo-spectral method[^2]
<div>
<img border="rounded" src="/images/fig3.png">
</div>

[^2]: [Hung, S.-H. & Forsyth, D.W., 1998. Modeling anisotropic wave propagation in oceanic inhomogeneous structures using the parallel multi-domain pseudo spectral method, Geophys. J. Int., 133, 726-740.](https://adsabs.harvard.edu/pdf/1998GeoJI.133..726H)


<!--
288 X 288 X 64 grid with grid spacing of 20 km in the
horizontal directions and an average of 10 km vertically.

$v_p=8$km/s, $v_s=4.62$, $\rho=3.3$kg/m^{-3}

Rayleigh $v_{exterior}=4.15$, $v_{interior}=4.36$

-->

<style>
.footnotes-sep {
  @apply mt-85 opacity-10;
}
.footnotes {
  @apply text-sm opacity-75;
}
.footnote-backref {
  display: none;
}
img {
  position: absolute;
  top: 20%;
  left: 40%;
}
</style>

---

# Scattered wavefields
<div>
<img border="rounded" src="/images/fig4.png">
</div>

<!--
-->

<style>
img {
  position: absolute;
  top: 15%;
  left: 20%;
  width: 566px;
}
</style>

---

# Cross-sections
<div>
<img border="rounded" src="/images/fig5.png">
</div>

<!--
-->

<style>
img {
  position: absolute;
  top: 15%;
  left: 15%;
  width: 666px;
}
</style>

---

# Radiation pattern
<div>
<img border="rounded" src="/images/afig6.png">
</div>

<!--
The scattering is fundamental mode to fundamental mode of Rayleigh wave at period
of 25s for P- and S-wave heterogeneities, assuming the medium is a Poisson solid.
-->

<style>
img {
  position: absolute;
  top: 15%;
  left: 25%;
  height: 453px;
}
</style>

---

# Cross-section
<div>
<img border="rounded" src="/images/fig7.png" style="display:block;margin:auto auto;width:466px;">
</div>

<!--
<style>
img {
  position: absolute;
  top: 15%;
  left: 20%;
  width: 566px;
}
</style>
-->

---

# Amplitude at each station
placed along a line perpendicular to the medium boundary.
<div>
<img border="rounded" src="/images/fig8.png">
</div>

<!--
Amplitude in higher velocity region is smaller, but the transition is not
instantaneous. The case shown is for 25s period with wavelength about 100km.
-->

<style>
img {
  position: absolute;
  top: 22%;
  left: 20%;
  width: 566px;
}
</style>

---

# Recovered phase velocity maps
<div>
<img border="rounded" src="/images/fig9.png">
</div>

<!--
-->

<style>
img {
  position: absolute;
  top: 22%;
  left: 20%;
  width: 566px;
}
</style>

---

# Recovered phase velocity maps

<div grid="~ cols-2 gap-2" m="-t-2">
<img border="rounded" src="/images/fig10-1.png" width="300">
<img border="rounded" src="/images/fig10-2.png" width="300">
</div>

<img class="img2" border="rounded" src="/images/fig10-3.png" width="300">

<style>

.img2 {
  position: absolute;
  top: 55%;
  left: 30%;
  width: 313px;
}
</style>

<!--

-->

---

# Constructed model
with random phase velocity.
<div>
<img border="rounded" src="/images/fig11.png">
</div>

<!--
-->

<style>
img {
  position: absolute;
  top: 20%;
  left: 24%;
  width: 453px;
}
</style>

---

# Amplitude distribution
with random phase velocity.
<div>
<img border="rounded" src="/images/fig12.png" style="display:block;margin:auto auto;width:699px;">
</div>

<!--

<style>
img {
  position: absolute;
  top: 22%;
  left: 3%;
  width: 915px;
}
</style>
-->

---

# Recovered maps
with random phase velocity.
<div>
<img border="rounded" src="/images/fig13.png" style="display:block;margin:auto auto;width:720px;">
</div>

<!--
-->

---

# Phase velocity anomalies in southern California
for Rayleigh waves at 100s period.
<div>
<img border="rounded" src="/images/fig14.png">
</div>

<!--
-->

<style>
img {
  position: absolute;
  top: 20%;
  left: 4%;
  width: 915px;
}
</style>


---
layout: center
class: text-center
---

# Thank You

[sensitivity kernels](https://sli.dev) · [surface waves](https://github.com/slidevjs/slidev) · [tomography](https://sli.dev/showcases.html)
