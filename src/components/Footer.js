import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const FooterSection = styled.footer`
  background-color: #2d3748;
  color: white;
  padding: 3rem 0 1.5rem;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FooterLogo = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: white;
`;

const FooterDescription = styled.p`
  font-size: 1rem;
  max-width: 500px;
  margin-bottom: 2rem;
  color: #a0aec0;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  font-size: 1.5rem;
`;

const SocialLink = styled.a`
  color: white;
  transition: color 0.3s ease;
  
  &:hover {
    color: #3182ce;
  }
`;

const FooterNav = styled.ul`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  
  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const FooterNavItem = styled.li`
  font-size: 1rem;
  
  a {
    color: #a0aec0;
    transition: color 0.3s ease;
    
    &:hover {
      color: white;
    }
  }
`;

const FooterDivider = styled.hr`
  border: none;
  height: 1px;
  background-color: #4a5568;
  margin-bottom: 1.5rem;
  width: 100%;
`;

const FooterCopyright = styled.p`
  font-size: 0.9rem;
  color: #a0aec0;
`;

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterContent>
          <FooterLogo>Sarju S</FooterLogo>
          <FooterDescription>
            A passionate software engineer focused on creating efficient and user-friendly applications.
          </FooterDescription>
          
          <SocialLinks>
            <SocialLink href="https://www.linkedin.com/in/sarju-s/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialLink>
            <SocialLink href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </SocialLink>
            <SocialLink href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </SocialLink>
            <SocialLink href="mailto:sarju@example.com">
              <FaEnvelope />
            </SocialLink>
          </SocialLinks>
          
          <FooterNav>
            <FooterNavItem><a href="#home">Home</a></FooterNavItem>
            <FooterNavItem><a href="#about">About</a></FooterNavItem>
            <FooterNavItem><a href="#experience">Experience</a></FooterNavItem>
            <FooterNavItem><a href="#projects">Projects</a></FooterNavItem>
            <FooterNavItem><a href="#skills">Skills</a></FooterNavItem>
            <FooterNavItem><a href="#contact">Contact</a></FooterNavItem>
          </FooterNav>
          
          <FooterDivider />
          
          <FooterCopyright>
            &copy; {new Date().getFullYear()} Sarju S. All rights reserved.
          </FooterCopyright>
        </FooterContent>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;
