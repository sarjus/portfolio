import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  background-color: white;
  padding: 100px 0;
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  gap: 3rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AboutImageColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AboutImage = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background-color: #e2e8f0;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AboutContentColumn = styled.div`
  flex: 1;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  color: #2d3748;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 1rem;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: #3182ce;
  }
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  color: #4a5568;
  line-height: 1.8;
`;

const AboutInfoList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const AboutInfoItem = styled.li`
  display: flex;
  align-items: center;
  
  strong {
    color: #2d3748;
    margin-right: 0.5rem;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <AboutContainer>
        <AboutImageColumn>
          <AboutImage>
            {/* Replace with your actual image */}
            <img src="https://via.placeholder.com/350" alt="Sarju S" />
          </AboutImage>
        </AboutImageColumn>
        
        <AboutContentColumn>
          <AboutTitle>About Me</AboutTitle>
          <AboutText>
            I'm a passionate software engineer with over 5 years of experience in designing and building 
            innovative applications. I specialize in web development and enjoy working on challenging problems
            that require creative solutions.
          </AboutText>
          <AboutText>
            Currently working at IBM, I am responsible for developing enterprise-level applications and
            solutions for clients across various industries. I am passionate about clean code, user experience,
            and continuous learning.
          </AboutText>
          
          <AboutInfoList>
            <AboutInfoItem>
              <strong>Name:</strong> Sarju S
            </AboutInfoItem>
            <AboutInfoItem>
              <strong>Email:</strong> sarju@example.com
            </AboutInfoItem>
            <AboutInfoItem>
              <strong>From:</strong> Bangalore, India
            </AboutInfoItem>
            <AboutInfoItem>
              <strong>Current Role:</strong> Software Engineer at IBM
            </AboutInfoItem>
          </AboutInfoList>
          
          <a href="#contact" className="btn">Contact Me</a>
        </AboutContentColumn>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
