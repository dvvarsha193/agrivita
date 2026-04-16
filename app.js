const T = {
  en:{
    nav_home:'Home',nav_calendar:'Crop Calendar',nav_suggest:'Crop Suggestion',
    nav_weather:'Weather',nav_market:'Mandi Prices',nav_schemes:'Govt Schemes',
    nav_chatbot:'AI Chatbot',nav_connect:'Farmer Connect',nav_cold:'Cold Storage',
    nav_about:'About',nav_contact:'Contact',
    hero_badge:'Smart Agriculture Platform for India',
    hero_h1:'Grow Smarter.',hero_h1_em:'Farm Better.',
    hero_desc:'AgriVita connects Indian farmers with AI crop advice, real-time weather alerts, live mandi prices, government scheme guidance, and farmer-to-farmer exchange — all in one platform.',
    hero_btn1:'Explore Features →',hero_btn2:'🤝 Farmer Connect',
    stat1:'Farmers Connected',stat2:'Crop Varieties',stat3:'States Covered',stat4:'Satisfaction',
    cal_tag:'Feature 01',cal_title:'Crop Calendar',cal_sub:'Select a month to see which crops to sow in India.',
    sug_tag:'Feature 02',sug_title:'Smart Crop Suggestion',sug_sub:'Enter your soil, season, and water info to get crop recommendations.',
    sug_soil:'Soil Type *',sug_season:'Season *',sug_state:'State',sug_water:'Water Availability',
    sug_btn:'Get Suggestions →',sug_result:'Recommended Crops',
    wt_tag:'Feature 03',wt_title:'Weather Intelligence',wt_sub:'Hyperlocal farm-specific weather advisories.',
    mk_tag:'Feature 04',mk_title:'Live Mandi Prices',mk_sub:"Today's wholesale market rates. Location-based. Updated daily.",
    mk_filter:'Filter by State:',
    sc_tag:'Feature 05',sc_title:'Government Schemes',sc_sub:'Central and state agricultural support programs.',
    cb_tag:'Feature 06',cb_title:'AI Agri Chatbot 🤖',cb_sub:'Ask anything about crops, diseases, fertilisers, or schemes.',
    cb_name:'AgriBot – Your Farming Assistant',cb_info:'AI · 24/7 · Camera + Voice · 6 Languages',
    cb_out_label:'Output Language:',
    fc_tag:'Feature 07',fc_title:'Farmer–Farmer Connect 🤝',fc_sub:'Exchange crops, pesticides, fertilizers and equipment with nearby farmers.',
    fc_post_h:'Post a Request / Offer',fc_post_p:'Tell nearby farmers what you need or what you can share.',
    fc_offer:"✅ I'm Offering",fc_need:'🆘 Urgent Need',
    fc_cat:'Category',fc_item:'What are you offering / need?',
    fc_district:'Your District',fc_name:'Your Name',fc_phone:'Contact (Phone / WhatsApp)',
    fc_details:'Details (optional)',fc_post_btn:'Post Now →',
    cs_tag:'Feature 08',cs_title:'Cold Storage Finder 🧊',cs_sub:'Find cold storage units near you to store unsold produce and reduce wastage.',
    ab_tag:'About AgriVita',ab_title:'Built for Indian Farmers, By Indian Students',
    ab_desc:'AgriVita is a B.Tech 2nd Year CSE project. Every farmer deserves access to the same tools that large agribusinesses use.',
    ct_tag:'Contact Us',ct_title:'Get in Touch',ct_sub:'Have questions? Reach out in any language!',
    ct_name:'Full Name',ct_phone:'Phone / WhatsApp',ct_state:'State / District',ct_msg:'Message',ct_btn:'Send Message →',
    logout:'Logout'
  },
  hi:{
    nav_home:'होम',nav_calendar:'फसल कैलेंडर',nav_suggest:'फसल सुझाव',
    nav_weather:'मौसम',nav_market:'मंडी भाव',nav_schemes:'सरकारी योजनाएं',
    nav_chatbot:'AI चैटबॉट',nav_connect:'किसान कनेक्ट',nav_cold:'कोल्ड स्टोरेज',
    nav_about:'जानकारी',nav_contact:'संपर्क',
    hero_badge:'भारत का स्मार्ट कृषि प्लेटफ़ॉर्म',
    hero_h1:'समझदारी से उगाएं।',hero_h1_em:'बेहतर खेती करें।',
    hero_desc:'AgriVita भारतीय किसानों को AI फसल सलाह, मौसम अलर्ट, मंडी भाव, सरकारी योजनाओं और किसान-से-किसान नेटवर्क से जोड़ता है।',
    hero_btn1:'सुविधाएं देखें →',hero_btn2:'🤝 किसान कनेक्ट',
    stat1:'जुड़े किसान',stat2:'फसल किस्में',stat3:'राज्य',stat4:'संतुष्टि',
    cal_tag:'सुविधा 01',cal_title:'फसल कैलेंडर',cal_sub:'महीना चुनें और जानें कौन सी फसल बोएं।',
    sug_tag:'सुविधा 02',sug_title:'स्मार्ट फसल सुझाव',sug_sub:'मिट्टी, मौसम और पानी दर्ज करें।',
    sug_soil:'मिट्टी का प्रकार *',sug_season:'मौसम *',sug_state:'राज्य',sug_water:'पानी की उपलब्धता',
    sug_btn:'फसल सुझाव पाएं →',sug_result:'अनुशंसित फसलें',
    wt_tag:'सुविधा 03',wt_title:'मौसम जानकारी',wt_sub:'स्थानीय खेत-विशिष्ट मौसम सलाह।',
    mk_tag:'सुविधा 04',mk_title:'लाइव मंडी भाव',mk_sub:'आज के थोक बाजार के भाव। लोकेशन के आधार पर।',
    mk_filter:'राज्य फ़िल्टर:',
    sc_tag:'सुविधा 05',sc_title:'सरकारी योजनाएं',sc_sub:'केंद्रीय और राज्य कृषि सहायता कार्यक्रम।',
    cb_tag:'सुविधा 06',cb_title:'AI कृषि चैटबॉट 🤖',cb_sub:'फसल, रोग, खाद या योजनाओं के बारे में पूछें।',
    cb_name:'AgriBot – आपका कृषि सहायक',cb_info:'AI · 24/7 · कैमरा + वॉयस · 6 भाषाएं',
    cb_out_label:'आउटपुट भाषा:',
    fc_tag:'सुविधा 07',fc_title:'किसान–किसान कनेक्ट 🤝',fc_sub:'पास के किसानों से फसल, खाद और उपकरण साझा करें।',
    fc_post_h:'अनुरोध / प्रस्ताव पोस्ट करें',fc_post_p:'बताएं आप क्या ऑफर कर रहे हैं या क्या चाहिए।',
    fc_offer:'✅ मैं दे रहा हूं',fc_need:'🆘 तुरंत चाहिए',
    fc_cat:'श्रेणी',fc_item:'क्या दे रहे हैं / चाहिए?',
    fc_district:'आपका जिला',fc_name:'आपका नाम',fc_phone:'फ़ोन / WhatsApp',
    fc_details:'विवरण (वैकल्पिक)',fc_post_btn:'पोस्ट करें →',
    cs_tag:'सुविधा 08',cs_title:'कोल्ड स्टोरेज खोजें 🧊',cs_sub:'पास के कोल्ड स्टोरेज खोजें और बची हुई फसल स्टोर करें।',
    ab_tag:'AgriVita के बारे में',ab_title:'भारतीय किसानों के लिए, छात्रों द्वारा',
    ab_desc:'AgriVita एक B.Tech 2nd Year CSE प्रोजेक्ट है। हर किसान को बड़े कारोबारियों जैसे टूल्स मिलें — यही हमारा लक्ष्य है।',
    ct_tag:'संपर्क',ct_title:'संपर्क करें',ct_sub:'कोई सवाल? किसी भी भाषा में पूछें!',
    ct_name:'पूरा नाम',ct_phone:'फ़ोन / WhatsApp',ct_state:'राज्य / जिला',ct_msg:'संदेश',ct_btn:'संदेश भेजें →',
    logout:'लॉगआउट'
  },
  te:{
    nav_home:'హోమ్',nav_calendar:'పంట క్యాలెండర్',nav_suggest:'పంట సూచన',nav_weather:'వాతావరణం',nav_market:'మండి ధరలు',nav_schemes:'పథకాలు',nav_chatbot:'AI చాట్‌బాట్',nav_connect:'రైతు కనెక్ట్',nav_cold:'కోల్డ్ స్టోరేజ్',nav_about:'గురించి',nav_contact:'సంప్రదించండి',
    hero_badge:'భారత స్మార్ట్ వ్యవసాయ వేదిక',hero_h1:'తెలివిగా పెంచండి.',hero_h1_em:'మెరుగ్గా వ్యవసాయం.',
    hero_desc:'AgriVita భారత రైతులను AI పంట సలహా, వాతావరణ హెచ్చరికలు, మండి ధరలు మరియు ప్రభుత్వ పథకాలతో అనుసంధానిస్తుంది.',
    hero_btn1:'లక్షణాలు చూడండి →',hero_btn2:'🤝 రైతు కనెక్ట్',
    stat1:'అనుసంధానిత రైతులు',stat2:'పంట రకాలు',stat3:'రాష్ట్రాలు',stat4:'సంతృప్తి',
    cal_tag:'లక్షణం 01',cal_title:'పంట క్యాలెండర్',cal_sub:'నెల ఎంచుకుని ఏ పంట వేయాలో తెలుసుకోండి.',
    sug_tag:'లక్షణం 02',sug_title:'స్మార్ట్ పంట సూచన',sug_sub:'మట్టి, సీజన్ మరియు నీటి సమాచారం నమోదు చేయండి.',
    sug_soil:'మట్టి రకం *',sug_season:'సీజన్ *',sug_state:'రాష్ట్రం',sug_water:'నీటి లభ్యత',
    sug_btn:'సూచనలు పొందండి →',sug_result:'సిఫార్సు పంటలు',
    wt_tag:'లక్షణం 03',wt_title:'వాతావరణ సమాచారం',wt_sub:'స్థానిక వ్యవసాయ-నిర్దిష్ట వాతావరణ సలహాలు.',
    mk_tag:'లక్షణం 04',mk_title:'లైవ్ మండి ధరలు',mk_sub:'నేటి మార్కెట్ ధరలు. లొకేషన్ ఆధారంగా.',mk_filter:'రాష్ట్రం వడపోత:',
    sc_tag:'లక్షణం 05',sc_title:'ప్రభుత్వ పథకాలు',sc_sub:'కేంద్ర మరియు రాష్ట్ర వ్యవసాయ మద్దతు కార్యక్రమాలు.',
    cb_tag:'లక్షణం 06',cb_title:'AI వ్యవసాయ చాట్‌బాట్ 🤖',cb_sub:'పంటలు, వ్యాధులు, ఎరువులు లేదా పథకాల గురించి అడగండి.',
    cb_name:'AgriBot – మీ వ్యవసాయ సహాయకుడు',cb_info:'AI · 24/7 · కెమెరా + వాయిస్ · 6 భాషలు',cb_out_label:'అవుట్‌పుట్ భాష:',
    fc_tag:'లక్షణం 07',fc_title:'రైతు–రైతు కనెక్ట్ 🤝',fc_sub:'దగ్గరలోని రైతులతో పంటలు, ఎరువులు మరియు పరికరాలు పంచుకోండి.',
    fc_post_h:'అభ్యర్థన / ఆఫర్ పోస్ట్ చేయండి',fc_post_p:'మీరు ఏమి అందిస్తున్నారో లేదా ఏమి కావాలో చెప్పండి.',
    fc_offer:'✅ నేను ఇస్తున్నాను',fc_need:'🆘 అత్యవసరం',fc_cat:'వర్గం',fc_item:'ఏమి ఇస్తున్నారు / కావాలి?',
    fc_district:'మీ జిల్లా',fc_name:'మీ పేరు',fc_phone:'ఫోన్ / WhatsApp',fc_details:'వివరాలు (ఐచ్ఛికం)',fc_post_btn:'పోస్ట్ చేయండి →',
    cs_tag:'లక్షణం 08',cs_title:'కోల్డ్ స్టోరేజ్ వెతకండి 🧊',cs_sub:'దగ్గరలోని కోల్డ్ స్టోరేజ్ వెతికి మిగిలిన పంట నిల్వ చేయండి.',
    ab_tag:'AgriVita గురించి',ab_title:'భారత రైతుల కోసం, విద్యార్థులచే',ab_desc:'AgriVita ఒక B.Tech 2nd Year CSE ప్రాజెక్ట్.',
    ct_tag:'సంప్రదించండి',ct_title:'సంప్రదించండి',ct_sub:'ప్రశ్నలు ఉన్నాయా? ఏ భాషలో అయినా అడగండి!',
    ct_name:'పూర్తి పేరు',ct_phone:'ఫోన్ / WhatsApp',ct_state:'రాష్ట్రం / జిల్లా',ct_msg:'సందేశం',ct_btn:'సందేశం పంపండి →',logout:'లాగ్అవుట్'
  },
  kn:{
    nav_home:'ಮುಖಪುಟ',nav_calendar:'ಬೆಳೆ ಕ್ಯಾಲೆಂಡರ್',nav_suggest:'ಬೆಳೆ ಸಲಹೆ',nav_weather:'ಹವಾಮಾನ',nav_market:'ಮಂಡಿ ಬೆಲೆ',nav_schemes:'ಯೋಜನೆಗಳು',nav_chatbot:'AI ಚಾಟ್‌ಬಾಟ್',nav_connect:'ರೈತ ಕನೆಕ್ಟ್',nav_cold:'ಕೋಲ್ಡ್ ಸ್ಟೋರೇಜ್',nav_about:'ಬಗ್ಗೆ',nav_contact:'ಸಂಪರ್ಕ',
    hero_badge:'ಭಾರತದ ಸ್ಮಾರ್ಟ್ ಕೃಷಿ ವೇದಿಕೆ',hero_h1:'ಜಾಣತನದಿಂದ ಬೆಳೆಯಿರಿ.',hero_h1_em:'ಉತ್ತಮ ಕೃಷಿ ಮಾಡಿ.',
    hero_desc:'AgriVita ರೈತರನ್ನು AI ಬೆಳೆ ಸಲಹೆ, ಹವಾಮಾನ ಎಚ್ಚರಿಕೆಗಳು, ಮಂಡಿ ಬೆಲೆಗಳು ಮತ್ತು ಸರ್ಕಾರಿ ಯೋಜನೆಗಳೊಂದಿಗೆ ಸಂಪರ್ಕಿಸುತ್ತದೆ.',
    hero_btn1:'ವೈಶಿಷ್ಟ್ಯಗಳನ್ನು ಅನ್ವೇಷಿಸಿ →',hero_btn2:'🤝 ರೈತ ಕನೆಕ್ಟ್',
    stat1:'ಸಂಪರ್ಕಿತ ರೈತರು',stat2:'ಬೆಳೆ ಪ್ರಕಾರಗಳು',stat3:'ರಾಜ್ಯಗಳು',stat4:'ತೃಪ್ತಿ',
    cal_tag:'ಲಕ್ಷಣ 01',cal_title:'ಬೆಳೆ ಕ್ಯಾಲೆಂಡರ್',cal_sub:'ತಿಂಗಳು ಆಯ್ಕೆ ಮಾಡಿ ಏನು ಬಿತ್ತಬೇಕೆಂದು ತಿಳಿಯಿರಿ.',
    sug_tag:'ಲಕ್ಷಣ 02',sug_title:'ಸ್ಮಾರ್ಟ್ ಬೆಳೆ ಸಲಹೆ',sug_sub:'ಮಣ್ಣು, ಋತು ಮತ್ತು ನೀರಿನ ಮಾಹಿತಿ ನಮೂದಿಸಿ.',
    sug_soil:'ಮಣ್ಣಿನ ಪ್ರಕಾರ *',sug_season:'ಋತು *',sug_state:'ರಾಜ್ಯ',sug_water:'ನೀರಿನ ಲಭ್ಯತೆ',
    sug_btn:'ಸಲಹೆ ಪಡೆಯಿರಿ →',sug_result:'ಶಿಫಾರಸು ಬೆಳೆಗಳು',
    wt_tag:'ಲಕ್ಷಣ 03',wt_title:'ಹವಾಮಾನ ಮಾಹಿತಿ',wt_sub:'ಸ್ಥಳೀಯ ಕ್ಷೇತ್ರ-ನಿರ್ದಿಷ್ಟ ಹವಾಮಾನ ಸಲಹೆ.',
    mk_tag:'ಲಕ್ಷಣ 04',mk_title:'ಲೈವ್ ಮಂಡಿ ಬೆಲೆ',mk_sub:'ನೇಡಿನ ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳು.',mk_filter:'ರಾಜ್ಯ ಫಿಲ್ಟರ್:',
    sc_tag:'ಲಕ್ಷಣ 05',sc_title:'ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು',sc_sub:'ಕೇಂದ್ರ ಮತ್ತು ರಾಜ್ಯ ಕೃಷಿ ಮದ್ದತು ಕಾರ್ಯಕ್ರಮಗಳು.',
    cb_tag:'ಲಕ್ಷಣ 06',cb_title:'AI ಕೃಷಿ ಚಾಟ್‌ಬಾಟ್ 🤖',cb_sub:'ಬೆಳೆಗಳು, ರೋಗಗಳು, ಗೊಬ್ಬರ ಅಥವಾ ಯೋಜನೆಗಳ ಬಗ್ಗೆ ಕೇಳಿ.',
    cb_name:'AgriBot – ನಿಮ್ಮ ಸಹಾಯಕ',cb_info:'AI · 24/7 · ಕ್ಯಾಮೆರಾ + ವಾಯ್ಸ್ · 6 ಭಾಷೆ',cb_out_label:'ಔಟ್‌ಪುಟ್ ಭಾಷೆ:',
    fc_tag:'ಲಕ್ಷಣ 07',fc_title:'ರೈತ–ರೈತ ಕನೆಕ್ಟ್ 🤝',fc_sub:'ಹತ್ತಿರದ ರೈತರೊಂದಿಗೆ ಬೆಳೆ, ಗೊಬ್ಬರ ಮತ್ತು ಸಲಕರಣೆ ಹಂಚಿಕೊಳ್ಳಿ.',
    fc_post_h:'ವಿನಂತಿ / ಆಫರ್ ಪೋಸ್ಟ್ ಮಾಡಿ',fc_post_p:'ನೀವು ಏನು ನೀಡುತ್ತಿದ್ದೀರಿ ಅಥವಾ ಏನು ಬೇಕು ಎಂದು ತಿಳಿಸಿ.',
    fc_offer:'✅ ನಾನು ನೀಡುತ್ತಿದ್ದೇನೆ',fc_need:'🆘 ತಕ್ಷಣ ಬೇಕು',fc_cat:'ವರ್ಗ',fc_item:'ಏನು ನೀಡುತ್ತಿದ್ದೀರಿ / ಬೇಕು?',
    fc_district:'ನಿಮ್ಮ ಜಿಲ್ಲೆ',fc_name:'ನಿಮ್ಮ ಹೆಸರು',fc_phone:'ಫೋನ್ / WhatsApp',fc_details:'ವಿವರಗಳು (ಐಚ್ಛಿಕ)',fc_post_btn:'ಪೋಸ್ಟ್ ಮಾಡಿ →',
    cs_tag:'ಲಕ್ಷಣ 08',cs_title:'ಕೋಲ್ಡ್ ಸ್ಟೋರೇಜ್ ಹುಡುಕಿ 🧊',cs_sub:'ಹತ್ತಿರದ ಕೋಲ್ಡ್ ಸ್ಟೋರೇಜ್ ಹುಡುಕಿ ಮಿಕ್ಕ ಬೆಳೆ ಸಂಗ್ರಹಿಸಿ.',
    ab_tag:'AgriVita ಬಗ್ಗೆ',ab_title:'ಭಾರತೀಯ ರೈತರಿಗಾಗಿ, ವಿದ್ಯಾರ್ಥಿಗಳಿಂದ',ab_desc:'AgriVita B.Tech 2nd Year CSE ಯೋಜನೆ.',
    ct_tag:'ಸಂಪರ್ಕ',ct_title:'ಸಂಪರ್ಕಿಸಿ',ct_sub:'ಪ್ರಶ್ನೆಗಳಿವೆಯೇ? ಯಾವ ಭಾಷೆಯಲ್ಲಾದರೂ ಕೇಳಿ!',
    ct_name:'ಪೂರ್ಣ ಹೆಸರು',ct_phone:'ಫೋನ್ / WhatsApp',ct_state:'ರಾಜ್ಯ / ಜಿಲ್ಲೆ',ct_msg:'ಸಂದೇಶ',ct_btn:'ಸಂದೇಶ ಕಳುಹಿಸಿ →',logout:'ಲಾಗ್‌ಔಟ್'
  },
  ta:{
    nav_home:'முகப்பு',nav_calendar:'பயிர் நாட்காட்டி',nav_suggest:'பயிர் பரிந்துரை',nav_weather:'வானிலை',nav_market:'மண்டி விலை',nav_schemes:'திட்டங்கள்',nav_chatbot:'AI சாட்போட்',nav_connect:'விவசாயி இணைப்பு',nav_cold:'குளிர் கிடங்கு',nav_about:'பற்றி',nav_contact:'தொடர்பு',
    hero_badge:'இந்தியாவின் ஸ்மார்ட் விவசாய தளம்',hero_h1:'புத்திசாலியாக வளர்க்கவும்.',hero_h1_em:'சிறப்பாக விவசாயம் செய்யுங்கள்.',
    hero_desc:'AgriVita இந்திய விவசாயிகளை AI பயிர் ஆலோசனை, வானிலை எச்சரிக்கை, மண்டி விலைகள் மற்றும் அரசாங்க திட்டங்களுடன் இணைக்கிறது.',
    hero_btn1:'அம்சங்களை காணுங்கள் →',hero_btn2:'🤝 விவசாயி இணைப்பு',
    stat1:'இணைந்த விவசாயிகள்',stat2:'பயிர் வகைகள்',stat3:'மாநிலங்கள்',stat4:'திருப்தி',
    cal_tag:'அம்சம் 01',cal_title:'பயிர் நாட்காட்டி',cal_sub:'மாதத்தை தேர்ந்தெடுத்து என்ன பயிர் விதைக்கணும் என அறியுங்கள்.',
    sug_tag:'அம்சம் 02',sug_title:'ஸ்மார்ட் பயிர் பரிந்துரை',sug_sub:'மண், பருவம் மற்றும் நீர் தகவல்களை உள்ளிடுங்கள்.',
    sug_soil:'மண் வகை *',sug_season:'பருவகாலம் *',sug_state:'மாநிலம்',sug_water:'நீர் கிடைக்கும் தன்மை',
    sug_btn:'பரிந்துரைகள் பெறுங்கள் →',sug_result:'பரிந்துரைக்கப்பட்ட பயிர்கள்',
    wt_tag:'அம்சம் 03',wt_title:'வானிலை தகவல்',wt_sub:'உள்ளூர் பண்ணை-குறிப்பிட்ட வானிலை ஆலோசனைகள்.',
    mk_tag:'அம்சம் 04',mk_title:'நேரடி மண்டி விலைகள்',mk_sub:'இன்றைய சந்தை விலைகள். இடம் சார்ந்தது.',mk_filter:'மாநிலம் வடிகட்டவும்:',
    sc_tag:'அம்சம் 05',sc_title:'அரசாங்க திட்டங்கள்',sc_sub:'மத்திய மற்றும் மாநில விவசாய ஆதரவு திட்டங்கள்.',
    cb_tag:'அம்சம் 06',cb_title:'AI விவசாய சாட்போட் 🤖',cb_sub:'பயிர்கள், நோய்கள், உரங்கள் அல்லது திட்டங்களைப் பற்றி கேளுங்கள்.',
    cb_name:'AgriBot – உங்கள் சேவையாளர்',cb_info:'AI · 24/7 · கேமரா + குரல் · 6 மொழிகள்',cb_out_label:'வெளியீட்டு மொழி:',
    fc_tag:'அம்சம் 07',fc_title:'விவசாயி–விவசாயி இணைப்பு 🤝',fc_sub:'அருகிலுள்ள விவசாயிகளுடன் பயிர்கள், உரங்கள் மற்றும் கருவிகள் பகிர்ந்து கொள்ளுங்கள்.',
    fc_post_h:'கோரிக்கை / சலுகை இடுங்கள்',fc_post_p:'நீங்கள் என்ன வழங்குகிறீர்கள் அல்லது என்ன வேண்டும் என்று சொல்லுங்கள்.',
    fc_offer:'✅ நான் வழங்குகிறேன்',fc_need:'🆘 அவசரமாக வேண்டும்',fc_cat:'வகை',fc_item:'என்ன வழங்குகிறீர்கள் / வேண்டும்?',
    fc_district:'உங்கள் மாவட்டம்',fc_name:'உங்கள் பெயர்',fc_phone:'தொலைபேசி / WhatsApp',fc_details:'விவரங்கள் (விருப்பத்திற்கு)',fc_post_btn:'இடுங்கள் →',
    cs_tag:'அம்சம் 08',cs_title:'குளிர் கிடங்கு தேடுங்கள் 🧊',cs_sub:'அருகிலுள்ள குளிர் கிடங்குகளை கண்டுபிடித்து மீதமுள்ள பயிரை சேமியுங்கள்.',
    ab_tag:'AgriVita பற்றி',ab_title:'இந்திய விவசாயிகளுக்காக, மாணவர்களால்',ab_desc:'AgriVita B.Tech 2nd Year CSE திட்டம்.',
    ct_tag:'தொடர்பு',ct_title:'தொடர்பு கொள்ளுங்கள்',ct_sub:'கேள்விகள் உள்ளதா? எந்த மொழியிலும் கேளுங்கள்!',
    ct_name:'முழு பெயர்',ct_phone:'தொலைபேசி / WhatsApp',ct_state:'மாநிலம் / மாவட்டம்',ct_msg:'செய்தி',ct_btn:'செய்தி அனுப்பு →',logout:'வெளியேறு'
  },
  ml:{
    nav_home:'ഹോം',nav_calendar:'വിള കലണ്ടർ',nav_suggest:'വിള നിർദ്ദേശം',nav_weather:'കാലാവസ്ഥ',nav_market:'മണ്ഡി വില',nav_schemes:'പദ്ധതികൾ',nav_chatbot:'AI ചാറ്റ്ബോട്ട്',nav_connect:'കർഷക കണക്ട്',nav_cold:'ശീതള സംഭരണം',nav_about:'ഞങ്ങളെക്കുറിച്ച്',nav_contact:'ബന്ധപ്പെടുക',
    hero_badge:'ഭാരതത്തിന്റെ സ്മാർട്ട് കൃഷി പ്ലാറ്റ്ഫോം',hero_h1:'ബുദ്ധിപൂർവ്വം വളർത്തൂ.',hero_h1_em:'മികച്ച കൃഷി ചെയ്യൂ.',
    hero_desc:'AgriVita ഇന്ത്യൻ കർഷകരെ AI വിള ഉപദേശം, കാലാവസ്ഥ മുന്നറിയിപ്പ്, മണ്ഡി വിലകൾ, സർക്കാർ പദ്ധതികൾ എന്നിവയുമായി ബന്ധിപ്പിക്കുന്നു.',
    hero_btn1:'സവിശേഷതകൾ കാണൂ →',hero_btn2:'🤝 കർഷക കണക്ട്',
    stat1:'ബന്ധിതരായ കർഷകർ',stat2:'വിള ഇനങ്ങൾ',stat3:'സംസ്ഥാനങ്ങൾ',stat4:'സംതൃപ്തി',
    cal_tag:'ഫീച്ചർ 01',cal_title:'വിള കലണ്ടർ',cal_sub:'മാസം തിരഞ്ഞെടുത്ത് ഏത് വിള വിതയ്ക്കണം എന്ന് അറിയൂ.',
    sug_tag:'ഫീച്ചർ 02',sug_title:'സ്മാർട്ട് വിള നിർദ്ദേശം',sug_sub:'മണ്ണ്, സീസൺ, ജലം വിവരങ്ങൾ നൽകൂ.',
    sug_soil:'മണ്ണ് തരം *',sug_season:'സീസൺ *',sug_state:'സംസ്ഥാനം',sug_water:'ജലലഭ്യത',
    sug_btn:'നിർദ്ദേശങ്ങൾ ലഭിക്കൂ →',sug_result:'ശുപാർശ ചെയ്ത വിളകൾ',
    wt_tag:'ഫീച്ചർ 03',wt_title:'കാലാവസ്ഥ വിവരം',wt_sub:'പ്രാദേശിക കൃഷി-നിർദ്ദിഷ്ട കാലാവസ്ഥ ഉപദേശം.',
    mk_tag:'ഫീച്ചർ 04',mk_title:'ലൈവ് മണ്ഡി വിലകൾ',mk_sub:'ഇന്നത്തെ വിപണി വിലകൾ. സ്ഥാന-അടിസ്ഥാനം.',mk_filter:'സംസ്ഥാനം ഫിൽട്ടർ:',
    sc_tag:'ഫീച്ചർ 05',sc_title:'സർക്കാർ പദ്ധതികൾ',sc_sub:'കേന്ദ്ര, സംസ്ഥാന കൃഷി സഹായ പദ്ധതികൾ.',
    cb_tag:'ഫീച്ചർ 06',cb_title:'AI കൃഷി ചാറ്റ്ബോട്ട് 🤖',cb_sub:'വിളകൾ, രോഗങ്ങൾ, വളങ്ങൾ അല്ലെങ്കിൽ പദ്ധതികളെക്കുറിച്ച് ചോദിക്കൂ.',
    cb_name:'AgriBot – നിങ്ങളുടെ സഹായി',cb_info:'AI · 24/7 · ക്യാമറ + വോയ്സ് · 6 ഭാഷ',cb_out_label:'ഔട്ട്‌പുട്ട് ഭാഷ:',
    fc_tag:'ഫീച്ചർ 07',fc_title:'കർഷക–കർഷക കണക്ട് 🤝',fc_sub:'അടുത്ത കർഷകരുമായി വിള, വളം, ഉപകരണങ്ങൾ പങ്കുവക്കൂ.',
    fc_post_h:'അഭ്യർത്ഥന / ഓഫർ പോസ്റ്റ് ചെയ്യൂ',fc_post_p:'നിങ്ങൾ എന്ത് നൽകുന്നു അല്ലെങ്കിൽ എന്ത് വേണം എന്ന് പറയൂ.',
    fc_offer:'✅ ഞാൻ നൽകുന്നു',fc_need:'🆘 അടിയന്തര ആവശ്യം',fc_cat:'വിഭാഗം',fc_item:'എന്ത് നൽകുന്നു / വേണം?',
    fc_district:'നിങ്ങളുടെ ജില്ല',fc_name:'നിങ്ങളുടെ പേര്',fc_phone:'ഫോൺ / WhatsApp',fc_details:'വിവരങ്ങൾ (ഐച്ഛികം)',fc_post_btn:'പോസ്റ്റ് ചെയ്യൂ →',
    cs_tag:'ഫീച്ചർ 08',cs_title:'ശീതള സംഭരണം കണ്ടെത്തൂ 🧊',cs_sub:'അടുത്ത ശീതള സംഭരണ ശാലകൾ കണ്ടെത്തി ബാക്കി വിള സൂക്ഷിക്കൂ.',
    ab_tag:'AgriVita നെക്കുറിച്ച്',ab_title:'ഭാരത കർഷകർക്കായി, വിദ്യാർത്ഥികൾ നിർമ്മിച്ചത്',ab_desc:'AgriVita B.Tech 2nd Year CSE പ്രോജക്ട്.',
    ct_tag:'ബന്ധപ്പെടുക',ct_title:'ബന്ധപ്പെടുക',ct_sub:'ചോദ്യങ്ങൾ ഉണ്ടോ? ഏതു ഭാഷയിലും ചോദിക്കൂ!',
    ct_name:'പൂർണ്ണ നാമം',ct_phone:'ഫോൺ / WhatsApp',ct_state:'സംസ്ഥാനം / ജില്ല',ct_msg:'സന്ദേശം',ct_btn:'സന്ദേശം അയക്കൂ →',logout:'ലോഗൗട്ട്'
  }
};

