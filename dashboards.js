// DOM Elements
const pages = document.querySelectorAll('.page');
const sidebar = document.querySelector('.sidebar');
const closeSidebarBtn = document.getElementById('close-sidebar');
const dots = document.querySelectorAll('.dot');
const navItems = document.querySelectorAll('.sidebar-nav li');
const profileImage = document.getElementById('profile-image');

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  // Show the first page by default
  showPage(0);
  
  // Add event listeners
  setupEventListeners();
  
  // Handle responsive sidebar
  handleResponsiveSidebar();
});

/**
 * Set up all event listeners for the application
 */
function setupEventListeners() {
  // Pagination dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showPage(index);
      updateActiveDot(index);
    });
  });
  
  // Navigation items
  navItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      updateActiveNavItem(index);
      
      // Show corresponding page based on nav item
      if (index === 0) { // Dashboard
        showPage(1);
        updateActiveDot(1);
      } else if (index === 1) { // Programs
        showPage(0);
        updateActiveDot(0);
      } else if (index === 2) { // Mentors
        showPage('mentors-page');
      } else if (index === 3) { // Companies
        showPage('companies-page');
      } else if (index === 4) { // Webinars
        showPage('webinars-page');
      } else if (index === 5) { // Notification
        showPage('notifications-page');
      } else if (index === 6) { // App Settings
        showPage('settings-page');
        // Apply dark theme
        // document.body.classList.add('dark-theme');
      } else if (index === 7) { // Contact Support
        showPage('support-page');
      } else if (index === 8) { // Updates
        showPage('updates-page');
      } else {
        // For other nav items, show the program selection page
        showPage(2);
        updateActiveDot(2);
      }
      
      // Close sidebar on mobile after navigation
      if (window.innerWidth <= 768) {
        sidebar.classList.remove('active');
      }
    });
  });
  
  // Sidebar toggle
  closeSidebarBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
    // Redirect to index.html
    window.location.href = 'index.html';ion.href = 'index.html';
  });
  
  // Program buttons
  const programBtns = document.querySelectorAll('.program-btn');
  programBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      showPage(2);
      updateActiveDot(2);
    });
  });
  
  // Apply now buttons
  const applyBtns = document.querySelectorAll('.apply-btn');
  applyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      alert('Application submitted successfully!');
    });
  });
  
  // Program selection buttons
  const programSelectBtns = document.querySelectorAll('.program-select-btn');
  programSelectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      alert('Program selected! You will be redirected to the program details.');
    });
  });
  
  // Add hamburger menu for mobile
  const hamburgerBtn = document.createElement('button');
  hamburgerBtn.classList.add('hamburger-btn');
  hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>';
  document.querySelector('.main-content').prepend(hamburgerBtn);
  
  hamburgerBtn.addEventListener('click', () => {
    sidebar.classList.add('active');
  });
  
  // Profile image click event
  if (profileImage) {
    profileImage.addEventListener('click', () => {
      showPage('profile-page');
    });
  }
  
  // Theme toggle in settings
  const themeButtons = document.querySelectorAll('.theme-btn');
  themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      themeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      if (btn.classList.contains('dark')) {
        document.body.classList.add('dark-theme');
        document.body.style.background = ''; // Reset background for dark theme
      } else {
        document.body.classList.remove('dark-theme');
        document.body.style.background = 'linear-gradient(to bottom, rgb(241, 240, 237), rgb(240, 238, 214), rgb(238, 235, 191))';
      }
    });
  });
  
  // Font size buttons
  const fontSizeButtons = document.querySelectorAll('.font-size-btn');
  fontSizeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      fontSizeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Apply font size changes
      let fontSize = '16px';
      if (btn.textContent === 'S') fontSize = '14px';
      if (btn.textContent === 'L') fontSize = '18px';
      document.documentElement.style.fontSize = fontSize;
    });
  });
  
  // Save settings button
  const saveSettingsBtn = document.querySelector('.save-settings-btn');
  if (saveSettingsBtn) {
    saveSettingsBtn.addEventListener('click', () => {
      alert('Settings saved successfully!');
    });
  }
  
  // Connect buttons for mentors
  const connectBtns = document.querySelectorAll('.connect-btn');
  connectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      alert('Connection request sent!');
    });
  });
  
  // // View company buttons
  // const viewCompanyBtns = document.querySelectorAll('.view-company-btn');
  // viewCompanyBtns.forEach(btn => {
  //   btn.addEventListener('click', () => {
  //     alert('Redirecting to company details...');
  //   });
  // });
  
  // Register for webinar buttons
  const registerBtns = document.querySelectorAll('.register-btn');
  registerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      alert('Registration successful! You will receive a confirmation email.');
    });
  });
  
  // Watch webinar buttons
  const watchBtns = document.querySelectorAll('.watch-btn');
  watchBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      alert('Opening webinar recording...');
    });
  });
  
  // Contact buttons
  const contactBtns = document.querySelectorAll('.contact-btn');
  contactBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const action = btn.textContent;
      if (action === 'Send Email') {
        window.location.href = 'mailto:support@eduplatform.com';
      } else if (action === 'Call Now') {
        window.location.href = 'tel:+911800123456';
      } else {
        alert('Starting live chat...');
      }
    });
  });
  
  // Submit contact form
  const contactForm = document.querySelector('.contact-form form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Your message has been sent! We will get back to you soon.');
      contactForm.reset();
    });
  }
  
  // Update profile form
  const updateProfileForm = document.querySelector('.update-profile-form form');
  if (updateProfileForm) {
    updateProfileForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Profile updated successfully!');
    });
  }
  
  // Upload profile picture button
  const uploadBtn = document.querySelector('.upload-btn');
  if (uploadBtn) {
    uploadBtn.addEventListener('click', () => {
      alert('Please select a profile picture to upload.');
    });
  }
  
  // Remove profile picture button
  const removeBtn = document.querySelector('.remove-btn');
  if (removeBtn) {
    removeBtn.addEventListener('click', () => {
      document.getElementById('profile-preview').src = 'https://via.placeholder.com/100/FFC107/000000?text=M';
      alert('Profile picture removed.');
    });
  }
  
  // Edit profile button
  const editProfileBtn = document.querySelector('.edit-profile-btn');
  if (editProfileBtn) {
    editProfileBtn.addEventListener('click', () => {
      showPage('updates-page');
    });
  }
  
  // Fullscreen toggle
  document.addEventListener('keydown', (e) => {
    if (e.key === 'F11' || (e.key === 'f' && e.ctrlKey)) {
      e.preventDefault();
      document.documentElement.classList.toggle('fullscreen');
    }
  });
  
  // Filter buttons for webinars
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
  
  // Settings sidebar navigation
  const settingsNavItems = document.querySelectorAll('.settings-sidebar li');
  settingsNavItems.forEach(item => {
    item.addEventListener('click', () => {
      settingsNavItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });
  
  // Mark all notifications as read
  const markAllReadBtn = document.querySelector('.mark-all-read');
  if (markAllReadBtn) {
    markAllReadBtn.addEventListener('click', () => {
      alert('All notifications marked as read.');
    });
  }
}

/**
 * Show a specific page and hide others
 * @param {number|string} pageIndex - The index or ID of the page to show
 */
function showPage(pageIndex) {
  pages.forEach((page, index) => {
    if (typeof pageIndex === 'number' && index === pageIndex) {
      page.classList.add('active');
    } else if (typeof pageIndex === 'string' && page.id === pageIndex) {
      page.classList.add('active');
    } else {
      page.classList.remove('active');
    }
  });
}

/**
 * Update the active pagination dot
 * @param {number} dotIndex - The index of the dot to activate
 */
function updateActiveDot(dotIndex) {
  dots.forEach((dot, index) => {
    if (index === dotIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

/**
 * Update the active navigation item
 * @param {number} itemIndex - The index of the nav item to activate
 */
function updateActiveNavItem(itemIndex) {
  navItems.forEach((item, index) => {
    if (index === itemIndex) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

/**
 * Handle responsive sidebar behavior
 */
function handleResponsiveSidebar() {
  // Add CSS for hamburger button
  const style = document.createElement('style');
  style.textContent = `
    .hamburger-btn {
      position: fixed;
      top: 20px;
      left: 20px;
      z-index: 99;
      background: #FFC107;
      border: none;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: none;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    }
    
    @media (max-width: 768px) {
      .hamburger-btn {
        display: flex;
      }
    }
  `;
  document.head.appendChild(style);
  
  // Check window size on resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      sidebar.classList.remove('active');
    }
  });
}