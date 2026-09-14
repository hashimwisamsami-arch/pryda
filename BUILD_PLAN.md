BUILD_PLAN.md

1. المرجعية

الملفات المرجعية

/
├── ANALYSIS.md
└── BUILD_PLAN.md

ANALYSIS.md

المرجع الأساسي للمشروع من ناحية:

هوية الموقع.

الـ Visual Style.

الألوان.

Glassmorphism.

تخطيط الأقسام.

محتوى الموقع.

الجمهور المستهدف.

Responsive behavior.

توصيات التصميم.

النصوص المؤقتة والحقيقية.

الأقسام المقترحة مستقبلًا.

قاعدة: لا يتم تغيير قرار تصميمي أساسي مستخرج من ANALYSIS.md إلا إذا تم تسجيل التغيير في قسم قرارات وقيود ثابتة.

آخر التحديثات

التاريخالتحديث

2026-09-14إنشاء خطة بناء الموقع اعتمادًا على ANALYSIS.md
—بدء إعداد بنية React/Vite/Tailwind
—لم يبدأ التنفيذ البرمجي بعد

---

2. هيكل الملفات المطلوب

البنية الأساسية المقترحة:

src/
│
├── App.jsx
├── main.jsx
├── index.css
│
├── components/
│   ├── layout/
│   │   ├── AnnouncementBar.jsx
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   │
│   ├── home/
│   │   ├── Hero.jsx
│   │   ├── FeaturedWorks.jsx
│   │   ├── CaseStudy.jsx
│   │   ├── Services.jsx
│   │   ├── AboutStudio.jsx
│   │   ├── Advantages.jsx
│   │   ├── Stats.jsx
│   │   ├── Process.jsx
│   │   ├── Testimonials.jsx
│   │   ├── FAQ.jsx
│   │   └── FinalCTA.jsx
│   │
│   ├── ui/
│   │   ├── GlassCard.jsx
│   │   ├── Button.jsx
│   │   ├── SectionHeading.jsx
│   │   ├── IconButton.jsx
│   │   └── Container.jsx
│   │
│   └── common/
│       ├── Search.jsx
│       └── Logo.jsx
│
├── context/
│   ├── AppContext.jsx
│   └── SearchContext.jsx
│
└── constants/
    ├── navigation.js
    ├── projects.js
    ├── services.js
    ├── footer.js
    └── site.js

وظيفة الملفات الأساسية

main.jsx

نقطة تشغيل التطبيق.

المسؤول عن:

تحميل React.

تحميل App.

تحميل CSS.

تهيئة الـ Context Providers عند الحاجة.

---

App.jsx

المكوّن الرئيسي للتطبيق.

مسؤوليته:

App
│
├── AnnouncementBar
├── Navbar
│
├── Main
│   ├── Hero
│   ├── FeaturedWorks
│   ├── CaseStudy
│   ├── Services
│   ├── AboutStudio
│   ├── Advantages
│   ├── Stats
│   ├── Process
│   ├── Testimonials
│   ├── FAQ
│   └── FinalCTA
│
└── Footer

يجب ألا يحتوي App.jsx على تفاصيل UI ضخمة؛ دوره الأساسي هو تركيب الصفحة.

---

index.css

الطبقة العامة للتصميم.

يحتوي على:

Tailwind imports.

CSS variables.

الخطوط.

Global reset.

خلفية الموقع.

Scroll behavior.

العناصر العامة.

تأثيرات Glassmorphism العامة.

Selection.

Scrollbar عند الحاجة.

---

components/

جميع مكونات الواجهة.

قاعدة مهمة:

لا نضع صفحة كاملة ضخمة داخل Component واحد.

كل قسم رئيسي له Component مستقل.

---

context/

يستخدم فقط للحالة المشتركة التي تحتاجها عدة مكونات.

مثل:

حالة البحث.

الحالة العامة للتطبيق.

حالة الـ mobile menu إذا احتاجت أكثر من Component.

لا نستخدم Context لكل شيء.

الحالات المحلية مثل:

const [activeSlide, setActiveSlide] = useState(0);

تبقى داخل Component الخاص بها.

---

constants/

جميع البيانات الثابتة التي لا يجب دفنها داخل JSX.

مثلاً:

export const projects = [
  {
    title: "Stock Artwork",
    category: "Web Design",
    ...
  }
];

وهذا يجعل إضافة مشروع جديد سهلة بدون تعديل بنية الـ Components.

---

3. تقسيم المشروع إلى أجزاء

المرحلة 0 — Project Foundation

الهدف

إنشاء أساس المشروع قبل بناء أي UI.

يبنى فيها:

React
Vite
Tailwind CSS

وتهيئة:

main.jsx

