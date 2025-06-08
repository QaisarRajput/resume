import React from 'react';
import './Resume.css';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaMedium, FaStar, FaTrophy, FaAward, FaLanguage, FaBook, FaPrint } from 'react-icons/fa';
import profileImage from '../assets/image.png';
import { Helmet } from 'react-helmet';

const Resume = () => {
  return (
    <>
      <Helmet>
        <title>Qaisar Tanvir - AVP – AI/ML Architecture & MLOps Strategy | Leading MLOps Track | Cloud AI Strategist & Data Scientist</title>
        {/* SEO Meta Tags */}
        <meta name="description" content="With a robust 10+ years long professional journey, I am fervently dedicated to propelling businesses into the future through the mastery of AI, ML, NLP, Deep Learning, Gen-AI, and MLOps. My commitment lies in seamlessly intertwining technology with overarching business strategy." />
        <meta name="keywords" content="Python, Deep Learning, Machine Learning, Statistical Modeling, NLP, Computer Vision, Time-Series Forecasting, Generative AI, LLMs, Prompt Engineering, MLOps, XAI, Feature Engineering, PySpark, Dataiku, AWS, EKS, Sagemaker, Bedrock, Docker, CI/CD, Github, Google Cloud AI, Keras, TensorFlow, PyTorch, MLflow, Kubeflow, LangChain, FastAPI, CUDA, Document AI, Arthur AI, Credo AI" />
        <meta name="author" content="Qaisar Tanvir" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Qaisar Tanvir - Senior Lead AI Architect" />
        <meta property="og:description" content="With a robust 10+ years long professional journey, I am fervently dedicated to propelling businesses into the future through the mastery of AI, ML, NLP, Deep Learning, Gen-AI, and MLOps. My commitment lies in seamlessly intertwining technology with overarching business strategy." />
        <meta property="og:image" content={profileImage} />
        <meta property="og:url" content="https://QaisarRajput.github.io/resume" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Qaisar Tanvir - Senior Lead AI Architect" />
        <meta name="twitter:description" content="With a robust 10+ years long professional journey, I am fervently dedicated to propelling businesses into the future through the mastery of AI, ML, NLP, Deep Learning, Gen-AI, and MLOps. My commitment lies in seamlessly intertwining technology with overarching business strategy." />
        <meta name="twitter:image" content={profileImage} />
      </Helmet>
      <div className="resume-container">
        <header className="resume-header">
          <div className="header-background"></div>
          <div className="header-content">
            <div className="profile-section">
              <div className="profile-image">
                <img src={profileImage} alt="Qaisar Tanvir" />
              </div>
              <div className="profile-info">
                <h1 className="header-h1">Qaisar Tanvir</h1>
                <h3>AVP – AI/ML Architecture & MLOps Strategy | Leading MLOps Track | Cloud AI Strategist & Data Scientist</h3>
                <div className="contact-info">
                  <a href="mailto:qaisar.tanvir@outlook.com"><FaEnvelope /> qaisar.tanvir@outlook.com</a>
                  {/* <p><FaMapMarkerAlt /> Lahore, Pakistan</p> */}
                  <a href="https://linkedin.com/in/qaisartanvir" target="_blank" rel="noopener noreferrer"><FaLinkedin /> linkedin.com/in/qaisartanvir</a>
                  <a href="https://medium.com/@qaisartanvir" target="_blank" rel="noopener noreferrer"><FaMedium /> medium.com/@qaisartanvir</a>
                </div>
              </div>
            </div>
            
          </div>
        </header>

        <div className="resume-content">
          <div className="left-column">
            <section className="experience">
              <h2>Experience</h2>
              <div className="job">
                <h3>AVP – AI/ML Architecture & MLOps | Leading MLOps Track</h3>
                <span className="contact-info"><a href="https://www.visionet.com/" target="_blank" rel="noopener noreferrer">Visionet Inc. </a> | 04/2025 - Present| <FaMapMarkerAlt /> (Remote) Cranbury, NJ, USA</span>
                <ul>
                <li>Lead AI/ML and MLOps architecture for scalable, cloud-based solutions</li>
                <li>Drive strategy and execution as MLOps Track Lead across enterprise projects</li>
                <li>Design and implement CI/CD pipelines, model governance, and monitoring frameworks</li>
                <li>Act as Cloud AI Strategist, advising on ML platform design and automation</li>
                <li>Lead a cross-functional team of 18 Data Scientists, 4 Data Engineers, and 2 Business Analysts across multiple AI/ML projects</li>
                <li>Mentor data scientists and ML engineers to ensure delivery excellence</li>
                </ul>
              </div>
              <div className="job">
                <h3>Senior Lead AI Architect / Delivery Manager | Machine Learning and AI</h3>
                <span className="contact-info"><a href="https://www.visionet.com/" target="_blank" rel="noopener noreferrer">Visionet Inc. </a> | 07/2022 - 04/2025 | <FaMapMarkerAlt /> (Remote) Cranbury, NJ, USA</span>
                <ul>
                  <li>As one of the senior members of AI/ML Practice, overseeing several on-going US-based projects as a delivery manager</li>
                  <li>Developing AI/ML CoE and MLOps CoE (Center of Excellence) for US-Based pharma giant, building ecosystem for ~500 Citizen Data Scientists</li>
                  <li>Built custom ChatGPT internal to client intranet due to corporate confidentiality concerns</li>
                  <li>Leading project-based and non-project-based teams (15x Data Scientists, 10x ML Engineers, 5x MLOPs Engineers)</li>
                  <li>Deploying state-of-the-art AI solutions in diverse sectors e.g. Retail, Pharma, Fintech</li>
                  <li>Technical expertise in GenAI, Deep Learning, NLP, and Computer Vision</li>
                </ul>
              </div>

              <div className="job">
                <h3>Lead Data Scientist / Project Manager | Machine Learning and AI</h3>
                <span className="contact-info"><a href="https://www.systemsltd.com/" target="_blank" rel="noopener noreferrer">Systems Limited </a>| 01/2018 - 07/2022 | <FaMapMarkerAlt /> Lahore, Pakistan</span>
                <ul>
                  <li>Diversified AI/ML Use Cases Design and Delivery: Expanded industries (Manufacturing, BFSI, Insurance, Underwriting, Cosmetics)</li>
                  <li>Global Expansion: Extended AI/ML practice to Middle-east and Europe</li>
                  <li>Client Engagement: Led outreach and AI/ML pre-sales, presented solutions to executives</li>
                  <li>Regional Expansion: Grew AI practice in Lahore, Islamabad, Karachi, Multan, managing recruitment aligned with industry needs</li>
                  <li>Lead project-based and non-project-based teams (10x Data Scientists, 5x ML Engineers, 3x Data/Business Analysts)</li>
                </ul>
              </div>

              <div className="job">
                <h3>Principal Data Scientist / Team Lead | Machine Learning and AI</h3>
                <span className="contact-info"><a href="https://www.systemsltd.com/" target="_blank" rel="noopener noreferrer"> Systems Limited </a>| 01/2016 - 12/2017 | <FaMapMarkerAlt /> Lahore, Pakistan</span>
                <ul>
                  <li>Served as a client-facing AI/ML lead for several US-based clients, winning projects with a robust AI/ML portfolio</li>
                  <li>Led projects as technical lead, working with client executives and overseeing team of 12x Data Scientists, 3x Data Engineers</li>
                  <li>Directed non-project team of 7x Data Scientists and 2x Data/Business Analysts</li>
                  <li>Expanded AI/ML use cases into FinTech, Pharma, and Healthcare, broadening industry impact</li>
                </ul>
              </div>

              <div className="job">
                <h3>Senior Data Scientist | Machine Learning and AI</h3>
                <span className="contact-info"><a href="https://www.systemsltd.com/" target="_blank" rel="noopener noreferrer">Systems Limited </a>| 08/2015 - 01/2016 | <FaMapMarkerAlt /> Lahore, Pakistan</span>
                <ul>
                  <li>Pioneering member in establishing AI/ML Practice, adopting startup mindset for ideation and product enhancement</li>
                  <li>Led team of 4 Data Scientists in ideating and designing AI/ML use cases for diverse industries</li>
                  <li>Conducted meetings with cross-domain leadership, highlighting data-driven potential of AI/ML</li>
                  <li>Spearheaded development of proof-of-concept and prototypes for initial client-base</li>
                  <li>Enhanced Data/BI solutions by integrating AI/ML use cases into product portfolio</li>
                </ul>
              </div>

              <div className="job">
                <h3>Ai Engineer/Data Scientist</h3>
                <span className="contact-info"><a href="https://tenx.ai/" target="_blank" rel="noopener noreferrer">TenX </a> | 06/2014 - 12/2014 | <FaMapMarkerAlt /> Lahore, Pakistan</span>
                <ul>
                  <li>Enhancing a Data Insights tool to improve data-driven insights</li>
                  <li>Developing AI/ML algorithms to enhance Customer 360 views</li>
                  <li>Utilizing NLP and Computer Vision techniques</li>
                </ul>
              </div>
            </section>


            <section className="projects">
              <h2>Projects</h2>
              <div className="project-list">
                <div className="project-item">
                  <h3>RAG-as-a-Service - Visual Gen AI Platform</h3>
                  <p className="tech-stack">
                    {['AWS (EKS, Bedrock)', 'Dataiku', 'Langchain', 'LLM', 'MLFLOW', 'Jenkins', 'MLOps', 'Prompt Engineering'].map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </p>
                  <ul>
                    <li>Implemented RAG-as-a-Service with LLMs (llama2, AWS Bedrock)</li>
                    <li>Engineered prompt strategies for Few-shot learning, enhancing LLMs adaptability to specific examples</li>
                    <li>Developed a versatile data processing system, accommodating various data structures and formats</li>
                    <li>Deployed microservices on AWS EKS for scalable and reliable model serving</li>
                    <li>Integrated Dataiku and Langchain for optimized LLM workflows</li>
                    <li>Organized APIs in Flask and utilized MLFLOW for efficient deployment</li>
                    <li>Established a CI/CD pipeline with Jenkins on AWS EKS for automated development workflows</li>
                  </ul>
                </div>

                <div className="project-item">
                  <h3>Multivariate Category Growth Projections for a US-Based Fortune 500 Cosmetic Brand</h3>
                  <p className="tech-stack">
                    {['Azure Databricks', 'PySpark', 'Time Series Forecasting', 'PyTorch'].map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </p>
                  <ul>
                    <li>Spearheaded the transition from a linear to a multivariate projection strategy, achieving a substantial 63% reduction MAPE</li>
                    <li>Implemented an Custom AutoML Multivariate AR approach utilizing PySpark on Databricks, involving the frequent retraining of over 32,000 models each quarter for different data sources and grains</li>
                    <li>Tackled challenges arising from diverse data sources (e.g., sales, Google Trends, Reviews, GDP and coped with limited historical data through advanced back-forecasting techniques</li>
                    <li>Engineered COVID Recovery Forecasting models to interpret the unique behaviors in sales signals during the pandemic, specifically addressing variations between Brick-and-Mortar and E-commerce channels</li>
                    <li>Executed a sophisticated forecasting scope, encompassing major and sub-categories, inclusive of competitors' sales data, navigating intricate technicalities during the unpredictable period of the COVID pandemic</li>
                  </ul>
                </div>

                <div className="project-item">
                  <h3>Deep Learning Cloud Pipeline for News Media Meta-data Generation</h3>
                  <p className="tech-stack">
                    {['Deep Learning', 'GCP', 'TensorFlow', 'Keras', 'NLP'].map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </p>
                  <ul>
                    <li>Extended SaaS APIs for US News Media: Modified Model APIs to leverage article images for metadata enrichment, not just text</li>
                    <li>Developed 8֡ image classification and object detection models for generating diverse tags (e.g., clean background, nature, sports)</li>
                    <li>Solutioning on GCP, integrating Google Functions, ML Engine, and Vision API for comprehensive model deployment and execution to reduce through-put 30x times</li>
                  </ul>
                </div>

                <div className="project-item">
                  <h3>Deep Video Analytics for Retail Stores</h3>
                  <p className="tech-stack">
                    {['Computer Vision', 'MLOps', 'Deep Learning', 'TensorFlow', 'PyTorch', 'Perspective Mapping'].map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </p>
                  <ul>
                    <li>Employed advanced computer vision and deep learning techniques, including YOLO for object detection and Deep SORT for object tracking</li>
                    <li>The models were fine-tuned and transfer-learnt to identifying people and shopping bags (new class created by augmenting data), enabling diverse use-cases:</li>
                    <li>Optimizing floor plans by tracking customer flows</li>
                    <li>Identifying marketing opportunities in high-traffic areas based on time and holidays</li>
                    <li>Managing customer queues and routing service reps</li>
                    <li>Analyzing customer-product interactions for shelf configuration optimization in retail stores</li>
                  </ul>
                </div>

                <div className="project-item">
                  <h3>Intellidoc (Document AI)</h3>
                  <p className="tech-stack">
                    {['Computer Vision', 'EAST', 'Doc2Vec', 'BERT', 'Keras', 'OpenCV', 'CUDA'].map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </p>
                  <ul>
                    <li>Visual Document Indexing: Utilizes deep learning for efficient visual document indexing</li>
                    <li>Text-based Document Indexing: Text feature generation using Doc2Vec and page level classification</li>
                    <li>Attention-Based Field Extractor: Implements attention-based deep field extractor to extract values from various document types</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <div className="right-column">
            <section className="summary">
              <h2>Summary</h2>
              <p>
              With a robust 10+ years long professional journey, I am fervently dedicated to propelling businesses into the future through the mastery of AI, ML, NLP, Deep Learning, Gen-AI, and MLOPS. My commitment lies in seamlessly intertwining technology with overarching business strategy.
              </p>
            </section>

            <section className="strengths">
              <h2>Strengths</h2>
              <div>
                <p><strong>Full Stack Data Science Expertise:</strong> My forte lies in translating complex business challenges into actionable insights, navigating the end-to-end data science lifecycle with precision.</p>
                <p><strong>Enterprise Architecture & Cloud Leadership:</strong> Demonstrating a proven track record, I align business strategies with technological opportunities, with a specific focus on crafting scalable, optimized solutions on AWS.</p>
                <p><strong>MLOps Excellence:</strong> Have established ground-up MLOps CoE for many clients and connected right tool stack to operationalize the AI/ML business functions in light of the MLOps Life-cycle.</p>
                <p><strong>Cross-Industry Impact:</strong> Versatile across diverse sectors including Health, Pharma, Finance, Retail, Insurance and Manufacturing, I've designed many value driven AI solutions to resolve intricate business challenges.</p>
                <p><strong>Technical Proficiency:</strong> My technical arsenal spans Deep Learning, Generative AI, NLP, Machine Learning, Computer Vision, Forecasting, MLOps.</p>
              </div>
            </section>

            <section className="achievements">
              <h2><FaTrophy /> Achievements</h2>
              <ul>
                <li><FaStar /> Star Performer - 2023, 2018</li>
                <li><FaAward /> Leader of the Year - 2021</li>
                <li>3x Employee of the Month</li>
                <li>Winner in Microsoft Hackathon at Punjab Youth Festival</li>
              </ul>
            </section>
            <section className="publications">
              <h2><FaBook /> Publications</h2>
              <ul>
                <li className="contact-info"><a href="https://pub.towardsai.net/multimodal-deep-multipage-document-classification-using-both-image-and-text-629e5a2fdb47">Multimodal Deep Multipage Document Classification | <strong className="bold-color">Towards AI</strong></a></li>
                <li className="contact-info"><a href="https://towardsdatascience.com/multi-page-document-classification-using-machine-learning-and-nlp-ba6151405c03">Multi Page Document Classification |  <strong className="bold-color">Towards Data Science</strong></a></li>
                <li className="contact-info"><a href="https://medium.com/@qaisartanvir/data-drift-analysis-using-deep-learning-and-novelty-detection-e6223f9dcbb3">Data Drift Detection using Deep Learning | <strong className="bold-color">Medium</strong></a></li>
              </ul>
            </section>
            <section className="certifications">
              <h2>Certifications</h2>
              <div className="certification-list">
                <div className="certification-item">
                  <p>Building Trustworthy AI Enterprise Solutions | <strong className="bold-color">IBM</strong></p>
                </div>
                <div className="certification-item">
                  <p>Enterprise Data Science in Practice | <strong className="bold-color">IBM</strong></p>
                </div>
                <div className="certification-item">
                  <p>Effective Leadership | <strong className="bold-color">HP</strong></p>
                </div>
                <div className="certification-item">
                  <p>Sales Forecasting | <strong className="bold-color">HP</strong></p>
                </div>
                <div className="certification-item">
                  <p>Dataiku Core Designer | <strong className="bold-color">Dataiku</strong></p>
                </div>
                <div className="certification-item">
                  <p>Managing Machine Learning Projects with Google Cloud | <strong className="bold-color">Google</strong></p>
                </div>
                <div className="certification-item">
                  <p>The Data Scientist's Toolbox | <strong className="bold-color">The Johns Hopkins University</strong></p>
                </div>
                <div className="certification-item">
                  <p>Hadoop Platform and Application Framework | <strong className="bold-color">UC San Diego</strong></p>
                </div>
                <div className="certification-item">
                  <p>Machine Learning: A Case Study Approach | <strong className="bold-color">University of Washington</strong></p>
                </div>
                <div className="certification-item">
                  <p>Introduction to Big Data | <strong className="bold-color">UC San Diego</strong></p>
                </div>
              </div>
            </section>

            
            <section className="education">
              <h2>Education</h2>
              <div className="education-item">
                <h4>Executive Leadership Degree</h4>
                <p>Lahore University of Management Sciences</p>
              </div>
              <div className="education-item">
                <h4>BS.Hons in Computer Science (BSCS)</h4>
                <p>Government College University (GCU), Lahore</p>
              </div>
            </section>
            <section className="additional-experience">
              <h2>Additional Experience</h2>
              <div className="job">
                <h4>Instructor | Advanced Analytics and Artificial Intelligence Certification</h4>
                <span className="contact-info">Lahore University of Management Sciences (LUMS) | 09/2018 - 12/2018 | <FaMapMarkerAlt /> Lahore, Pakistan</span>
                <ul>
                  <li>Instructed a diverse group of AI enthusiasts from various industries, academic backgrounds, and professions</li>
                  <li>Taught research students pursuing their Master's in Data Science at LUMS, as well as software industry professionals</li>
                  <li>Trained executives seeking to explore AI-led use cases for business enhancement</li>
                </ul>
              </div>
            </section>

            <section className="skills">
              <h2>Skills</h2>
              <p className="tech-stack">
                {[
  'Python',
  'Deep Learning',
  'Machine Learning',
  'Statistical Modeling',
  'Natural Language Processing (NLP)',
  'Computer Vision',
  'Time-Series Forecasting',
  'Generative AI (GenAI)',
  'Large Language Models (LLMs)',
  'Prompt Engineering',
  'MLOps',
  'Responsible AI (XAI)',
  'Feature Engineering',
  'PySpark (Apache Spark)',
  'Dataiku',
  'AWS Cloud platform',
  'AWS Elastic Kubernettes Service (EKS)',
  'AWS Sagemaker',
  'AWS Bedrock',
  'Docker',
  'CI/CD',
  'Github Entreprise',
  'Google Cloud AI Platform',
  'Keras',
  'TensorFlow',
  'PyTorch',
  'MLflow',
  'Kubeflow',
  'LangChain',
  'FastAPI',
  'CUDA',
  'Document AI',
  'Arthur AI',
  'Credo AI'
].map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}

              </p>
            </section>

            <section className="languages">
              <h2><FaLanguage /> Languages</h2>
              <p>English (Native), Urdu/Hindi (Native)</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
