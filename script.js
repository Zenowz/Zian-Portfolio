/* RESET */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* BODY */
body {
  font-family: "Segoe UI", Arial, sans-serif;
  background-color: #f2f2f2;
  color: #222;
  padding: 20px;
  max-width: 900px;
  margin: auto;
  transition: background-color 0.3s, color 0.3s;
}

/* HEADER */
header {
  background-color: #ffffff;
  text-align: center;
  padding: 28px;
  border-radius: 20px;
  margin-bottom: 25px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
}

#name {
  font-size: 28px;
  margin-bottom: 12px;
}

#profile-img {
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #e0e0e0;
  margin: 12px 0;
}

#course-year {
  color: #666;
  margin-bottom: 15px;
}

/* THEME BUTTON ONLY */
.theme-btn {
  background-color: #111;
  color: #fff;
  border: none;
  padding: 10px 26px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s, transform 0.2s;
}

.theme-btn:hover {
  background-color: #333;
  transform: scale(1.05);
}

/* DROPDOWN CARD */
.dropdown {
  background-color: #ffffff;
  border-radius: 20px;
  margin-bottom: 22px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.06);
  overflow: hidden;
}

/* DROPDOWN BUTTON (NO GLOBAL BUTTON STYLES) */
.dropdown-btn {
  all: unset;
  width: 100%;
  display: block;
  cursor: pointer;

  font-size: 20px;
  font-weight: bold;
  color: #111;

  padding: 20px 26px;
}

.dropdown-btn:hover {
  background-color: #f2f2f2;
}

/* ARROW */
.dropdown-btn::after {
  content: "▾";
  float: right;
  transition: transform 0.3s ease;
}

.dropdown.active .dropdown-btn::after {
  transform: rotate(180deg);
}

/* DROPDOWN CONTENT */
.dropdown-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease, padding 0.3s ease;
  padding: 0 26px;
}

.dropdown.active .dropdown-content {
  max-height: 600px;
  padding-bottom: 20px;
}

/* LIST */
ul {
  list-style: none;
  margin-top: 15px;
}

ul li {
  background-color: #f5f5f5;
  margin-bottom: 12px;
  padding: 14px 18px;
  border-radius: 14px;
  line-height: 1.4;
  transition: transform 0.2s, background-color 0.2s;
}

ul li strong {
  display: block;
  margin-bottom: 4px;
}

ul li:hover {
  transform: translateX(5px);
}

/* ===== DARK MODE ===== */
body.dark {
  background-color: #121212;
  color: #f1f1f1;
}

body.dark header,
body.dark .dropdown {
  background-color: #1e1e1e;
  box-shadow: none;
}

body.dark #course-year {
  color: #aaa;
}

/* Dropdown dark */
body.dark .dropdown-btn {
  color: #f1f1f1;
  border-bottom: 1px solid #333;
}

body.dark .dropdown-btn:hover {
  background-color: #222;
}

/* List dark */
body.dark ul li {
  background-color: #2a2a2a;
  color: #eaeaea;
}

body.dark ul li:hover {
  background-color: #333;
}

/* Theme button dark */
body.dark .theme-btn {
  background-color: #f1f1f1;
  color: #111;
}

body.dark .theme-btn:hover {
  background-color: #dcdcdc;
}