let currentLang = 'en';
function t(key){ return (T[currentLang]||T.en)[key] || T.en[key] || key; }

function applyTranslations(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k = el.getAttribute('data-i18n');
    if(k) el.textContent = t(k);
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
    const k = el.getAttribute('data-i18n-ph');
    if(k) el.placeholder = t(k);
  });
}

const LANG_INFO = {
  en:{flag:'🇬🇧',label:'EN'},hi:{flag:'🇮🇳',label:'HI'},
  te:{flag:'🌿',label:'TE'},kn:{flag:'🌻',label:'KN'},
  ta:{flag:'🌺',label:'TA'},ml:{flag:'🌴',label:'ML'}
};

function setLang(lang){
  currentLang = lang;
  document.querySelectorAll('.lang-menu button').forEach(b=>{
    b.classList.toggle('sel', b.dataset.lang===lang);
  });
  const info = LANG_INFO[lang];
  document.getElementById('langBtnText').textContent = `${info.flag} ${info.label} ▾`;
  document.getElementById('langMenu').classList.remove('open');
  applyTranslations();
  buildNav();
  renderHomeServices();
}

let currentUser = null;
let userLocation = null;
let detectedState = 'Punjab';
let loginMode = 'login';

function initLogin(){
  const saved = sessionStorage.getItem('agrivita_user');
  if(saved){ currentUser = JSON.parse(saved); showApp(); }
}

