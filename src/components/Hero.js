import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 80px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  id: "home";
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const HeroGreeting = styled.h3`
  font-size: 1.5rem;
  color: #3182ce;
  margin-bottom: 1rem;
`;

const HeroName = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #2d3748;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #4a5568;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin-bottom: 2rem;
  color: #4a5568;
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  font-size: 1.5rem;
`;

const SocialLink = styled.a`
  color: #4a5568;
  transition: color 0.3s ease;
  
  &:hover {
    color: #3182ce;
  }
`;

const Hero = () => {
  return (
    <HeroSection id="home">
      <HeroContent>
        <HeroGreeting>Hello, I'm</HeroGreeting>
        <HeroName>Sarju S</HeroName>
        <HeroTitle>Software Engineer</HeroTitle>
        <HeroDescription>
          Experienced software engineer focused on web development, cloud technologies, and building efficient, scalable applications.
        </HeroDescription>
        
        <HeroButtons>
          <a href="#contact" className="btn">Contact Me</a>
          <a href="#projects" className="btn" style={{ background: 'transparent', border: '2px solid #3182ce', color: '#3182ce' }}>
            View Projects
          </a>
        </HeroButtons>
        
        <SocialLinks>
          <SocialLink href="https://www.linkedin.com/in/sarju-s/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </SocialLink>
          <SocialLink href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </SocialLink>
          <SocialLink href="mailto:sarju@example.com">
            <FaEnvelope />
          </SocialLink>
        </SocialLinks>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
