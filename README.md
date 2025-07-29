🧩 Epic: Build a Full-Stack E-Commerce Application (MERN)

---

### 👤 USER MANAGEMENT

#### 🧾 User Story 1: User Registration

As a new user,
I want to register using my name, email, and password,
so that I can create an account and start shopping.

Acceptance Criteria:

* Registration form with name, email, password fields
* Email format and password validations
* Store user in MongoDB with bcrypt-hashed password
* Return JWT token on successful registration

---

#### 🧾 User Story 2: User Login

As a registered user,
I want to login using my email and password,
so that I can access my account securely.

Acceptance Criteria:

* Login form with email and password fields
* Validate credentials using JWT
* Store token in localStorage
* Redirect to homepage/dashboard after login

---

#### 🧾 User Story 3: View & Edit Profile

As a logged-in user,
I want to view and edit my profile details,
so that I can update my personal info as needed.

Acceptance Criteria:

* Show current name/email
* Form to update name/password
* Password should be rehashed before saving
* Display success/failure message

---

### 📦 PRODUCT MANAGEMENT

#### 🧾 User Story 4: Admin Adds Products

As an admin,
I want to add new products to the catalog,
so that customers can view and purchase them.

Acceptance Criteria:

* Product form: name, price, description, category, image URL
* Save product to MongoDB
* Show success alert after saving

---

#### 🧾 User Story 5: Customer Views Product List

As a customer,
I want to browse a list of products with categories,
so that I can find products easily.

Acceptance Criteria:

* Display paginated product grid
* Add filtering by category and search by name
* Each card shows image, name, price, and “View Details” button

---

#### 🧾 User Story 6: View Product Details

As a customer,
I want to view detailed info about a product,
so that I can decide whether to buy it.

Acceptance Criteria:

* Display full image, description, specs, price
* “Add to Cart” and “Add to Wishlist” buttons

---

### 🛒 CART & CHECKOUT

#### 🧾 User Story 7: Add to Cart

As a customer,
I want to add products to my cart,
so that I can review and buy multiple products at once.

Acceptance Criteria:

* Add item with selected quantity
* Save cart in localStorage or backend
* Display item count in Navbar

---

#### 🧾 User Story 8: View/Update Cart

As a customer,
I want to view and update my cart items,
so that I can finalize my order.

Acceptance Criteria:

* Show list of items in cart with subtotal
* Allow quantity updates or removal of item
* Update total price dynamically

---

#### 🧾 User Story 9: Checkout & Shipping Info

As a customer,
I want to provide my shipping details,
so that the order can be delivered to me.

Acceptance Criteria:

* Form: address, city, state, pin code, phone number
* Validate all fields
* Save shipping info and prepare for payment

---

### 💳 PAYMENTS & ORDER MANAGEMENT

#### 🧾 User Story 10: Make Payment

As a customer,
I want to pay for my order using a secure method,
so that I can complete my purchase.

Acceptance Criteria:

* Integrate Razorpay/Stripe
* Show success/failure confirmation
* Save payment ID and order status

---

#### 🧾 User Story 11: View Past Orders

As a customer,
I want to see a list of my previous orders,
so that I can keep track of what I bought.

Acceptance Criteria:

* List orders with date, amount, status
* Click to view detailed invoice/order summary

---

#### 🧾 User Story 12: Admin Manage Orders

As an admin,
I want to view and update customer orders,
so that I can track and fulfill them.

Acceptance Criteria:

* Admin-only page to list all orders
* Update order status: pending, shipped, delivered
* View full customer and product info per order

---

### 🧑‍💼 ADMIN DASHBOARD

#### 🧾 User Story 13: View Sales Analytics

As an admin,
I want to view analytics like total users, revenue, top products,
so that I can make business decisions.

Acceptance Criteria:

* Dashboard cards showing: total users, orders, revenue
* List top 5 selling products
* Charts (optional) with time-based stats

---