function switchLoginTab(mode){
  loginMode = mode;
  document.getElementById('tabLogin').classList.toggle('active', mode==='login');
  document.getElementById('tabReg').classList.toggle('active', mode==='register');
  document.getElementById('loginForm').classList.toggle('hidden', mode!=='login');
  document.getElementById('registerForm').classList.toggle('hidden', mode!=='register');
  document.getElementById('loginErr').style.display='none';
}

function requestLocation(){
  const btn = document.getElementById('locBtn');
  const status = document.getElementById('locStatus');
  btn.textContent = 'Detecting...';
  if(!navigator.geolocation){ status.textContent='Geolocation not supported.'; return; }
  navigator.geolocation.getCurrentPosition(
    pos => {
      userLocation = {lat:pos.coords.latitude, lng:pos.coords.longitude};
      btn.textContent = '✅ Location Granted';
      btn.style.background = 'rgba(163,230,53,0.15)';
      detectStateFromCoords(userLocation);
    },
    () => { status.textContent = 'Permission denied. You can still use the app.'; }
  );
}

function detectStateFromCoords(loc){
  const {lat,lng} = loc;
  let state = 'Punjab';
  if(lat>28&&lat<32&&lng>73&&lng<77) state='Punjab';
  else if(lat>27&&lat<31&&lng>74&&lng<78) state='Haryana';
  else if(lat>24&&lat<31&&lng>77&&lng<84) state='Uttar Pradesh';
  else if(lat>17&&lat<22&&lng>72&&lng<81) state='Maharashtra';
  else if(lat>8&&lat<14&&lng>77&&lng<80) state='Tamil Nadu';
  else if(lat>12&&lat<18&&lng>74&&lng<81) state='Andhra Pradesh';
  else if(lat>11&&lat<18&&lng>74&&lng<78) state='Karnataka';
  else if(lat>24&&lat<30&&lng>69&&lng<78) state='Rajasthan';
  else if(lat>21&&lat<26&&lng>74&&lng<82) state='Madhya Pradesh';
  else if(lat>20&&lat<24&&lng>68&&lng<74) state='Gujarat';
  else if(lat>21&&lat<24&&lng>86&&lng<89) state='West Bengal';
  else if(lat>24&&lat<28&&lng>82&&lng<88) state='Bihar';
  else if(lat>8&&lat<12&&lng>74&&lng<77) state='Kerala';
  else if(lat>17&&lat<20&&lng>78&&lng<81) state='Telangana';
  detectedState = state;
  document.getElementById('locStatus').textContent = `✅ Detected: ${state}`;
}

function showErr(msg){ const e=document.getElementById('loginErr'); e.textContent=msg; e.style.display='block'; }

function doLogin(){
  const u = document.getElementById('loginUser').value.trim();
  const p = document.getElementById('loginPass').value.trim();
  if(!u||!p){ showErr('Please enter username and password.'); return; }
  const users = JSON.parse(localStorage.getItem('agrivita_users')||'[]');
  const user = users.find(x=>x.username===u&&x.password===p);
  if(user){ currentUser=user; sessionStorage.setItem('agrivita_user',JSON.stringify(user)); showApp(); }
  else showErr('Invalid credentials. Please register first.');
}

function doRegister(){
  const u=document.getElementById('regUser').value.trim();
  const p=document.getElementById('regPass').value.trim();
  const e=document.getElementById('regEmail').value.trim();
  const m=document.getElementById('regMobile').value.trim();
  if(!u||!p||!e||!m){ showErr('Please fill all required fields.'); return; }
  if(!/^\d{10}$/.test(m)){ showErr('Please enter a valid 10-digit mobile number.'); return; }
  const users=JSON.parse(localStorage.getItem('agrivita_users')||'[]');
  if(users.find(x=>x.username===u)){ showErr('Username already taken.'); return; }
  const newUser={username:u,password:p,email:e,mobile:m,location:userLocation,state:detectedState};
  users.push(newUser);
  localStorage.setItem('agrivita_users',JSON.stringify(users));
  currentUser=newUser;
  sessionStorage.setItem('agrivita_user',JSON.stringify(newUser));
  showApp();
}

function showApp(){
  document.getElementById('login-overlay').classList.add('hidden');
  document.getElementById('main-app').classList.remove('hidden');
  document.getElementById('userAvatar').textContent=(currentUser.username||'U')[0].toUpperCase();
  document.getElementById('userName').textContent=currentUser.username;
  if(currentUser.state) detectedState=currentUser.state;
  initApp();
}

function doLogout(){
  sessionStorage.removeItem('agrivita_user');
  currentUser=null;
  document.getElementById('login-overlay').classList.remove('hidden');
  document.getElementById('main-app').classList.add('hidden');
  switchLoginTab('login');
  stopCamera();
}

let currentPage = 'home';

const PAGE_DEFS = [
  {id:'home',nav:'nav_home',icon:'🏠'},
  {id:'calendar',nav:'nav_calendar',icon:'📅'},
  {id:'suggest',nav:'nav_suggest',icon:'🌱'},
  {id:'weather',nav:'nav_weather',icon:'🌦️'},
  {id:'market',nav:'nav_market',icon:'📊'},
  {id:'schemes',nav:'nav_schemes',icon:'🏛️'},
  {id:'chatbot',nav:'nav_chatbot',icon:'🤖'},
  {id:'farmerconnect',nav:'nav_connect',icon:'🤝'},
  {id:'coldstorage',nav:'nav_cold',icon:'🧊'},
  {id:'about',nav:'nav_about',icon:'ℹ️'},
  {id:'contact',nav:'nav_contact',icon:'📞'},
];

