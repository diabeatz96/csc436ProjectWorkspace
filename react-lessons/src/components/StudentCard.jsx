import React from 'react';
import './StudentCard.css';

function StudentCard({ name, major, year, gpa, avatar, isHonorsStudent }) {
  return (
    <div className={`student-card ${isHonorsStudent ? 'honors' : ''}`}>
      <div className="student-avatar">
        {avatar ? (
          <img src={avatar} alt={`${name}'s avatar`} />
        ) : (
          <div className="avatar-placeholder">
            {name.charAt(0).toUpperCase()}
          </div>
        )}
      </div>

      <div className="student-info">
        <h3 className="student-name">{name}</h3>
        <p className="student-major">{major}</p>
        <div className="student-details">
          <span className="year-badge">{year} Year</span>
          <span className="gpa-display">GPA: {gpa}</span>
        </div>

        {isHonorsStudent && (
          <div className="honors-badge">
            🏆 Honor Student
          </div>
        )}
      </div>
    </div>
  );
}

export default StudentCard;