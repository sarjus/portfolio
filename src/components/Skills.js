import React from 'react';
import styled from 'styled-components';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, 
  FaGitAlt, FaDocker, FaAws, FaMicrosoft
} from 'react-icons/fa';

const SkillsSection = styled.section`
  background-color: #f8f9fa;
  padding: 100px 0;
`;

const SkillsContainer = styled.div`
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

const SkillsCategories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const SkillCategory = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CategoryTitle = styled.h3`
  font-size: 1.3rem;
  color: #2d3748;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const SkillIcon = styled.div`
  font-size: 1.5rem;
  color: #3182ce;
`;

const SkillName = styled.span`
  font-size: 1rem;
  color: #4a5568;
`;

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <SkillsContainer>
        <SectionTitle>My Skills</SectionTitle>
        
        <SkillsCategories>
          <SkillCategory>
            <CategoryTitle>Frontend Development</CategoryTitle>
            <SkillsList>
              <SkillItem>
                <SkillIcon><FaHtml5 /></SkillIcon>
                <SkillName>HTML5</SkillName>
              </SkillItem>
              <SkillItem>
                <SkillIcon><FaCss3Alt /></SkillIcon>
                <SkillName>CSS3</SkillName>
              </SkillItem>
              <SkillItem>
                <SkillIcon><FaJs /></SkillIcon>
                <SkillName>JavaScript</SkillName>
              </SkillItem>
              <SkillItem>
                <SkillIcon><FaReact /></SkillIcon>
                <SkillName>React.js</SkillName>
              </SkillItem>
              <SkillItem>
                <SkillIcon><FaJs /></SkillIcon>
                <SkillName>TypeScript</SkillName>
              </SkillItem>
              <SkillItem>
                <SkillIcon><FaReact /></SkillIcon>
                <SkillName>Redux</SkillName>
              </SkillItem>
            </SkillsList>
          </SkillCategory>
          
          <SkillCategory>
            <CategoryTitle>Backend Development</CategoryTitle>
            <SkillsList>
              <SkillItem>
                <SkillIcon><FaNodeJs /></SkillIcon>
                <SkillName>Node.js</SkillName>
              </SkillItem>
              <SkillItem>
                <SkillIcon><FaNodeJs /></SkillIcon>
                <SkillName>Express.js</SkillName>
              </SkillItem>
              <SkillItem>
                <SkillIcon><FaDatabase /></SkillIcon>
                <SkillName>MongoDB</SkillName>
              </SkillItem>
              <SkillItem>
                <SkillIcon><FaDatabase /></SkillIcon>
                <SkillName>MySQL</SkillName>
              </SkillItem>
              <SkillItem>
                <SkillIcon><FaJs /></SkillIcon>
                <SkillName>RESTful APIs</SkillName>
              </SkillItem>
              <SkillItem>
                <SkillIcon><FaJs /></SkillIcon>
                <SkillName>GraphQL</SkillName>
              </SkillItem>
            </SkillsList>
          </SkillCategory>
          
          <SkillCategory>
            <CategoryTitle>DevOps & Tools</CategoryTitle>
            <SkillsList>
              <SkillItem>
                <SkillIcon><FaGitAlt /></SkillIcon>
                <SkillName>Git</SkillName>
              </SkillItem>
              <SkillItem>
                <SkillIcon><FaDocker /></SkillIcon>
                <SkillName>Docker</SkillName>
              </SkillItem>
              <SkillItem>
                <SkillIcon><FaAws /></SkillIcon>
                <SkillName>AWS</SkillName>
              </SkillItem>
              <SkillItem>
                <SkillIcon><FaMicrosoft /></SkillIcon>
                <SkillName>Azure</SkillName>
              </SkillItem>
              <SkillItem>
                <SkillIcon><FaNodeJs /></SkillIcon>
                <SkillName>CI/CD</SkillName>
              </SkillItem>
              <SkillItem>
                <SkillIcon><FaNodeJs /></SkillIcon>
                <SkillName>Jest</SkillName>
              </SkillItem>
            </SkillsList>
          </SkillCategory>
        </SkillsCategories>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;
