$(()=> {
    const searchCoursesSection = $(".search-courses").offset().top
    // Contact 2 Effects
    $("body .contact2 i").hover(
        function() {
            $(this).animate({"color":$(this).attr("data-color")     },100)
            
        }
        ,
        function () {
            $(this).animate({"color":'#bababa'},100)
        }
    )
    // Contact 1 Effects
    
    $(".contact1").hover(
        function() {
            $(this).children().animate({"color":'black'},200)
            
        }
        ,
        function() {
            $(this).children().animate({"color":'#bababa'},200)
        }
    )

    // Nav Hiding 
    $(".nav ").on("click",".burger-icon i",function() {
        $(".nav .nav-lis").toggleClass("flex")
    })
    $(".nav-lis a:first-child").on("click",function() {
        $('html, body').animate({scrollTop : searchCoursesSection + 350} ,200)
    })

    // Main -Container
        $(".main").animate({left: '0'},1000)
        const backgrounds = [
            'images/main-images/1.webp',
            'images/main-images/2.webp',
            'images/main-images/3.webp',
            'images/main-images/4.webp',
            'images/main-images/5.webp',
            'images/main-images/6.webp',
            'images/main-images/7.webp',
        ]
        let counterNow = 0
        const counter = backgrounds.length
        setInterval(() => {
            if (counterNow === counter -1 ) {
                counterNow =0
                $(".main .photos").css("background-image",`url(${backgrounds[counterNow]})`)
            }
            else {
                counterNow ++
                $(".main .photos ").css("background-image",`url(${backgrounds[counterNow]})`)
            }
        }, 4000);
    // Content -Create -Section
    $(window).on("scroll",function() {
        
        if ($('.content-create').offset().top -$(window).scrollTop() < 500) {
            $('.content-create').css('overflow',"visible")
            $(".content-create .colmn").css("right",'0')
        }
        if ($('.middle-cont').offset().top - $(window).scrollTop() < 500) {
            $('.middle-cont').css("opacity", '1')
        }
        if ($(".recent").offset().top - $(window).scrollTop() < 500) {
            $(".recent .rec:first-child").css("left",'0')
            
            $('.recent .rec:nth-child(2)').fadeIn(3000).delay(1).css("display","flex")
        }
        if ($(this).scrollTop() > 58) {
            $('.links-vertical ').css("left","0")
        }
        else if ($(this).scrollTop() < 58) {
            $('.links-vertical ').css("left","-100%")
        }
    })
    // Handle Course Selection
    $(".search-courses .selection-search select").on('change',function() {
        $(".courses-backgrounds").css("background-image", `url('${$(this).val()}')`)
        $(".courses-backgrounds").css('background-color', $("select option:selected").attr("data-color"))
        $(".search-container").css('background-color', $("select option:selected").attr("data-color"))
    })
    // Handle Video click
    $("body video").on("click",function() {
        $(this).attr("controls",'controls')
    })
    // Handle Students Container
    const studentsCont = ['images/students/1.webp',
                        'images/students/2.webp',
                        'images/students/3.webp']
    let studentsCounter = 0
    let negativeCounter = 3
    $("body").on("click",'.students .students-cont .fa-angle-right',function() {
        if (studentsCounter ==  studentsCont.length -1){
            studentsCounter = 0
            $(".students-says .pic-student").attr("src", studentsCont[studentsCounter])
        }
        else {
            studentsCounter +=1
            $(".students-says .pic-student").attr("src", studentsCont[studentsCounter] )
        }
    })
    $("body").on("click",'.students .students-cont .fa-angle-left',function() {

        if ( negativeCounter ==  0){
            negativeCounter = 3
            $(".students-says .pic-student").attr("src", studentsCont[3]  )
        }
        else {
            negativeCounter -=1
            $(".students-says .pic-student").attr("src", studentsCont[ negativeCounter]  )
        }
    })
    // Handle Posts
    const POSTS= [[
        '#007fbc'
        ,
        'fa-brands fa-linkedin',`
تصميم هويه بصريه ل قارن
وهى عباره عن application و بتقدر  من خلاله  تعمل سيرش و تقارن بين المنتجات الي موجوده علي سوق و نون و غيرها و تشوف  اي ارخص منتج 

    `
    ,
    'https://www.linkedin.com/feed/update/urn:li:activity:6678077031567155200/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A6678077031567155200%29'
    ]
    ,
    [
        '#044844'
        ,
        'fa-brands fa-tiktok'
        ,
        'ازاي تعمل لوجو ب ٣٥٠$ ف ٣٠ ث'
        ,
        'https://www.tiktok.com/@ma7moudel7ofy/video/7011862938361285893'
    ]
    ,
    [   
        '#007fbc'
        ,
        'fa-brands fa-linkedin'
        ,
        `
                الفرق بين الخضار دي صعب بس الفرق بين عناصر البراند سهل و ده الي هتعرفه فاخر السلايد 

        `
        ,
        `
                https://www.linkedin.com/feed/update/urn:li:activity:6789961270171856896/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A6789961270171856896%29

        `
    ],
    [   
        '#007fbc'
        ,
        'fa-brands fa-linkedin'
        ,
        ' عناصر تصميم الهويه البصريه '
        ,
                `https://www.linkedin.com/feed/update/urn:li:activity:6790302088493588482/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A6790302088493588482%29`
        
    ]
    ,
    [   
        '#044844'
        ,
        'fa-brands fa-tiktok'
        ,
        'Design work in uae.'
        ,
        `https://www.tiktok.com/@ma7moudel7ofy/video/7363478993573645574`        
    ]
    ,
    [
        '#1877f2'
        ,
        'fa-brands fa-facebook',
        'شعار كأس العالم 2030 الذي سيقام في المغرب و إسبانيا و البرتغال.'
        ,
        `https://www.facebook.com/mahmoudelhofydesigns/posts/pfbid02bF1PbTAbQDttm3qAuMiwM3B1qhxYnPndW8xZN86xAtzgXf6znJbzNAsvzsebkiVFl`
    ]
    ]
    let counterPosts = 0;
    setInterval(() => {
        $(".social-posts .the-icon").removeClass(POSTS[counterPosts][1])
        if (counterPosts === POSTS.length -1 ) {
            counterPosts =0
            $(".social-posts").css("background-color",`${POSTS[counterPosts][0]}`)
            $(".social-posts .the-icon").addClass(POSTS[counterPosts][1])
            $(".social-posts .post-title").text(POSTS[counterPosts][2])
            $(".social-posts .post-link").attr('href' ,POSTS[counterPosts][3])
        }
        else {
            counterPosts ++
            $(".social-posts").css("background-color",`${POSTS[counterPosts][0]}`)
            $(".social-posts .the-icon").addClass(POSTS[counterPosts][1])
                $(".social-posts .post-title").text(POSTS[counterPosts][2])
                $(".social-posts .post-link").attr('href' ,POSTS[counterPosts][3])
            }
        }, 6500);
        // Copyrights
        const DATE = new Date()
        $(".copyrights .copyrights-").text(`Copyright @ HofyDesigns - All Right Reserved - ${DATE.getFullYear()}.`)
        // TAGS CLOUD
        const Tags = [
            [
                'Videos To Watch'
                ,
                'https://www.youtube.com/watch?v=9CDTC0kwcB8'
            ]
            ,
            [
                `عناصر تصميم الهويه البصريه `
                ,
                'https://www.linkedin.com/feed/update/urn:li:activity:6790302088493588482/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A6790302088493588482%29'
            ]
            ,
            [
                'أفكار حوفي | Podcast'
                ,
                'https://hofydesigns.substack.com/podcast'
            ]
            ,
            [
                'ملفات مجانية'
                ,
                'https://docs.google.com/forms/d/e/1FAIpQLSf60Us8RFWW2gz7_pN87Xf6vfR7xM47sUps-JX7-0_xAIfGLA/viewform'
            ]
            ,
            [
                'ازاي تعمل لوجو ب ٣٥٠$ ف ٣٠ ث'
                ,
                'https://www.tiktok.com/@ma7moudel7ofy/video/7011862938361285893'
            ]
            ,
            ['Newsletter'
            ,   
            'https://substack.com/@hofydesigns'
        ]
        ]
        for (let i in Tags) {
            $(".tag-cloud  .tags-available").append(`<a target='_blank' class='small-font' href='${Tags[i][1]}'>${Tags[i][0]}</a>`)
        }

        const POSTS_FOOTER =  [
            [
                `first experimentation using adobe firefly (ai software)`
                ,
                `https://www.linkedin.com/feed/update/urn:li:activity:7190882261267890177/`
            ]
            ,
            [
                ` تحريك للوجو اليكتروم `
                ,
                'https://www.linkedin.com/feed/update/urn:li:activity:6706225516791287809/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A6706225516791287809%29'
            ]
            ,
            [' ازاي ازود التفاعل علي بوستات لينكد ان ؟'
                ,
                'https://www.linkedin.com/feed/update/urn:li:activity:6779833171086200832/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A6779833171086200832%29'
            ]
            ,
            [
                'اخطاء قاتله بيقع فيها المصمم بتكرار'
                ,
                'https://www.linkedin.com/feed/update/urn:li:activity:6633533888838815744/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A6633533888838815744%29'
            ]
            ,
            [
                'مصادر بتساعدنا علشان نصمم لوجو'
                ,
                'https://www.linkedin.com/feed/update/urn:li:activity:6623668534440402944/'
            ]
        ]
        for (let i in POSTS_FOOTER) {
            $(".recent-posts .available-POSTS").append(`
            <div class='posts-footer'> 
            <i class="fa-solid fa-angle-right"></i>
            <a target='_blank' class='small-font' href='${POSTS_FOOTER[i][1]}'>${POSTS_FOOTER[i][0]} </a>
            
            </div>
            `)
        }
        // Scroller
        let el = document.querySelector(".scrollerr");
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
        window.addEventListener("scroll", () => {
        const scrollTop = document.documentElement.scrollTop;
        el.style.width = `${(scrollTop / height) * 100}%`;
        });
    // Fade In - Out rest 
        function scroll(window,fadeIn,fadeOut,...element) {
            element.forEach((element)=> {
                if ($(element).offset().top - $(window).scrollTop() < 500){
                    $(element).stop().fadeIn(fadeIn)
                }
                else {
                    $(element).stop().fadeOut(fadeOut)
                }
            })
        }
        $(window).on("scroll",function() {
                scroll($(this),800,800,$(".search-courses"))
                scroll($(this),700,700,$(".hofies"))
                scroll($(this),1100,100,$(".checkout- .container-title"))
                scroll($(this),1200,500,$(".checkout- .container-videos-available"))
            if ($('.students').offset().top - $(this).scrollTop() < 500) {
                $('.students').stop().animate({left : '0'},200)
            }
            else {
                $('.students').stop().animate({left : '-100%'},600)
            }
        })
})
