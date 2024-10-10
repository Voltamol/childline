import GetHelp from '../get-help';
import HeroSection from '../hero-section';
import {BsPlayCircle} from 'react-icons/bs'
import PrimaryButton from '../buttons';
import Navigation from '../navigation';
import hero_img from '../../sources/Nova/img/heroes/hero-bg2.jpg'
const HelpLayout=(props)=>{
    return(
        <row className="row">
            <div className="col-lg-9">
                {props.children[0]}
            </div>
            <div className="col-lg-3">
                {props.children[1]}
            </div>
        </row>
    )
}

const PointFormAnswers=(props)=>{
    return(
        <>
        <p className='h2'>
            {props.title}
        </p>
        <p className='lead'>
            {props.description}
        </p>

        {
            props.points.map((point, i) =>(
                <p>
                    <strong>{point[0]}</strong>:{point[1]}
                </p>
            ))
        }

    </>

    )
}
const Help=(props)=>{
    return(
        <>
            <Navigation/>
            <HeroSection img={hero_img}>
                <h6 className='text-light'>Help and advice</h6>
                <h2 data-aos="fade-up" className="aos-init aos-animate">Parental Controls</h2>
                <p className='text-light'>In depth information and key advice on parental controls for parents and carers</p>

                
            </HeroSection>
            <HelpLayout>
                <div className='pe-3 text-start ps-2'>
                    <p className='text-start pe-5 lead' >
                        Parental controls are designed to help protect children from inappropriate content online, such as pornography or other adult content.
                    </p>
                    <p className='text-start pe-5 lead' >
                        These controls can be used in a number of ways, e.g. to help ensure that your children access only age-appropriate content, to set usage times and to monitor activity.
                    </p>
                    <
                        PointFormAnswers
                        title="Where can I find them"
                        description="There are four main places you can find parental controls, and it can help to set up a combination of these:"
                        points={
                            [
                                ['Internet provider','You can set up filters to help block access to inappropriate content on any device that connects to your home WiFi'],
                                ['Mobile operator','Filters are often automatically set up on mobile contracts, especially if the user is under the age of 18, but you can double-check with your provider'],
                                ['Devices','Many devices have parental control settings, for example, to help restrict spending in apps, reduce screentime, or disable location functions'],
                                ['Online Services','Sites like BBC iPlayer and YouTube have parental control settings to help restrict access to inappropriate content']
                            ]
                        }
                    />
                    <p className='h2'>
                        Where do I begin
                    </p>
                </div>
                <GetHelp/>
            </HelpLayout>
        </>
    )
}

export default Help;