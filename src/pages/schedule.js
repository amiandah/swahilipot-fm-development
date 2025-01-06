import Header from "@/components/Header";
import Footer from "../components/Footer";
import ContactSection from "../pages/Contactsection";
import React, { useEffect, useMemo, useState } from 'react';
import styles from '../styles/Schedule.module.css';
import { Table, Button } from 'react-bootstrap';

function Schedule() {
    const [selectedTab, setSelectedTab] = useState('Monday');

    const tabs = useMemo(() => {
        return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    }, []);

    useEffect(() => {
        const currentDayIndex = new Date().getDay(); 
        const currentDay = tabs[currentDayIndex];
        setSelectedTab(currentDay); 
    }, [tabs]);

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    const scheduleData = {
        'Sunday': [
            { time: '06:00am - 10:00am', title: 'Fresh Music Vibe', voiceover: 'Voiceover by: SWAHILIPOTFM', presenterImage: '/user.jpg' },
        ],
        'Monday': [
            { time: '06:00am - 10:00am', title: 'The Breakfast Club', voiceover: 'Voiceover by: SWAHILIPOTFM', presenterImage: '/user.jpg' },
            { time: '10:00am - 11:00am', title: 'Kick Off', voiceover: 'Voiceover by: SWAHILIPOTFM', presenterImage: '/user.jpg' },
            { time: '11:00am - 2:00pm', title: 'Swahilipot Cafe', voiceover: 'Voiceover by: SWAHILIPOTFM', presenterImage: '/user.jpg' },
            { time: '3:00pm - 7:00pm', title: 'Swahilipot Drive', voiceover: 'Voiceover by: SWAHILIPOTFM', presenterImage: '/user.jpg' },
            { time: '7:00pm - 10:00pm', title: 'The Night Shift', voiceover: 'Voiceover by: SWAHILIPOTFM', presenterImage: '/user.jpg' },
        ],
        'Tuesday': [
            { time: '06:00am - 10:00am', title: 'The Breakfast Club', voiceover: 'Voiceover by: SWAHILIPOTFM', presenterImage: '/user.jpg' },
            { time: '10:00am - 11:00am', title: 'Kick Off', voiceover: 'Voiceover by: SWAHILIPOTFM', presenterImage: '/user.jpg' },
            { time: '11:00am - 2:00pm', title: 'Swahilipot Cafe', voiceover: 'Voiceover by: SWAHILIPOTFM', presenterImage: '/user.jpg' },
            { time: '3:00pm - 7:00pm', title: 'Swahilipot Drive', voiceover: 'Voiceover by: SWAHILIPOTFM', presenterImage: '/user.jpg' },
            { time: '7:00pm - 10:00pm', title: 'The Night Shift', voiceover: 'Voiceover by: SWAHILIPOTFM', presenterImage: '/user.jpg' },
        ],
        'Wednesday': [
            { time: '06:00am - 10:00am', title: 'The Breakfast Club', voiceover: 'Voiceover by: SWAHILIPOTFM', presenterImage: '/user.jpg' },
            { time: '10:00am - 11:00am', title: 'Kick Off', voiceover: 'Voiceover by: SWAHILIPOTFM', presenterImage: '/user.jpg' },
            { time: '11:00am - 2:00pm', title: 'Swahilipot Cafe', voiceover: 'Voiceover by: SWAHILIPOTFM', presenterImage: '/user.jpg' },
            { time: '3:00pm - 7:00pm', title: 'Swahilipot Drive', voiceover: 'Voiceover by: SWAHILIPOTFM', presenterImage: '/user.jpg' },
            { time: '7:00pm - 10:00pm', title: 'The Night Shift', voiceover: 'Voiceover by: SWAHILIPOTFM', presenterImage: '/user.jpg' },
        ],
        'Thursday': [
            { time: '06:00am - 10:00am', title: 'The Breakfast Club', voiceover: 'Voiceover by: SWAHILIPOTFM', presenterImage: '/user.jpg' },
            { time: '10:00am - 11:00am', title: 'Kick Off', voiceover: 'Voiceover by: SWAHILIPOTFM', presenterImage: '/user.jpg' },
            { time: '11:00am - 2:00pm', title: 'Swahilipot Cafe', voiceover: 'Voiceover by: SWAHILIPOTFM', presenterImage: '/user.jpg' },
            { time: '3:00pm - 7:00pm', title: 'Swahilipot Drive', voiceover: 'Voiceover by: SWAHILIPOTFM', presenterImage: '/user.jpg' },
            { time: '7:00pm - 10:00pm', title: 'The Night Shift', voiceover: 'Voiceover by: SWAHILIPOTFM', presenterImage: '/user.jpg' },
        ],
        'Friday': [
            { time: '06:00am - 10:00am', title: 'The Breakfast Club', voiceover: 'Voiceover by: SWAHILIPOTFM', presenterImage: '/user.jpg' },
            { time: '10:00am - 11:00am', title: 'Kick Off', voiceover: 'Voiceover by: SWAHILIPOTFM', presenterImage: '/user.jpg' },
            { time: '11:00am - 2:00pm', title: 'Swahilipot Cafe', voiceover: 'Voiceover by: SWAHILIPOTFM', presenterImage: '/user.jpg' },
            { time: '3:00pm - 7:00pm', title: 'Swahilipot Drive', voiceover: 'Voiceover by: SWAHILIPOTFM', presenterImage: '/user.jpg' },
            { time: '7:00pm - 10:00pm', title: 'The Night Shift', voiceover: 'Voiceover by: SWAHILIPOTFM', presenterImage: '/user.jpg' },
        ],
        'Saturday': [
            { time: '08:00am - 11:00am', title: 'Mikuki Ya Maneno', voiceover: 'Voiceover by: SWAHILIPOTFM', presenterImage: '/user.jpg' },
            { time: '11:00am - 2:00pm', title: 'Swahilipot Aroma', voiceover: 'Voiceover by: SWAHILIPOTFM', presenterImage: '/user.jpg' },
        ],
    };

    return (
        <section className="content-space-t-3">
            <Header />
            <main className="content">
                <div className={styles.container}>
                    <h1 className={styles.schedulecontent + ' bg-info'} style={{ textAlign: 'center' }}>Swahilipot FM Schedule</h1>
                    <div className={`${styles.scrollableTabs}`}>
                        <div className={styles.tabs}>
                            {tabs.map((tab) => (
                                <Button
                                    key={tab}
                                    variant={selectedTab === tab ? 'primary' : 'secondary'}
                                    onClick={() => handleTabClick(tab)}
                                    className={selectedTab === tab ? styles.active : ''}
                                >
                                    {tab}
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div className={styles.schedulecontent}>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>Time</th>
                                    <th>Title</th>
                                    <th>Voiceover</th>
                                    <th>Presenter</th>
                                </tr>
                            </thead>
                            <tbody>
                                {scheduleData[selectedTab].map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.time}</td>
                                        <td>{item.title}</td>
                                        <td>{item.voiceover}</td>
                                        <td><img src={item.presenterImage} alt={`Presenter ${index}`} className={styles.presenterImage} /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </main>
            <ContactSection />
            <Footer />
        </section>
    );
}

export default Schedule;
