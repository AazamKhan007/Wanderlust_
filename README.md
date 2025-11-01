# WanderLust - Travel Accommodation Platform

A full-stack web application for browsing, creating, and managing travel accommodation listings. Built with modern web technologies and following RESTful architecture principles.

## 🌟 Features

- **Browse Listings**: View all available accommodations with detailed information
- **Detailed View**: See comprehensive details including images, prices, and descriptions
- **Create Listings**: Add new accommodation listings with form validation
- **Edit Listings**: Update existing listing information
- **Delete Listings**: Remove listings with confirmation prompts
- **Responsive Design**: Mobile-friendly interface with Bootstrap
- **Input Validation**: Both client-side and server-side validation using Joi
- **Error Handling**: Comprehensive error handling with custom error pages
- **Sample Data**: Pre-populated with diverse accommodation listings worldwide

## 🛠️ Technology Stack

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Frontend

- **EJS** - Templating engine
- **Bootstrap 5** - CSS framework
- **Font Awesome** - Icons
- **Custom CSS** - Additional styling

### Validation & Error Handling

- **Joi** - Schema validation
- **Custom Error Classes** - ExpressError for structured error handling
- **Async Wrapper** - Clean async/await error handling

## 📁 Project Structure

```
Major Project/
├── app.js                 # Main application file
├── schema.js              # Joi validation schemas
├── package.json           # Dependencies and scripts
├── models/
│   └── listing.js         # Mongoose schema for listings
├── views/
│   ├── layouts/
│   │   └── boilerplate.ejs # Main layout template
│   ├── includes/
│   │   ├── navbar.ejs     # Navigation component
│   │   └── footer.ejs     # Footer component
│   ├── listings/
│   │   ├── index.ejs      # All listings page
│   │   ├── show.ejs       # Individual listing details
│   │   ├── new.ejs        # Create new listing form
│   │   └── edit.ejs       # Edit listing form
│   └── error.ejs          # Error page template
├── public/
│   ├── css/
│   │   └── style.css      # Custom styles
│   └── js/
│       └── script.js      # Client-side JavaScript
├── utils/
│   ├── ExpressError.js    # Custom error class
│   └── WrapAsync.js       # Async error wrapper
└── init/
    ├── index.js           # Database initialization
    └── data.js            # Sample listing data
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally or MongoDB Atlas)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/wanderlust.git
   cd wanderlust
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start MongoDB**

   ```bash
   # For local MongoDB installation
   mongod
   ```

4. **Initialize the database with sample data**

   ```bash
   node init/index.js
   ```

5. **Start the application**

   ```bash
   node app.js
   ```

6. **Open your browser**
   ```
   http://localhost:8080
   ```

## 📊 Database Schema

### Listing Model

```javascript
{
  title: String (required),
  description: String,
  image: {
    filename: String (default: "Default_listing_image"),
    url: String (default: fallback image URL)
  },
  price: Number,
  location: String,
  country: String
}
```

## 🔧 API Endpoints

| Method | Endpoint             | Description              |
| ------ | -------------------- | ------------------------ |
| GET    | `/listings`          | Get all listings         |
| GET    | `/listings/new`      | Show create listing form |
| POST   | `/listings`          | Create new listing       |
| GET    | `/listings/:id`      | Show specific listing    |
| GET    | `/listings/:id/edit` | Show edit listing form   |
| PUT    | `/listings/:id`      | Update specific listing  |
| DELETE | `/listings/:id`      | Delete specific listing  |

## ✨ Key Features Implementation

### Data Validation

- **Server-side validation** using Joi schema validation
- **Client-side validation** with Bootstrap validation classes
- **Input sanitization** and type checking

### Error Handling

- Custom `ExpressError` class for structured error responses
- `WrapAsync` utility for clean async/await error handling
- Comprehensive error pages with user-friendly messages

### Responsive Design

- Mobile-first approach with Bootstrap 5
- Card-based layout for listings
- Interactive elements with hover effects

### Database Integration

- MongoDB with Mongoose ODM
- Schema validation at database level
- Sample data initialization script

## 🎨 UI/UX Features

- **Modern Design**: Clean, professional interface
- **Interactive Elements**: Hover effects and smooth transitions
- **Form Validation**: Real-time validation feedback
- **Responsive Layout**: Works seamlessly across all device sizes
- **Accessibility**: Semantic HTML and ARIA attributes

## 🔮 Future Enhancements

- [ ] User authentication and authorization
- [ ] User reviews and ratings system
- [ ] Advanced search and filtering
- [ ] Image upload functionality
- [ ] Booking system integration
- [ ] Email notifications
- [ ] Payment gateway integration
- [ ] Admin dashboard
- [ ] REST API for mobile app integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Your Name**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

## 🙏 Acknowledgments

- [Unsplash](https://unsplash.com) for providing beautiful images
- [Bootstrap](https://getbootstrap.com) for the responsive framework
- [Font Awesome](https://fontawesome.com) for the icon library
- [MongoDB](https://mongodb.com) for the database solution

---

⭐ Star this repository if you found it helpful!
