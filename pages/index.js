import React, { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [userId, setUserId] = useState('');

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  return (
    <div className={styles.container}>
      {/* Brand Logo Top Right */}
      <div className={styles.logoContainer}>
        <span className={styles.logoText}>🏡SmartStrata</span>
      </div>

      {/* Sidebar */}
      <div className={styles.sidebar}>
        <div className={styles.sidebarTitle}>🏡SmartStrata</div>
        <ul className={styles.sidebarMenu}>
          <li className={styles.menuItem} onClick={() => setActiveSection('home')}>
            <a href="#home">Home</a>
          </li>
          <div className={styles.sidebarSpacer}></div> {/* Added space */}
          <li className={styles.menuItem} onClick={() => setActiveSection('services')}>
            <a href="#services">Committee Responsibilities</a>
          </li>
          <div className={styles.sidebarSpacer}></div> {/* Added space */}
          <li className={styles.menuItem} onClick={() => setActiveSection('funds')}>
            <a href="#funds">Funds Management</a>
          </li>
          <div className={styles.sidebarSpacer}></div> {/* Added space */}
          <li className={styles.menuItem} onClick={() => setActiveSection('contact')}>
            <a href="#contact">Contact</a>
          </li>
          <div className={styles.sidebarSpacer}></div> {/* Added space */}
          <li className={styles.menuItem} onClick={() => setActiveSection('portal')}>
            <a href="#portal">Go to Portal</a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className={styles.main}>
        {activeSection === 'home' && (
          <>
            <div className={styles.header}>
              <div className={styles.imageContainer}>
                <h1 className={styles.welcomeText}>
                  Empowering Strata Communities with Smart Management
                </h1>
                <p className={styles.subText}>
                  A modern portal for building harmony and transparency in your strata community.
                </p>
              </div>
            </div>
            {/* Added Home Section Text */}
            <div className={styles.homeText}>
              <h2>Welcome to Our Community</h2>
              <p>
                This is a platform for strata management where everyone plays a crucial part in making sure our community functions smoothly. 
                Every little effort from each person, from residents to the committee members, contributes to the greater good of the building and everyone living within it.
                <br /><br />
                Together, we can achieve a vibrant, safe, and harmonious living environment, where communication is open, and every issue is addressed promptly. 
                Join us in maintaining and improving the quality of our shared spaces!
                <br /><br />
                <strong>🏡SmartStrata</strong> is a website that the residents and the committee can use. It is designed specifically for the management of StrataVIlla. StrataVIlla is a complex building system in Australia that has many diverse units. Residents can access the platform using their ID and manage their unit-related activities easily. The committee members, on the other hand, can log into a special administrative window to manage and organize tasks, ensuring smooth and efficient management of the building.
              </p>
            </div>
          </>
        )}

        {activeSection === 'services' && (
          <div className={styles.section} id="services">
            <h2 className={styles.sectionTitle}>Committee Responsibilities</h2>
            <p className={styles.sectionText}>
              The Strata Committee plays a vital role in the day-to-day operations of the building system "StrataVIlla", ensuring that everything runs smoothly for all residents. Every member of our community, from owners to tenants, contributes to the overall harmony of the space. Each person's small effort makes a significant impact, and together, we create a stronger, better place to live.
              <br /><br />
              The Committee is tasked with overseeing building operations, ensuring compliance with NSW legislation, managing disputes, and maintaining accurate records. This includes everything from organizing repairs, responding to maintenance requests, to ensuring safety protocols are followed. It's not just about handling problems; it's about preventing them, too.
              <br /><br />
              The Strata Committee is composed of a diverse group of up to 9 elected members, which includes the roles of:
              <ul>
                <li><strong>Chairperson:</strong> The leader of the committee who ensures meetings are run effectively and decisions are made in the best interest of all members.</li>
                <li><strong>Secretary:</strong> The key point of communication, responsible for managing correspondence, recording meeting minutes, and ensuring all decisions are documented.</li>
                <li><strong>Treasurer:</strong> Responsible for managing financial matters, including budgeting, levy collection, and reporting on fund balances to ensure that resources are used efficiently.</li>
                <li><strong>Additional Members:</strong> These members assist in decision-making and taking responsibility for specific tasks or projects, ensuring all areas of the building are well-managed.</li>
              </ul>
              <br />
              If you want to contact with them, please log in to your portal of unit in the menu.
              Each of these roles is crucial to maintaining a harmonious and well-organized community. Whether it's making financial decisions, handling maintenance issues, or fostering communication between owners and tenants, the committee works together to ensure the smooth running of our building. 
              <br /><br />
              And it's not just the committee members who make the difference. Every person in the building, from each resident to each visitor, plays a part in creating a space that is safe, welcoming, and well-maintained. By working together, we can make sure that our building is not only a place to live, but a place to thrive.
            </p>
          </div>
        )}

        {activeSection === 'funds' && (
          <div className={styles.section} id="funds">
            <h2 className={styles.sectionTitle}>Funds Management</h2>
            <div className={styles.contentWrapper}>
              <div className={styles.textContent}>
                <p className={styles.sectionText}>
                  Our strata community maintains two key funds to ensure smooth operation and maintenance of the property:
                  <ul>
                    <li><strong>Administrative Fund:</strong> This fund covers day-to-day operating expenses such as repairs, maintenance, insurance, and other operational costs of "StrataVIlla".</li>
                    <li><strong>Capital Works Fund:</strong> This fund is reserved for long-term building improvements and large-scale maintenance projects, such as structural repairs, upgrades, and renovations.</li>
                  </ul>
                  <br />
                  For more specific details, please visit our portal where you can view your payment information, reports, and more.
                </p>
              </div>  
              {/* Illustration (Placeholder) */}
              <div className={styles.imageContent}>
                <img src="/images/fund.jpg" alt="Funds Illustration" className={styles.illustration} />
              </div>
            </div>
          </div>
        )}

        {activeSection === 'contact' && (
          <div className={styles.section} id="contact">
            <h2 className={styles.sectionTitle}>Contact Us</h2>
            <p className={styles.sectionText}>
              Reach out to the committee via: <br />
              📧 Email: contact@stratavillacommittee.nsw.au <br />
              ☎️ Phone: (02) 1234 5678 <br />
              🕒 Office Hours: 9am - 5pm, Mon - Fri
            </p>
            <div style={{ height: '160px' }}></div>
            <h3>Meet the Strata Committee Members:</h3>
            <ul>
              <li><strong>John Doe</strong> - Chairperson<br />📧 john@stratavillacommittee.nsw.au | ☎️ (02) 1234 0001</li>
              <div style={{ height: '50px' }}></div>
              <li><strong>Jane Smith</strong> - Secretary<br />📧 jane@stratavillacommittee.nsw.au | ☎️ (02) 1234 0002</li>
              <div style={{ height: '50px' }}></div>
              <li><strong>Gunjlkham Baasandorj</strong> - Treasurer<br />📧 gunjeeb@stratavillacommittee.nsw.au | ☎️ (02) 1234 0003</li>
              <div style={{ height: '50px' }}></div>
              <li><strong>Emily Williams</strong> - Member<br />📧 emily@stratavillacommittee.nsw.au | ☎️ (02) 1234 0004</li>
              <div style={{ height: '50px' }}></div>
              <li><strong>David Brown</strong> - Member<br />📧 david@stratavillacommittee.nsw.au | ☎️ (02) 1234 0005</li>
              <div style={{ height: '50px' }}></div>
              <li><strong>Olivia Green</strong> - Member<br />📧 olivia@stratavillacommittee.nsw.au | ☎️ (02) 1234 0006</li>
            </ul>
          </div>
        )}

        {activeSection === 'portal' && (
          <div className={styles.section} id="portal">
            <h2 className={styles.sectionTitle}>Go to Portal</h2>
            <p className={styles.sectionText}>
              Welcome to the portal! This is where you can manage your strata-related tasks, including payments, committee updates, and more.
              <br /><br />
              {/* How to Use the Portal Section */}
              <h3>How to Use the Portal</h3>
              <p>
                The portal allows you to access all the important information and tools related to your strata community in StrataVIlla.
                <br /><br />
                Here’s how you can use it:
                <ul>
                  <li><strong>View Reports:</strong> Access reports related to strata management, including financial statements and maintenance logs.</li>
                  <li><strong>Make Payments:</strong> Pay your strata levies and other fees directly through the portal.</li>
                  <li><strong>Committee Updates:</strong> Stay updated on committee decisions, meeting notes, and community discussions.</li>
                  <li><strong>Maintenance Requests:</strong> Submit maintenance requests and track their status through the portal.</li>
                </ul>
                <br />
                To go to portal, simply enter your ID below to access your personalized portal experience.
              </p>
              <br />
              (Check your ID from the apartment contract, it contains your building and unit number)
              <br /><br />
              <label htmlFor="userId">Enter your ID: </label>
              <input 
                type="text" 
                id="userId" 
                value={userId} 
                onChange={handleUserIdChange} 
                placeholder="Your ID"
              />
              <button className={styles.portalButton}>Go to Portal</button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