function buildNav(){
  const dn = document.getElementById('desktopNav');
  const mn = document.getElementById('mobileNav');
  dn.innerHTML='';mn.innerHTML='';
  PAGE_DEFS.forEach(p=>{
    const b=document.createElement('button');
    b.className='nav-link'+(p.id===currentPage?' active':'');
    b.setAttribute('data-page',p.id);
    b.textContent=t(p.nav);
    b.onclick=()=>navigateTo(p.id);
    dn.appendChild(b);
    const mb=document.createElement('button');
    mb.className='nav-link';
    mb.textContent=`${p.icon} ${t(p.nav)}`;
    mb.onclick=()=>{navigateTo(p.id);closeMobileNav();};
    mn.appendChild(mb);
  });
}

function navigateTo(pageId){
  if(pageId===currentPage){closeMobileNav();return;}
  const oldPage=document.getElementById('page-'+currentPage);
  const newPage=document.getElementById('page-'+pageId);
  if(!newPage) return;
  oldPage.classList.remove('active');
  oldPage.classList.add('exit');
  setTimeout(()=>oldPage.classList.remove('exit'),300);
  newPage.classList.add('active');
  newPage.scrollTop=0;
  currentPage=pageId;
  document.querySelectorAll('.nav-link[data-page]').forEach(b=>{
    b.classList.toggle('active',b.dataset.page===pageId);
  });
  if(pageId==='market') updateMarketForLocation();
  if(pageId==='coldstorage') renderColdStorage();
  if(pageId==='weather') loadWeatherForLocation();
  closeMobileNav();
}

function toggleMobileNav(){
  document.getElementById('mobileNav').classList.toggle('open');
  document.getElementById('ham').classList.toggle('open');
}
function closeMobileNav(){
  document.getElementById('mobileNav').classList.remove('open');
  document.getElementById('ham').classList.remove('open');
}
function toggleLangMenu(){
  document.getElementById('langMenu').classList.toggle('open');
}
document.addEventListener('click',e=>{
  if(!e.target.closest('.lang-wrap')) document.getElementById('langMenu').classList.remove('open');
});

const HOME_SERVICES=[
  {page:'calendar',icon:'📅',lbl:'nav_calendar'},
  {page:'suggest',icon:'🌱',lbl:'nav_suggest'},
  {page:'weather',icon:'🌦️',lbl:'nav_weather'},
  {page:'market',icon:'📊',lbl:'nav_market'},
  {page:'schemes',icon:'🏛️',lbl:'nav_schemes'},
  {page:'chatbot',icon:'🤖',lbl:'nav_chatbot'},
  {page:'farmerconnect',icon:'🤝',lbl:'nav_connect'},
  {page:'coldstorage',icon:'🧊',lbl:'nav_cold'},
];
function renderHomeServices(){
  const g=document.getElementById('homeSvcGrid');
  if(!g) return;
  g.innerHTML=HOME_SERVICES.map(s=>`
    <div class="home-svc-card" onclick="navigateTo('${s.page}')">
      <div class="home-svc-icon">${s.icon}</div>
      <div class="home-svc-label">${t(s.lbl)}</div>
    </div>`).join('');
}

const MONTHS=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const CALENDAR={
  Jan:[{e:'🌾',n:'Wheat',i:'Rabi · Low water'},{e:'🧅',n:'Onion',i:'Rabi · Medium'},{e:'🥔',n:'Potato',i:'Rabi · Medium'},{e:'🥦',n:'Mustard',i:'Rabi · Low'},{e:'🫘',n:'Chickpea',i:'Rabi · Low'}],
  Feb:[{e:'🌾',n:'Wheat',i:'Rabi · Harvest soon'},{e:'🧅',n:'Onion',i:'Rabi · Medium'},{e:'🫘',n:'Lentil',i:'Rabi · Low'},{e:'🌻',n:'Sunflower',i:'Zaid · Medium'}],
  Mar:[{e:'🌽',n:'Maize',i:'Zaid · High'},{e:'🍅',n:'Tomato',i:'Zaid · Medium'},{e:'🥒',n:'Cucumber',i:'Zaid · High'},{e:'🍉',n:'Watermelon',i:'Zaid · High'}],
  Apr:[{e:'🍅',n:'Tomato',i:'Zaid · Medium'},{e:'🥒',n:'Cucumber',i:'Zaid · High'},{e:'🌿',n:'Moong',i:'Zaid · Medium'},{e:'🫑',n:'Bottle Gourd',i:'Zaid · High'}],
  May:[{e:'🌿',n:'Moong (Green Gram)',i:'Zaid · Medium'},{e:'🥒',n:'Bitter Gourd',i:'Zaid · Medium'},{e:'🍉',n:'Watermelon',i:'Zaid · High'},{e:'🌽',n:'Maize',i:'Zaid · High'}],
  Jun:[{e:'🌾',n:'Paddy (Rice)',i:'Kharif · High'},{e:'🌽',n:'Maize',i:'Kharif · Medium'},{e:'🌻',n:'Groundnut',i:'Kharif · Medium'},{e:'🫘',n:'Soybean',i:'Kharif · Medium'},{e:'🌿',n:'Arhar (Tur)',i:'Kharif · Low'}],
  Jul:[{e:'🌾',n:'Paddy (Rice)',i:'Kharif · High'},{e:'🌻',n:'Groundnut',i:'Kharif · Medium'},{e:'🌿',n:'Cotton',i:'Kharif · Medium'},{e:'🫘',n:'Soybean',i:'Kharif · Medium'},{e:'🌾',n:'Bajra',i:'Kharif · Low'}],
  Aug:[{e:'🌾',n:'Paddy',i:'Kharif · High'},{e:'🌿',n:'Cotton',i:'Kharif · Medium'},{e:'🫘',n:'Arhar',i:'Kharif · Low'},{e:'🌾',n:'Jowar',i:'Kharif · Low'}],
  Sep:[{e:'🌾',n:'Paddy',i:'Kharif · Harvesting'},{e:'🧅',n:'Onion (nursery)',i:'Pre-Rabi · Medium'},{e:'🫘',n:'Chickpea (nursery)',i:'Pre-Rabi · Low'}],
  Oct:[{e:'🌾',n:'Wheat (sowing)',i:'Rabi · Low'},{e:'🧅',n:'Onion',i:'Rabi · Medium'},{e:'🥔',n:'Potato',i:'Rabi · Medium'},{e:'🥦',n:'Mustard',i:'Rabi · Low'}],
  Nov:[{e:'🌾',n:'Wheat',i:'Rabi · Medium'},{e:'🥔',n:'Potato',i:'Rabi · Medium'},{e:'🫘',n:'Chickpea',i:'Rabi · Low'},{e:'🥦',n:'Peas',i:'Rabi · Medium'}],
  Dec:[{e:'🌾',n:'Wheat',i:'Rabi · Medium'},{e:'🥦',n:'Mustard',i:'Rabi · Low'},{e:'🫘',n:'Lentil',i:'Rabi · Low'},{e:'🧅',n:'Onion',i:'Rabi · Medium'}]
};
let activeMonth = MONTHS[new Date().getMonth()];
function renderCalendar(){
  document.getElementById('monthTabs').innerHTML=MONTHS.map(m=>
    `<button class="m-tab${m===activeMonth?' active':''}" onclick="selectMonth('${m}')">${m}</button>`
  ).join('');
  document.getElementById('cropGrid').innerHTML=(CALENDAR[activeMonth]||[]).map(c=>
    `<div class="crop-chip"><div class="crop-emoji">${c.e}</div><div class="crop-name">${c.n}</div><div class="crop-info">${c.i}</div></div>`
  ).join('');
}
function selectMonth(m){ activeMonth=m; renderCalendar(); }
const CROP_DB={
  alluvial:{kharif:{high:['🌾 Paddy','🌿 Sugarcane','🫘 Soybean','🌽 Maize'],medium:['🌾 Paddy','🌽 Maize','🌿 Jute'],low:['🌽 Maize','🫘 Arhar','🌾 Bajra']},rabi:{high:['🌾 Wheat','🥔 Potato','🧅 Onion'],medium:['🌾 Wheat','🥦 Mustard','🫘 Chickpea'],low:['🥦 Mustard','🫘 Lentil','🫘 Chickpea']},zaid:{high:['🍅 Tomato','🥒 Cucumber','🍉 Watermelon'],medium:['🌿 Moong','🌽 Maize'],low:['🌿 Moong','🫘 Cowpea']}},
  black:{kharif:{high:['🌿 Cotton','🫘 Soybean','🌾 Jowar'],medium:['🌿 Cotton','🫘 Soybean','🌾 Bajra'],low:['🌾 Jowar','🌾 Bajra','🫘 Arhar']},rabi:{high:['🌾 Wheat','🫘 Chickpea','🥦 Safflower'],medium:['🫘 Chickpea','🌾 Wheat','🌻 Sunflower'],low:['🫘 Chickpea','🥦 Safflower']},zaid:{high:['🍅 Tomato','🥒 Brinjal'],medium:['🌿 Moong','🫑 Chilli'],low:['🌿 Moong','🫘 Cowpea']}},
  red:{kharif:{high:['🌾 Paddy','🌻 Groundnut','🍌 Banana'],medium:['🌻 Groundnut','🌾 Ragi','🫘 Arhar'],low:['🌾 Ragi','🫘 Cowpea','🌾 Bajra']},rabi:{high:['🌻 Sunflower','🥬 Vegetables','🍅 Tomato'],medium:['🌻 Sunflower','🥦 Mustard'],low:['🫘 Horsegram','🌾 Ragi']},zaid:{high:['🍅 Tomato','🥒 Cucumber'],medium:['🌿 Moong','🌽 Maize'],low:['🌿 Moong','🫘 Cowpea']}},
  loamy:{kharif:{high:['🌾 Paddy','🫘 Soybean','🌽 Maize'],medium:['🌽 Maize','🫘 Soybean','🌻 Groundnut'],low:['🌽 Maize','🫘 Arhar','🌾 Bajra']},rabi:{high:['🌾 Wheat','🥔 Potato','🧅 Onion'],medium:['🌾 Wheat','🥦 Mustard','🫘 Chickpea'],low:['🥦 Mustard','🫘 Lentil']},zaid:{high:['🍅 Tomato','🥒 Cucumber','🌽 Sweet Corn'],medium:['🌿 Moong','🍅 Tomato'],low:['🌿 Moong','🫘 Cowpea']}},
  sandy:{kharif:{high:['🌻 Groundnut','🌿 Cotton','🌾 Bajra'],medium:['🌾 Bajra','🌻 Groundnut'],low:['🌾 Bajra','🫘 Cowpea','🌿 Cluster Bean']},rabi:{high:['🧅 Onion','🥦 Mustard','🌿 Cumin'],medium:['🥦 Mustard','🌿 Cumin','🫘 Chickpea'],low:['🌿 Cumin','🥦 Mustard']},zaid:{high:['🍉 Watermelon','🥒 Cucumber'],medium:['🍉 Watermelon','🌿 Moong'],low:['🌿 Moong','🫘 Cowpea']}}
};
const TIPS={
  alluvial:'Alluvial soil is highly fertile with good water retention. Ideal for wheat, rice and sugarcane.',
  black:'Black soil has high moisture retention — best for cotton and soybean. Avoid waterlogging.',
  red:'Red soil is low in nitrogen & phosphorus. Use organic compost and targeted NPK fertilizers.',
  loamy:'Loamy soil is best for most crops — good drainage and nutrient balance. Maintain organic matter.',
  sandy:'Sandy soil drains fast. Add organic matter, use drip irrigation, and prefer short-duration crops.'
};
function getCropSuggestion(){
  const soil=document.getElementById('soilType').value;
  const season=document.getElementById('season').value;
  const water=document.getElementById('water').value;
  if(!soil||!season){alert('Please select at least Soil Type and Season.');return;}
  const wKey=water||'medium';
  const crops=CROP_DB[soil]?.[season]?.[wKey]||CROP_DB[soil]?.[season]?.medium||[];
  document.getElementById('cropTags').innerHTML=crops.map(c=>`<span class="crop-tag">${c}</span>`).join('');
  const tips=[TIPS[soil],`Best suited for ${season.charAt(0).toUpperCase()+season.slice(1)} season.`,
    `Water: ${wKey==='high'?'Canal/Perennial recommended':wKey==='medium'?'Borewell/Seasonal works':'Suitable for rain-fed farming'}.`,
    'Always do a soil pH test before sowing — target 6.0–7.5 for most crops.',
    'Apply FYM or compost 2 weeks before sowing to improve soil structure.'];
  document.getElementById('cropTips').innerHTML=tips.map(tp=>`<div class="tip-item">${tp}</div>`).join('');
  document.getElementById('cropResult').style.display='block';
}

