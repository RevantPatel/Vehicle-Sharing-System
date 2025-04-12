// DOM Elements - Main elements used throughout the script
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const searchBtn = document.getElementById('search-btn');
const carListingsContainer = document.querySelector('.car-listings');
const carListingForm = document.getElementById('car-listing-form');
const testimonialDots = document.querySelectorAll('.dot');
const testimonials = document.querySelectorAll('.testimonial');

// Sample vehicle data (in a real application, this would come from a database)
// Each vehicle object contains essential details like id, make, model, price, location, etc.
const carsData = [
    {
        id: 1,
        make: 'Toyota',
        model: 'Camry',
        year: 2022,
        category: 'sedan',
        price: 3500,
        location: 'Mumbai',
        image: 'img/cars/Toyota_Camry.png',
        features: ['Automatic', 'Bluetooth', 'Backup Camera']
    },
    {
        id: 2,
        make: 'Honda',
        model: 'CR-V',
        year: 2021,
        category: 'suv',
        price: 4200,
        location: 'Delhi',
        image: 'img/cars/Honda_CR-V.png',
        features: ['AWD', 'Sunroof', 'Apple CarPlay']
    },
    {
        id: 3,
        make: 'BMW',
        model: '5 Series',
        year: 2023,
        category: 'luxury',
        price: 7800,
        location: 'Bangalore',
        image: 'img/cars/BMW 5 Series.png',
        features: ['Leather Seats', 'Navigation', 'Premium Sound']
    },
    {
        id: 4,
        make: 'Ford',
        model: 'Mustang',
        year: 2022,
        category: 'sports',
        price: 6500,
        location: 'Chennai',
        image: 'img/cars/Ford Mustang.png',
        features: ['V8 Engine', 'Convertible', 'Sport Mode']
    },
    {
        id: 5,
        make: 'Chevrolet',
        model: 'Equinox',
        year: 2021,
        category: 'suv',
        price: 3800,
        location: 'Hyderabad',
        image: 'img/cars/Chevrolet Equinox.png',
        features: ['Spacious', 'Fuel Efficient', 'Android Auto']
    },
    {
        id: 6,
        make: 'Tesla',
        model: 'Model 3',
        year: 2023,
        category: 'sedan',
        price: 5900,
        location: 'Pune',
        image: 'img/cars/Tesla Model 3.png',
        features: ['Electric', 'Autopilot', 'Long Range']
    },
    {
        id: 7,
        make: 'Maruti Suzuki',
        model: 'Swift',
        year: 2022,
        category: 'hatchback',
        price: 1800,
        location: 'Kolkata',
        image: 'img/cars/Maruti Suzuki Swift.png',
        features: ['Fuel Efficient', 'Compact', 'Bluetooth']
    },
    {
        id: 8,
        make: 'Hyundai',
        model: 'Creta',
        year: 2022,
        category: 'suv',
        price: 2900,
        location: 'Jaipur',
        image: 'img/cars/Hyundai Creta.png',
        features: ['Panoramic Sunroof', 'Touchscreen', 'Cruise Control']
    },
    {
        id: 9,
        make: 'Mahindra',
        model: 'Thar',
        year: 2023,
        category: 'suv',
        price: 4500,
        location: 'Goa',
        image: 'img/cars/Mahindra Thar.png',
        features: ['4x4', 'Convertible', 'Adventure Ready']
    },
    {
        id: 10,
        make: 'Audi',
        model: 'A6',
        year: 2022,
        category: 'luxury',
        price: 8200,
        location: 'Delhi',
        image: 'img/cars/Audi A6.png',
        features: ['Premium Interior', 'Virtual Cockpit', 'Bang & Olufsen Sound']
    },
    {
        id: 11,
        make: 'Royal Enfield',
        model: 'Classic 350',
        year: 2022,
        category: 'motorcycle',
        price: 800,
        location: 'Delhi',
        image: 'img/bikes/Royal Enfield Classic 350.png',
        features: ['350cc', 'Cruiser', 'ABS']
    },
    {
        id: 12,
        make: 'Bajaj',
        model: 'Pulsar NS200',
        year: 2023,
        category: 'motorcycle',
        price: 600,
        location: 'Mumbai',
        image: 'img/bikes/Bajaj Pulsar NS200.png',
        features: ['200cc', 'Sports', 'Fuel Efficient']
    },
    {
        id: 13,
        make: 'Honda',
        model: 'CB350',
        year: 2022,
        category: 'motorcycle',
        price: 900,
        location: 'Bangalore',
        image: 'img/bikes/Honda CB350.jpg',
        features: ['350cc', 'Modern Classic', 'Bluetooth']
    }
];

