# E-commerce store

###
**About:** 
Full Stack E-commerce Store With Admin Dashboard - Next.js, Prisma, Stripe, Tailwind (Shadcn)

![image](https://github.com/user-attachments/assets/b7d7dc3d-dcce-4b90-a81b-3437069ec4d4)

---

## Main features

### User
* You can buy the course (implemented with Stripe)
* You receive the receipt on your email
* You can instantly download course
* You can check all your buys by entering your email - you will receive all receipts in one message

### Admin
* Admin can view sales amount, orders amount, customers amount, average value spent, active and inactive products
* Admin can view all products: download, edit, activate/deactivate and delete them
* Admin can view all customers and delete them
* Admin can view all exact sales and delete them

---

### To view it locally

Make sure to install the dependencies:

```bash
# npm 
npm i
```

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

Receive Stripe events:

```bash
stripe listen --forward-to localhost:3000/webhooks/stripe
```

Make your .env file with valid keys:

```bash
DATABASE_URL="file:./dev.db"
ADMIN_USERNAME=
ADMIN_HASHED_PASSWORD=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
RESEND_API_KEY=
SENDER_EMAIL=

NEXT_PUBLIC_STRIPE_PUBLIC_KEY=
NEXT_PUBLIC_SERVER_URL="http://localhost:3000"
```