const WEATHER_DB={
  default:{temp:'38°C',city:'Guntur,Andhra Pradesh',cond:'Partly Cloudy · Good for sowing',icon:'⛅',humidity:'67%',wind:'12 km/h',rain:'3 mm',uv:'Moderate',alerts:[{icon:'🌡️',label:'Temperature',val:'28°C – Warm, ideal for Kharif crops'},{icon:'💧',label:'Humidity',val:'67% – Moderate, watch for fungal disease',warn:true},{icon:'🌬️',label:'Wind',val:'12 km/h – Light breeze, safe for spraying'},{icon:'☀️',label:'UV Index',val:'Moderate – Use protective gear'},{icon:'🌧️',label:'Rain Forecast',val:'Light rain expected in 2 days',warn:true},{icon:'🌱',label:'Farm Advisory',val:'Good time to apply basal fertilizer'}]},
  delhi:{temp:'35°C',city:'Delhi NCR',cond:'Sunny & Hot · Irrigate crops',icon:'☀️',humidity:'45%',wind:'18 km/h',rain:'0 mm',uv:'High',alerts:[{icon:'🌡️',label:'Temperature',val:'35°C – Very hot, irrigate in evening'},{icon:'💧',label:'Humidity',val:'45% – Low, increase irrigation',warn:true},{icon:'☀️',label:'UV Index',val:'High – Avoid working 11AM–3PM',warn:true},{icon:'🌱',label:'Farm Advisory',val:'Apply mulch to reduce moisture loss'}]},
  mumbai:{temp:'30°C',city:'Mumbai, Maharashtra',cond:'Humid · Heavy rain likely',icon:'🌧️',humidity:'85%',wind:'22 km/h',rain:'15 mm',uv:'Low',alerts:[{icon:'🌧️',label:'Rainfall',val:'15 mm today – Heavy rain expected',warn:true},{icon:'💧',label:'Humidity',val:'85% – Very high, fungal disease risk',warn:true},{icon:'🌬️',label:'Wind',val:'22 km/h – Avoid spraying pesticides'},{icon:'🌱',label:'Farm Advisory',val:'Ensure proper drainage in fields'}]},
  chennai:{temp:'33°C',city:'Chennai, Tamil Nadu',cond:'Hot & Humid',icon:'🌤️',humidity:'78%',wind:'15 km/h',rain:'0 mm',uv:'High',alerts:[{icon:'🌡️',label:'Temperature',val:'33°C – Hot, irrigate regularly'},{icon:'💧',label:'Humidity',val:'78% – Monitor for blight',warn:true},{icon:'☀️',label:'UV Index',val:'High – Use mulch in fields'},{icon:'🌱',label:'Farm Advisory',val:'Good conditions for paddy transplanting'}]},
  bengaluru:{temp:'24°C',city:'Bengaluru, Karnataka',cond:'Pleasant · Ideal for vegetables',icon:'🌥️',humidity:'72%',wind:'10 km/h',rain:'2 mm',uv:'Moderate',alerts:[{icon:'🌡️',label:'Temperature',val:'24°C – Pleasant, great for vegetables'},{icon:'💧',label:'Humidity',val:'72% – Moderate, good conditions'},{icon:'☀️',label:'UV Index',val:'Moderate – Normal farm activity'},{icon:'🌱',label:'Farm Advisory',val:'Excellent time for ragi and jowar sowing'}]},
  hyderabad:{temp:'31°C',city:'Hyderabad, Telangana',cond:'Warm · Watch for pests',icon:'🌤️',humidity:'58%',wind:'14 km/h',rain:'0 mm',uv:'High',alerts:[{icon:'🌡️',label:'Temperature',val:'31°C – Warm, pest activity high'},{icon:'💧',label:'Humidity',val:'58% – Check for aphids and whitefly',warn:true},{icon:'☀️',label:'UV Index',val:'High – Spray in evening only'},{icon:'🌱',label:'Farm Advisory',val:'Good for cotton boll development'}]},
  jaipur:{temp:'32°C',city:'Jaipur, Rajasthan',cond:'Hot & Dry · Use drip irrigation',icon:'☀️',humidity:'30%',wind:'20 km/h',rain:'0 mm',uv:'Very High',alerts:[{icon:'🌡️',label:'Temperature',val:'32°C – Hot, irrigate early morning'},{icon:'💧',label:'Humidity',val:'30% – Very dry, drip irrigation advised',warn:true},{icon:'☀️',label:'UV Index',val:'Very High – Protect yourself',warn:true},{icon:'🌱',label:'Farm Advisory',val:'Mulch fields to reduce evaporation'}]},
  kolkata:{temp:'29°C',city:'Kolkata, West Bengal',cond:'Humid · Good for jute',icon:'🌦️',humidity:'80%',wind:'12 km/h',rain:'5 mm',uv:'Moderate',alerts:[{icon:'💧',label:'Humidity',val:'80% – High, watch for diseases',warn:true},{icon:'🌧️',label:'Rain Forecast',val:'Light shower expected',warn:true},{icon:'🌱',label:'Farm Advisory',val:'Good conditions for jute and rice'}]},
};

function updateWeather(){
  const city = document.getElementById('cityInput').value.toLowerCase().trim();
  let data = WEATHER_DB.default;
  if(city.includes('delhi')||city.includes('ncr')||city.includes('gurgaon')||city.includes('noida')) data=WEATHER_DB.delhi;
  else if(city.includes('mumbai')||city.includes('pune')||city.includes('nagpur')) data=WEATHER_DB.mumbai;
  else if(city.includes('chennai')||city.includes('coimbatore')||city.includes('madurai')) data=WEATHER_DB.chennai;
  else if(city.includes('bengaluru')||city.includes('bangalore')||city.includes('mysore')) data=WEATHER_DB.bengaluru;
  else if(city.includes('hyderabad')||city.includes('warangal')) data=WEATHER_DB.hyderabad;
  else if(city.includes('jaipur')||city.includes('jodhpur')||city.includes('rajasthan')) data=WEATHER_DB.jaipur;
  else if(city.includes('kolkata')||city.includes('west bengal')||city.includes('bengal')) data=WEATHER_DB.kolkata;
  setWeatherData(data);
}

function setWeatherData(data){
  document.getElementById('wIcon').textContent=data.icon;
  document.getElementById('wTemp').textContent=data.temp;
  document.getElementById('wCity').textContent=data.city;
  document.getElementById('wCond').textContent=data.cond;
  document.getElementById('wHumidity').textContent=data.humidity;
  document.getElementById('wWind').textContent=data.wind;
  document.getElementById('wRain').textContent=data.rain;
  document.getElementById('wUV').textContent=data.uv;
  document.getElementById('alertsList').innerHTML=data.alerts.map(a=>
    `<div class="alert-card${a.warn?' alert-warn':''}">
      <div class="ai">${a.icon}</div>
      <div><div class="alabel">${a.label}</div><div class="aval">${a.val}</div></div>
    </div>`
  ).join('');
}

function loadWeatherForLocation(){
  const state=(currentUser?.state||detectedState||'Punjab').toLowerCase();
  if(state.includes('punjab')||state.includes('haryana')) setWeatherData(WEATHER_DB.default);
  else if(state.includes('maharashtra')||state.includes('goa')) setWeatherData(WEATHER_DB.mumbai);
  else if(state.includes('tamil')) setWeatherData(WEATHER_DB.chennai);
  else if(state.includes('karnataka')) setWeatherData(WEATHER_DB.bengaluru);
  else if(state.includes('telangana')||state.includes('andhra')) setWeatherData(WEATHER_DB.hyderabad);
  else if(state.includes('delhi')||state.includes('uttar')) setWeatherData(WEATHER_DB.delhi);
  else if(state.includes('rajasthan')||state.includes('gujarat')) setWeatherData(WEATHER_DB.jaipur);
  else if(state.includes('west bengal')||state.includes('bihar')) setWeatherData(WEATHER_DB.kolkata);
  else setWeatherData(WEATHER_DB.default);
}
const ALL_MARKET_DATA=[
  {crop:'🌾 Wheat',mandi:'Ludhiana',state:'punjab',price:2250,min:2180,max:2310,change:45,trend:'up'},
  {crop:'🌾 Paddy (Basmati)',mandi:'Amritsar',state:'punjab',price:3800,min:3700,max:3950,change:120,trend:'up'},
  {crop:'🫘 Chickpea',mandi:'Patiala',state:'punjab',price:5100,min:5000,max:5280,change:30,trend:'up'},
  {crop:'🥦 Mustard',mandi:'Jalandhar',state:'punjab',price:5600,min:5400,max:5800,change:-40,trend:'down'},
  {crop:'🌾 Cotton (Long Staple)',mandi:'Hisar',state:'haryana',price:6200,min:6050,max:6350,change:-80,trend:'down'},
  {crop:'🌾 Wheat',mandi:'Karnal',state:'haryana',price:2280,min:2200,max:2350,change:50,trend:'up'},
  {crop:'🧅 Onion',mandi:'Rewari',state:'haryana',price:1400,min:1300,max:1550,change:100,trend:'up'},
  {crop:'🌿 Moong Dal',mandi:'Jhansi',state:'up',price:7200,min:7000,max:7450,change:80,trend:'up'},
  {crop:'🌽 Maize',mandi:'Lucknow',state:'up',price:1850,min:1800,max:1920,change:30,trend:'up'},
  {crop:'🌾 Sugarcane',mandi:'Meerut',state:'up',price:350,min:340,max:360,change:5,trend:'up'},
  {crop:'🥔 Potato',mandi:'Agra',state:'up',price:1200,min:1100,max:1320,change:-60,trend:'down'},
  {crop:'🧅 Onion',mandi:'Nashik',state:'maha',price:1200,min:1100,max:1350,change:-150,trend:'down'},
  {crop:'🍅 Tomato',mandi:'Pune',state:'maha',price:2400,min:2200,max:2700,change:200,trend:'up'},
  {crop:'🌿 Turmeric',mandi:'Sangli',state:'maha',price:7600,min:7400,max:7900,change:120,trend:'up'},
  {crop:'🌾 Cotton',mandi:'Akola',state:'maha',price:6100,min:5900,max:6300,change:0,trend:'stable'},
  {crop:'🥜 Groundnut',mandi:'Rajkot',state:'gujarat',price:5100,min:4950,max:5280,change:60,trend:'up'},
  {crop:'🌿 Cumin (Jeera)',mandi:'Unjha',state:'gujarat',price:42000,min:40000,max:44000,change:1500,trend:'up'},
  {crop:'🧅 Garlic',mandi:'Gondal',state:'gujarat',price:7200,min:6800,max:7600,change:300,trend:'up'},
  {crop:'🫘 Soybean',mandi:'Indore',state:'mp',price:4450,min:4380,max:4500,change:0,trend:'stable'},
  {crop:'🫘 Chickpea (Chana)',mandi:'Bhopal',state:'mp',price:5400,min:5300,max:5600,change:-40,trend:'down'},
  {crop:'🌾 Bajra',mandi:'Jaipur',state:'rajasthan',price:2100,min:2050,max:2180,change:15,trend:'up'},
  {crop:'🌿 Cumin',mandi:'Jodhpur',state:'rajasthan',price:40500,min:39000,max:42000,change:800,trend:'up'},
  {crop:'🌾 Paddy (Raw)',mandi:'Thanjavur',state:'tn',price:2200,min:2100,max:2320,change:40,trend:'up'},
  {crop:'🥥 Coconut',mandi:'Coimbatore',state:'tn',price:1850,min:1700,max:2000,change:-50,trend:'down'},
  {crop:'🍌 Banana',mandi:'Trichy',state:'tn',price:2800,min:2500,max:3100,change:100,trend:'up'},
  {crop:'🌾 Ragi (Finger Millet)',mandi:'Mysore',state:'ka',price:2800,min:2700,max:2950,change:60,trend:'up'},
  {crop:'☕ Coffee (Arabica)',mandi:'Chikmagalur',state:'ka',price:42000,min:40000,max:44000,change:2000,trend:'up'},
  {crop:'🥜 Peanut',mandi:'Kurnool',state:'ap',price:4800,min:4650,max:4950,change:30,trend:'up'},
  {crop:'🌿 Red Chilli',mandi:'Guntur',state:'ap',price:9500,min:9000,max:10000,change:300,trend:'up'},
  {crop:'🌿 Turmeric',mandi:'Nizamabad',state:'telangana',price:7600,min:7400,max:7900,change:120,trend:'up'},
  {crop:'🥥 Coconut',mandi:'Thrissur',state:'kerala',price:1850,min:1700,max:2000,change:-50,trend:'down'},
  {crop:'🍌 Banana (Nendran)',mandi:'Palakkad',state:'kerala',price:4200,min:3800,max:4600,change:200,trend:'up'},
];
const STATE_CODE_MAP={punjab:'Punjab',haryana:'Haryana',up:'Uttar Pradesh',maha:'Maharashtra',gujarat:'Gujarat',mp:'Madhya Pradesh',rajasthan:'Rajasthan',tn:'Tamil Nadu',ka:'Karnataka',ap:'Andhra Pradesh',telangana:'Telangana',kerala:'Kerala'};
const STATE_TO_CODE={'Punjab':'punjab','Haryana':'haryana','Uttar Pradesh':'up','Maharashtra':'maha','Gujarat':'gujarat','Madhya Pradesh':'mp','Rajasthan':'rajasthan','Tamil Nadu':'tn','Karnataka':'ka','Andhra Pradesh':'ap','Telangana':'telangana','Kerala':'kerala'};

let mktFilter='all', mktSearch='';

