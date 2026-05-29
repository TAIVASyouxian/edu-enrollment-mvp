# Education Enrollment & Visit Booking MVP

Static Phase 1 MVP for **新北市私立快樂地幼兒園**. The public page is a parent-facing enrollment / visit-booking landing page. Parents read school information, click `預約參觀` or `入園諮詢`, and submit official information through Google Forms.

All user-facing UI text is in Traditional Chinese. Code variables remain in English.

## Public Information Used

Only the public-facing information supplied for this demo is used:

- School name: 新北市私立快樂地幼兒園
- Short brand name: 快樂地幼兒園
- Location: 新北市樹林區
- Address: 八德街118號1、2、3樓及120號1樓
- Phone: (02)8685-8888
- Type: 私立幼兒園
- Capacity: 核定人數 81人
- Tuition reference: 114學年度月收費 $16,167
- Violation record: 無裁罰紀錄

The public landing page does not display a responsible person’s name or government approval numbers.

## Scope

This version includes:

- School introduction
- Preschool-focused program information
- Three-step visit booking flow
- Parent-facing Google Forms CTAs for visit booking and enrollment inquiry
- Internal localStorage demo forms for workflow testing
- Internal staff demo dashboard
- Internal vertical digital signage preview
- CSV export for demo review only
- Reset demo data button for internal testing

This version intentionally does **not** include payment features, receipt PDFs, bank CSV import, accounting reconciliation, LINE API integration, or a real backend.

Official parent submissions are currently handled through Google Forms, while the built-in localStorage forms remain for demo/internal testing only.

## File Structure

```text
.
├── index.html
├── styles.css
├── app.js
└── README.md
```

## How To Run Locally

No build step is required.

Open `index.html` in a browser.

Routes:

- Public landing page: `index.html#/`
- Parent information section: `index.html#/programs`
- Internal demo visit booking form: `index.html#/visit`
- Internal demo enrollment inquiry form: `index.html#/inquiry`
- Internal demo submission status lookup: `index.html#/status`
- Internal demo admin dashboard: `index.html#/admin`
- Internal signage preview: `index.html#/signage`

## Admin Access

The admin dashboard is protected by a simple MVP PIN gate.

Default PIN:

```text
1234
```

Edit it in `app.js`:

```js
adminPin: "1234"
```

This PIN gate is only for demo separation between public and internal testing pages. It is not production authentication.

## Demo Data

The admin dashboard includes fake sample records only, using names like:

```text
示範家長 A
示範孩子 A
```

Do not add real parent data, student data, teacher personal information, bank account information, or private internal documents to this static MVP.

Use the admin button:

```text
重置示範資料
```

to restore the fake demo records.

## Important localStorage Warning

目前資料僅儲存在本機瀏覽器 `localStorage`，正式使用前需改為雲端資料庫、正式登入權限、備份與個資保護機制。

`localStorage` is only suitable for demo/internal testing, sales demos, UX review, and early workflow validation. It is **not suitable for official production use**, because data remains only in the browser, can be cleared by the user, is not centrally backed up, and does not provide proper access control, audit logs, encryption policy, or multi-user staff workflow.

Before using this with real families, replace `localStorage` with a secure backend database and real authentication.

## Where To Edit School Information

Edit the constants near the top of `app.js`.

```js
const SCHOOL_PROFILE = {
  schoolName: "新北市私立快樂地幼兒園",
  shortName: "快樂地幼兒園",
  location: "新北市樹林區",
  address: "新北市樹林區八德街118號1、2、3樓及120號1樓",
  phone: "(02)8685-8888",
  type: "私立幼兒園",
  capacity: "核定人數 81人",
  tuitionReference: "114學年度月收費 $16,167",
  violationRecord: "無裁罰紀錄"
};
```

Editable page content is in:

```js
const SCHOOL_CONTENT = {
  programs: [...],
  features: [...],
  routine: [...],
  photos: [...],
  signageFeatures: [...]
};
```

## Current Google Forms Setup

This MVP now uses Google Forms for official parent-facing submissions.

- Google Forms = parent-facing official forms
- Google Sheets = staff response tables
- localStorage = demo/internal testing only

Current setup:

- Public "預約參觀" CTA opens the official Google Visit Booking Form.
- Public "入園諮詢" CTA opens the official Google Enrollment Inquiry Form.
- Internal demo routes remain available for testing:
  - `#/visit`
  - `#/inquiry`
  - `#/admin`
  - `#/status`

The Google Forms URLs are configured in `app.js`:

```js
googleVisitFormUrl: "https://forms.gle/3tC6rLtGcDry6oGE9",
googleInquiryFormUrl: "https://forms.gle/GPNRqNYPSJWPJr1x5",
useGoogleFormsForPublicSubmissions: true
```

Do not add real parent, child, teacher, bank, payment, or internal private data to the static MVP demo records.

## Parent Flow

The landing page supports this parent-facing flow:

1. 了解園所環境與特色
2. 點選 `預約參觀` 或 `入園諮詢`
3. 在 Google Forms 填寫資料後，由園方依資料聯繫確認

Parent-facing benefits shown on the page:

- 減少電話反覆詢問
- 線上留下參觀需求
- 園方依孩子年齡安排說明
- 家長可先了解園所特色與收費參考

## Privacy Note

The app displays this simple privacy note:

```text
本頁僅用於預約參觀與報名諮詢，所填資料僅供園方聯繫使用，不會公開顯示。
```

Submitted parent and child data is not shown on public pages. Official submitted data lives in Google Forms / Google Sheets. The localStorage demo status lookup and admin dashboard do not show Google Form submissions.

## Internal Demo Routes

These routes are intentionally kept for internal testing and demonstration only:

- `#/visit`: localStorage visit booking demo form
- `#/inquiry`: localStorage inquiry demo form
- `#/status`: localStorage demo lookup only; it cannot find Google Forms submissions
- `#/admin`: localStorage demo admin dashboard only; official responses should be checked in Google Sheets
- `#/signage`: lobby signage preview for display planning

Do not use these internal routes for official parent data unless the project is upgraded to a secure backend database, real authentication, backup, access control, and privacy protection.

## Phase 2 Payment Plan

Payment is intentionally out of scope for Phase 1. If payment is needed later, create a separate Phase 2 plan with:

- Fixed official domain
- Backend service
- Payment provider integration
- Callback URL
- Payment status database
- Receipt / confirmation flow
- Reconciliation workflow
- Refund workflow

## Changelog

### 2026-05-27

- Customized the MVP for 新北市私立快樂地幼兒園 using only supplied public-facing information.
- Rewrote the landing page for a warm, clean, trustworthy private preschool enrollment flow.
- Prioritized preschool content: 幼兒園、生活常規、主題活動、親師溝通.
- Added a 三步驟預約參觀 section and parent-facing benefits.
- Updated visit booking, enrollment inquiry, footer, and vertical signage copy.
- Kept admin dashboard with fake demo records only.
- Added parent submission confirmation, reference numbers, and `#/status` lookup.
- Moved official parent submissions to Google Forms and hid internal/demo routes from public navigation.
- Kept the app static with `localStorage`; no backend, payment, receipt, bank import, or LINE API was added.
