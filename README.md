# Portfolio Website

A modern, responsive portfolio website built with Node.js, Express, and EJS templating engine. Features a beautiful UI with smooth animations and mobile-first design.

## Features

- 🎨 **Modern Design**: Clean and professional design with smooth animations
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Fast**: Optimized for performance with minimal dependencies
- 🎯 **SEO Friendly**: Proper meta tags and semantic HTML structure
- 📧 **Contact Form**: Functional contact form with validation
- 🔧 **Easy Customization**: Simple to customize with your own content

## Pages

- **Home**: Hero section, skills showcase, and featured projects
- **About**: Personal information, experience timeline, and education
- **Projects**: Comprehensive portfolio of work samples
- **Contact**: Contact form and contact information

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Templating**: EJS
- **Styling**: Custom CSS with modern design principles
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Poppins)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## Project Structure

```
portfolio-website/
├── public/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
├── views/
│   ├── layout.ejs
│   ├── index.ejs
│   ├── about.ejs
│   ├── projects.ejs
│   └── contact.ejs
├── server.js
├── package.json
└── README.md
```

## Customization

### Personal Information
Update the following files with your information:

1. **Home Page** (`views/index.ejs`):
   - Change "Your Name" to your actual name
   - Update the hero description
   - Modify skills and technologies

2. **About Page** (`views/about.ejs`):
   - Update personal description
   - Modify work experience
   - Change education details

3. **Projects Page** (`views/projects.ejs`):
   - Replace project examples with your own work
   - Update project descriptions and technologies
   - Add your GitHub profile link

4. **Contact Page** (`views/contact.ejs`):
   - Update contact information (email, phone, location)
   - Add your social media links
   - Modify the contact form if needed

### Styling
- Main styles are in `public/css/style.css`
- Color scheme can be modified by changing CSS variables
- Fonts can be changed in the CSS file

### Images
- Replace the profile placeholder icons with your actual photos
- Add project screenshots to the project cards
- Update the favicon

## Deployment

### Heroku
1. Create a Heroku account
2. Install Heroku CLI
3. Run the following commands:
   ```bash
   heroku create your-app-name
   git add .
   git commit -m "Initial commit"
   git push heroku main
   ```

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Node.js project
3. Deploy with default settings

### Netlify
1. Build the project (if needed)
2. Upload the files to Netlify
3. Configure the build settings

## Scripts

- `npm start`: Start the production server
- `npm run dev`: Start the development server with nodemon

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

If you have any questions or need help customizing the portfolio, feel free to open an issue or contact me.

---

**Happy Coding! 🚀** 