function updateMarketForLocation(){
  const userState = currentUser?.state || detectedState || 'Guntur';
  const code = STATE_TO_CODE[userState] || 'Guntur';
  mktFilter = code;
  const locBar = document.getElementById('mktLocBar');
  if(locBar) locBar.textContent = `📍 Showing prices for: ${userState}`;
  const sel = document.getElementById('mktStateFilter');
  if(sel) sel.value = code;
  renderMarket();
}
function filterMarket(v){ mktFilter=v; renderMarket(); }
function searchMarket(v){ mktSearch=v; renderMarket(); }
function renderMarket(){
  let data=[...ALL_MARKET_DATA];
  if(mktFilter!=='all') data=data.filter(r=>r.state===mktFilter);
  if(mktSearch) data=data.filter(r=>r.crop.toLowerCase().includes(mktSearch.toLowerCase())||r.mandi.toLowerCase().includes(mktSearch.toLowerCase()));
  document.getElementById('mktCount').textContent=`${data.length} results`;
  document.getElementById('marketBody').innerHTML=data.length?data.map(r=>{
    const cls=r.trend==='up'?'price-up':r.trend==='down'?'price-down':'price-stable';
    const arrow=r.trend==='up'?'▲':r.trend==='down'?'▼':'→';
    return `<tr><td>${r.crop}</td><td>${r.mandi}</td><td>${STATE_CODE_MAP[r.state]||r.state}</td><td style="font-weight:700">₹ ${r.price.toLocaleString()}</td><td style="color:var(--muted)">₹ ${r.min.toLocaleString()}</td><td style="color:var(--muted)">₹ ${r.max.toLocaleString()}</td><td class="${cls}">${arrow} ${r.change===0?'Stable':Math.abs(r.change)}</td></tr>`;
  }).join(''):`<tr><td colspan="7" style="text-align:center;padding:28px;color:var(--muted)">No results found.</td></tr>`;
}

const BOT_KB=[
  {k:['yellow','leaves','yellowing'],r:{
    en:'🍂 Yellow leaves can indicate:\n1. Nitrogen deficiency → apply urea @ 45 kg/acre\n2. Rust disease → spray Propiconazole 25EC @ 1ml/L\n3. Waterlogging → improve field drainage\n4. Iron deficiency → spray ferrous sulphate 0.5%',
    hi:'🍂 पीले पत्ते दर्शा सकते हैं:\n1. नाइट्रोजन की कमी → 45 किग्रा/एकड़ यूरिया लगाएं\n2. रस्ट रोग → Propiconazole 1ml/L छिड़काव\n3. जलभराव → खेत में जल निकासी सुधारें\n4. आयरन की कमी → फेरस सल्फेट 0.5% स्प्रे',
    te:'🍂 పసుపు ఆకులు:\n1. నత్రజని లోపం → 45 కిలో/ఎకరం యూరియా\n2. రస్ట్ వ్యాధి → Propiconazole 1ml/L\n3. నీరు నిలకడ →배水 మెరుగుపరచండి',
    kn:'🍂 ಹಳದಿ ಎಲೆ:\n1. ಸಾರಜನಕ ಕೊರತೆ → ಯೂರಿಯಾ 45 ಕಿ/ಎ\n2. ರಸ್ಟ್ → Propiconazole 1ml/L\n3. ಜಲಾವೃತ → ಬಸಿಗಾಲು ಸುಧಾರಿಸಿ',
    ta:'🍂 மஞ்சள் இலைகள்:\n1. நைட்ரஜன் குறைபாடு → யூரியா 45 கிகி/ஏக்\n2. துரு நோய் → Propiconazole 1ml/L\n3. நீர்த்தேக்கம் → வடிகால் மேம்படுத்துங்கள்',
    ml:'🍂 മഞ്ഞ ഇലകൾ:\n1. നൈട്രജൻ കുറവ് → യൂറിയ 45 kg/ഏക്കർ\n2. റസ്റ്റ് → Propiconazole 1ml/L\n3. ജലക്കെട്ട് → ഡ്രെയ്നേജ് മെച്ചപ്പെടുത്തുക'
  }},
  {k:['black soil','regur','cotton soil'],r:{
    en:'🌾 Best crops for black soil:\n• Kharif: Cotton, Soybean, Jowar, Bajra, Moong\n• Rabi: Wheat, Chickpea, Safflower, Sunflower\n\nBlack soil retains moisture excellently. Target pH: 6.5–8.0',
    hi:'🌾 काली मिट्टी के लिए:\n• खरीफ: कपास, सोयाबीन, ज्वार, बाजरा\n• रबी: गेहूं, चना, अलसी, सूरजमुखी\n\nकाली मिट्टी नमी अच्छे से बनाए रखती है। pH: 6.5–8.0',
    te:'🌾 నల్ల మట్టికి:\n• ఖరీఫ్: పత్తి, సోయాబీన్, జొన్న\n• రబీ: గోధుమ, శనగ, పొద్దుతిరుగుడు',
    kn:'🌾 ಕಪ್ಪು ಮಣ್ಣಿಗೆ:\n• ಖರೀಫ್: ಹತ್ತಿ, ಸೋಯಾಬೀನ್, ಜೋಳ\n• ರಬಿ: ಗೋಧಿ, ಕಡಲೆ',
    ta:'🌾 கரு மண்ணுக்கு:\n• கரீஃப்: பருத்தி, சோயாபீன்\n• ரபி: கோதுமை, கொண்டைக்கடலை',
    ml:'🌾 കറുത്ത മണ്ണ്:\n• ഖരീഫ്: പരുത്തി, സോയാബീൻ\n• റബി: ഗോതമ്പ്, കടല'
  }},
  {k:['irrigat','water','drip'],r:{
    en:'💧 Irrigation guidelines:\n• Wheat: every 15–20 days (6 irrigations)\n• Rice: maintain 5cm standing water\n• Cotton: every 10–12 days\n• Vegetables: every 5–7 days or drip\n\nBest time: 6–8 AM or evening.',
    hi:'💧 सिंचाई गाइडलाइन:\n• गेहूं: हर 15-20 दिन\n• धान: 5 सेमी खड़ा पानी\n• सब्जियां: हर 5-7 दिन\n\nसर्वोत्तम समय: सुबह 6-8 बजे या शाम',
    te:'💧 నీటిపారుదల:\n• గోధుమ: 15-20 రోజులకు ఒకసారి\n• వరి: 5 సెం.మీ నీరు\n• కూరగాయలు: 5-7 రోజులు',
    kn:'💧 ನೀರಾವರಿ:\n• ಗೋಧಿ: 15-20 ದಿನ\n• ಭತ್ತ: 5 ಸೆಂ ನೀರು\n• ತರಕಾರಿ: 5-7 ದಿನ',
    ta:'💧 பாசனம்:\n• கோதுமை: 15-20 நாள்\n• நெல்: 5 செமீ நீர்\n• காய்கறி: 5-7 நாள்',
    ml:'💧 ജലസേചനം:\n• ഗോതമ്പ്: 15-20 ദിവസം\n• നെൽ: 5 സെ.മീ വെള്ളം\n• പച്ചക്കറി: 5-7 ദിവസം'
  }},
  {k:['pm-kisan','pm kisan','samman','pmkisan'],r:{
    en:'🏛️ PM-Kisan Samman Nidhi:\n• Benefit: ₹6,000/year in 3 installments\n• Eligibility: All farmer families with cultivable land\n• Register: pmkisan.gov.in or nearest CSC\n• Check status: pmkisan.gov.in → Farmers Corner',
    hi:'🏛️ PM-किसान सम्मान निधि:\n• लाभ: ₹6,000/साल (3 किस्तों में)\n• पात्रता: सभी किसान परिवार\n• पंजीकरण: pmkisan.gov.in\n• स्थिति जांचें: Farmers Corner',
    te:'🏛️ PM-కిసాన్:\n• లాభం: ₹6,000/సంవత్సరం\n• నమోదు: pmkisan.gov.in',
    kn:'🏛️ PM-ಕಿಸಾನ್:\n• ₹6,000/ವರ್ಷ\n• ನೋಂದಣಿ: pmkisan.gov.in',
    ta:'🏛️ PM-கிஸான்:\n• ₹6,000/ஆண்டு\n• பதிவு: pmkisan.gov.in',
    ml:'🏛️ PM-കിസാൻ:\n• ₹6,000/വർഷം\n• രജിസ്ട്രേഷൻ: pmkisan.gov.in'
  }},
  {k:['fertilizer','npk','urea','dap'],r:{
    en:'🌱 Fertilizer guidelines:\n• Wheat: N:P:K = 120:60:40 kg/ha\n• Rice: N:P:K = 100:50:50 kg/ha\n• Cotton: N:P:K = 120:60:60 kg/ha\n• Groundnut: 25:50:50 + gypsum 250 kg/ha\n\nAlways do a soil test first!',
    hi:'🌱 खाद दिशानिर्देश:\n• गेहूं: NPK = 120:60:40\n• धान: NPK = 100:50:50\n• पहले मिट्टी परीक्षण करें!',
    te:'🌱 ఎరువులు:\n• గోధుమ: NPK = 120:60:40\n• వరి: NPK = 100:50:50',
    kn:'🌱 ಗೊಬ್ಬರ:\n• ಗೋಧಿ: NPK = 120:60:40\n• ಭತ್ತ: NPK = 100:50:50',
    ta:'🌱 உரம்:\n• கோதுமை: NPK = 120:60:40\n• நெல்: NPK = 100:50:50',
    ml:'🌱 വളം:\n• ഗോതമ്പ്: NPK = 120:60:40\n• നെൽ: NPK = 100:50:50'
  }},
  {k:['cold storage','cold store','store crop','storage'],r:{
    en:'🧊 Cold Storage Tips:\n• Use for vegetables, fruits, potatoes, onions\n• Ideal temp: 0–4°C for most vegetables\n• Potatoes: 2–4°C, Onions: 0–2°C\n• Visit our Cold Storage Finder to find units near you!\n• Check humidity (85–90%) before storing',
    hi:'🧊 कोल्ड स्टोरेज:\n• आलू, प्याज, सब्जियों के लिए\n• तापमान: 0–4°C\n• हमारे Cold Storage Finder से पास की यूनिट खोजें!',
    te:'🧊 కోల్డ్ స్టోరేజ్:\n• కూరగాయలు, పండ్లకు వాడండి\n• ఉష్ణోగ్రత: 0–4°C\n• కోల్డ్ స్టోరేజ్ ఫైండర్ వాడండి!',
    kn:'🧊 ಕೋಲ್ಡ್ ಸ್ಟೋರೇಜ್:\n• ತರಕಾರಿ, ಹಣ್ಣು\n• ತಾಪ: 0–4°C',
    ta:'🧊 குளிர் கிடங்கு:\n• காய்கறி, பழங்கள்\n• வெப்பம்: 0–4°C',
    ml:'🧊 ശീതള സംഭരണം:\n• പച്ചക്കറി, പഴം\n• താപം: 0–4°C'
  }},
  {k:['pest','insect','aphid','spray','disease'],r:{
    en:'🧪 Pest management:\n1. Try IPM first — neem oil @ 3ml/L\n2. Yellow/blue sticky traps for whiteflies\n3. For severe: consult KVK\n4. Avoid spraying 48hrs before/after rain\n5. Spray early morning or late evening',
    hi:'🧪 कीट प्रबंधन:\n1. नीम तेल 3ml/L आजमाएं\n2. पीले/नीले स्टिकी ट्रैप\n3. गंभीर होने पर KVK से सलाह\n4. बारिश से 48 घंटे पहले/बाद स्प्रे न करें',
    te:'🧪 తెగులు:\n1. వేప నూనె 3ml/L\n2. తీవ్రంగా → KVK సంప్రదించండి\n3. వర్షానికి 48 గంటల ముందు/తర్వాత పిచికారి వద్దు',
    kn:'🧪 ಕೀಟ:\n1. ಬೇವು ಎಣ್ಣೆ 3ml/L\n2. KVK ಸಂಪರ್ಕ\n3. ಮಳೆ 48 ಗಂಟೆ ಮುನ್ನ/ಬಳಿಕ ಸಿಂಪಡಿಸಬೇಡಿ',
    ta:'🧪 பூச்சி:\n1. வேப்ப எண்ணெய் 3ml/L\n2. KVK ஆலோசனை\n3. மழைக்கு 48 மணி முன்/பின் தெளிக்காதீர்',
    ml:'🧪 കീടം:\n1. വേപ്പ് 3ml/L\n2. KVK ഉപദേശം\n3. മഴ 48 മണിക്കൂർ ഒഴിവാക്കുക'
  }},
  {k:['farmer connect','exchange','share','nearby'],r:{
    en:'🤝 Farmer Connect Feature:\n• Share crops, seeds, pesticides, fertilizers & equipment\n• Post what you need or can offer\n• Contact farmers directly — no middlemen!\n\n→ Go to Farmer Connect page now 🌾',
    hi:'🤝 किसान कनेक्ट:\n• फसल, खाद, उपकरण साझा करें\n• जरूरत या ऑफर पोस्ट करें\n• सीधे किसान से संपर्क करें!',
    te:'🤝 రైతు కనెక్ట్:\n• పంటలు, ఎరువులు పంచుకోండి\n• అభ్యర్థన పోస్ట్ చేయండి',
    kn:'🤝 ರೈತ ಕನೆಕ್ಟ್:\n• ಬೆಳೆ, ಗೊಬ್ಬರ ಹಂಚಿಕೊಳ್ಳಿ\n• ಪೋಸ್ಟ್ ಮಾಡಿ',
    ta:'🤝 விவசாயி இணைப்பு:\n• பயிர்கள், உரங்கள் பகிரவும்\n• கோரிக்கை இடுங்கள்',
    ml:'🤝 കർഷക കണക്ട്:\n• വിള, വളം പങ്കുവക്കൂ\n• പോസ്റ്റ് ചെയ്യൂ'
  }},
];