// Mobile Menu Toggle - Handles hamburger menu behavior on mobile devices
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    
    // Toggle hamburger animation - Transforms the hamburger icon into an X when menu is open
    const bars = document.querySelectorAll('.bar');
    if (hamburger.classList.contains('active')) {
        bars[0].style.transform = 'translateY(8px) rotate(45deg)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'translateY(-8px) rotate(-45deg)';
    } else {
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking on a nav link - Improves mobile user experience
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        
        // Reset hamburger icon to original state
        const bars = document.querySelectorAll('.bar');
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    });
});

// Active navigation link based on scroll position - Highlights nav link based on current section
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    // Determine which section is currently in view
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    // Update active state on navigation links
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Display car listings - Creates and renders vehicle cards in the listings container
function displayCarListings(cars) {
    if (!carListingsContainer) return; // Exit if container doesn't exist on this page
    
    carListingsContainer.innerHTML = '';
    
    // Display a message if no cars match the search criteria
    if (cars.length === 0) {
        carListingsContainer.innerHTML = '<p class="no-results">No cars found matching your criteria. Please try a different search.</p>';
        return;
    }
    
    // Create HTML card for each car in the filtered data
    cars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.classList.add('car-card');
        
        // Create features HTML - Displays vehicle features as tags
        let featuresHTML = '';
        car.features.forEach(feature => {
            featuresHTML += `<span class="feature">${feature}</span>`;
        });
        
        // Build the HTML structure for the car card
        carCard.innerHTML = `
            <div class="car-image">
                <img src="${car.image}" alt="${car.make} ${car.model}">
            </div>
            <div class="car-details">
                <div class="car-title">
                    <h3>${car.make} ${car.model}</h3>
                    <span class="car-price">₹${car.price}/day</span>
                </div>
                <div class="car-info">
                    <span>${car.year}</span>
                    <span>${car.category.charAt(0).toUpperCase() + car.category.slice(1)}</span>
                    <span>${car.location}</span>
                </div>
                <div class="car-features">
                    ${featuresHTML}
                </div>
                <div class="car-actions">
                    <a href="booking.html?car=${car.id}" class="btn btn-primary">Rent Now</a>
                    <button class="btn view-details-btn" data-id="${car.id}">View Details</button>
                </div>
            </div>
        `;
        
        carListingsContainer.appendChild(carCard);
    });
    
    // Add event listeners to the "View Details" buttons on each car card
    document.querySelectorAll('.view-details-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const carId = e.target.getAttribute('data-id');
            viewCarDetails(carId);
        });
    });
}

// Search functionality - Filters vehicle listings based on user input
if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        const location = document.getElementById('location').value;
        const carType = document.getElementById('car-type').value.toLowerCase();
        
        // Filter cars based on search criteria
        const filteredCars = carsData.filter(car => {
            // Location filter - case insensitive for better user experience
            const locationMatch = !location || car.location.toLowerCase().includes(location.toLowerCase());
            
            // Vehicle type filter
            const typeMatch = !carType || car.category === carType;
            
            return locationMatch && typeMatch;
        });
        
        // Display filtered cars
        displayCarListings(filteredCars);
    });
}

// View car details function - Shows detailed information about a specific vehicle
function viewCarDetails(carId) {
    const car = carsData.find(car => car.id == carId);
    
    if (!car) return;
    
    // In a real application, this would open a modal or redirect to a details page
    alert(`${car.make} ${car.model} (${car.year})
Category: ${car.category}
Price: ₹${car.price}/day
Location: ${car.location}
Features: ${car.features.join(', ')}

In a real application, this would show a detailed page with more information and images.`);
}

// Car listing form submission - Handles the form when users list their cars
if (carListingForm) {
    carListingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const make = document.getElementById('car-make').value;
        const model = document.getElementById('car-model').value;
        const year = document.getElementById('car-year').value;
        const category = document.getElementById('car-category').value;
        const dailyRate = document.getElementById('daily-rate').value;
        const description = document.getElementById('car-description').value;
        
        // In a real application, this would send the data to a server
        alert(`Thank you for listing your ${make} ${model}! Your car has been submitted for review. In a real application, this would be saved to a database.`);
        
        // Reset form
        carListingForm.reset();
    });
}

// Testimonial slider - Controls the display of testimonials on the homepage
let currentTestimonial = 0;

// Function to show a specific testimonial by index
function showTestimonial(index) {
    if (!testimonials.length) return; // Exit if no testimonials on this page
    
    // Hide all testimonials and show only the current one
    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ? 'block' : 'none';
    });
    
    // Update the active dot indicator
    testimonialDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// Initialize testimonial display if testimonials exist on the page
if (testimonials.length > 0) {
    showTestimonial(currentTestimonial);
    
    // Add click event to dots for manual navigation
    testimonialDots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            currentTestimonial = i;
            showTestimonial(currentTestimonial);
        });
    });
    
    // Auto-rotate testimonials every 5 seconds
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 5000);
}

// Smooth scrolling for anchor links - Improves page navigation experience
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Hover effects for car cards - Enhances UI interaction
document.addEventListener('mouseover', (e) => {
    if (e.target.closest('.car-card')) {
        e.target.closest('.car-card').classList.add('hovered');
    }
});

