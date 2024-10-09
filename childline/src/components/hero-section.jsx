import '../sources/Nova/css/main.css';
const HeroSection=(props)=>{
    return (
        <section id="hero" class="hero d-flex align-items-center">
            <div class="container">
                <div class="row">
                    <div class="col-xl-4">
                    {props.children[0]}
                    <blockquote data-aos="fade-up" data-aos-delay="100" class="aos-init aos-animate">
                        {props.children[1]}
                    </blockquote>
                    {
                        props.children[2]
                    }

                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;