App.jsx

index.css

بنية المجلدات.

الخطوط.

CSS variables.

نظام الألوان.

Container system.

النتيجة

مشروع React يعمل بشكل صحيح مع Tailwind، بدون بناء أقسام الموقع بعد.

---

المرحلة 1 — Design System

هذه المرحلة مهمة جدًا لأن الموقع يعتمد بشكل أساسي على الهوية البصرية.

يبنى فيها:

الألوان

نظام:

Dark Navy
Deep Blue
Turquoise
Cyan
Aqua Glow
Glass White
Warm Orange CTA

بدل كتابة ألوان عشوائية داخل كل Component.

---

Glass System

إنشاء نظام موحد للـ Glassmorphism:

Glass Background
Glass Border
Glass Blur
Glass Shadow
Inner Glow

مثلاً Conceptually:

Glass Card
├── translucent background
├── backdrop blur
├── subtle border
├── soft glow
└── rounded corners

---

Typography

نظام واضح:

Display / Hero
Heading
Body
Small Text
Label

مع الالتزام بوزنين أساسيين فقط قدر الإمكان.

---

UI Components

بناء:

GlassCard
Button
IconButton
SectionHeading
Container
Logo

هذه المكونات ستستخدمها بقية أجزاء الموقع.

---

المرحلة 2 — Global Layout

يبنى:

AnnouncementBar
Navbar
Footer

AnnouncementBar

يحتوي:

رسالة الترحيب.

الأسهم.

Glow بسيط.

ارتفاع صغير.

النص:

> ‹ أهلاً بكم في استوديو التصميم PRYDA+ ›

---

Navbar

يحتوي:

PRYDA+
DESIGN STUDIO

الرئيسية
الخدمات
العملاء
التوصيات
معرض الأعمال
الاستوديو
اتصل بنا

Search

Mobile

يتحول إلى:

Logo
Menu Button

وعند الفتح:

Mobile Navigation Panel

---

Footer

أربعة أعمدة:

الرئيسية
PRYDA
الخدمات
الاتصال

ثم:

PRYDA+
© 2026 PRYDA. جميع الحقوق محفوظة.

---

المرحلة 3 — Hero Section

هذه أهم منطقة بصرية في الصفحة.

يبنى:

Hero
├── Left Content
│   ├── Eyebrow/Label
│   ├── Main Heading
│   ├── Description
│   └── CTA
│
└── Right Visual
    ├── Project Image
    ├── Watermark
    ├── Arrows
    └── Pagination Dots

النص الأساسي

العنوان:

> رؤية مستقبلية لتصميم المواقع الإلكترونية.

الوصف:

> نصمم ونبني مواقع إلكترونية مدروسة بعناية من البكسل الأول حتى آخر سطر برمجيات — بنية نظيفة، مظهر بصري متميز، وواجهات يستمتع المستخدمون بالفعل بتصفحها.

CTA

استعرض أعمالنا
احصل على عرض سعر

الوظائف

Carousel.

Previous / Next.

Pagination.

Auto-play إن كان مناسبًا.

Pause عند التفاعل.

Keyboard accessibility.

Mobile

يتحول:

Content
↓
Image
↓
Controls

بدلاً من العمودين.

---

المرحلة 4 — Featured Works

يبنى:

FeaturedWorks
├── Section Heading
├── Project List
└── CTA

المشاريع:

Water Horizon
Stock Artwork
Magic Interior Kid
Lightnings Above Amsterdam
Crazy Coaster
Fast Of My Life
Homelessness

كل عنصر يجب أن يكون قابلًا للتفاعل.

مثلاً:

→ Stock Artwork

CTA

> عرض معرض الأعمال كاملةً

---

المرحلة 5 — Case Study

المشروع الأساسي:

Stock Artwork

Desktop

┌───────────────────────────────┐
│                               │
│ Images          Project Info  │
│                               │
├───────────────────────────────┤
│ Client | Difficulty | Time    │
│ Rating                         │
└───────────────────────────────┘

المحتوى

العنوان:

> Stock Artwork

العنوان الفرعي:

> هُوية بصرية مبنية حول الصور، وليس فقط التخطيط

الوصف:

> احتاج هذا المشروع إلى لغة تصميم مرنة بما يكفي لعرض مكتبة صور كبيرة ومتنوعة دون إحداث فوضى بصرية. قمنا ببناء نظام معرض وحداتي يتيح للأعمال الفنية أن تتصدر المشهد.

Metadata

Client
Difficulty
Time
Rating

أي بيانات حقيقية غير متوفرة تبقى مؤقتة بوضوح ولا يتم تقديمها على أنها حقيقية.

---

المرحلة 6 — Services

يبنى:

Services
├── Heading
│
├── Service Tabs
│
└── Active Service Content
    ├── Heading
    ├── Description
    ├── CMS Platforms
    └── CTA

الخدمات:

تصميم الشركات
البرمجة وأنظمة إدارة المحتوى
حلول ويب
الشعار والمطبوعات

Desktop

Tabs        Content
─────       ─────────────
Service 1   Heading
Service 2   Description
Service 3   Platforms
Service 4   CTA

Mobile

يصبح:

Accordion

بحسب ANALYSIS.md.

---

المرحلة 7 — About Studio

قسم إضافي مقترح في التحليل.

يبنى:

AboutStudio
├── Heading
├── Description
└── Supporting Content

النص:

> استوديو، وليس وكالة تقليدية. PRYDA+ فريق صغير من الخبراء المخضرمين. لا توجد طبقات إدارة ولا تسليم للمهام — الأشخاص الذين يصممون موقعك هم أنفسهم من يبنونه.

الهدف هنا هو بيع فلسفة الاستوديو وليس مجرد إضافة قسم نصي.

---

المرحلة 8 — Advantages

يبنى:

ثلاثة محاور رئيسية:

أنظمة تصميم قابلة للتوسع

البناء على نظام إدارة المحتوى المناسب لك

إطلاق سريع وصيانة سهلة

كل ميزة تكون ضمن Glass UI.

---

المرحلة 9 — Statistics

يبنى:

Projects
Years
Client Retention

مثال مؤقت:

[X]+
Projects

[X]
Years

[X]%
Client Retention

قيد مهم

لا يتم وضع أرقام وهمية نهائية.

قبل إطلاق الموقع يجب استبدال:

[X]

ببيانات حقيقية وموثقة.

---

المرحلة 10 — Process

يبنى:

How We Work

أربع خطوات:

01 Discovery
02 Design
03 Build
04 Launch & Support

كل خطوة تحتوي:

رقم.

عنوان.

وصف قصير.

---

المرحلة 11 — Testimonials

يبنى:

Testimonials
├── Quote
├── Client Name
└── Company

في البداية يمكن استخدام:

Testimonial placeholder

لكن يجب ألا يظهر في النسخة النهائية كأنه تقييم حقيقي.

---

المرحلة 12 — FAQ

يبنى كـ Accordion.

الأسئلة:

كم يستغرق المشروع النموذجي من الوقت؟

هل تعملون مع أنظمة إدارة محتوى حالية؟

هل تقدمون خيارات دعم مستمر بعد الإطلاق؟

كل سؤال:

Question

- Answer

وعند فتحه:

Question
−
Answer

---

المرحلة 13 — Final CTA

قسم ختامي قوي بصريًا.

العنوان

> هل لديك مشروع في ذهنك؟

النص

> لنصمم شيئاً يبرز بالفعل.

CTA

> ابدأ المحادثة

يجب أن يكون هذا القسم من أقوى استخدامات اللون البرتقالي.

---

المرحلة 14 — Responsive Design

لا نعتبر الـ Mobile مجرد نسخة أصغر من Desktop.

Desktop

Central Container
Two Columns
Horizontal Layouts
Four-column Footer

Tablet

Reduced spacing
Flexible columns
Smaller typography

Mobile

Stacked Hero
Stacked Case Study
Accordion Services
Mobile Navigation
Two/one-column Footer
Reduced glow intensity

---

المرحلة 15 — Interactions & Motion

بعد اكتمال الـ UI الأساسي.

يضاف:

Hero transitions.

Hover effects.

Glass glow transitions.

Button interactions.

Accordion animation.

Navigation transitions.

Scroll reveal بشكل معتدل.

Image transitions.

قاعدة

الحركة يجب أن تدعم التصميم ولا تتحول إلى استعراض.

---

المرحلة 16 — Accessibility & UX

قبل اعتبار الموقع مكتملًا:

Keyboard navigation
ARIA labels
Focus states
Semantic HTML
Alt text
Color contrast
Reduced motion
Accessible buttons
Accessible forms

خصوصًا:

Carousel.

Accordion.

Navigation.

Search.

---

المرحلة 17 — Final Polish

مراجعة:

Spacing
Typography
Responsive
Glass effects
Animations
Images
Buttons
Links
Footer

ثم:

Production build
Console errors
Broken links
Unused code
Performance

---

4. قيد العمل الآن

المرحلة الحالية: Project Foundation + Design System

الحالة: لم يبدأ التنفيذ البرمجي بعد.

أول شيء يجب تنفيذه:

تهيئة React + Vite + Tailwind CSS

ثم إنشاء:

src/
├── App.jsx
├── main.jsx
├── index.css
├── components/
├── context/
└── constants/

