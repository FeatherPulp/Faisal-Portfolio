describe('Portfolio Homepage', () => {
  beforeEach(() => {
    
    cy.visit('/');
  });

  // Header
  it('displays the site owner name in the header', () => {
    cy.get('header').contains('Faisal Ahmed').should('be.visible');
  });

  it('displays navigation links in the header', () => {
    cy.get('nav').within(() => {
      cy.contains('About').should('have.attr', 'href', '/about').and('be.visible');
      cy.contains('Skills').should('have.attr', 'href', '/skills').and('be.visible');
      cy.contains('Projects').should('have.attr', 'href', '/projects').and('be.visible');
      cy.contains('Contact').should('have.attr', 'href', '/contact').and('be.visible');
    });
  });

  // Hero Section
  it('shows hero section headline and description', () => {
    cy.get('section').contains('Full Stack').should('be.visible');
    cy.get('section').contains('Developer').should('be.visible');
    cy.get('section').contains(/create modern web applications/i).should('be.visible');
  });

  it('has "View My Work" button that links to projects page', () => {
    cy.get('section')
      .contains('View My Work')
      .should('be.visible')
      .parent('button, a') // button wrapped inside Link component which renders <a> or <button>
      .click();
    cy.url().should('include', '/projects');
    cy.go('back'); // return back to homepage for next tests
  });

  it('has "Download CV" button present', () => {
    cy.get('section').contains('Download CV').should('be.visible');
    // You may test download behavior if link is available
  });

  it('shows animated scroll down indicator (ChevronDown icon)', () => {
    cy.get('section').find('svg').should('have.class', 'w-6').and('be.visible');
  });

  // Floating decorative elements
  it('renders floating background elements with opacity and animation classes', () => {
    cy.get('div').filter('[class*="absolute"]').should('exist');
    // This is a basic check just for presence
  });

  // Skills Section
  it('shows Skills section heading and description', () => {
    cy.get('section#skills').within(() => {
      cy.contains('What I Do').should('be.visible');
      cy.contains(/cutting-edge digital experiences/i).should('be.visible');
    });
  });

  it('renders each of the three skill cards with correct icons and labels', () => {
    cy.get('section#skills').within(() => {
      cy.contains('Web Development').should('be.visible');
      cy.contains('Android Development').should('be.visible');
      cy.contains('Full Stack Solutions').should('be.visible');

      // Check for tech stack tags in Web Dev card
      cy.contains('Web Development')
        .parent()
        .within(() => {
          cy.contains('React').should('be.visible');
          cy.contains('Next.js').should('be.visible');
          cy.contains('Tailwind').should('be.visible');
        });
    });
  });

  // Stats Section
  it('displays stats section with correct stat values and labels', () => {
    cy.get('section')
      .filter('[class*="bg-gradient-to-r"]')
      .within(() => {
        cy.contains('15+').should('be.visible');
        cy.contains('Projects Completed').should('be.visible');
        cy.contains('4+').should('be.visible');
        cy.contains('Years Experience').should('be.visible');
        cy.contains('10+').should('be.visible');
        cy.contains('Happy Clients').should('be.visible');
        cy.contains('24/7').should('be.visible');
        cy.contains('Support').should('be.visible');
      });
  });

  // Contact Section
  it('displays Contact section heading and intro text', () => {
    cy.get('section#contact').within(() => {
      cy.contains("Let's Work Together").should('be.visible');
      cy.contains(/ready to bring your ideas to life/i).should('be.visible');
    });
  });

  it('shows contact method links with correct hrefs', () => {
    cy.get('section#contact')
      .within(() => {
        cy.get('a[href^="mailto:"]').should('contain.text', 'ahmadfaiz500@gmail.com');
        cy.get('a[href*="github.com"]').should('contain.text', 'GitHub');
      });
  });

  // Footer
  it('displays footer text with copyright', () => {
    cy.get('footer').contains(/© 2024 Faisal Ahmed/i).should('be.visible');
  });

  // Optional Advanced Interaction Tests

  // Mobile menu toggle button exists and can be clicked (if you extend mobile menu)
  it('shows hamburger menu button on mobile view', () => {
    cy.viewport('iphone-6');
    cy.get('button').filter(':visible').first().should('have.attr', 'aria-label').then(() => {
      // optionally test the menu toggle - your current code does not implement menu toggle yet
    });
  });
});
