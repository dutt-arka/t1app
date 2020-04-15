// Animate smooth scroll
$('#get-started').on('click', function () {
    const sectionLesson = $('#section-lesson').position().top;

    $('html, body').animate({
        scrollTop: sectionLesson
    }, 900);
});


// Fetch data for the course page from Google spreadsheet
function init() {
    Tabletop.init({
        key : 'https://docs.google.com/spreadsheets/d/1W0lTlTRSPEbFmSRPDroDB3V5zyAlAkOQfrp2j2iPyI0/edit?usp=sharing',

        callback: function (data, tabletop) {
            console.log(data)
            index = function (i) {
                var post = document.getElementById('post');
                var gif = document.getElementById('gif');

                post.innerHTML = data[i].content;
                gif.innerHTML = "<img src=" + data[i].img + " scrolling='no' class='gif'>";
                return {
                    prev: function () {
                        i && i--;
                        post.innerHTML = data[i].content;
                        gif.innerHTML = "<img src=" + data[i].img + " scrolling='no' class='gif'>";
                    },
                    next: function () {
                        i + 1 < data.length && i++;
                        post.innerHTML = data[i].content;
                        gif.innerHTML = "<img src=" + data[i].img + " scrolling='no' class='gif'>";
                    }
                }
            }(0);

            document.getElementById('right-chevron').addEventListener('click', index.next);
            document.getElementById('left-chevron').addEventListener('click', index.prev);
        },
        simpleSheet: true
    })
}
window.addEventListener('DOMContentLoaded', init)