بعد ذلك يبدأ بناء الـ Design System قبل الأقسام.

لا تبدأ بـ Hero مباشرة.

السبب: جميع أجزاء الموقع تعتمد على نفس:

Glass
Colors
Typography
Spacing
Buttons
Container
Border Radius
Glow

---

5. الخطوة التالية — أهم سطر في الملف

> ابدأ بتهيئة مشروع React + Vite + Tailwind CSS، ثم أنشئ نظام التصميم الأساسي المشترك قبل بناء أي قسم من أقسام الصفحة.

هذه هي الخطوة التالية الوحيدة التي يجب تنفيذها الآن.

بعد اكتمالها يصبح الانتقال إلى:

Global Layout
→ Hero
→ Featured Works
→ Case Study
→ Services
...

منظمًا ولا يحتاج إلى إعادة بناء الواجهة لاحقًا.

---

6. قرارات وقيود ثابتة

التقنية

React
Vite
Tailwind CSS
JavaScript / JSX

استخدام أحدث الإصدارات المستقرة المتاحة وقت التنفيذ.

---

Architecture

المشروع Component-Based.

يمنع:

Huge App.jsx

ويفضل:

Small reusable components

---

Styling

الهوية الأساسية:

Dark
Futuristic
Glassmorphism
Aqua / Cyan
Blue
Subtle Glow

---

Glassmorphism

كل وحدة رئيسية يجب أن تحافظ على:

Semi-transparent surface
Blur
Subtle border
Soft glow
Rounded corners

ممنوع تحويل التصميم إلى مجموعة بطاقات مسطحة ومعتمة.

---

Orange CTA

البرتقالي يستخدم بشكل محدود.

مخصص أساسًا لـ:

Primary CTA
Important actions
Selected visual emphasis

ولا يستخدم كلون أساسي للعناصر.

---

Border Radius

يجب استخدام نظام Radius موحد:

Cards
Buttons
Images
Inputs
Navigation

بدون اختلافات عشوائية.

---

Typography

الاعتماد على وزنَين أساسيين:

Regular → Body
Bold/Condensed → Headings & Logo

العناوين بارزة، والنصوص الداعمة قصيرة.

---

Content

النصوص الطويلة ممنوعة داخل الواجهات البصرية إلا عند الحاجة.

الأفضل:

1–2 sentences

مع الاعتماد على:

Images
Typography
Spacing
Visual hierarchy

---

Responsive

Mobile ليس نسخة Desktop مصغرة.

يجب إعادة ترتيب:

Hero
Case Study
Services
Navigation
Footer

لتناسب الهاتف.

---

Services

Desktop:

Tabs

Mobile:

Accordion

---

Carousel

يجب أن يكون:

Accessible
Keyboard friendly
Responsive
Subtle controls

وألا تسيطر الأسهم والنقاط بصريًا على الصور.

---

البيانات المؤقتة

أي:

Client
Rating
Statistics
Testimonials

غير موثقة تبقى مؤقتة.

ممنوع إطلاق الموقع بأرقام أو شهادات عملاء وهمية وكأنها حقيقية.

---

Footer

الحفاظ على مفهوم:

4 Columns

مع إزالة التكرار غير الضروري.

---

Performance

لا تتم إضافة مكتبات أو Dependencies لمجرد إضافة تأثير بسيط يمكن تنفيذه بـ CSS أو React.

الأولوية:

Performance
Maintainability
Accessibility
Responsive Design
Visual Quality

---

قاعدة معمارية مهمة

البيانات مثل المشاريع والخدمات وروابط الـ Footer تكون في:

constants/

وليس داخل JSX مباشرة، عندما تكون بيانات قابلة للتكرار أو التعديل.

مثال:

constants/projects.js
constants/services.js
constants/navigation.js

بينما حالة الواجهة تظل داخل Components أو Context عند الحاجة.

---

ترتيب التنفيذ النهائي

1.  Project Setup
            ↓
2.  Design System
            ↓
3.  Global Layout
            ↓
4.  Hero
            ↓
5.  Featured Works
            ↓
6.  Case Study
            ↓
7.  Services
            ↓
8.  About Studio
            ↓
9.  Advantages
            ↓
10. Statistics
            ↓
11. Process
            ↓
12. Testimonials
            ↓
13. FAQ
            ↓
14. Final CTA
            ↓
15. Footer Polish
            ↓
16. Responsive
            ↓
17. Interactions / Motion
            ↓
18. Accessibility
            ↓
19. Performance
            ↓
20. Final QA

الحالة الحالية: 01. Project Setup

الخطوة التالية: تهيئة المشروع وإنشاء الـ Design System الأساسي، وليس بناء أقسام الموقع بعد.
