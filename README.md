# Education Enrollment & Visit Booking MVP

Static MVP demo for **新北市私立快樂地幼兒園**. The page is designed for parents who scan a QR code, read public-facing school information, book a campus visit, and submit an enrollment inquiry.

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
- Campus visit booking form
- Enrollment inquiry form
- Simple staff admin dashboard
- Vertical digital signage preview
- CSV export for demo review
- Reset demo data button

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
- Visit booking: `index.html#/visit`
- Enrollment inquiry: `index.html#/inquiry`
- Submission status lookup: `index.html#/status`
- Admin dashboard: `index.html#/admin`
- Vertical signage preview: `index.html#/signage`

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

This PIN gate is only for demo separation between public and staff pages. It is not production authentication.

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
2. 填寫孩子年齡與參觀需求
3. 專人聯繫確認參觀時間

After submitting a visit booking or inquiry, parents receive:

- A readable reference number such as `VISIT-20260528-8F3A` or `INQ-20260528-8F3A`
- Submitted date/time
- Expected contact window
- Next-step explanation
- A link to `#/status` for checking the submitted record with reference number + phone

Status explanations shown to parents:

- 新提交 = 園方已收到資料，尚未聯繫
- 已聯繫 = 園方已嘗試聯繫或已完成初步聯繫
- 已預約參觀 = 已確認參觀時間
- 已參觀 = 已完成到園參觀
- 已報名 = 已進入正式報名流程
- 暫不考慮 = 家長暫時不安排後續

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

Submitted parent and child data is not shown on public pages or the digital signage page.

## Changelog

### 2026-05-27

- Customized the MVP for 新北市私立快樂地幼兒園 using only supplied public-facing information.
- Rewrote the landing page for a warm, clean, trustworthy private preschool enrollment flow.
- Prioritized preschool content: 幼兒園、生活常規、主題活動、親師溝通.
- Added a 三步驟預約參觀 section and parent-facing benefits.
- Updated visit booking, enrollment inquiry, footer, and vertical signage copy.
- Kept admin dashboard with fake demo records only.
- Added parent submission confirmation, reference numbers, and `#/status` lookup.
- Kept the app static with `localStorage`; no backend, payment, receipt, bank import, or LINE API was added.
