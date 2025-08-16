import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-auto py-4 border-top" style={{ borderColor: '#0f0 !important' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0">&copy; {new Date().getFullYear()} VYNX Hosting. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <a href="#" className="text-decoration-none mx-2">Privacy Policy</a>
            <a href="#" className="text-decoration-none mx-2">Terms of Service</a>
            <a href="#" className="text-decoration-none mx-2">SLA</a>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 text-center">
            <p className="mb-0">
              <small>
                "Innovating infrastructure for the hacker community since 2025"
              </small>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
