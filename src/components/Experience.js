import React from 'react';
import styled from 'styled-components';
import { FaBriefcase } from 'react-icons/fa';

const ExperienceSection = styled.section`
  background-color: #f8f9fa;
  padding: 100px 0;
`;

const ExperienceContainer = styled.div`
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

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  
  &:before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background-color: #e2e8f0;
    
    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 3rem;
  display: flex;
  
  &:nth-child(even) {
    flex-direction: row-reverse;
    
    @media (max-width: 768px) {
      flex-direction: row;
    }
  }
  
  @media (max-width: 768px) {
    margin-left: 40px;
  }
`;

const TimelineIcon = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #3182ce;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 1;
  
  @media (max-width: 768px) {
    left: 0;
  }
`;

const TimelineContent = styled.div`
  width: calc(50% - 40px);
  padding: 1.5rem;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TimelineDate = styled.div`
  font-size: 0.9rem;
  color: #718096;
  margin-bottom: 0.5rem;
`;

const TimelineTitle = styled.h3`
  font-size: 1.3rem;
  color: #2d3748;
  margin-bottom: 0.5rem;
`;

const TimelineCompany = styled.h4`
  font-size: 1.1rem;
  color: #3182ce;
  margin-bottom: 1rem;
`;

const TimelineDescription = styled.p`
  font-size: 1rem;
  color: #4a5568;
  line-height: 1.6;
`;

const Experience = () => {
  return (
    <ExperienceSection id="experience">
      <ExperienceContainer>
        <SectionTitle>Work Experience</SectionTitle>
        
        <Timeline>
          <TimelineItem>
            <TimelineIcon>
              <FaBriefcase />
            </TimelineIcon>
            <TimelineContent>
              <TimelineDate>2021 - Present</TimelineDate>
              <TimelineTitle>Software Engineer</TimelineTitle>
              <TimelineCompany>IBM</TimelineCompany>
              <TimelineDescription>
                Working on enterprise-level cloud solutions, developing microservices, 
                and implementing CI/CD pipelines. Collaborating with cross-functional teams 
                to deliver high-quality software products.
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>
          
          <TimelineItem>
            <TimelineIcon>
              <FaBriefcase />
            </TimelineIcon>
            <TimelineContent>
              <TimelineDate>2019 - 2021</TimelineDate>
              <TimelineTitle>Associate Software Developer</TimelineTitle>
              <TimelineCompany>Infosys</TimelineCompany>
              <TimelineDescription>
                Developed and maintained web applications using JavaScript, React.js, and Node.js.
                Worked on performance optimization and implemented new features based on client requirements.
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>
          
          <TimelineItem>
            <TimelineIcon>
              <FaBriefcase />
            </TimelineIcon>
            <TimelineContent>
              <TimelineDate>2018 - 2019</TimelineDate>
              <TimelineTitle>Software Developer Intern</TimelineTitle>
              <TimelineCompany>TCS</TimelineCompany>
              <TimelineDescription>
                Assisted in developing front-end components using HTML, CSS, and JavaScript.
                Participated in code reviews and learned software development best practices.
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </ExperienceContainer>
    </ExperienceSection>
  );
};

export default Experience;