const QUICK_CHIPS={
  en:['🌾 Black soil crops?','🍂 Yellow leaves?','💧 Irrigation tips?','🏛️ PM-Kisan?','🧊 Cold storage tips?'],
  hi:['🌾 काली मिट्टी?','🍂 पीले पत्ते?','💧 सिंचाई?','🏛️ PM-किसान?','🧊 कोल्ड स्टोरेज?'],
  te:['🌾 నల్ల మట్టి?','🍂 పసుపు ఆకులు?','💧 నీటి పారుదల?','🏛️ PM-కిసాన్?','🧊 కోల్డ్ స్టోరేజ్?'],
  kn:['🌾 ಕಪ್ಪು ಮಣ್ಣು?','🍂 ಹಳದಿ ಎಲೆ?','💧 ನೀರಾವರಿ?','🏛️ PM-ಕಿಸಾನ್?','🧊 ಕೋಲ್ಡ್ ಸ್ಟೋರೇಜ್?'],
  ta:['🌾 கரு மண்?','🍂 மஞ்சள் இலை?','💧 பாசனம்?','🏛️ PM-கிஸான்?','🧊 குளிர் கிடங்கு?'],
  ml:['🌾 കറുത്ത മണ്ണ്?','🍂 മഞ്ഞ ഇലകൾ?','💧 ജലസേചനം?','🏛️ PM-കിസാൻ?','🧊 ശീതള സംഭരണം?']
};

let chatInputLang='en', chatOutputLang='en';

function setChatInputLang(lang){
  chatInputLang=lang;
  document.querySelectorAll('.c-pill').forEach((p,i)=>{
    p.classList.toggle('active',['en','hi','te','kn','ta','ml'][i]===lang);
  });
  renderQuickChips();
  if(recognition){ try{recognition.lang=VOICE_LANG_CODES[lang]||'en-IN';}catch(e){} }
}

function renderQuickChips(){
  const chips=QUICK_CHIPS[chatInputLang]||QUICK_CHIPS.en;
  const queries=['Best crop for black soil in Kharif?','Yellow leaves on wheat – what is wrong?','When should I irrigate cotton?','How to apply for PM-Kisan?','Tell me about cold storage tips'];
  document.getElementById('quickChips').innerHTML=chips.map((c,i)=>
    `<span class="q-chip" onclick="sendChip('${queries[i]}')">${c}</span>`
  ).join('');
}

function getBotReply(msg){
  const m=msg.toLowerCase();
  // Get output lang from the dropdown
  const outLang = document.getElementById('chatOutputLang')?.value || chatOutputLang || 'en';
  for(const kb of BOT_KB){
    if(kb.k.some(k=>m.includes(k))){
      const r=kb.r;
      return r[outLang]||r.en||'';
    }
  }
  const fallback={
    en:`🤖 Thank you for your question!\n\nFor detailed advice:\n1. Kisan Call Centre: 1800-180-1551 (free)\n2. Nearest Krishi Vigyan Kendra (KVK)\n3. Use Farmer Connect to ask nearby farmers!\n\nTry asking: "Yellow leaves", "irrigation tips", "PM-Kisan", "fertilizer NPK"`,
    hi:`🤖 आपके सवाल के लिए धन्यवाद!\n\n1. किसान कॉल सेंटर: 1800-180-1551\n2. नजदीकी KVK से सलाह लें\n3. यह पूछें: "पीले पत्ते", "सिंचाई", "PM-किसान"`,
    te:`🤖 మీ ప్రశ్నకు ధన్యవాదాలు!\n1. కిసాన్ కాల్: 1800-180-1551\n2. KVK సంప్రదించండి`,
    kn:`🤖 ಧನ್ಯವಾದ!\n1. ಕಿಸಾನ್ ಕಾಲ್: 1800-180-1551\n2. KVK ಸಂಪರ್ಕ`,
    ta:`🤖 நன்றி!\n1. கிஸான் ஹெல்ப்: 1800-180-1551\n2. KVK ஆலோசனை`,
    ml:`🤖 നന്ദി!\n1. കിസാൻ ഹെൽപ്: 1800-180-1551\n2. KVK ഉപദേശം`
  };
  return fallback[outLang]||fallback.en;
}

function addMsg(text,type){
  const body=document.getElementById('chatBody');
  const div=document.createElement('div');
  div.className=`msg msg-${type}`;
  div.textContent=text;
  body.appendChild(div);
  body.scrollTop=body.scrollHeight;
}
function showTyping(){
  const body=document.getElementById('chatBody');
  const div=document.createElement('div');
  div.className='msg msg-typing'; div.id='typing-indicator';
  div.innerHTML='<div class="typing-dots"><span></span><span></span><span></span></div>';
  body.appendChild(div);
  body.scrollTop=body.scrollHeight;
}
function hideTyping(){ const el=document.getElementById('typing-indicator'); if(el) el.remove(); }
function sendMsg(){
  const inp=document.getElementById('chatInput');
  const txt=inp.value.trim();
  if(!txt) return;
  addMsg(txt,'user'); inp.value='';
  showTyping();
  setTimeout(()=>{ hideTyping(); addMsg(getBotReply(txt),'bot'); },900);
}
function sendChip(txt){
  addMsg(txt,'user'); showTyping();
  setTimeout(()=>{ hideTyping(); addMsg(getBotReply(txt),'bot'); },900);
}

let cameraStream=null;
async function startCamera(){
  try{
    cameraStream=await navigator.mediaDevices.getUserMedia({video:true});
    const video=document.getElementById('cameraPreview');
    const ph=document.getElementById('camPlaceholder');
    video.srcObject=cameraStream; video.style.display='block';
    if(ph) ph.style.display='none';
    video.play();
  }catch(e){ addMsg('📷 Camera access denied. Please allow camera permission in browser settings.','bot'); }
}
function stopCamera(){
  if(cameraStream){ cameraStream.getTracks().forEach(t=>t.stop()); cameraStream=null; }
  const video=document.getElementById('cameraPreview');
  if(video) video.style.display='none';
  const ph=document.getElementById('camPlaceholder');
  if(ph) ph.style.display='flex';
}
function capturePhoto(){
  if(!cameraStream){ addMsg('Please start camera first.','bot'); return; }
  const video=document.getElementById('cameraPreview');
  const canvas=document.createElement('canvas');
  canvas.width=video.videoWidth; canvas.height=video.videoHeight;
  canvas.getContext('2d').drawImage(video,0,0);
  addMsg('📷 Photo captured! Analyzing crop...','user');
  showTyping();
  const diseases=[
    'Analysis: I can see signs of leaf rust disease. Apply Propiconazole 25EC @ 1ml/L of water. Spray in the morning. Repeat after 14 days.',
    'Analysis: The leaves show nitrogen deficiency (yellowing from lower leaves). Apply urea @ 45 kg/acre in 2 split doses.',
    'Analysis: Powdery mildew detected. Apply wettable sulfur @ 3g/L or Hexaconazole 5SC @ 1ml/L.',
    'Analysis: Crop looks healthy! Continue current management. Monitor for pests every 3-4 days.',
    'Analysis: Possible aphid infestation. Apply neem oil @ 5ml/L or Imidacloprid @ 0.5ml/L.'
  ];
  setTimeout(()=>{
    hideTyping();
    addMsg('🔍 '+diseases[Math.floor(Math.random()*diseases.length)],'bot');
  },1800);
}
function toggleCameraPanel(){
  const cp=document.getElementById('camPanel');
  if(cp) cp.scrollIntoView({behavior:'smooth'});
}
let recognition=null, isListening=false;
const VOICE_LANG_CODES={en:'en-IN',hi:'hi-IN',te:'te-IN',kn:'kn-IN',ta:'ta-IN',ml:'ml-IN'};
function toggleVoice(){
  const SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!SpeechRecognition){ addMsg('Voice input not supported. Please use Chrome or Edge.','bot'); return; }
  if(isListening){ recognition.stop(); return; }
  recognition=new SpeechRecognition();
  recognition.lang=VOICE_LANG_CODES[chatInputLang]||'en-IN';
  recognition.interimResults=false;
  recognition.onstart=()=>{
    isListening=true;
    document.getElementById('voiceBtn').textContent='🔴';
    document.getElementById('voiceBtnPanel').textContent='🔴 Stop Listening';
    document.getElementById('voiceBtnPanel').classList.add('active');
    document.getElementById('voiceStatus').classList.add('listening');
    document.getElementById('voiceStatusText').textContent='Listening...';
  };
  recognition.onresult=e=>{
    const txt=e.results[0][0].transcript;
    document.getElementById('chatInput').value=txt;
    addMsg(txt,'user'); showTyping();
    setTimeout(()=>{ hideTyping(); addMsg(getBotReply(txt),'bot'); },900);
  };
  recognition.onend=()=>{
    isListening=false;
    document.getElementById('voiceBtn').textContent='🎤';
    document.getElementById('voiceBtnPanel').textContent='🎤 Start Listening';
    document.getElementById('voiceBtnPanel').classList.remove('active');
    document.getElementById('voiceStatus').classList.remove('listening');
    document.getElementById('voiceStatusText').textContent='Voice Assistant Ready';
  };
  recognition.onerror=e=>{
    addMsg(`Voice error: ${e.error}. Try again.`,'bot');
    isListening=false;
  };
  recognition.start();
}
let fcListings=[
  {id:1,type:'offer',category:'crop',item:'Wheat seeds (HD-2967) — 2 bags extra',district:'Ludhiana',name:'Ramesh Kumar',phone:'+91 98765 43210',details:'Bought 2 extra bags. Can share at cost price. Good germination quality.',time:'2 hours ago'},
  {id:2,type:'need',category:'fert',item:'URGENTLY need Urea — 3 bags',district:'Amritsar',name:'Gurpreet Singh',phone:'+91 87654 32109',details:'Crop showing nitrogen deficiency. Need 3 bags urgently. Will pay full market rate.',time:'4 hours ago'},
  {id:3,type:'offer',category:'pest',item:'Chlorpyriphos 20EC — half bottle',district:'Patiala',name:'Sukhdev Sharma',phone:'+91 76543 21098',details:'Have half bottle after spraying. Can give free to any farmer needing it.',time:'6 hours ago'},
  {id:4,type:'offer',category:'equip',item:'Power Weeder for rent — ₹500/day',district:'Ludhiana',name:'Harbhajan Singh',phone:'+91 65432 10987',details:'Available this week. Good for inter-cultivation in wheat and vegetables.',time:'1 day ago'},
  {id:5,type:'need',category:'crop',item:'Basmati paddy seeds (Pusa 1121)',district:'Karnal',name:'Mahesh Yadav',phone:'+91 54321 09876',details:'Need 10 kg for transplanting next week. Can exchange with turmeric.',time:'1 day ago'},
  {id:6,type:'offer',category:'crop',item:'Tomato seedlings — 500 plants',district:'Nashik',name:'Sanjay Patil',phone:'+91 99887 76655',details:'Healthy tomato seedlings ready for transplant. Variety: Arka Rakshak. Sharing free.',time:'2 days ago'},
  {id:7,type:'need',category:'equip',item:'Tractor for 2 days ploughing',district:'Mysore',name:'Venkatesh Gowda',phone:'+91 88776 65544',details:'Need tractor for 3 acres ploughing before ragi sowing. Will pay ₹1200/day.',time:'2 days ago'},
];
let fcNextId=8, fcPostType='offer', fcActiveFilter='all';

