# cy-cucumber-qa-practice

โปรเจกต์ตัวอย่างสำหรับทำ Automated Testing ด้วย Cypress ร่วมกับ Cucumber BDD 
ครอบคลุมการทดสอบ
- E2E UI test 
- API test 

## Test Coverage

ชุดทดสอบอยู่ใน `cypress/e2e/features` และแบ่งตาม feature ดังนี้

- `login` ทดสอบ login สำเร็จ, login ด้วยข้อมูลผิด และ login โดยไม่กรอกข้อมูล
- `shopping_cart` ทดสอบเพิ่มสินค้าเข้าตะกร้าและไปหน้า Shipping Details
- `shipping_details` ทดสอบกรอกข้อมูลจัดส่ง, submit order และ validation error ของแต่ละ field
- `employees` ทดสอบ Employee API เช่น create employee, validate email, get employee by ID และ not found case

## Project Structure

```text
.
├── .github/workflows/cypress.yml
├── cypress.config.js
├── generate-report.js
├── package.json
├── cypress
│   ├── e2e/features
│   │   ├── employees
│   │   ├── login
│   │   ├── shopping_cart
│   │   └── shipping_details
│   ├── pages
│   ├── fixtures
│   └── support
└── README.md
```

## Prerequisites

ติดตั้งเครื่องมือเหล่านี้ก่อนใช้งาน

- Node.js 20 หรือใหม่กว่า
- Yarn
- Docker ถ้าต้องการรัน Employee API test แบบ local

## Installation

ติดตั้ง dependencies ด้วยคำสั่ง

```bash
yarn install
```

## Running Tests

เปิด Cypress Test Runner

```bash
yarn cy:open
```

รัน Cypress แบบ headless

```bash
yarn cy:run
```

รัน test และสร้าง HTML report

```bash
yarn test:report
```

หลังรันเสร็จ report จะอยู่ที่

```text
cypress/reports/cucumber-html/cucumber-report.html
```

## Running API Tests Locally

Employee API test ใช้ API base URL เริ่มต้นเป็น `http://localhost:8887` ดังนั้นให้ start API container ก่อนรัน test

```bash
docker run -d --rm --name qa-practice-api -p 8887:8081 rvancea/qa-practice-api:latest
```

จากนั้นรัน test ได้ตามปกติ

```bash
yarn cy:run
```

ถ้าต้องการหยุด API container

```bash
docker stop qa-practice-api
```

## Configuration

Cypress อ่าน feature files จาก pattern นี้

```text
cypress/e2e/features/**/*.feature
```

Cucumber step definitions อยู่ใน

```text
cypress/e2e/features/**/*.js
```

Employee API base URL สามารถ override ได้ด้วย Cypress environment variable `apiBaseUrl` เช่น

```bash
yarn cy:run --env apiBaseUrl=http://localhost:8887
```

## Reports And Artifacts

โปรเจกต์สร้าง Cucumber JSON report ที่

```text
cypress/reports/cucumber-json/cucumber-report.json
```

และแปลงเป็น HTML report ที่

```text
cypress/reports/cucumber-html/cucumber-report.html
```

เมื่อรันบน GitHub Actions จะ upload artifacts เหล่านี้เมื่อมีไฟล์เกิดขึ้น

- Cucumber HTML report
- Cypress screenshots
- Cypress videos

## CI/CD

GitHub Actions workflow อยู่ที่ `.github/workflows/cypress.yml` โดยจะทำงานเมื่อ

- push เข้า branch `main`
- เปิดหรืออัปเดต pull request ไปยัง branch `main`
- สั่งรันเองผ่าน `workflow_dispatch`

Pipeline จะติดตั้ง dependencies, start QA Practice API ด้วย Docker, รัน `yarn test:report` และ upload test artifacts หลังจบงาน

## Useful Commands

| Command | Description |
| --- | --- |
| `yarn install` | ติดตั้ง dependencies |
| `yarn cy:open` | เปิด Cypress Test Runner |
| `yarn cy:run` | รัน test แบบ headless |
| `yarn report` | สร้าง HTML report จาก Cucumber JSON |
| `yarn test:report` | รัน test แล้วสร้าง HTML report |
