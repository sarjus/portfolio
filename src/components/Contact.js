import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

const ContactSection = styled.section`
  background-color: white;
  padding: 100px 0;
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #2d3748;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  padding-bottom: 1rem;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background-color: #3182ce;
  }
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
`;

const ContactInfoTitle = styled.h3`
  font-size: 1.3rem;
  color: #2d3748;
  margin-bottom: 1.5rem;
`;

const ContactInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactInfoItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const ContactIcon = styled.div`
  font-size: 1.2rem;
  color: #3182ce;
  margin-top: 0.2rem;
`;

const ContactDetails = styled.div`
  color: #4a5568;
  
  h4 {
    font-size: 1.1rem;
    margin-bottom: 0.3rem;
  }
  
  p {
    font-size: 1rem;
  }
  
  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #3182ce;
    }
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormLabel = styled.label`
  font-size: 1rem;
  color: #4a5568;
  font-weight: 500;
`;

const FormInput = styled.input`
  padding: 0.8rem;
  border: 1px solid #e2e8f0;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #3182ce;
  }
`;

const FormTextarea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid #e2e8f0;
  border-radius: 5px;
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #3182ce;
  }
`;

const SubmitButton = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: #3182ce;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #2c5282;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the form submission
    console.log(formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  return (
    <ContactSection id="contact">
      <ContactContainer>
        <SectionTitle>Get In Touch</SectionTitle>
        
        <ContactContent>
          <ContactInfo>
            <ContactInfoTitle>Contact Information</ContactInfoTitle>
            <ContactInfoList>
              <ContactInfoItem>
                <ContactIcon><FaEnvelope /></ContactIcon>
                <ContactDetails>
                  <h4>Email</h4>
                  <p><a href="mailto:sarju@example.com">sarju@example.com</a></p>
                </ContactDetails>
              </ContactInfoItem>
              
              <ContactInfoItem>
                <ContactIcon><FaPhone /></ContactIcon>
                <ContactDetails>
                  <h4>Phone</h4>
                  <p><a href="tel:+1234567890">+123 456 7890</a></p>
                </ContactDetails>
              </ContactInfoItem>
              
              <ContactInfoItem>
                <ContactIcon><FaMapMarkerAlt /></ContactIcon>
                <ContactDetails>
                  <h4>Location</h4>
                  <p>Bangalore, India</p>
                </ContactDetails>
              </ContactInfoItem>
              
              <ContactInfoItem>
                <ContactIcon><FaLinkedin /></ContactIcon>
                <ContactDetails>
                  <h4>LinkedIn</h4>
                  <p>
                    <a href="https://www.linkedin.com/in/sarju-s/" target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/sarju-s
                    </a>
                  </p>
                </ContactDetails>
              </ContactInfoItem>
            </ContactInfoList>
          </ContactInfo>
          
          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel htmlFor="name">Name</FormLabel>
              <FormInput 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="subject">Subject</FormLabel>
              <FormInput 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                required 
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="message">Message</FormLabel>
              <FormTextarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                required 
              />
            </FormGroup>
            
            <SubmitButton type="submit">Send Message</SubmitButton>
          </ContactForm>
        </ContactContent>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
