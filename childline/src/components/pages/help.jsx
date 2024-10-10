import GetHelp from '../get-help';
import HeroSection from '../hero-section';
import {BsPlayCircle} from 'react-icons/bs'
import PrimaryButton from '../buttons';
import Navigation from '../navigation';
import hero_img from '../../sources/Nova/img/heroes/hero-bg2.jpg'
import FurtherInfo from '../accordion';
import Point from '../points';
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
const further_info=[
    {
      "header": "What are Parental Controls?",
      "body": "Parental controls are features that allow parents to manage and monitor their children's internet usage. They can restrict access to certain websites, set time limits, and monitor online activity."
    },
    {
      "header": "How to Set Up Parental Controls?",
      "body": "Most devices have built-in parental control settings. You can usually find these in the settings menu under 'Family' or 'User Accounts.' Follow the prompts to set up restrictions based on your preferences."
    },
    {
      "header": "Benefits of Parental Controls",
      "body": "- Protects children from inappropriate content.\n- Helps manage screen time effectively.\n- Encourages healthy online habits."
    },
    {
      "header": "Common Misconceptions",
      "body": "Some parents believe that parental controls are a substitute for open communication with their children. While they are useful, discussing internet safety and online behavior is equally important."
    },
    {
      "header": "Recommended Tools",
      "body": "- Net Nanny\n- Kaspersky Safe Kids\n- Qustodio\n- Circle Home Plus"
    }
  ]
const bold_points=[
    ['Internet provider','You can set up filters to help block access to inappropriate content on any device that connects to your home WiFi'],
    ['Mobile operator','Filters are often automatically set up on mobile contracts, especially if the user is under the age of 18, but you can double-check with your provider'],
    ['Devices','Many devices have parental control settings, for example, to help restrict spending in apps, reduce screentime, or disable location functions'],
    ['Online Services','Sites like BBC iPlayer and YouTube have parental control settings to help restrict access to inappropriate content']
]

const sample_bulleted=[
      "What are the best practices for setting up parental controls?",
      "How can I monitor my child's online activity?",
      "What types of content should I block?",
      "How can I educate my child about internet safety?",
      "What tools are available for parental control?",
      "How do I handle my child's privacy concerns?",
      "What are the signs that my child may be in danger online?",
      "How can I set healthy screen time limits?",
      "What should I do if I find inappropriate content?",
      "How can I encourage open communication about online experiences?"
    ]

const starting_paragraphs=[
    "Parental controls are designed to help protect children from inappropriate content online, such as pornography or other adult content.",
    "These controls can be used in a number of ways, e.g. to help ensure that your children access only age-appropriate content, to set usage times and to monitor activity."
]
  

const HelpMain=(props)=>{
    return(
        <HelpLayout>
                <div className='pe-3 text-start ps-2'>
                    {
                            props.starting_paragraphs.map((para,index) =>(
                                <p className='text-start pe-5 lead' key={index}>
                                    {para}
                                </p>
                            ))
                    }
                    {
                        
                        <
                            PointFormAnswers
                            title="Where can I find them"
                            description="There are four main places you can find parental controls, and it can help to set up a combination of these:"
                            points={props.bold_points}
                        />
                    }
                    
                    {
                        (props.carousel_points!='')?<div className='mb-3'>
                            <p className='h2'>
                                {props.question_text}?
                            </p>
                        <
                            FurtherInfo
                            items={further_info}
                        />
                        
                    </div>:<></>
                    }
                    
                    {
                        <ul className="my-1 p-3">
                        {
                            props.bulleted_points.map((txt,i)=>(
                                <Point text={txt} key={i}/>
                            ))
                        }
                
                    </ul>
                    }
                </div>
                <GetHelp/>
            </HelpLayout>
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
            <
                HelpMain
                bold_points={bold_points}
                bulleted_points={sample_bulleted}
                question_text="where do I begin"
            />
        </>
    )
}

export default Help;