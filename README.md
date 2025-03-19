# فلّه | Fallah

موقع فلّه - منصة للألعاب التعليمية والمحتوى التفاعلي العربي

## نبذة عن المشروع

**فلّه (Fallah)** هو موقع يجمع مجموعة من التطبيقات والألعاب التفاعلية العربية في مكان واحد. يضم الموقع حاليًا:

- **حروف (Hroof)**: لعبة تفاعلية للحروف العربية والإنجليزية والأرقام
- **أسئلة (Questions)**: تطبيق أسئلة تفاعلية متنوعة

## المتطلبات الأساسية

- Node.js (النسخة 14 أو أعلى)
- npm أو yarn
- حساب على Vercel للنشر (اختياري)

## كيفية البدء

1. استنساخ المشروع:
```bash
git clone <رابط-المستودع>
cd fallah-main
```

2. تثبيت الاعتمادات:
```bash
npm install
# أو
yarn install
```

3. تشغيل المشروع محليًا:
```bash
npm run dev
# أو
yarn dev
```

4. الوصول للموقع محليًا على:
```
http://localhost:3000
```

## هيكل المشروع

```
fallah-main/
├── public/             # الملفات الثابتة والصور
├── src/
│   ├── app/            # صفحات التطبيق (Next.js App Router)
│   ├── components/     # المكونات المشتركة
│   └── styles/         # ملفات التنسيق
├── package.json
└── README.md
```

## كيفية ربط المشاريع الفرعية

يمكن ربط المشاريع الفرعية مثل حروف وأسئلة مع موقع فلّه الرئيسي بعدة طرق:

### الطريقة 1: الاستضافة كمسارات فرعية على Vercel

1. **تكوين مسارات فرعية**: إضافة ملف `vercel.json` في مجلد المشروع الرئيسي:

```json
{
  "rewrites": [
    { "source": "/hroof", "destination": "https://hroof-react.vercel.app" },
    { "source": "/hroof/:path*", "destination": "https://hroof-react.vercel.app/:path*" },
    { "source": "/questions", "destination": "https://questions-vite.vercel.app" },
    { "source": "/questions/:path*", "destination": "https://questions-vite.vercel.app/:path*" }
  ]
}
```

### الطريقة 2: استخدام Monorepo

يمكن تنظيم المشروع كـ monorepo حيث تتم استضافة جميع المشاريع في مستودع واحد.

## النشر على Vercel

1. أنشئ حسابًا على [Vercel](https://vercel.com) إذا لم يكن لديك حساب بالفعل.
2. اربط المستودع بمشروع جديد على Vercel.
3. اضبط متغيرات البيئة المطلوبة (إن وجدت).
4. انشر المشروع!

## التطوير

تم تطوير هذا المشروع بواسطة **عناد عسكر**

## الترخيص

جميع الحقوق محفوظة &copy; 2025 