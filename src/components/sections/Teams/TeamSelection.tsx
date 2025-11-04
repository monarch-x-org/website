import React from "react";
import "./TeamSelection.css";

interface TeamSelectionProps {
  onSelectTeam: (team: string) => void;
}

const TeamSelection: React.FC<TeamSelectionProps> = ({ onSelectTeam }) => {
  return (
    <div className="team-selection">
      <div className="team-cards">
        <div className="team-card ekko-card" onClick={() => onSelectTeam("EKKO")}>
          <div className="team-card-content">
            <div className="team-card-inner">
              <div className="team-logo">
                <div className="ekko-text-logo">
                  <span>EKKO</span>
                </div>
              </div>
            </div>
            <div className="team-card-hover">
              <span>EKKO</span>
            </div>
          </div>
        </div>

        <div className="team-card mox-card" onClick={() => onSelectTeam("MoX")}>
          <div className="team-card-content">
            <div className="team-card-inner">
              <div className="team-logo">
                <img 
                  src="/images/MonarchX_White.png" 
                  alt="MoX Logo" 
                  className="team-logo-img"
                />
              </div>
            </div>
            <div className="team-card-hover">
              <span>Monarch-X</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSelection;
