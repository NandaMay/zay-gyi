/**
 * Business Configuration File
 * 
 * ဤဖိုင်တစ်ခုတည်းတွင် လုပ်ငန်းအမည်၊ ဖုန်းနံပါတ်၊ Facebook Link နှင့် ဝန်ဆောင်မှုများကို
 * အလွယ်တကူ ပြင်ဆင်ပြောင်းလဲနိုင်ပါသည်။
 * 
 * You can edit all business info, phone numbers, Facebook link and services here.
 */

export interface BusinessService {
  id: string;
  icon: string;
  title: string;
  shortDesc: string;
  highlights?: string[];
}

export interface BusinessConfig {
  // Profile Avatar Image
  profileImage: string;

  // Brand Header
  brandTitle: string;
  tagline: string;
  
  // Facebook Link (Exact URL required)
  facebook: {
    buttonLabel: string;
    url: string;
    profileImage?: string;
  };

  // Phone Contact (ဖုန်းနံပါတ် ဤနေရာတွင် အလွယ်တကူ ပြောင်းလဲနိုင်သည်)
  phone: {
    buttonLabel: string;
    displayNumber: string; // ဖန်သားပြင်ပေါ်တွင် ပြသမည့်ပုံစံ ဥပမာ: "09 798 123 456"
    rawNumber: string;     // ဖုန်းခေါ်ဆိုရန် tel: format ဥပမာ: "+959798123456" သို့မဟုတ် "09798123456"
    alternateNumber?: string;
  };

  // Additional Quick Contacts (Optional Viber / Telegram / Location if needed)
  viberNumber?: string;
  telegramUsername?: string;
  location?: string;
  workingHours?: string;

  // 3 Main Services (အဓိကလုပ်ငန်း ၃ မျိုး)
  services: BusinessService[];

  // Bottom Quote (EXACTLY AS REQUIRED - DO NOT CHANGE)
  footerQuote: {
    line1: string;
    line2: string;
  };
}

export const businessConfig: BusinessConfig = {
  // Profile ဓာတ်ပုံ (Web URL တိုင်းတွင် မည်သူမဆို တိုက်ရိုက်မြင်တွေ့ရမည့် ပုံ)
  profileImage: "/zay_gyi_profile.jpg",

  // အဓိက Brand Title
  brandTitle: "Mobile Service & Second-Hand",

  // အောက်တွင် မြန်မာစာဖြင့် ဖော်ပြချက်
  tagline: "ဖုန်းအရောင်းအဝယ် • အလဲအထပ် • Service • ဖုန်းဘုတ်ပြား",

  // Facebook Profile ခလုတ်နှင့် Link
  facebook: {
    buttonLabel: "Facebook Profile",
    url: "https://www.facebook.com/share/19UcZtH2YD/",
    profileImage: "/zay_gyi_profile.jpg",
  },

  // ဖုန်းဆက်သွယ်ရန် ခလုတ်နှင့် ဖုန်းနံပါတ် (CHANGE PHONE NUMBER HERE)
  phone: {
    buttonLabel: "ခေါ်ဆိုမည်",
    displayNumber: "09 958 865 807", // မိမိဖုန်းနံပါတ်
    rawNumber: "09958865807",        // tel: link အတွက်
  },

  // ဆက်သွယ်ရန် ထပ်ဆောင်းအချက်အလက် (Optional)
  viberNumber: "09958865807",
  location: "ရန်ကုန်မြို့ / မန္တလေးမြို့ (သို့မဟုတ် ဆိုင်လိပ်စာ)",
  workingHours: "နေ့စဉ် မနက် ၉:၀၀ မှ ည ၈:၀၀ အထိ",

  // အဓိကလုပ်ငန်း ၃ မျိုး (3 Main Services)
  services: [
    {
      id: "buy-sell-exchange",
      icon: "📱",
      title: "ဖုန်း အရောင်း / အဝယ် / အလဲအထပ်",
      shortDesc: "Second-Hand ဖုန်းကောင်း ဖုန်းသန့်များ စိတ်ချရသော အာမခံဖြင့် ဝယ်ယူ၊ ရောင်းချ၊ လဲလှယ်နိုင်ပါသည်။",
      highlights: ["Second-Hand စစ်ဆေးပြီးသား", "ဈေးနှုန်းမှန်ကန်မှု", "အလဲအထပ် အဆင်ပြေစေမှု"],
    },
    {
      id: "mobile-service",
      icon: "🔧",
      title: "ဖုန်း Service",
      shortDesc: "Hardware နှင့် Software ပြဿနာများ၊ ဖုန်းမှန်လဲလှယ်ခြင်း၊ ဘက်ထရီလဲလှယ်ခြင်းတို့ကို ကျွမ်းကျင်စွာ ပြုပြင်ပေးပါသည်။",
      highlights: ["Hardware & Software Service", "ဖုန်းမှန်နှင့် ဘက်ထရီ"],
    },
    {
      id: "motherboard",
      icon: "🧩",
      title: "ဖုန်းဘုတ်ပြား အဝယ် / အရောင်း",
      shortDesc: "ဖုန်းဘုတ်ပြား အကောင်း/အပျက် အဝယ်အရောင်းနှင့် အပိုပစ္စည်းများကို သင့်တင့်သော ဈေးနှုန်းဖြင့် ဝန်ဆောင်မှုပေးပါသည်။",
      highlights: ["Original Motherboards", "ဘုတ်အကောင်း/အပျက် အဝယ်", "အပိုပစ္စည်း စုံလင်မှု"],
    },
  ],

  // အောက်ဆုံးစာသား (EXACTLY AS REQUIRED)
  footerQuote: {
    line1: "✨ Quality သည် ကျွန်တော်ရဲ့ ဦးစားပေး ဖြစ်ပြီး",
    line2: "🤝 ယုံကြည်မှု သည် ကျွန်တော်၏တန်ဖိုး ဖြစ်ပါသည်။ 💎",
  },
};
