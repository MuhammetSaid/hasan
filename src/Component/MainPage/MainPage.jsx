import React from 'react'
import "./MainPage.css"
import ReactCardSlider from '../Slider/ReactCardSlider'
import Slider2 from '../Slider2/Slider2'

export default function MainPage() {
    
// a slide object contains the image link, title and function/click event for when a user clicks on a card
    

    return (
        <>
            <div className="main-dev">
                <div className="left-section">
                    <div className="left-content">
                        <div className="profile-image">
                            <img src="https://i.imgur.com/hwxqWcP.jpeg" alt="" style={{width: "160px"}}/>
                        </div>
                        <h1 className="left-title" style={{color: "white", marginTop:"23px"}}>الرؤية الانتخابية للسيد ناصر المحيميد</h1>
                        <p className="left-desc" style={{color: "white", marginTop:"16px"}}>بعد ثورة عظيمة وتضحيات جليلة، نؤمن أن الشرعية الحقيقية تنبع من دماء الشهداء وثبات الثوار.
ننطلق من الثورة السورية المباركة كمنارة لمسارنا، لنرسخ نظاماً عادلاً يقوم على التوازن بين السلطات، ويمنح الثوار دوراً محورياً في صنع القرار وبناء مؤسسات الدولة القادمة.
وكانت المرأة السورية شريكة في هذه التضحيات، صابرةً ومناضلة، لتبقى ركناً أصيلاً في مسيرة الحرية وبناء الوطن.
ومن الداخل السوري ارتسمت معالم الحرية، وصاغ صموده صفحات التحرير، فيما كان أبناء المهجر عوناً وسنداً يكملون المسيرة.
إن رعاية أسر الشهداء والمصابين واجب وطني، وحفظ ذاكرة الثورة عهد لا يسقط، لتبقى حاضرة في وجدان الأجيال.
نطمح إلى وطنٍ حرّ كريم، يستعيد مكانته بين الأمم بإرادة شعبه ورؤية ثورته.</p>
                    </div>
                </div>

                <div className="right-section1">
                    <div className="right-section">
                        <div className="right-content" style={{padding: "80px", direction: "rtl"}}>
                            <div className="image-dev">
                                <img src="https://i.imgur.com/R25HfMq.png" alt="" />
                            </div>

                            <h1 className='h1-hero' style={{marginTop: "10px", textAlign: "center"}}>نحن نؤمن بوطن يجمع أبنائه على قلب واحد، حيث العدالة الاجتماعية قاعدة لكل عمل، ورؤية جامعة تقود نهضة اقتصادية حقيقية، ليكون وطننا حراً كريماً، صاعداً نحو المستقبل، ومزدهراً بثمار جهود كل أبنائه.
                            </h1>
                            <h1 className='h1-sub' style={{marginTop: "32px", textAlign: "center"}}>إرادة شعب… ورؤية وطن</h1>
                        </div>
                    </div>

                    <div className="section2">
                        <div className="section2-content">
                            <div className="image2">
                                <img src="https://media.journoportfolio.com/users/474088/images/752976bf-8b0e-4814-80c6-c06a9e76d5ac.jpg" alt="" />
                            </div>
                            <div className="text2">
                                <h2 className="section2-title" style={{direction: "rtl", textAlign: "center"}}>رؤيتي لسوريا الحاضر والمستقبل

سوريا التي نحلم بها هي وطن جامع لكل أبنائه، لا مكان فيه للتهميش أو الإقصاء، يقوم على العدالة الاجتماعية وتكافؤ الفرص، حيث تكون مؤسسات الدولة في خدمة الشعب لا العكس.

                                </h2>
                                <p className="section2-p" style={{direction: "rtl", marginTop:"20px", textAlign: "center"}}>نسعى إلى بناء نظام صحي وتعليمي متطور، وتنمية اقتصادية شاملة توفر فرص العمل وتدعم الإنتاج المحلي، إلى جانب بنية تحتية وخدمات حديثة تليق بكرامة المواطن.
                                </p>
                                <p className="section2-p" style={{direction: "rtl", marginTop:"16px", textAlign: "center"}}>ونضع في مقدمة أولوياتنا الدعم الاجتماعي لمصابي الحرب الأكثر حاجة، ولأسر الشهداء المحتاجة، باعتبار ذلك واجبًا وطنيًا وأخلاقيًا لا يسقط بالتقادم.</p>
                                <p className="section2-p" style={{direction: "rtl", marginTop:"16px", textAlign: "center"}}>كما نؤمن أن تمكين المجتمع، وخاصة الشباب والنساء، هو الضامن لاستمرار النهضة وصيانة مكتسبات الثورة.
                                </p>
                                <p className="section2-p" style={{direction: "rtl", marginTop:"16px", textAlign: "center"}}>بهذا، نصون حاضر سوريا بقوة مؤسساتها، ونفتح آفاق المستقبل لتكون وطناً حراً كريماً، شامخاً بين الأمم.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="section3">
                        <div className="section3-content"> 
                            <h1 className="section-title" style={{margin: "48px", color: "white"}}>الأولويات الوطنية</h1>
                            <div className="slider-div"style={{width: "80%"}}> 
                                <ReactCardSlider />
                            </div>
                        </div>
                    </div>

                    <div className="section4">
                        <div className="section4-content">
                            <h1 className="section4-heading" style={{marginTop: "140px", textAlign: "center", width: "80%", color:" white"}}>تنتقل مياديننا من ساحة المعركة إلى ساحة البناء، ومن ثورةٍ على الظلم إلى ثورةِ الإعمار والتغيير
                            </h1>
                            <img src="https://i.imgur.com/P0iNcK4.png" alt="" style={{marginTop: "1px", width: "9%"}}/>
                        </div>
                    </div>

                    <div className="section5">
                        <div className="section5-content">
                            <div className="logo-image">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Emblem_of_Syria_%282025%E2%80%93present%29.svg/1200px-Emblem_of_Syria_%282025%E2%80%93present%29.svg.png" alt="" style={{opacity: "0.25"}}/>
                            </div>
                            <div className="section5-text" style={{direction: "rtl", marginRight: "40px "}}>
                                <p style={{fontFamily: "cairo"}} className='h1-sec5-main'>المحاور الأساسية للبرنامج:</p>

                                <p style={{fontFamily: "cairo", fontWeight: "700", color: "rgb(145, 0, 0)", fontSize: "22px", marginTop: "10px"}}> 1. المبادئ العامة</p>
                                <ul>
                                    <li style={{marginRight: "30px", fontSize: "21px", marginTop:"10px"}}>
                                    الانطلاق من ثوابت الثورة السورية التي قدمت التضحيات العظيمة في سبيل الحرية والكرامة.
                                    </li>
                                    <li style={{marginRight: "30px", fontSize: "21px", marginTop:"10px"}}>
                                    ترسيخ دولة القانون والمؤسسات القائمة على العدالة والمساواة والمساءلة.
                                    </li>
                                    <li style={{marginRight: "30px", fontSize: "21px", marginTop:"10px"}}>
                                    تعزيز مفهوم المواطنة الكاملة، بحيث يتساوى جميع السوريين دون تمييز ديني أو قومي أو عشائري أو جنسي.
                                    </li>
                                    <li style={{marginRight: "30px", fontSize: "21px", marginTop:"10px"}}>
                                    التمسك بوحدة سوريا أرضاً وشعباً، ورفض أي مشاريع للتقسيم أو المحاصصة.
                                    </li>
                                    <li style={{marginRight: "30px", fontSize: "21px", marginTop:"10px"}}>
                                    الالتزام بالثوابت الوطنية التي ضحى من أجلها السوريون، وعدم القبول بأي تنازل عن السيادة أو التلاعب بالدستور.
                                    </li>
                                </ul>

                                <p style={{fontFamily: "cairo", fontWeight: "700", color: "rgb(145, 0, 0)", fontSize: "22px", marginTop: "20px"}}> 2. حمص أولاً</p>
                                <ul>
                                    <li style={{marginRight: "30px", fontSize: "21px", marginTop:"10px"}}>
                                    جعل محافظة حمص نموذجاً للنهوض الوطني من خلال إعمارها أولاً وتلبية احتياجات أبنائها في الخدمات والتعليم والصحة والبنية التحتية.
                                    </li>
                                    <li style={{marginRight: "30px", fontSize: "21px", marginTop:"10px"}}>
                                    إعادة إحياء المراكز الصناعية والزراعية لتعود حمص مركزاً اقتصادياً متجدداً.

                                    </li>
                                    <li style={{marginRight: "30px", fontSize: "21px", marginTop:"10px"}}>
                                    المساهمة في إعمار سوريا كلها وعودتها المشرقة إليها بكرامة.

                                    </li>
                                    <li style={{marginRight: "30px", fontSize: "21px", marginTop:"10px"}}>
                                    تثبيت دور حمص كعاصمة وطنية واقتصادية وثقافية، وانطلاقتها نحو بناء سوريا الجديدة.
                                    </li>
                                </ul>

                                <p style={{fontFamily: "cairo", fontWeight: "700", color: "rgb(145, 0, 0)", fontSize: "22px", marginTop: "20px"}}>3. الوحدة الوطنية وبناء الدولة</p>
                                <ul>
                                    <li style={{marginRight: "30px", fontSize: "21px", marginTop:"10px"}}>تكريس مفهوم المواطنة الجامعة، ومنع أي تمييز على أساس الدين أو الطائفة أو العشيرة أو الجنس.

                                    </li>
                                    <li style={{marginRight: "30px", fontSize: "21px", marginTop:"10px"}}>صياغة دستور جديد يضمن الحقوق والحريات ويصون كرامة المواطن.
                                    </li>
                                    <li style={{marginRight: "30px", fontSize: "21px", marginTop:"10px"}}>ضمان فصل السلطات الثلاث، ومحاسبة المسؤولين بعدالة وشفافية.
                                    </li>
                                </ul>

                                <p style={{fontFamily: "cairo", fontWeight: "700", color: "rgb(145, 0, 0)", fontSize: "22px", marginTop: "20px"}}>4. العدالة الانتقالية والمصالحة الوطنية</p>
                                <ul>
                                    <li style={{marginRight: "30px", fontSize: "21px", marginTop:"10px"}}>تحقيق عدالة شاملة عبر محاسبة كل من ارتكب جرائم بحق السوريين.
                                    </li>
                                    <li style={{marginRight: "30px", fontSize: "21px", marginTop:"10px"}}>إنصاف الضحايا وجبر الضرر المادي والمعنوي.
                                    </li>
                                    <li style={{marginRight: "30px", fontSize: "21px", marginTop:"10px"}}>إرساء مصالحة وطنية قائمة على العدالة وإنصاف المظلومين، لتكون أساساً لمصالحة مجتمعية دائمة.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="section6">
                        <div className="section6-content" style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
                            <h1 style={{ marginTop: "40px", direction: "rtl"}}> المنجزات والخبرات العملية والمجتمعيّة
                            </h1>
                            <div className="slider6" style={{width: "80%", marginTop: "26px"}}>
                                <Slider2 />
                            </div>
                        </div>
                    </div>

                    <div className="section7">
                        <div className="section7-content">
                            <h1 style={{textAlign: "center", marginTop:"140px", fontSize: "45px", color:"white"}}> المهارات والدورات التدريبية المكتسبة
                            </h1>
                            <div className="sec7-cards">
                                <div className="two-cards">
                                    <div className="card3">
                                        <h1 style={{marginTop: "0", direction: "rtl", textAlign:"center"}}>إدارة الأزمات والحوكمة الرشيدة</h1>
                                    </div>
                                    <div className="card3">
                                        <h1 style={{marginTop: "0", direction: "rtl", textAlign:"center"}}>تدريب وبناء قدرات الكوادر الشبابية والمجتمعية</h1>
                                    </div>  
                                </div>

                                <div className="two-cards">
                                    <div className="card3">
                                    <h1 style={{marginTop: "0", direction: "rtl", textAlign:"center"}}>التخطيط الاستراتيجي وإدارة المشاريع</h1>
                                        
                                    </div>
                                    <div className="card3">                                    
                                        <h1 style={{marginTop: "0", direction: "rtl", textAlign:"center"}}>تطوير السياسات الصحية والاجتماعية</h1>
                                    </div>  
                                </div>

                                <div className="two-cards">
                                    <div className="card3">
                                        <h1 style={{marginTop: "0", direction: "rtl", textAlign:"center"}}>التفاوض وبناء الشراكات المحلية والدولية</h1>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section8">
                        <div className="section8-content">
                            <div className="section8-con">
                                <div className="section8-con-left">
                                    <img src="https://i.imgur.com/hwxqWcP.jpeg" alt="" />
                                </div>

                                <div className="section8-con-right" style={{direction: "rtl"}}>
                                    <h1 style={{textAlign: "center"}}>الأهداف المستقبلية                                    </h1>

                                    <div className="cards1 cards">
                                        <div className="card card1 card4" onClick={() => { window.location.hash = `?content=${encodeURIComponent('المساهمة في صياغة سياسات وطنية لإعادة الإعمارة')}` }}>
                                            <h2 style={{textAlign:"center"}}>المساهمة في صياغة سياسات وطنية لإعادة الإعمارة</h2>
                                        </div>
                                        <div className="card card1 card4" onClick={() => { window.location.hash = `?content=${encodeURIComponent('بناء دولة قائمة على العدل – التنمية – المشاركة – الكرامة')}` }}>
                                            <h2 style={{textAlign:"center"}}>بناء دولة قائمة على العدل – التنمية – المشاركة – الكرامة</h2>
                                        </div>
                                        <div className="card card1 card4" onClick={() => { window.location.hash = `?content=${encodeURIComponent('ضمان مشاركة مجتمعية واسعة في صنع القرار' )}` }}>
                                            <h2 style={{textAlign:"center"}} > ضمان مشاركة مجتمعية واسعة في صنع القرار</h2>
                                        </div>
                                        
                                    </div>

                                    <h1 style={{textAlign:"center", marginTop: "30px"}}>أضع كل خبرتي والتزامي في خدمتكم، لضمان أن يكون كل قرار وبرنامج في مجلس الشعب انعكاساً حقيقياً لصوت المواطن السوري. معاً، نحوّل الطموح إلى واقع ملموس يواكب نصر ثورتنا المباركة، حلم لن يكتمل إلا بالكفاءة وتُبنى المسؤوليات على الأمانة، فقبيلتنا وعائلتنا الكبرى هي الوطن، وانتماؤنا الأسمى هو لسورية الحرّة</h1>
                                    <h1 style={{textAlign:"center", marginTop: "30px"}}>سنبني كما قاتلنا</h1>
                                    <h1 style={{textAlign:"center", marginTop: "14px"}}>ونعمر كما ثُرنا</h1>
                                    <h1 style={{textAlign:"center", marginTop: "40px"}}>★★★</h1>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer">
                        <div className="footer-content">
                            <h1 style={{textAlign: "center", color: "white", marginTop: "40px"}}>أرحب بتواصلكم معي عبر البريد الإلكتروني ورقم الموبايل
                            </h1>
                            <h4 style={{textAlign: "center", color: "white", marginTop: "20px"}}>dr.Ahmed88m@gmail.com   +963945940094</h4>

                            <h1 style={{textAlign: "center", color: "white", marginTop: "90px", marginBottom: "20px"}}>د.أحمد منصور الأقرع
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
