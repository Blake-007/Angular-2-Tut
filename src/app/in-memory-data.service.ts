import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let companies = [
      { id: 1, 
        name: 'Campbell Attorneys', 
        about: 'Campbell Attorneys are a dynamic service focused law firm which provides our clients with personal attention, practical problem solving advice and pro-active solutions. We pride ourselves in finding solutions for clients. Our head office is in Durban and we have a branch office in Pretoria, however we are able to assist anywhere in South Africa. Instead of our attorneys working across a vast number of legal areas, our practitioners are dedicated to and focus on various specific areas of law which gives our clients the benefit of a higher level of expertise.', 
        address: '58 St Andrews Drive, Durban North 4051', 
        num: '031 564 6494', 
        email: 'mail@campbellattorneys.co.za',
        type: 'Lawyer'
      },
      { id: 2, 
        name: 'PFT Burger Attorneys',
        about: 'Pieter Burger is a South African patent attorney. He has almost 40 years’ experience as a patent attorney. His legal career began in 1978 with Spoor & Fisher, one of the most respected specialist intellectual property law firms in the country and a firm well known worldwide. Most of his 12 years at Spoor & Fisher were spent as a partner in Johannesburg, where he developed a substantial commercial practice. In 1991 PFT Burger Attorneys | patent | trademark attorneys | was started in Durban. Pieter was invited to join Shepstone & Wylie, a large Durban commercial law firm in 1992 as a partner in the Commercial Department of that firm, tasked with creating an intellectual property law capacity within the firm. This endeavour enjoyed some success but Pieter nevertheless decided to re-establish his present firm, which he did in 1994. Pieter has specialist skills in Information Technology.',
        address: 'P.O. Box 546 Durban 4000 South Africa',
        num: '031 573 1054',
        email: 'pftb@pftb.co.za',
        type: 'Lawyer'
      },
      { id: 3, 
        name: 'Dr Hilda Ganesen',
        about: 'Dr Hilda Ganesen is a female Family Physician with a postgraduate masters degree in Family Medicine. She practices from Core Medical Centre, a brand new vibrant multidisciplinary Medical Center, in Durban North.'
                +'She has extensive experience in Primary Health Care Medicine.'
                +'Preventative Medicine: The initial consultation includes a medical history to highlight possible non related risk factors for associated diseases. '
                +'She will encourage early prevention and detection of diseases. Womens Health: Pap smears are done at the practice. '
                +'Advise on contraception, menopause, breast cancer screening and pregnancy is the core of the medical care for women.  She will address sensitive issues with teenagers regarding menstrual abnormalities.',
        address: '20 Gainsborough Drive Durban North ',
        num: ' 031 5634249',
        email: 'drganesen@gmail.com',
        type: 'Doctor'
      },
      { id: 4, 
        name: 'Dr Nokubonga Nkonza',
        about: 'Dr Nokubonga Khoza is specialist dermatologist in Durban. She graduated from the University of KwaZulu-Natal, Nelson R Mandela School of Medicine in 2003. She obtained her Fellowship from the College of Dermatologists of South Africa in 2011. She has worked extensively in the field of dermatology at all major Durban hospitals.'
        +'She is currently an honorary Consultant and Lecturer at the University of KwaZulu-Natal, Nelson R Mandela School of Medicine.'
        +'In 2014, Dr Khoza established South Africa first Immunobullous Disease clinic at Inkosi Albert Luthuli Hospital and currently runs this on a weekly basis. She has published articles in peer-review journals as well as contributed chapters in dermatology textbooks on permanent hairloss, melasma, pigmentation, skin lighteners, skin infections and autoimmune bullous disease.',
        address: '480 Anton Lembede St, Durban Central, Durban 4001',
        num: '031 5812545',
        email: 'info@durbanskindoctor.co.za',
        type: 'Doctor'
      },
      { id: 5, 
        name: 'Auxilliary Plumbers',
        about: 'Auxilliary Plumbers is always ready, willing and able to help you, our valued customer.Auxilliary Plumbers is your best choice when needing a full line Plumbing service.Auxilliary Plumbers are friendly, efficient and accurate in diagnosis and repair.'
                +'We operate 24 hours a day, 7 days a week and are qualified to rectify any problem.Auxilliary Plumbers has the experience and customer-oriented attitude to meet your plumbing expectations without breaking your budget.'
                +'We stock many brand-name faucets, sinks, fittings. Basically, if it has to do with plumbing – we do it all – from burst pipes to geysers, underground as well as above ground sewer and storm water.'
                +'Make Auxilliary Plumbers your first and best choice for fast, immediate service in Durban and Surrounding Areas.',
        address: '33 Swapo Road Durban North',
        num: '072 542 5577',
        email: 'info@auxilliaryplumbers.co.za',
        type: 'Plumber'
      },
      { id: 6, 
        name: 'Ganga Plumbers',
        about: 'Ganga Plumbers is a proudly South African company and was established in the year 2000. We have now grown into a 24 hour operation with 20 fully equipped plumbers to render the required service with world class workmanship.We pride ourselves in providing excellent service and after sales back up. We are equipped with world class machinery and tools that solves all plumbing related issues. Doosh Ramouthar is a third generation plumber who worked as a teenager with his grand-father in the trenches and studied analytical chemistry, graduating with a higher diploma.'
                +'Whilst doing odd plumbing jobs to pay for his studies he realized his passion for plumbing. He then changed faculties and studied advanced plumbing at Swinton Technicon, hence forth opening Ganga Plumbers. Ganga Plumbers was established as a one man operation.Today we have grown into a streamlined 24 hour plumbing service provider with a reputation for dependability and value. '
                +'Ganga Plumbers prides itself on an ongoing commitment to safety, quality, service and continued growth. We are licensed, registered and insured and believe that professionalism in our industry is first and foremost. '
                +'The company sole director, Doosh Ramouthar, is watchful over all operations and gets closely involved in trouble shooting as he is an expert in the plumbing industry for many years. All plumbing crews are controlled by a dedicated team of administrative case managers. ',
        address: '19 Chelsea Ave New Germany 3610',
        num: '031 26 26 871',
        email: 'info@gangaplumbers.co.za',
        type: 'Plumber'
      }
    ];
    return {companies};
  }
}