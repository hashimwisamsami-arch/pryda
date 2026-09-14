PRYDA+ Design Studio

PRYDA+ هو مشروع موقع Portfolio لاستوديو تصميم وتطوير مواقع إلكترونية.
المشروع يركز على تقديم هوية بصرية مستقبلية، وتجربة استخدام أنيقة، وتصميم Glassmorphism مبني على خلفية Dark Navy مع درجات Aqua / Cyan وإضاءات ناعمة.

Project Type: Creative Agency / Web Design Studio Portfolio

✨ About the Project

تم تصميم PRYDA+ ليكون موقعًا يعرض أعمال الاستوديو وخدماته وفلسفته بطريقة بصرية متميزة، بدل الاعتماد على تخطيط تقليدي للمواقع.

الفكرة الأساسية للمشروع هي:

تصميم مستقبلي واحترافي.

Glassmorphism كجزء أساسي من الهوية البصرية.

استخدام Aqua / Cyan glow فوق خلفية Dark Navy.

استخدام اللون البرتقالي بشكل محدود لإبراز الإجراءات الرئيسية.

تصميم Responsive يعيد ترتيب المحتوى على الشاشات الصغيرة.

بنية React Component-Based سهلة التطوير والصيانة.

الهوية البصرية تعتمد على أسطح شفافة، Blur، حدود خفيفة، Glow، ومساحات فارغة كافية لإبراز التصميم.

🎯 Target Audience

الموقع موجه بشكل أساسي إلى:

الشركات الصغيرة والمتوسطة.

أصحاب العلامات التجارية.

المسوقين وأصحاب المشاريع الذين يبحثون عن موقع مخصص.

المهتمين بتصميم وتطوير المواقع الحديثة.

🛠️ Tech Stack

Frontend

React

Vite

JavaScript / JSX

Tailwind CSS

Styling

Tailwind CSS

CSS Variables

Custom Design System

Glassmorphism

Responsive CSS

Fonts

Inter

Oswald

Architecture

Component-Based Architecture

Constants for static data

Utils for reusable logic

Local component state where appropriate

🎨 Design System

تم بناء Design System موحد قبل بناء أقسام الموقع.

Color Palette

النظام الأساسي يعتمد على:

Dark Navy

Deep Blue

Turquoise

Cyan

Aqua Glow

Glass White

Warm Orange CTA

البرتقالي محجوز بشكل أساسي للـ Primary CTA والإجراءات المهمة.

Glassmorphism

جميع الوحدات الرئيسية تعتمد على:

Semi-transparent surface

Backdrop blur

Subtle border

Soft glow

Rounded corners

Inner highlight

الهدف هو الحفاظ على هوية Glass متناسقة بدل تحويل الواجهة إلى مجموعة من البطاقات المسطحة.

Typography

النظام يعتمد بشكل أساسي على وزنين:

Regular للنصوص.

Bold / Condensed للعناوين والـ Logo.

📐 Container System

الموقع يعتمد على Container مركزي موحد بعرض أساسي يقارب 740px، مع Responsive padding على الشاشات المختلفة.

هذا يسمح بالحفاظ على:

عرض متناسق للمحتوى.

مساحات فارغة مناسبة.

محاذاة موحدة لجميع الأقسام.

تجربة أفضل على الهاتف والكمبيوتر.

🧱 Project Structure

src/
│
├── assets/
│ ├── WALLPAPER_1
│ ├── WALLPAPER_2
│ ├── ...
│ └── WALLPAPER_9
│
├── components/
│ │
│ ├── common/
│ │ ├── Logo.jsx
│ │ └── Search.jsx
│ │
│ ├── layout/
│ │ ├── AnnouncementBar.jsx
│ │ ├── Navbar.jsx
│ │ └── Footer.jsx
│ │
│ ├── home/
│ │ ├── Hero.jsx
│ │ ├── FeaturedWorks.jsx
│ │ ├── CaseStudy.jsx
│ │ ├── Services.jsx
│ │ ├── AboutStudio.jsx
│ │ ├── Advantages.jsx
│ │ ├── Stats.jsx
│ │ ├── Process.jsx
│ │ ├── Testimonials.jsx
│ │ ├── FAQ.jsx
│ │ └── FinalCTA.jsx
│ │
│ └── ui/
│ ├── GlassCard.jsx
│ ├── Button.jsx
│ ├── IconButton.jsx
│ ├── SectionHeading.jsx
│ └── Container.jsx
│
├── constants/
│ ├── navigation.js
│ ├── projects.js
│ ├── services.js
│ ├── footer.js
│ └── site.js
│
├── utils/
│ └── wallpapers.js
│
├── App.jsx
├── main.jsx
└── index.css