document.addEventListener('mouseout', (e) => {
    if (e.target.closest('.car-card')) {
        e.target.closest('.car-card').classList.remove('hovered');
    }
});

// Page initialization - Handles setup when DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize car listings on page load if we're on the rent-car page
    if (window.location.pathname.includes('rent-car.html') || window.location.pathname === '/' || window.location.pathname.includes('index.html')) {
        if (carListingsContainer) {
            displayCarListings(carsData);
        }
    }
    
    // If we're on the booking page, load the car details based on URL parameter
    if (window.location.pathname.includes('booking.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const carId = urlParams.get('car');
        
        if (carId) {
            console.log('Loading car details for car ID:', carId);
            // Find the car in our data
            const car = carsData.find(c => c.id == carId);
            
            if (car) {
                // Update the car details in the booking page
                const selectedCarElement = document.getElementById('selected-car');
                if (selectedCarElement) {
                    selectedCarElement.innerHTML = `
                        <div class="car-image">
                            <img src="${car.image}" alt="${car.make} ${car.model}">
                        </div>
                        <div class="car-info-booking">
                            <h3>${car.make} ${car.model}</h3>
                            <div class="car-specs">
                                <span><i class="fas fa-calendar-alt"></i> ${car.year}</span>
                                <span><i class="fas fa-car"></i> ${car.category.charAt(0).toUpperCase() + car.category.slice(1)}</span>
                                <span><i class="fas fa-map-marker-alt"></i> ${car.location}</span>
                            </div>
                            <div class="car-features-booking">
                                ${car.features.map(feature => `<span class="feature">${feature}</span>`).join('')}
                            </div>
                            <div class="car-price-booking">
                                <span class="price">₹${car.price}/day</span>
                            </div>
                        </div>
                    `;
                }
                
                // Show/hide motorcycle options based on vehicle type
                const motorcycleOptions = document.querySelectorAll('.motorcycle-option');
                if (car.category === 'motorcycle') {
                    motorcycleOptions.forEach(option => option.classList.add('show'));
                    
                    // Hide car-specific options when a motorcycle is selected
                    const childSeatOption = document.getElementById('child-seat');
                    const additionalDriverOption = document.getElementById('additional-driver');
                    if (childSeatOption) childSeatOption.parentElement.style.display = 'none';
                    if (additionalDriverOption) additionalDriverOption.parentElement.style.display = 'none';
                } else {
                    motorcycleOptions.forEach(option => option.classList.remove('show'));
                }
                
                // Update the booking summary with selected vehicle details
                const bookingSummary = document.querySelector('.booking-summary');
                if (bookingSummary) {
                    const summaryItems = bookingSummary.querySelectorAll('.summary-item');
                    if (summaryItems.length > 0) {
                        // Update the car rental price (assuming 3 days)
                        const rentalPrice = car.price * 3;
                        summaryItems[0].innerHTML = `
                            <span>Vehicle Rental (3 days)</span>
                            <span>₹${rentalPrice}</span>
                        `;
                        
                        // Recalculate total with additional options
                        const insurancePrice = 500 * 3; // ₹500/day for 3 days
                        const gpsPrice = 200 * 3; // ₹200/day for 3 days
                        const subtotal = rentalPrice + insurancePrice + gpsPrice;
                        const taxes = Math.round(subtotal * 0.18); // 18% GST
                        const total = subtotal + taxes;
                        
                        // Update taxes in the summary
                        summaryItems[3].innerHTML = `
                            <span>Taxes & Fees (18% GST)</span>
                            <span>₹${taxes}</span>
                        `;
                        
                        // Update total amount in the summary
                        summaryItems[4].innerHTML = `
                            <span>Total Amount</span>
                            <span>₹${total}</span>
                        `;
                        
                        // Update confirmation page details
                        const amountPaid = document.getElementById('amount-paid');
                        if (amountPaid) {
                            amountPaid.textContent = `₹${total}`;
                        }
                        
                        // Update car name in confirmation details
                        const carNameElement = document.querySelector('.booking-details p:nth-child(2)');
                        if (carNameElement) {
                            carNameElement.innerHTML = `<strong>Vehicle:</strong> ${car.make} ${car.model}`;
                        }
                    }
                }
            }
        }
    }
    
    // Handle FAQ toggles - Controls the expand/collapse behavior of FAQ items
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            faqItem.classList.toggle('active');
            
            // Toggle icon if it exists (plus/minus)
            const icon = this.querySelector('i');
            if (icon) {
                if (faqItem.classList.contains('active')) {
                    icon.classList.remove('fa-plus');
                    icon.classList.add('fa-minus');
                } else {
                    icon.classList.remove('fa-minus');
                    icon.classList.add('fa-plus');
                }
            }
        });
    });
}); 