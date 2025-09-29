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
                        <h1 style={{color: "white", fontSize: "32px", marginTop:"23px"}}>الرؤية الانتخابية للسيد ناصر المحيميد</h1>
                        <p style={{color: "white", fontSize: "19px", marginTop:"16px"}}>بعد ثورة عظيمة وتضحيات جليلة، نؤمن أن الشرعية الحقيقية تنبع من دماء الشهداء وثبات الثوار.
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

                            <h1 style={{fontSize:"40px", marginTop: "10px", textAlign: "center"}}>نحن نؤمن بوطن يجمع أبنائه على قلب واحد، حيث العدالة الاجتماعية قاعدة لكل عمل، ورؤية جامعة تقود نهضة اقتصادية حقيقية، ليكون وطننا حراً كريماً، صاعداً نحو المستقبل، ومزدهراً بثمار جهود كل أبنائه.
                            </h1>
                            <h1 style={{fontSize:"48px", marginTop: "32px"}}>إرادة شعب… ورؤية وطن</h1>
                            <h3 style={{ marginTop: "120px"}}>من فضلك قم بالتمرير للأسفل</h3>
                        </div>
                    </div>

                    <div className="section2">
                        <div className="section2-content">
                            <div className="image2">
                                <img src="https://media.journoportfolio.com/users/474088/images/752976bf-8b0e-4814-80c6-c06a9e76d5ac.jpg" alt="" />
                            </div>
                            <div className="text2">
                                <h2 style={{direction: "rtl", fontSize:"28px", textAlign: "center"}}>رؤيتي لسورية الحاضر والمستقبل: وجودي ممثلاً عن الشعب السوري في المجلس هو التزام بأن أكون صوته الحقيقي في بناء دولة حديثة، تصون كرامة المواطن، ويرتكز أساسها على العدل وسيادة القانون
                                </h2>
                                <p style={{direction: "rtl", marginTop:"20px", fontSize: "18px", textAlign: "center"}}>أسعى إلى خدمة وطني عبر تأسيس سلطات وقوانين عادلة تضمن الحقوق، وتعزز التنمية المستدامة، وتفتح المجال لمشاركة الجميع في صياغة المستقبل</p>
                                <p style={{direction: "rtl", marginTop:"20px", fontSize: "18px", textAlign: "center"}}>بعد سنوات من الثبات والتضحيات، وسط صعوبات جسام وتحديات كبرى، نسعى إلى ترسيخ نظام إدارة عادل قائم على التوازن بين السلطات، وبناء أنظمة صحية ومجتمعية تضمن الحقوق وتعزز مسيرة التنمية المستدامة، وتُمكّن الشعب السوري من استعادة دوره الريادي في بناء الوطن</p>
                            </div>
                        </div>
                    </div>

                    <div className="section3">
                        <div className="section3-content"> 
                            <h1 style={{margin: "48px", color: "white"}}>الأولويات الوطنية</h1>
                            <div className="slider-div"style={{width: "80%"}}> 
                                <ReactCardSlider />
                            </div>
                        </div>
                    </div>

                    <div className="section4">
                        <div className="section4-content">
                            <h1 style={{marginTop: "140px", textAlign: "center", fontSize:"43px", width: "80%", color:" white"}}>تنتقل مياديننا من ساحة المعركة إلى ساحة البناء، ومن ثورةٍ على الظلم إلى ثورةِ الإعمار والتغيير
                            </h1>
                            <img src="https://i.imgur.com/P0iNcK4.png" alt="" style={{marginTop: "1px", width: "9%"}}/>
                        </div>
                    </div>

                    <div className="section5">
                        <div className="section5-content">
                            <h1 style={{textAlign: "center", fontSize: "46px", color: "#007a18"}}>من أهم الملفات</h1>
                            
                            <div className="stars" style={{display: "flex", alignItems: "center", justifyContent:"center"}}>
                                <h1 style={{margin: "20px", color: "#007a18", fontSize: "40px"}}>*</h1>
                                <h1 style={{margin: "20px", color: "#007a18", fontSize: "40px"}}>*</h1>
                                <h1 style={{margin: "20px", color: "#007a18", fontSize: "40px"}}>*</h1>
                            </div>

                            <h1 style={{textAlign: "center", fontSize: "32px", color: "#007a18"}}> تعزيز العدالة وسيادة القانون</h1>

                            <div className="cards1 cards">
                                <div className="card card1" onClick={() => { window.location.hash = `?content=${encodeURIComponent('العمل على تعديل قانون الإدارة المحلية ليكون قانونا عصريا يراعي الوضع السوري و يعطي دور أكبر للإدارات المحلية')}` }}>
                                    <h2 style={{textAlign:"center"}}>العمل على تعديل قانون الإدارة المحلية ليكون قانونا عصريا يراعي الوضع السوري و يعطي دور أكبر للإدارات المحلية</h2>
                                </div>
                                <div className="card card1" onClick={() => { window.location.hash = `?content=${encodeURIComponent('إضافة العمل على إلغاء او تعديل القوانين و المراسيم الظالمة التي تمس حقوق و حريات و ملكيات السوريين')}` }}>
                                    <h2 style={{textAlign:"center"}}>إضافة العمل على إلغاء او تعديل القوانين و المراسيم الظالمة التي تمس حقوق و حريات و ملكيات السوريين</h2>
                                </div>
                                <div className="card card1" onClick={() => { window.location.hash = `?content=${encodeURIComponent('تطوير آليات محاربة الفساد وتعزيز النزاهة في مؤسسات الدولة')}` }}>
                                    <h2 style={{textAlign:"center"}}>تطوير آليات محاربة الفساد وتعزيز النزاهة في مؤسسات الدولة</h2>
                                </div>
                                <div className="card card1" onClick={() => { window.location.hash = `?content=${encodeURIComponent('العمل على وضع قوانين للعدالة الانتقالية تسعى لإنصاف الضحايا و منع إفلات مرتكبي الانتهاكات من العقاب')}` }}>
                                    <h2 style={{textAlign:"center"}}>العمل على وضع قوانين للعدالة الانتقالية تسعى لإنصاف الضحايا و منع إفلات مرتكبي الانتهاكات من العقاب</h2>
                                </div>
                            </div>

                            <h1 style={{textAlign: "center", fontSize: "32px", color: "#007a18", marginTop: "40px"}}> تعزيز اللامركزية في إدارة البلديات
                            </h1>

                            <div className="cards1 cards">
                                <div className="card card1" onClick={() => { window.location.hash = `?content=${encodeURIComponent('العمل على تعديل قانون الإدارة المحلية ليكون قانونا عصريا يراعي الوضع السوري و يعطي دور أكبر للإدارات المحلية')}` }}>
                                    <h2 style={{textAlign:"center"}}>العمل على تعديل قانون الإدارة المحلية ليكون قانونا عصريا يراعي الوضع السوري و يعطي دور أكبر للإدارات المحلية</h2>
                                </div>
                                <div className="card card1" onClick={() => { window.location.hash = `?content=${encodeURIComponent('نقل الصلاحيات والموارد من المركز إلى السلطات المحلية')}` }}>
                                    <h2 style={{textAlign:"center"}}>نقل الصلاحيات والموارد من المركز إلى السلطات المحلية</h2>
                                </div>
                                <div className="card card1" onClick={() => { window.location.hash = `?content=${encodeURIComponent('تطوير آليات محاربة الفساد وتعزيز النزاهة في مؤسسات الدولة')}` }}>
                                    <h2 style={{textAlign:"center"}}>تطوير آليات محاربة الفساد وتعزيز النزاهة في مؤسسات الدولة</h2>
                                </div>
                                <div className="card card1" onClick={() => { window.location.hash = `?content=${encodeURIComponent('العمل على وضع قوانين للعدالة الانتقالية تسعى لإنصاف الضحايا و منع إفلات مرتكبي الانتهاكات من العقاب')}` }}>
                                    <h2 style={{textAlign:"center"}}>العمل على وضع قوانين للعدالة الانتقالية تسعى لإنصاف الضحايا و منع إفلات مرتكبي الانتهاكات من العقاب</h2>
                                </div>
                            </div>

                            <h1 style={{textAlign: "center", fontSize: "32px", color: "#007a18", marginTop: "40px"}}>تطوير أنظمة الصحة والخدمات الأساسية
                            </h1>

                            <div className="cards1 cards">
                                <div className="card card1" onClick={() => { window.location.hash = `?content=${encodeURIComponent('العمل على تعديل قانون الإدارة المحلية ليكون قانونا عصريا يراعي الوضع السوري و يعطي دور أكبر للإدارات المحلية')}` }}>
                                    <h2 style={{textAlign:"center"}}>العمل على تعديل قانون الإدارة المحلية ليكون قانونا عصريا يراعي الوضع السوري و يعطي دور أكبر للإدارات المحلية</h2>
                                </div>
                                <div className="card card1" onClick={() => { window.location.hash = `?content=${encodeURIComponent('نقل الصلاحيات والموارد من المركز إلى السلطات المحلية')}` }}>
                                    <h2 style={{textAlign:"center"}}>نقل الصلاحيات والموارد من المركز إلى السلطات المحلية</h2>
                                </div>
                                <div className="card card1" onClick={() => { window.location.hash = `?content=${encodeURIComponent('تطوير آليات محاربة الفساد وتعزيز النزاهة في مؤسسات الدولة')}` }}>
                                    <h2 style={{textAlign:"center"}}>تطوير آليات محاربة الفساد وتعزيز النزاهة في مؤسسات الدولة</h2>
                                </div>
                                <div className="card card1" onClick={() => { window.location.hash = `?content=${encodeURIComponent('العمل على وضع قوانين للعدالة الانتقالية تسعى لإنصاف الضحايا و منع إفلات مرتكبي الانتهاكات من العقاب')}` }}>
                                    <h2 style={{textAlign:"center"}}>العمل على وضع قوانين للعدالة الانتقالية تسعى لإنصاف الضحايا و منع إفلات مرتكبي الانتهاكات من العقاب</h2>
                                </div>
                            </div>

                            <div className="stars" style={{display: "flex", alignItems: "center", justifyContent:"center"}}>
                                <h1 style={{margin: "20px", color: "#007a18", fontSize: "40px"}}>*</h1>
                                <h1 style={{margin: "20px", color: "#007a18", fontSize: "40px"}}>*</h1>
                                <h1 style={{margin: "20px", color: "#007a18", fontSize: "40px"}}>*</h1>
                            </div>

                            <h1 style={{textAlign: "center", fontSize: "50px", color: "#007a18"}}> الملف الإقتصادي وإعادة الإعمار بعد الانتصار

                            </h1>

                            <div className="stars" style={{display: "flex", alignItems: "center", justifyContent:"center"}}>
                                <h1 style={{margin: "20px", color: "#007a18", fontSize: "40px"}}>*</h1>
                                <h1 style={{margin: "20px", color: "#007a18", fontSize: "40px"}}>*</h1>
                                <h1 style={{margin: "20px", color: "#007a18", fontSize: "40px"}}>*</h1>
                            </div>

                            <h1 style={{textAlign: "center", fontSize: "30px", color: "#007a18"}}>إعادة الإعمار المستدام
                            </h1>

                            <div className="cards1 cards">
                                <div className="card card2" onClick={() => { window.location.hash = `?content=${encodeURIComponent('العمل على تعديل قانون الإدارة المحلية ليكون قانونا عصريا يراعي الوضع السوري و يعطي دور أكبر للإدارات المحلية')}` }}>
                                    <h2 style={{textAlign:"center"}}>العمل على تعديل قانون الإدارة المحلية ليكون قانونا عصريا يراعي الوضع السوري و يعطي دور أكبر للإدارات المحلية</h2>
                                </div>
                                <div className="card card2" onClick={() => { window.location.hash = `?content=${encodeURIComponent('نقل الصلاحيات والموارد من المركز إلى السلطات المحلية')}` }}>
                                    <h2 style={{textAlign:"center"}}>نقل الصلاحيات والموارد من المركز إلى السلطات المحلية</h2>
                                </div>
                                <div className="card card2"  onClick={() => { window.location.hash = `?content=${encodeURIComponent('تطوير آليات محاربة الفساد وتعزيز النزاهة في مؤسسات الدولة')}` }}>
                                    <h2 style={{textAlign:"center"}}>تطوير آليات محاربة الفساد وتعزيز النزاهة في مؤسسات الدولة</h2>
                                </div>
                            </div>

                            <h1 style={{textAlign: "center", fontSize: "30px", color: "#007a18", marginTop: "40px"}}>تشجيع الاستثمار

                            </h1>

                            <div className="cards1 cards">
                                <div className="card card2"  onClick={() => { window.location.hash = `?content=${encodeURIComponent('العمل على تعديل قانون الإدارة المحلية ليكون قانونا عصريا يراعي الوضع السوري و يعطي دور أكبر للإدارات المحلية')}` }}>
                                    <h2 style={{textAlign:"center"}}>العمل على تعديل قانون الإدارة المحلية ليكون قانونا عصريا يراعي الوضع السوري و يعطي دور أكبر للإدارات المحلية</h2>
                                </div>
                                <div className="card card2"  onClick={() => { window.location.hash = `?content=${encodeURIComponent('نقل الصلاحيات والموارد من المركز إلى السلطات المحلية')}` }}>
                                    <h2 style={{textAlign:"center"}}>نقل الصلاحيات والموارد من المركز إلى السلطات المحلية</h2>
                                </div>
                                <div className="card card2"  onClick={() => { window.location.hash = `?content=${encodeURIComponent('تطوير آليات محاربة الفساد وتعزيز النزاهة في مؤسسات الدولة')}` }}>
                                    <h2 style={{textAlign:"center"}}>تطوير آليات محاربة الفساد وتعزيز النزاهة في مؤسسات الدولة</h2>
                                </div>
                            </div>



                            <h1 style={{textAlign: "center", fontSize: "30px", color: "#007a18", marginTop: "40px"}}>تحفيز سوق العمل

                            </h1>

                            <div className="cards1 cards">
                                <div className="card card2"  onClick={() => { window.location.hash = `?content=${encodeURIComponent('العمل على تعديل قانون الإدارة المحلية ليكون قانونا عصريا يراعي الوضع السوري و يعطي دور أكبر للإدارات المحلية')}` }}>
                                    <h2 style={{textAlign:"center"}}>العمل على تعديل قانون الإدارة المحلية ليكون قانونا عصريا يراعي الوضع السوري و يعطي دور أكبر للإدارات المحلية</h2>
                                </div>
                                <div className="card card2"  onClick={() => { window.location.hash = `?content=${encodeURIComponent('نقل الصلاحيات والموارد من المركز إلى السلطات المحلية')}` }}>
                                    <h2 style={{textAlign:"center"}}>نقل الصلاحيات والموارد من المركز إلى السلطات المحلية</h2>
                                </div>
                                <div className="card card2"  onClick={() => { window.location.hash = `?content=${encodeURIComponent('تطوير آليات محاربة الفساد وتعزيز النزاهة في مؤسسات الدولة')}` }}>
                                    <h2 style={{textAlign:"center"}}>تطوير آليات محاربة الفساد وتعزيز النزاهة في مؤسسات الدولة</h2>
                                </div>
                            </div>

                            <h1 style={{textAlign: "center", fontSize: "30px", color: "#007a18", marginTop: "40px"}}>إصلاح النظام المالي


                            </h1>

                            <div className="cards1 cards">
                                <div className="card card2"  onClick={() => { window.location.hash = `?content=${encodeURIComponent('')}` }}>
                                    <h2 style={{textAlign:"center"}}>العمل على تعديل قانون الإدارة المحلية ليكون قانونا عصريا يراعي الوضع السوري و يعطي دور أكبر للإدارات المحلية</h2>
                                </div>
                                <div className="card card2"  onClick={() => { window.location.hash = `?content=${encodeURIComponent('نقل الصلاحيات والموارد من المركز إلى السلطات المحلية')}` }}>
                                    <h2 style={{textAlign:"center"}}>نقل الصلاحيات والموارد من المركز إلى السلطات المحلية</h2>
                                </div>
                                <div className="card card2"  onClick={() => { window.location.hash = `?content=${encodeURIComponent('تطوير آليات محاربة الفساد وتعزيز النزاهة في مؤسسات الدولة')}` }}>
                                    <h2 style={{textAlign:"center"}}>تطوير آليات محاربة الفساد وتعزيز النزاهة في مؤسسات الدولة</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section6">
                        <div className="section6-content" style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
                            <h1 style={{ marginTop: "40px"}}> المنجزات والخبرات العملية والمجتمعيّة
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