🧩 Architecture

components/

تحتوي على مكونات الواجهة.

يتم فصل كل قسم رئيسي في Component مستقل لتجنب وجود App.jsx ضخم.

components/ui/

تحتوي على المكونات القابلة لإعادة الاستخدام:

Container

GlassCard

Button

IconButton

SectionHeading

components/common/

مكونات مشتركة مثل:

Logo

Search

components/layout/

مكونات التخطيط العام:

AnnouncementBar

Navbar

Footer

components/home/

أقسام الصفحة الرئيسية.

constants/

تحتوي على البيانات الثابتة القابلة للتعديل، مثل:

Navigation

Projects

Services

Footer

Site content

يتم فصل البيانات عن JSX لتسهيل تعديل المحتوى وإضافة عناصر جديدة.

utils/

تحتوي على المنطق المساعد القابل لإعادة الاستخدام.

مثال:

wallpapers.js

يحتوي على getWallpapers() لجلب وترتيب صور WALLPAPER\_\* بدل تكرار import.meta.glob داخل أكثر من Component.

🚀 Main Sections

1. Announcement Bar

شريط علوي صغير يحتوي على رسالة ترحيبية واستعمال بسيط للـ Glow.

2. Navbar

يحتوي على:

PRYDA+

Design Studio

Navigation Links

Search

Mobile Menu

على الهاتف يتحول إلى Logo + Menu Button مع Mobile Navigation Panel.

3. Hero

أهم منطقة بصرية في الصفحة.

يتكون من:

Eyebrow

Main Heading

Description

Primary CTA

Secondary CTA

Project Image

Watermark

Previous / Next Controls

Pagination

ويستخدم Carousel للصور.

الـ Carousel يدعم:

Auto-play

Pause أثناء التفاعل

Previous / Next

Pagination

Keyboard navigation

Responsive layout

4. Featured Works

يعرض المشاريع:

Water Horizon

Stock Artwork

Magic Interior Kid

Lightnings Above Amsterdam

Crazy Coaster

Fast Of My Life

Homelessness

كل مشروع عنصر قابل للتفاعل.

5. Case Study

المشروع الرئيسي:

Stock Artwork

ويحتوي على:

Image Gallery

Thumbnails

Project Description

Project Metadata

CTA

أي بيانات غير موثقة مثل Client وRating وStatistics يتم التعامل معها كبيانات مؤقتة بوضوح.

6. Services

الخدمات:

تصميم الشركات

البرمجة وأنظمة إدارة المحتوى

حلول ويب

الشعار والمطبوعات

على Desktop تستخدم Tabs.

على Mobile تتحول إلى Accordion.

7. About Studio

قسم يشرح فلسفة PRYDA+ باعتباره Studio وليس وكالة تقليدية.

الهدف ليس مجرد تقديم وصف، بل إبراز طريقة العمل المباشر بين فريق التصميم والتطوير.

8. Advantages

ثلاثة محاور:

أنظمة تصميم قابلة للتوسع

البناء على نظام إدارة المحتوى المناسب لك

إطلاق سريع وصيانة سهلة

كل ميزة تستخدم Glass UI.

9. Statistics

يعرض:

Projects

Years

Client Retention

القيم غير الموثقة تبقى مؤقتة باستخدام [X] ولا يتم تقديمها كأرقام حقيقية.

10. Process

طريقة العمل:

01 Discovery
02 Design
03 Build
04 Launch & Support

كل مرحلة تحتوي على رقم وعنوان ووصف مختصر.

11. Testimonials

يعرض شهادات العملاء.

في الوقت الحالي يتم استخدام Placeholder واضح إلى أن تتوفر شهادات حقيقية وموثقة.

12. FAQ

Accordion يحتوي على:

كم يستغرق المشروع النموذجي من الوقت؟

هل تعملون مع أنظمة إدارة محتوى حالية؟

هل تقدمون خيارات دعم مستمر بعد الإطلاق؟

13. Final CTA

قسم ختامي قوي بصريًا:

هل لديك مشروع في ذهنك؟

لنصمم شيئاً يبرز بالفعل.

ويحتوي على CTA:

ابدأ المحادثة

ويستخدم اللون البرتقالي بشكل أكثر وضوحًا من بقية أجزاء الموقع.

14. Footer

Footer من أربعة أعمدة:

الرئيسية

PRYDA

الخدمات

الاتصال

مع:

PRYDA+

وحقوق النشر:

© 2026 PRYDA. جميع الحقوق محفوظة.

🖼️ Images

صور المشروع موجودة داخل:

src/assets/

وتبدأ من:

WALLPAPER_1

حتى:

WALLPAPER_9

يتم التعامل معها بواسطة:

src/utils/wallpapers.js

والـ Hero يستخدم عددًا محددًا من الصور عبر:

getWallpapers(5);

بينما يمكن لأي Component آخر طلب عدد مختلف من الصور.

🌐 RTL / LTR

واجهة الموقع تستخدم:

<html lang="en" dir="rtl">

لأن المحتوى الأساسي عربي.

يتم عزل بعض العناصر البصرية التي تحتاج اتجاهًا مستقلًا باستخدام dir="ltr"، مثل:

الأسهم

أرقام الـ Slides

Pagination

بعض القيم الرقمية

وهذا يمنع RTL من قلب العناصر البصرية التي يجب أن تحتفظ باتجاهها الطبيعي.

📱 Responsive Design

التصميم لا يعتمد على تصغير Desktop فقط.

Desktop

Central Container

Two-column Hero

Tabs

Four-column Footer

Mobile

Stacked Hero

Stacked Case Study

Accordion Services

Mobile Navigation

Reduced spacing and visual glow

Responsive Footer

♿ Accessibility

المشروع يراعي أساسيات الوصول، خصوصًا في العناصر التفاعلية:

Keyboard navigation

Focus states

ARIA labels

Semantic HTML

Accessible buttons

Carousel keyboard controls

Accordion states

Reduced motion support

📂 Static Data Strategy

بدل كتابة البيانات مباشرة داخل JSX:

constants/
├── navigation.js
├── projects.js
├── services.js
├── footer.js
└── site.js

مثلًا المشاريع موجودة في:

constants/projects.js

والخدمات في:

constants/services.js

والمحتوى العام في:

constants/site.js

هذا يجعل تحديث المحتوى أسهل دون تعديل بنية الـ Components.

🧪 Current Status

المشروع حاليًا يحتوي على:

React + Vite

Tailwind CSS

Design System

Global Layout

Hero Carousel

Featured Works

Case Study

Services Tabs / Accordion

About Studio

Advantages

Statistics

Process

Testimonials

FAQ

Final CTA

Footer

🗺️ Development Roadmap

بعد بناء الأقسام الأساسية، تكون مراحل الصقل النهائية:

Global Layout
↓
Hero
↓
Featured Works
↓
Case Study
↓
Services
↓
About Studio
↓
Advantages
↓
Statistics
↓
Process
↓
Testimonials
↓
FAQ
↓
Final CTA
↓
Footer Polish
↓
Responsive Refinement
↓
Interactions / Motion
↓
Accessibility Review
↓
Performance
↓
Final QA

⚠️ Content Notes

بعض البيانات الموجودة في المشروع مؤقتة ويجب استبدالها قبل الإطلاق، خصوصًا:

Client names

Ratings

Statistics

Testimonials

لا يجب تقديم أي بيانات غير موثقة على أنها بيانات حقيقية.

🎨 Design Principles

المشروع يحافظ على المبادئ التالية:

لا توجد بطاقات مسطحة ومعتمة كأسلوب أساسي.

Glass UI هو الأسلوب البصري الأساسي.

اللون البرتقالي يستخدم بشكل محدود.

Glow يجب أن يبقى ناعمًا ولا يطغى على المحتوى.

المساحات البيضاء مهمة لإظهار تأثيرات Glass.

العناوين واضحة وقوية.

النصوص الداعمة قصيرة.

نفس Border Radius يستخدم عبر Cards وButtons وImages وInputs وNavigation.

الأولوية للأداء وسهولة الصيانة وإمكانية الوصول قبل إضافة تأثيرات غير ضرورية.

📦 Installation

بعد استنساخ المشروع:

npm install

تشغيل المشروع في بيئة التطوير:

npm run dev

بناء نسخة Production:

npm run build

معاينة نسخة Production:

npm run preview

👨‍💻 Project Philosophy

PRYDA+ ليس مجرد صفحة Portfolio.

الهدف هو بناء نظام واجهة يمكن تطويره لاحقًا بدون إعادة بناء التصميم من الصفر.

لهذا تم فصل:

Data
↓
Constants

Reusable Logic
↓
Utils

UI
↓
Components

Global Styling
↓
index.css

وهذا يجعل المشروع أكثر قابلية للتوسع والصيانة أثناء إضافة الصفحات والمحتوى والتفاعلات مستقبلًا.

📄 Reference Documentation

التصميم الحالي مبني على وثيقتين أساسيتين:

ANALYSIS.md — تحليل الهوية البصرية، الأقسام، المحتوى، الجمهور، والـ Responsive behavior.

BUILD_PLAN.md — خطة التنفيذ والبنية المعمارية وترتيب مراحل التطوير.

📅 Copyright

© 2026 PRYDA. All rights reserved.
