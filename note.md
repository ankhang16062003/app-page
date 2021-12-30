.row: có display flex rồi nên ko cần dùng d-flex
mấy thẻ title trong boostrap có sẵn margin-bottom: 0.5rem, nên thích thì set lại
set class form-control cho input custom
.class:not(:last-child) {
    <!-- ...  -->
    chon all class nhung k lay cuoi cung
}
.class:not(.class1) {
    chon all class nhung ko co them class1
}
dung ma trong font awesome co the lam icon trong ::before ::after
trong content, set them font-weight, font-family o cuoi file de apdung, do ::before ::after ko co tinh ke thua

the textarea cos the resize, ta dung thuoc tinh "resize = none" de set lai

&copy; ra chu C vong

dung thu vien owl Causel de set bang chuyen cho web

.navbar-expand-md: chi md tro len la no hien cac nav, con lai no ko hien, ma no se hien cai nut

cach lam button dark to light, dat bien set cho cac cai background, sau khi 
body.dark {
    thay background body
    bien1: ....
    bien2: ....
}

xu ly load phan tu va xoa: window.addEventListener('load', () => element.remove()), ban dau hien nen voi animation 0%: opacity 1, scale(0), sau 100%: opacity 0, scale1, animation scale__01 1s ease infinitive


