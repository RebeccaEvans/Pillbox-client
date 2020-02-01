let text = {"palette":{"common":{"black":"#000","white":"rgba(255, 255, 255, 1)"},"background":{"paper":"rgba(255, 255, 255, 1)","default":"rgba(254, 206, 0, 1)"},"primary":{"light":"rgba(70, 168, 117, 1)","main":"rgba(0, 120, 73, 1)","dark":"rgba(0, 75, 33, 1)","contrastText":"#fff"},"secondary":{"light":"rgba(86, 163, 230, 1)","main":"rgba(3, 117, 180, 1)","dark":"rgba(0, 74, 132, 1)","contrastText":"#fff"},"error":{"light":"#e57373","main":"#f44336","dark":"#d32f2f","contrastText":"#fff"},"text":{"primary":"rgba(0, 0, 0, 0.87)","secondary":"rgba(0, 0, 0, 0.54)","disabled":"rgba(0, 0, 0, 0.38)","hint":"rgba(0, 0, 0, 0.38)"}}}

let parsed = JSON.parse(text)

console.log(parsed)