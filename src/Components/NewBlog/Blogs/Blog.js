import React from "react";
import "./Blog.scss";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";


function Blog(props) {
  const Content = [
    {
      id: 1,
      title: "5 Car Driving Tips That Make You a Better Driver",
      image: 'https://marutisuzukidrivingschoolcdn.azureedge.net/-/media/feature/maruti-driving-school/blog/driving-tips/5-car-driving-tips-rev.png?modified=20201104051631&h=377&w=842&la=en&hash=2648894F69D0CF851AD3ED3F4A02F515',
      sub: "There’s no age for learning, and the scope of learning is "+
      "always infinite. When it comes to driving a car, there are "+
      "certain driving tips for beginners that work equally well "+
      "for experienced drivers. In order to drive safely and "+
      " responsibly, it is imperative that you follow the best "+
      "driving practices – it is beneficial for you, other drivers "+
      "around you, and the pedestrians on the road. No matter how "+
      "seasoned a driver you are, there is always some room for "+
      "improvement. Here are some simple yet important car driving "+
      "tips that will help make you a better driver: -",
      context: [
        {
          subhead: "It all starts with the right seating position",
          subbody:
            "This is one of the most important driving tips that many people, especially beginners, tend to completely ignore. It is extremely important that you position your seat in such a way that you can comfortably operate the pedals, the gear lever, and the steering. At the same time, the seat must be angled in a manner wherein your thighs or back do not get strained.",
        },
        {
          subhead: "Hold the steering wheel the correct way",
          subbody:
            "There is a science behind holding a steering wheel correctly. But, let’s just talk about the thumb rule here. The thumb rule is to hold the steering wheel by placing your hands on 10 and 2 o’clock positions (like in a clock).",
        },
        {
          subhead: "Use the horns and turn indicators correctly",
          subbody:
            "Horns and indicators are the two sources of communication that you have with the drivers around you at the time of driving. Both of these must be used liberally and smartly whenever required. Generally, horns are meant to be used for alerting the other cars about your presence.",
        },
        {
          subhead:
            "*A lot of people have the habit of honking the horn profusely at signals or slow-moving traffic to communicate to the car drivers ahead to move faster. It is a wrong practice which should be avoided.*",
          subbody:
            "When you are turning, make sure you use the turn indicators. Even at the time of changing lanes, make sure to use your indicators in the direction of the lane you are moving into. This is one of the most important car driving tips for beginners as well as people who have been driving for years.",
        },
        {
          subhead: "Do not tailgate",
          subbody:
            "While driving in traffic or on the highways, maintain a safe distance from the car in front. But step out and you’ll see that the ground reality is different. In order to become a better driver, one of the crucial things to follow is to never tailgate. If you closely follow the vehicle in front of you, it decreases your reaction time as well as the space available for manoeuvring, thereby increasing the risk of a collision (which was very well avoidable in the first place). Let the change begin with you. That’s because this is a car driving tip that’ll keep you in good stead.",
        },
        {
          subhead: "Do not panic",
          subbody:
            "Driving stress-free is the key to driving better. Concentrate on your manoeuvres at all times when you are behind the steering wheel. Driving with stress can hamper your ability and may result in a mishap. If you are someone who has a driving test coming up, then one of the best driving test tips to follow is to stay relaxed in order to drive well and stay safe. Learner or experienced, these car driving tips will surely help you get better at it.",
        },
      ],
    },
    {
        id: 2,
        image: 'https://marutisuzukidrivingschoolcdn.azureedge.net/-/media/feature/maruti-driving-school/blog/car-maintenance/new-img/cmblog2.jpg?modified=20200904113012&h=377&w=842&la=en&hash=5EC0CD47B4753C06561A89F4528F2090',
        title: 'Driving School – Why is it important?',
        sub: "Learning how to drive successfully is a daunting task, but an important one nonetheless. The responsibility that comes with it is immense. After all, when it comes to driving, it is not just about you, but the safety of others on the road as well. " +
        "\nHaving a driving license is not enough. One needs professional training which one can get only at a driving school. How many of us can confidently claim that they can clear a test about traffic signs? The fact is, very few. " +
        "\nWe go beyond teaching just the controls of the car. We believe in teaching our learners how to use those controls effortlessly. At the same time, we teach our learners to respect other drivers’ rights while also understanding the responsibilities of being a driver.",
        context: [
            {
                subhead: 'Innovative',
                subbody: 'Maruti Suzuki Driving School provides a solid foundation required for safe driving practices. Professionally trained instructors make sure that learners receive all the requisite driving skills, in-depth understanding of the rules and habits that are needed for safety on the road. The tech-oriented approach with simulators, online learning modules, and modular courses ensure the best learning experience for learners.'
            },
            {
                subhead: 'Expertise',
                subbody: 'Our professional driving instructors undergo specific motor training to teach driving, explain traffic signs, and warn learners about mistakes that drivers are likely to make. Learning how to drive from a professional instructor increases a learner’s chance of passing the theory as well as the on-road test, in order to earn a driving license.'
            },
            {
                subhead: 'Caring',
                subbody: 'Educating teenagers thoroughly in proper lessons of safety, traffic rules, and laws is imperative. For that, we give our trainers the necessary soft skill training to be polite & courteous. Our trainers ensure that they take the learners through the entire learning process carefully, step by step. This goes a long way in reducing the risk of accidents and fatalities'
            },
            {
                subhead: 'Reliable',
                subbody: 'Getting one’s own driving license is a crucial step to adulthood for youngsters. If this is taken in the right spirit, the advantages outweigh the risks. A learner’s license comes with certain restrictions, but new drivers can certainly take responsibilities like drop-offs for family members. Keeping this in mind, all our instructors are focused to help young learners develop the ability and the attitude needed to drive safely. While being friendly and communicating effectively, they train each individual according to their comfort and temperament.'
            },
            {
                subhead: 'Conclusion',
                subbody: 'Overall, the comprehensive learning experience from a professional driving school will make one a driver who is equipped not only to drive, but also to face unexpected situations on the road. This reduces the risk of accidents and prepares one to help people who may be in such unfortunate events. Being able to do that will make one a better driver!'
            }
        ]
    },
    {
        id: 3,
        image: 'https://marutisuzukidrivingschoolcdn.azureedge.net/-/media/feature/maruti-driving-school/blog/innerblog-images/rule_842x377.png?modified=20190827115809&h=377&w=842&la=en&hash=7C1A86727BC6047365C6B6013C01F50C',
        title: 'Mistakes that most people make while driving',
        sub: 'We must admit that each and every one of us is guilty of making errors while driving. The lessons learned at a driving school are executed based on sincerity, and that is something that differs from person to person. We hope that this article reiterates the important protocols that you need to follow by avoiding some common mistakes. These include:',
        context: [
            {
                subhead: 'Lane cutting',
                subbody: 'You may be a vigilant driver but when one cuts another car or bike while changing a lane, it becomes very dangerous for everyone on the road. It is a known fact that the more predictable a drivers’ behavior, the fewer the number of accidents. In a scenario where you need to genuinely change lanes, wait patiently for an opening, give the correct signal, and then procee'
            },
            {
                subhead: 'Missing the blind spot',
                subbody: 'Many expert drivers miss using this out of laziness. Looking over your shoulders is essential to avoid blind spots before you change your lane. As a matter of fact, you need to follow caution and check it manually. A sensible way of reducing the risk due to blind spots is to adjust a car’s side view mirrors for the most expansive rear view of the road behind.'
            },
            {
                subhead: 'Not using seat belts',
                subbody: 'According to the Centers for Disease Control and Prevention, seat belts reduce the risk of death by 45% and that of injury by 50%. It is against traffic laws to not wear seat belts in many countries, and with good reason. In fact, drivers themselves should develop the responsible habit of wearing seatbelts and urging other passengers to wear them too.'
            },
            {
                subhead: 'Ineffective usage of turn signals',
                subbody: 'In general, the usage of turn signals is very less. Using them too late or too early is as catastrophic as not using them at all, as they confuse the drivers behind you. Using turn signals at the appropriate moment is an important practice in safe driving'
            },
            {
                subhead: 'Neglecting servicing and maintenance due dates',
                subbody: 'You may procrastinate when it comes to getting a car serviced by assuming that the vehicle is in perfect condition and nothing could go wrong. It is critical to adhere to the servicing schedules recommended in your owner’s manual and get your vehicle serviced by an authorised dealership or service center.'
            },
            {
                subhead: 'Tyre pressure',
                subbody: 'Not checking tyre pressure from time to time can not only increase the risk of tyre punctures but also tyre bursts. Drivers also forget that not checking tyre pressure leads to high fuel consumption.'
            },
            {
                subhead: 'Inability to understand traffic signs',
                subbody: 'Most of the time, we take theory lessons at driving schools for granted and assume that certain things are not worth our time. At times, drivers are even unaware of stop signs or school or hospital signs. Due to that, they choose to be oblivious to them. Responsible drivers should be well aware of these signs to follow them and respect others who share the road with them'
            },
            {
                subhead: 'Drinking and driving',
                subbody: '‘Drinking and Driving’ is one of the most common causes of accidents and fatalities on the road. Drunk drivers not only put themselves at jeopardy but also put countless lives in danger'
            },
            {
                subhead: 'Usage of phones',
                subbody: 'One of the most irresponsible mistakes to make while driving is the usage of phones. Texting on the phone can prove to be as fatal as driving under the influence of alcohol. Moreover, the usage of phone while driving is regulated in many countries. So, give priority to yourself and your fellow drivers on the road, and avoid using a phone when you are behind a steering wheel.'
            },
            {
                subhead: 'Not being sensitive enough towards pedestrians and emergency vehicles',
                subbody: "Most drivers are in a hurry to reach their destinations, and in doing so affect pedestrians and emergency vehicles. The truth is that it is only one’s attitude that makes one believe so. We undermine the difference one driver can make to help the situation. One should be more respectful and considerate towards pedestrians and similarly towards emergency vehicles." +
                " \n \nCollating all mistakes and reading them, again and again, will give you a clear direction. Taking our driving licence for granted is among the biggest mistakes that we tend to make. It is imperative to upgrade our driving skills, have in-depth knowledge of traffic signs, and know more about how our automobiles work – these are important steps to take towards becoming a better driver."
            }
        ]
    },
    {
      id: 4,
      title: "5 Car Driving Tips That Make You a Better Driver",
      image: "https://marutisuzukidrivingschoolcdn.azureedge.net/-/media/feature/maruti-driving-school/blog/learn-to-get-licence/842x377_how-to-obtain-a-commercial-driving-licence-in-india.png?modified=20191209123708&h=377&w=842&la=en&hash=B0B251EC81F40010FF1BFB5050369C82",
      sub: "Until recently, a commercial driving licence "+
      "was mandatory for all those wanting to drive any "+
      "type of commercial vehicle. In fact, in order to "+
      "obtain a commercial driving licence, an individual "+
      "needed to wait for a year after holding a private "+
      "driving licence. However, in April 2018, the Ministry "+
      "of Road Transport and Highways issued an advisory to "+
      "all the state governments, ordering compliance to the "+
      "Supreme Court ruling in July 2017 where the requirements "+
      "for a commercial licence for those driving taxis, three-"+
      "wheelers, e-rickshaws, and two-wheelers for those delivering "+
      "food and other logistical items, was no longer necessary. "+
      "This has played a key role in opening up employment "+
      "opportunities for lakhs of Indians. The Motor Vehicle "+
      "Amendment Act passed in 2016 has also helped in strengthening "+
      "the driver training process.\n\n Those driving trucks, "+
      "buses, and other heavy commercial vehicles would still "+
      "need to hold a valid commercial driving licence.",
      context: [
        {
          subhead: "Acquire your Driving Skills First",
          subbody:
            "If you do not know how to drive a vehicle, start by first enrolling into a motor training school. The majority of driving schools will assist you in obtaining a learner’s licence. This is the first step in acquiring your driving skills before you appear for your driver's test. Within 30 days of the issuance of the learner’s licence, you will have to complete your driving test which will include an examination of your practical driving skills and your knowledge of traffic rules and regulations. Once the licence test is over and the four-wheeler driving test has been successfully completed in the presence of the RTO, you will be able to formally get a permanent private driving licence.",
        },
        {
          subhead: "Training towards getting a Commercial Driving Licence",
          subbody:
            "Even though you may be a well-trained driver, you would still require training on how to drive commercial vehicles before you start operating one. There may only be a select few driving schools that might be able to offer you this training service. Maruti Suzuki Driving School is one such driving school that provides you with heavy vehicle training lessons. For this, you will have to get an additional learner’s licence that is valid for a period of six months, which is the time period allocated to you to prepare yourself for heavy vehicles.",
        },
        {
          subhead: "Types of Learner’s Licences for Commercial Vehicles",
          subbody:
            "The heavy vehicle that you wish to drive determines the type of learner’s licence you should apply for. Learner’s licences applicable for commercial use are as follows:\n\n 1. HGMV vehicle class for Heavy Goods Motor Vehicle\n 2. LMV – TR vehicle class for Light Motor Vehicle used for commercial purposes\n 3. HPMV vehicle class for Heavy Passenger Motor Vehicle\n 4. LMV – NT vehicle class for Light Motor Vehicles used for non-transport purposes\n 5.MGV vehicle class for Medium Goods Vehicle\n",
        },
        {
          subhead:
            "Who are eligible to obtain a commercial licence?",
          subbody:
            "While a lot of the requirements are similar to those for obtaining a private driving licence, here are some guidelines that may differ: -\n 1. The applicant has to be 18 years of age. In some states, the minimum age requirement may be as high as 22 years\n 2. The applicant should have cleared their Class 8 examinations which is the minimum education requirement\n 3. The applicant needs to clear a written test before they become eligible to acquire a commercial licence\n 4. The applicant should have received training from a Government Motor School. Alternatively, a school affiliated to the state government will also serve the purpose.",
        },
        {
          subhead: "The Documentation and Application Process",
          subbody:
            "There are several documents that are required to be submitted prior to applying for a licence. These include:\n\n 1. Passport, Ration card, Voter ID, Aadhaar card or utility bills in the applicant’s name can serve as proof of address\n 2. Passport, PAN card, Voter ID, Aadhaar card, Birth certificate or class 10th mark sheet may act as identity proof\n 3. Forms 2, 1A and 5 must be duly filled\n 4. Passport-sized photographs\n 5. Application fee\nThe application can be made online through the Sarathi website. However, if an offline application is what suits your needs, then visit the nearest RTO office and submit all the required documents along with the application fee.\n\nFor both these application processes, you will receive an acknowledgement with a serial number on the mobile phone number that you have registered. This is typically in the form of an SMS.",
        },
      ],
    },
    {
        id: 5,
        title: 'How a simulator helps you before you start driving',
        sub: ' ',
        image: 'https://marutisuzukidrivingschoolcdn.azureedge.net/-/media/feature/maruti-driving-school/blog/innerblog-images/842x377_how-simulator-helps-you-before-jumping-on-road.png?modified=20190826104455&h=377&w=842&la=en&hash=3BB235E756DB23EFE4D1510B051A0009',
        context: [
            {
                subhead: 'The need for simulators',
                subbody: 'As per the Motor Vehicles Act and the CMVR, a trainee is supposed to master driving skills by spending 10 hours training on the road. It is not easy for a novice to acquire the necessary skill level within such a short span of time. Therefore, to save on the limited time available, Maruti Suzuki Driving School has developed and started using simulators.'
            },
            {
                subhead: 'Challenge for the trainee',
                subbody: "Driving on Indian roads can be a challenging experience for a trainee. One needs to deal with a variety of risks and significant pressure while driving on the road. Therefore, it is necessary that a novice learns to master different controls such as steering, pedals and gears, one at a time." +

                "\nAlthough this speeds up learning, one cannot learn this while driving a real car. This is because all controls would have to be managed by the trainee simultaneously."
            },
            {
                subhead: 'Benefits of a simulator',
                subbody: "When trainees start using a simulator, they can choose the specific control they wish to practice with. The simulator manages the rest of the controls." +

                "A simulator’s dimensions are designed in such a way that all controls mimic a real Maruti Suzuki car. Therefore, the trainee knows where exactly the pedals are located. For instance, one can identify the gear by just placing one’s hand on the gear level."+
                
                "As soon as the controls are mastered, the trainee can focus on learning various complicated maneuvers. Some of these include lane changing, overtaking, merging with traffic and driving on roundabouts. This enhances the training experience and substantially develops the trainee’s confidence."
            }
        ]
    },
    {
      id: 6,
      title: "Why theory is as important as practical to learn driving?",
      image: "https://marutisuzukidrivingschoolcdn.azureedge.net/-/media/feature/maruti-driving-school/blog/driving-tips/842x377_why-theory-is-as-important-as-practical-to-learn-driving.png?modified=20191213052118&h=377&w=842&la=en&hash=828C95DABD367C22BB5EF0EA72DE5454",
      sub: "In order to be a good driver, one must always equip oneself with all the theory lessons while learning to drive. And one of the best ways to do it is by enrolling in a driving school. Tangible benefits for an educated driver include saving close to 12% of fuel related expenses and 60% when it comes to safety related faults.\n\n"+
      "A good driving school will make sure that the participants are equipped to handle emergencies, use first aid, react correctly for situations emerging on roads like road rage incidents, aware of the symbols lighting up on the car’s instrument cluster, and honouring the rights of others on the road.\n\n"+
      "Here are some of the most crucial aspects that highlight the importance of theory lessons while learning to drive.",
      context: [
        {
          subhead: "THEORY BUILDS CONFIDENCE",
          subbody:
            "Theory lessons often include all those aspects of owning and driving a car that can only be learnt through classroom input. A good driving school appoints experts to teach the theory lessons. These experts communicate effectively and give attention to each participant. The practical lessons learnt from the driving-coach need to be backed with theoretical knowledge if you want to be a confident driver. At Maruti Suzuki Driving School, we ensure that our instructors are focused on helping the learners develop the skills required to drive safely and confidently.",
        },
        {
          subhead: "KNOW THE LAW",
          subbody:
            "A carefully designed curriculum of a driving school covers a wide range of topics. A lot of these topics are about the inner workings of a vehicle that includes technical details of how a car functions. Some of the most crucial aspects of theory input are identifying the traffic rules and all the important signs, symbols, indications, map-legends/keys and several other nuances which are not always present at one-go during the practical lessons on the road.\n"+
            "Theory lessons in a driving school also focus on several legal aspects. A participant is made aware of the process of registration of a vehicle, obtaining a driver's license, traffic rules, parking rules, towing rules, suspension of driver's license, drunken driving, rash and negligent driving and most importantly the penalties for traffic offences. Trainees are also educated on different types of insurance covers available, their pro and cons, and the procedure to be followed for claim processing.",
        },
        {
          subhead: "SAFETY IS SUPREME",
          subbody:
            "Safe roads are the hallmark of a civilized society. Our love for driving is always tested on the touchstone of traffic rules. A good driver diligently follows traffic rules to ensure safety. Maruti Suzuki Driving School emphasizes the importance of safe driving by not only teaching the theory lessons but also exposing the learners to simulators. Theory input shows the details of the safety features of a car and how to use those features. We share the road with every other driver, therefore, it is mandatory to learn the rules of safe driving",
        },
        {
          subhead:
            "ANATOMY OF A CAR",
          subbody:
            "Theory lessons introduce the learner to the structure of a car including all of its important components. This knowledge is necessary in order to drive confidently. These lessons are interesting and helpful. Learners are taught about the most important aspects of a car engine, chassis, crank linkage, fuel supply system, cooling mechanism, lubrication, ignition, starting line, clutch, brake system, gears, battery etc. Experts often show the link between the structure of a car and the rules of driving. For instance, an expert driver can reduce gearbox repairs by up to 40%. Learners are encouraged to apply the theory to their driving sessions on the road. This process helps build confidence through awareness of traffic rules and safe driving skills.",
        },
        {
          subhead: "RIGHTS AND RESPONSIBILITIES",
          subbody:
            "We must always remember that the right to drive can only be enjoyed if we are responsible drivers. The responsibilities of a driver are learnt in detail through theory lessons. These rights and responsibilities are codified in the form of important laws such as the Rules of Road Regulations and Motor Vehicles Act. These codes prescribe punishments for violation of the rules.\n"+
            "It is our sincere endeavour to create confident drivers who believe in safe driving. We have designed a Learner's Course which spans 21 hours, including 10 hours of practical and 11 hours of theory input. Our carefully designed theory lessons ensure that the driver not only has excellent driving skills but also sound knowledge of theory.",
        },
      ],
    },
    {
        id: 7,
        title: 'Presenting the Maruti Suzuki Driving School',
        image:'https://marutisuzukidrivingschoolcdn.azureedge.net/-/media/feature/maruti-driving-school/blog/driving-tips/new/842-x-377.jpg?modified=20200326090210&h=377&w=842&la=en&hash=7D470926A4647494066A5CCA188830A3',
        sub: 'With an aim to help India become good at driving, Maruti Suzuki India Limited introduced the Maruti Driving School in 2005. By offering a structured and contemporary driving skill program, the school has trained more than 1.3 million learners, turning them into confident and responsible drivers. Keeping up with the latest digital advancements, Maruti Suzuki has chosen to reintroduce the driving school with a new focus and with new values to ensure that the experience you get during the learning program is in line with modern trends.',
        context: [
            {
                subhead: 'Who we are',
                subbody: 'The Maruti Suzuki Driving School is not just about teaching people how to drive. It is about creating an experience fuelled by innovation, forward thinking, and a commitment to bring the very best of driving ethics and practices to the roads. Thanks to Maruti Suzuki Driving School, the country’s need for driving is slowly changing into a love for driving. Maruti Suzuki Driving School offers highly experienced trainers, best-in-class technology, and premium training modules to ensure that the learners get nothing but the best.'
            },
            {
                subhead: 'The Pillars that Define Our Vision',
                subbody: "The brand values of Maruti Suzuki Driving School guide every function and interaction of the brand and showcase the consistently caring, reliable and welcoming personality of the brand. \n"+
                " 1. Caring and Reliable: Taking forward Maruti Suzuki’s long-standing legacy, we will always assure that the customers can count on us, every time.\n"+
                " 2. Expertise: This signifies the constant advancements made by Maruti Suzuki Driving School to cater to customer needs.\n"+
                " 3. New Age Progressive Tech Enabled: As a brand, we are equipped with the technical know-how needed to deliver the best learning experience to all learners in terms of technology as well as design.\n"+
                "With a focus on bringing excitement in learning, Maruti Suzuki Driving School is going beyond traditional boundaries and transforming the way you learn to drive."
            }
        ]
    }
  ];

  return (
    <div className="blog">
      {
      Content.map((value) => {
        if (value.id === props.location.index)
          return (
            <div className="blog__content">
              <div className="blog__image"><img src={value.image} alt='' /></div>
              <div className="blog__info">
                <div className="blog__info__left">
                  <InstagramIcon  onClick={()=>window.open("https://www.instagram.com/vishnucars_maruti/")} className="icon" />
                  <FacebookIcon   onClick={()=>window.open("https://www.facebook.com/vishnucarsmaruti/")}  className="icon" />
                </div>
                <div className="blog__info__right">
                  <div className="blog__head">
                    {value.title}
                  </div>
                  <div className="blog__body">
                    {value.sub}
                  </div>
                  <div className="blog__page">
                    {value.context.map((content) => (
                      <div className="content">
                        <div className="head">{content.subhead}</div>
                        <div className="body">{content.subbody}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="drive">
                <div className="head">Drive well, Drive Safe.</div>
              </div>
            </div>
          );
      })}
    </div>
  );
}

export default Blog;
