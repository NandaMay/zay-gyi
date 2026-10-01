# 📱 Mobile Service & Second-Hand — Digital Business Profile

ဖုန်းအရောင်းအဝယ်၊ အလဲအထပ်၊ Service နှင့် ဖုန်းဘုတ်ပြား အရောင်းအဝယ်လုပ်ငန်းအတွက် **Premium Glass Neon Digital Business Profile** Website ဖြစ်ပါသည်။ 

QR Code ဖြင့် ဝင်ရောက်အသုံးပြုရန် အထူးဒီဇိုင်းပြုလုပ်ထားပြီး၊ ဖုန်းများတွင် အလွန်မြန်ဆန်စွာ ဖွင့်လှစ်နိုင်ပါသည်။

---

## ✨ Features (အဓိက အင်္ဂါရပ်များ)

- 📱 **QR Code Ready**: QR Code scan ဖတ်လိုက်သည်နှင့် လုပ်ငန်း Profile၊ Facebook link၊ ဝန်ဆောင်မှု ၃ မျိုးနှင့် ဖုန်းခေါ်ဆိုရန် ခလုတ်ကို ချက်ချင်းမြင်တွေ့နိုင်ပါသည်။
- 🇲🇲 **သဘာဝကျသော မြန်မာမူ Design**: စက်ရုပ်မဆန်သော သဘာဝကျသည့် မြန်မာစာ Unicode Font စနစ်ဖြင့် တည်ဆောက်ထားပါသည်။
- 💎 **Premium Glass Neon UI/UX**: Dark Theme, Frosted Glass, Subtle Neon Cyan/Blue Accents နှင့် ချောမွေ့သော Micro Interactions များ ပါဝင်သည်။
- ⚙️ **One-File Configuration**: ဖုန်းနံပါတ်၊ ဆိုင်လိပ်စာနှင့် Facebook link များကို `src/config/businessConfig.ts` တစ်နေရာတည်းမှ အလွယ်တကူ ပြောင်းလဲနိုင်ပါသည်။
- ⚡ **Direct Call & Copy**: ဖုန်းခေါ်ဆိုရန် ခလုတ်ကို နှိပ်ပါက `tel:` ဖြင့် တိုက်ရိုက်ဖုန်းခေါ်နိုင်ပြီး၊ ဖုန်းနံပါတ်ကိုလည်း 1-Tap ဖြင့် ကူးယူ (Copy) နိုင်ပါသည်။
- 🖨️ **Built-in QR Code Generator**: Customer များ သို့မဟုတ် မိတ်ဆွေများအား မိမိ Business Profile link ကို မျှဝေရန် Screen ပေါ်တွင် QR Code တိုက်ရိုက်ပြသနိုင်ခြင်းနှင့် ဒေါင်းလုဒ်ဆွဲနိုင်ခြင်း။

---

## 🛠️ Configuration (ဖုန်းနံပါတ်နှင့် အချက်အလက်များ ပြောင်းလဲရန်)

ဖုန်းနံပါတ် သို့မဟုတ် အချက်အလက်များကို ပြောင်းလဲလိုပါက `src/config/businessConfig.ts` ဖိုင်ကို ဖွင့်ပြီး ပြင်ဆင်နိုင်ပါသည်:

```typescript
// File: src/config/businessConfig.ts

export const businessConfig: BusinessConfig = {
  // အဓိက Brand Title
  brandTitle: "Mobile Service & Second-Hand",

  // အောက်တွင် မြန်မာစာဖြင့် ဖော်ပြချက်
  tagline: "ဖုန်းအရောင်းအဝယ် • အလဲအထပ် • Service • ဖုန်းဘုတ်ပြား",

  // Facebook Profile ခလုတ်နှင့် Link
  facebook: {
    buttonLabel: "Facebook Profile",
    url: "https://www.facebook.com/share/19UcZtH2YD/",
  },

  // ဖုန်းဆက်သွယ်ရန် ခလုတ်နှင့် ဖုန်းနံပါတ်
  phone: {
    buttonLabel: "ဆက်သွယ်ရန်",
    displayNumber: "09 798 123 456", // မိမိဖုန်းနံပါတ်
    rawNumber: "09798123456",        // tel: link အတွက်
  },
  ...
};
```

---

## 🚀 Local Development (စက်ထဲတွင် စမ်းသပ်ရန်)

```bash
# Dependencies သွင်းရန်
npm install

# Development server ဖွင့်ရန်
npm run dev
```

---

## 📦 Production Build

```bash
npm run build
```

အထက်ပါ command ကို run ပြီးပါက `dist/` folder ထဲသို့ static web files များ ထွက်ရှိလာမည် ဖြစ်ပါသည်။

---

## ☁️ Cloudflare Pages တွင် Deploy ပြုလုပ်နည်း

1. GitHub တွင် repository အသစ်တစ်ခု ဆောက်ပြီး ဤ project code များကို push လုပ်ပါ။
2. [Cloudflare Dashboard](https://dash.cloudflare.com/) သို့ သွားပြီး **Workers & Pages** > **Create application** > **Pages** > **Connect to Git** ကို ရွေးချယ်ပါ။
3. အောက်ပါ Build Settings များကို ထည့်သွင်းပါ:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. **Save and Deploy** ကို နှိပ်လိုက်ပါက စက္ကန့်ပိုင်းအတွင်း Live Website ရရှိမည်ဖြစ်ပါသည်။

---

## 📜 Bottom Quote (အာမခံချက်နှင့် တန်ဖိုးထားမှု)

> ✨ Quality သည် ကျွန်တော်ရဲ့ ဦးစားပေး ဖြစ်ပြီး  
> 🤝 ယုံကြည်မှု သည် ကျွန်တော်၏တန်ဖိုး ဖြစ်ပါသည်။ 💎