function setFCType(type,el){
  fcPostType=type;
  document.getElementById('fc-offer-tab').classList.toggle('active',type==='offer');
  document.getElementById('fc-need-tab').classList.toggle('active',type==='need');
}
function filterFC(btn,cat){
  fcActiveFilter=cat;
  document.querySelectorAll('.fc-filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderFCListings();
}
const FC_BADGE={crop:'fc-badge-crop',pest:'fc-badge-pest',fert:'fc-badge-fert',equip:'fc-badge-equip'};
const FC_LABEL={crop:'🌾 Crops',pest:'🧴 Pesticide',fert:'🌱 Fertilizer',equip:'🚜 Equipment'};
function renderFCListings(){
  let data=fcListings;
  if(fcActiveFilter!=='all') data=data.filter(l=>l.category===fcActiveFilter);
  document.getElementById('fcCount').textContent=`${data.length} listing${data.length!==1?'s':''}`;
  if(!data.length){ document.getElementById('fcListings').innerHTML='<div class="fc-empty">🌾 No listings yet. Be the first to post!</div>'; return; }
  document.getElementById('fcListings').innerHTML=data.map(l=>`
    <div class="fc-card">
      <div class="fc-card-head">
        <div class="fc-card-title">${l.type==='need'?'🆘 ':'✅ '}${l.item}</div>
        <span class="fc-badge ${FC_BADGE[l.category]||'fc-badge-crop'}">${FC_LABEL[l.category]||l.category}</span>
      </div>
      <div class="fc-card-meta">
        <span>📍 ${l.district}</span><span>👤 ${l.name}</span>
        <span>${l.type==='need'?'<span style="color:#f87171;font-weight:700">URGENT NEED</span>':'<span style="color:var(--lime);font-weight:700">OFFERING</span>'}</span>
      </div>
      <div class="fc-card-desc">${l.details}</div>
      <div class="fc-card-footer">
        <button class="fc-contact-btn" onclick="contactFarmer(${l.id})">📞 Contact</button>
        <span class="fc-time">${l.time}</span>
      </div>
    </div>`).join('');
}
function contactFarmer(id){
  const l=fcListings.find(x=>x.id===id); if(!l) return;
  document.getElementById('fcModalTitle').textContent=`Contact ${l.name}`;
  document.getElementById('fcModalDesc').textContent=`Reach out about: "${l.item}"`;
  document.getElementById('fcModalContent').innerHTML=`
    <div style="display:flex;flex-direction:column;gap:12px">
      <div style="display:flex;gap:12px;align-items:center">
        <span style="font-size:20px">👤</span>
        <div><div style="font-size:10px;color:var(--g400);text-transform:uppercase">Farmer</div><div style="font-size:15px;font-weight:700;color:var(--white);margin-top:2px">${l.name}</div></div>
      </div>
      <div style="display:flex;gap:12px;align-items:center">
        <span style="font-size:20px">📞</span>
        <div><div style="font-size:10px;color:var(--g400);text-transform:uppercase">Phone / WhatsApp</div><div style="font-size:17px;font-weight:700;color:var(--lime);margin-top:2px">${l.phone}</div></div>
      </div>
      <div style="display:flex;gap:12px;align-items:center">
        <span style="font-size:20px">📍</span>
        <div><div style="font-size:10px;color:var(--g400);text-transform:uppercase">District</div><div style="font-size:15px;font-weight:700;color:var(--white);margin-top:2px">${l.district}</div></div>
      </div>
      <div style="margin-top:8px;padding:12px;background:rgba(163,230,53,0.08);border:1px solid rgba(163,230,53,0.15);border-radius:8px">
        <div style="font-size:12px;color:var(--lime);font-weight:700;margin-bottom:4px">📝 Details</div>
        <div style="font-size:13px;color:var(--g300);line-height:1.6">${l.details}</div>
      </div>
    </div>`;
  document.getElementById('fcContactModal').classList.add('open');
}
function closeFCModal(){ document.getElementById('fcContactModal').classList.remove('open'); }
document.addEventListener('click',e=>{ if(e.target.id==='fcContactModal') closeFCModal(); });

function postFCListing(){
  const category=document.getElementById('fcCategory').value;
  const item=document.getElementById('fcItem').value.trim();
  const district=document.getElementById('fcDistrict').value.trim();
  const name=document.getElementById('fcName').value.trim();
  const phone=document.getElementById('fcPhone').value.trim();
  const details=document.getElementById('fcDetails').value.trim();
  if(!category||!item||!district||!name||!phone){ alert('Please fill Category, Item, District, Name and Phone.'); return; }
  fcListings.unshift({id:fcNextId++,type:fcPostType,category,item,district,name,phone,details:details||'No additional details.',time:'Just now'});
  renderFCListings();
  ['fcCategory','fcItem','fcDistrict','fcName','fcPhone','fcDetails'].forEach(id=>{ const el=document.getElementById(id); if(el) el.value=''; });
  const s=document.getElementById('fcPostSuccess');
  s.style.display='block';
  setTimeout(()=>s.style.display='none',4000);
}
const COLD_STORAGE_DATA=[
  {id:1,name:'Punjab Cold Chain Ltd',district:'Ludhiana',state:'Punjab',addr:'GT Road, Ludhiana – 141001',capacity:'5000 MT',temp:'-2 to 5°C',rate:'₹8/kg/month',phone:'+91 98140 12345',avail:'Available',tags:['Potato','Onion','Apple'],lat:30.90,lng:75.85},
  {id:2,name:'Kisan Cold Storage',district:'Amritsar',state:'Punjab',addr:'Near Grain Market, Amritsar – 143001',capacity:'3000 MT',temp:'0 to 4°C',rate:'₹10/kg/month',phone:'+91 98157 23456',avail:'Available',tags:['Vegetables','Fruits'],lat:31.63,lng:74.87},
  {id:3,name:'Haryana Agri Cold Store',district:'Karnal',state:'Haryana',addr:'NH-44, Karnal – 132001',capacity:'8000 MT',temp:'-5 to 10°C',rate:'₹7/kg/month',phone:'+91 99968 34567',avail:'Available',tags:['Wheat','Rice','Potato'],lat:29.68,lng:76.99},
  {id:4,name:'Nashik Modern Cold Storage',district:'Nashik',state:'Maharashtra',addr:'MIDC, Nashik – 422010',capacity:'4000 MT',temp:'0 to 4°C',rate:'₹12/kg/month',phone:'+91 99750 45678',avail:'Available',tags:['Onion','Grape','Tomato'],lat:19.99,lng:73.79},
  {id:5,name:'UP Horticulture Cold Chain',district:'Agra',state:'Uttar Pradesh',addr:'Bypass Road, Agra – 282001',capacity:'6000 MT',temp:'-2 to 8°C',rate:'₹9/kg/month',phone:'+91 99350 56789',avail:'Limited',tags:['Potato','Onion'],lat:27.18,lng:78.01},
  {id:6,name:'South India Cold Storage',district:'Coimbatore',state:'Tamil Nadu',addr:'Peelamedu, Coimbatore – 641004',capacity:'3500 MT',temp:'0 to 5°C',rate:'₹11/kg/month',phone:'+91 98422 67890',avail:'Available',tags:['Banana','Vegetables','Spices'],lat:11.02,lng:76.97},
  {id:7,name:'Karnataka Cold Chain Hub',district:'Mysore',state:'Karnataka',addr:'Hootagalli Industrial Area, Mysore – 570018',capacity:'4500 MT',temp:'-2 to 6°C',rate:'₹10/kg/month',phone:'+91 98440 78901',avail:'Available',tags:['Tomato','Ragi','Coffee'],lat:12.30,lng:76.65},
  {id:8,name:'AP Cold Storage Complex',district:'Guntur',state:'Andhra Pradesh',addr:'Arundalpet, Guntur – 522002',capacity:'5500 MT',temp:'0 to 8°C',rate:'₹9/kg/month',phone:'+91 98490 89012',avail:'Available',tags:['Chilli','Tobacco','Vegetables'],lat:16.30,lng:80.43},
  {id:9,name:'Gujarat Agri Chill Centre',district:'Rajkot',state:'Gujarat',addr:'Gondal Road, Rajkot – 360004',capacity:'7000 MT',temp:'-2 to 5°C',rate:'₹8/kg/month',phone:'+91 99798 90123',avail:'Available',tags:['Groundnut','Vegetables','Fruits'],lat:22.30,lng:70.80},
  {id:10,name:'Kerala Horti Cold Store',district:'Thrissur',state:'Kerala',addr:'Punkunnam, Thrissur – 680002',capacity:'2000 MT',temp:'0 to 6°C',rate:'₹13/kg/month',phone:'+91 98470 01234',avail:'Limited',tags:['Coconut','Banana','Spices'],lat:10.52,lng:76.21},
  {id:11,name:'Rajasthan Cold Hub',district:'Jaipur',state:'Rajasthan',addr:'Sitapura RIICO, Jaipur – 302022',capacity:'4000 MT',temp:'0 to 5°C',rate:'₹9/kg/month',phone:'+91 94140 12345',avail:'Available',tags:['Garlic','Onion','Potato'],lat:26.79,lng:75.84},
  {id:12,name:'MP Cold Chain Center',district:'Indore',state:'Madhya Pradesh',addr:'Pithampur Industrial Area, Indore – 453001',capacity:'6500 MT',temp:'-2 to 7°C',rate:'₹8/kg/month',phone:'+91 98260 23456',avail:'Available',tags:['Soybean','Vegetables','Fruits'],lat:22.72,lng:75.86},
];

let csData=[...COLD_STORAGE_DATA];
let selectedCS=null;

function renderColdStorage(){
  const userState=currentUser?.state||detectedState||'Punjab';
  const filtered=csData.filter(s=>s.state.toLowerCase()===userState.toLowerCase());
  const displayData=filtered.length?filtered:csData;
  renderCSList(displayData);
  if(displayData.length) selectCS(displayData[0].id);
}

function filterCS(q){
  const query=q.toLowerCase();
  const filtered=csData.filter(s=>
    s.name.toLowerCase().includes(query)||
    s.district.toLowerCase().includes(query)||
    s.state.toLowerCase().includes(query)||
    s.tags.some(t=>t.toLowerCase().includes(query))
  );
  renderCSList(filtered);
  if(filtered.length) selectCS(filtered[0].id);
}

function renderCSList(data){
  const list=document.getElementById('csList');
  if(!data.length){ list.innerHTML='<div style="padding:20px;text-align:center;color:var(--muted);font-size:12px">No storage found. Try a different search.</div>'; return; }
  list.innerHTML=data.map(s=>`
    <div class="cs-item${selectedCS===s.id?' active':''}" onclick="selectCS(${s.id})">
      <div class="cs-item-head">
        <div class="cs-item-name">${s.name}</div>
        <div class="cs-item-dist">${s.avail==='Available'?'✅':'⚠️'} ${s.avail}</div>
      </div>
      <div class="cs-item-addr">📍 ${s.district}, ${s.state}</div>
      <div class="cs-item-addr">${s.addr}</div>
      <div class="cs-item-tags">${s.tags.map(t=>`<span class="cs-tag">${t}</span>`).join('')}</div>
    </div>`).join('');
}

function selectCS(id){
  selectedCS=id;
  const s=csData.find(x=>x.id===id); if(!s) return;
  document.querySelectorAll('.cs-item').forEach(el=>el.classList.toggle('active',el.onclick?.toString().includes(`(${id})`)));
  document.getElementById('csMapText').textContent=`📍 ${s.name} — ${s.district}, ${s.state}`;
  document.getElementById('csDetailBox').innerHTML=`
    <div class="cs-available">${s.avail==='Available'?'✅ Storage Available':'⚠️ Limited Space'}</div>
    <h3>${s.name}</h3>
    <p>📍 ${s.addr} · 📞 ${s.phone}</p>
    <div class="cs-detail-grid">
      <div class="cs-detail-item"><div class="cs-detail-label">Capacity</div><div class="cs-detail-val">${s.capacity}</div></div>
      <div class="cs-detail-item"><div class="cs-detail-label">Temperature</div><div class="cs-detail-val">${s.temp}</div></div>
      <div class="cs-detail-item"><div class="cs-detail-label">Rate</div><div class="cs-detail-val">${s.rate}</div></div>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:5px;margin-bottom:12px">${s.tags.map(tg=>`<span class="cs-tag">${tg}</span>`).join('')}</div>
    <button class="cs-book-btn" onclick="openBookModal(${s.id})">Book Storage →</button>`;
}

function openBookModal(id){
  const s=csData.find(x=>x.id===id); if(!s) return;
  document.getElementById('bookModalTitle').textContent=`Book at ${s.name}`;
  document.getElementById('bookModalSubtitle').textContent=`${s.district}, ${s.state} · Capacity: ${s.capacity} · ${s.rate}`;
  document.getElementById('bookModalForm').style.display='block';
  document.getElementById('bookSuccess').style.display='none';
  document.getElementById('bookModal').classList.add('open');
}
function closeBookModal(){ document.getElementById('bookModal').classList.remove('open'); }
document.addEventListener('click',e=>{ if(e.target.id==='bookModal') closeBookModal(); });

function confirmBooking(){
  const name=document.getElementById('bookName').value.trim();
  const phone=document.getElementById('bookPhone').value.trim();
  const crop=document.getElementById('bookCrop').value.trim();
  const qty=document.getElementById('bookQty').value;
  const days=document.getElementById('bookDays').value;
  if(!name||!phone||!crop){ alert('Please fill Name, Phone, and Crop details.'); return; }
  const s=csData.find(x=>x.id===selectedCS);
  document.getElementById('bookModalForm').style.display='none';
  document.getElementById('bookSuccess').style.display='block';
  document.getElementById('bookSuccessMsg').textContent=`Booking confirmed for ${name}! ${qty||'N/A'} Qtl of ${crop} for ${days||'N/A'} days at ${s?.name||'storage unit'}. Our team will call you at ${phone} within 2 hours.`;
}
function submitContact(){
  const name=document.getElementById('ctName').value.trim();
  const phone=document.getElementById('ctPhone').value.trim();
  const msg=document.getElementById('ctMsg').value.trim();
  if(!name||!phone||!msg){ alert('Please fill name, phone and message.'); return; }
  const btn=document.querySelector('[onclick="submitContact()"]');
  btn.textContent='Sending...'; btn.disabled=true;
  setTimeout(()=>{
    document.getElementById('ctSuccess').style.display='block';
    document.getElementById('ctName').value='';
    document.getElementById('ctPhone').value='';
    document.getElementById('ctState').value='';
    document.getElementById('ctMsg').value='';
    btn.textContent=t('ct_btn'); btn.disabled=false;
  },1200);
}
function initApp(){
  buildNav();
  renderCalendar();
  renderHomeServices();
  renderFCListings();
  renderQuickChips();
  loadWeatherForLocation();
  applyTranslations();
  updateMarketForLocation();
}
document.addEventListener('DOMContentLoaded', initLogin);
