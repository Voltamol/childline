const PostBox=(props)=>{
    return(
        <div class="col-xl-3 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <div class="post-box">
                <div class="post-img"><img src="assets/img/blog/blog-1.jpg" class="img-fluid" alt=""/></div>
                <div class="meta">
                <span class="post-date">Tue, December 12</span>
                <span class="post-author"> / Julia Parker</span>
                </div>
                <h3 class="post-title">Eum ad dolor et. Autem aut fugiat debitis</h3>
                <p>Illum voluptas ab enim placeat. Adipisci enim velit nulla. Vel omnis laudantium. Asperiores eum ipsa est officiis. Modi qui magni est...</p>
                <a href="blog-details.html" class="readmore stretched-link"><span>Read More</span><i class="bi bi-arrow-right"></i></a>
            </div>
        </div>
    )
}

export default PostBox;