import { Home, Calendar, Users, GraduationCap } from 'lucide-react';
import './StatsCounter.css'

const StatsCounter = () => {
  return (
    <section className="stats-counter">
      <div className="container">
        <div className="stats-grid">

          <div className="stat-item">
            <div className="stat-content">
              <div className="stat-icon orange-border">
                <Home size={40} color="#f97316" />
              </div>
              <div className="stat-text">
                <h3 className="stat-number">6</h3>
                <p className="stat-label">Study Centers</p>
                <p className="stat-detail">Karumbalai, Thathaneri, Alwarpuram, Mathiyiam, Kalmedu, Sambakudi</p>
              </div>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-content">
              <div className="stat-icon orange-border">
                <Calendar size={40} color="#f97316" />
              </div>
              <div className="stat-text">
                <h3 className="stat-number">25+</h3>
                <p className="stat-label">Years of Service</p>
                <p className="stat-detail">Helping children in Madurai since 1999</p>
              </div>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-content">
              <div className="stat-icon orange-border">
                <GraduationCap size={40} color="#f97316" />
              </div>
              <div className="stat-text">
                <h3 className="stat-number">1000+</h3>
                <p className="stat-label">Children Empowered</p>
                <p className="stat-detail">Students learning and thriving through education</p>
              </div>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-content">
              <div className="stat-icon orange-border">
                <Users size={40} color="#f97316" />
              </div>
              <div className="stat-text">
                <h3 className="stat-number">200+</h3>
                <p className="stat-label">Volunteers & Alumni</p>
                <p className="stat-label">Volunteers & Alumni</p>
                <p className="stat-detail">Youth helping youth, creating a cycle of empowerment</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsCounter;