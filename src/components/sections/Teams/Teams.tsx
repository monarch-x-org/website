import React, { useState } from "react";
import "./Teams.css";
import TeamSelection from "./TeamSelection";

interface Player {
  id: number;
  name: string;
  ign: string;
  role: string;
  team: string;
  bio: string;
  socials: {
    twitter?: string;
    twitch?: string;
  };
}

const Teams: React.FC = () => {
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);

  const allPlayers: Player[] = [
    // EKKO Team
    {
      id: 1,
      name: "PLAYER 1 NAME",
      ign: "PLAYER1",
      role: "ROLE",
      team: "EKKO",
      bio: "Player 1 Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      socials: {
        twitter: "#",
        twitch: "#"
      }
    },
    {
      id: 2,
      name: "PLAYER 2 NAME",
      ign: "PLAYER2",
      role: "ROLE",
      team: "EKKO",
      bio: "Player 2 Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      socials: {
        twitter: "#",
        twitch: "#"
      }
    },
    {
      id: 3,
      name: "PLAYER 3 NAME",
      ign: "PLAYER3",
      role: "ROLE",
      team: "EKKO",
      bio: "Player 3 Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      socials: {
        twitter: "#",
        twitch: "#"
      }
    },
    {
      id: 4,
      name: "PLAYER 4 NAME",
      ign: "PLAYER4",
      role: "ROLE",
      team: "EKKO",
      bio: "Player 4 Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      socials: {
        twitter: "#",
        twitch: "#"
      }
    },
    {
      id: 5,
      name: "PLAYER 5 NAME",
      ign: "PLAYER5",
      role: "ROLE",
      team: "EKKO",
      bio: "Player 5 Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      socials: {
        twitter: "#",
        twitch: "#"
      }
    },
    // MoX Team (MonarchX)
    {
      id: 6,
      name: "PLAYER 6 NAME",
      ign: "PLAYER6",
      role: "ROLE",
      team: "MoX",
      bio: "Player 6 Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      socials: {
        twitter: "#",
        twitch: "#"
      }
    },
    {
      id: 7,
      name: "PLAYER 7 NAME",
      ign: "PLAYER7",
      role: "ROLE",
      team: "MoX",
      bio: "Player 7 Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      socials: {
        twitter: "#",
        twitch: "#"
      }
    },
    {
      id: 8,
      name: "PLAYER 8 NAME",
      ign: "PLAYER8",
      role: "ROLE",
      team: "MoX",
      bio: "Player 8 Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      socials: {
        twitter: "#",
        twitch: "#"
      }
    },
    {
      id: 9,
      name: "PLAYER 9 NAME",
      ign: "PLAYER9",
      role: "ROLE",
      team: "MoX",
      bio: "Player 9 Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      socials: {
        twitter: "#",
        twitch: "#"
      }
    },
    {
      id: 10,
      name: "PLAYER 10 NAME",
      ign: "PLAYER10",
      role: "ROLE",
      team: "MoX",
      bio: "Player 10 Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      socials: {
        twitter: "#",
        twitch: "#"
      }
    }
  ];

  // Filter players based on selected team
  const players = selectedTeam ? allPlayers.filter(player => player.team === selectedTeam) : [];

  const nextPlayer = () => {
    setCurrentPlayer((prev) => (prev + 1) % players.length);
  };

  const prevPlayer = () => {
    setCurrentPlayer((prev) => (prev - 1 + players.length) % players.length);
  };

  const goToPlayer = (index: number) => {
    setCurrentPlayer(index);
  };

  const handleSelectTeam = (team: string) => {
    setSelectedTeam(team);
    setCurrentPlayer(0); // Reset to first player of the selected team
  };

  const handleBackToTeamSelection = () => {
    setSelectedTeam(null);
    setCurrentPlayer(0);
  };

  return (
    <section className="teams" id="teams">
      <div className="teams-container">
        {!selectedTeam ? (
          <TeamSelection onSelectTeam={handleSelectTeam} />
        ) : (
          <>
            {/* Back button */}
            <button className="back-button" onClick={handleBackToTeamSelection}>
              <span>←</span> BACK TO TEAM SELECTION
            </button>
            
            <div className="player-carousel">
              <div className="player-info">
                <div className="player-role">{players[currentPlayer].role} {"//"} {players[currentPlayer].team}</div>
                <h1 className="player-name">{players[currentPlayer].name}</h1>
                <h2 className="player-ign">{players[currentPlayer].ign}</h2>
                <p className="player-bio">{players[currentPlayer].bio}</p>
            
            <div className="player-socials">
              {players[currentPlayer].socials.twitter && (
                <a href={players[currentPlayer].socials.twitter} className="social-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              )}
              {players[currentPlayer].socials.twitch && (
                <a href={players[currentPlayer].socials.twitch} className="social-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/>
                  </svg>
                </a>
              )}
            </div>
            
            {/* Player counter and navigation moved here */}
            <div className="player-navigation">
              <div className="player-counter">
                <span className="current">{(currentPlayer + 1).toString().padStart(2, '0')}</span>
                <span className="divider"></span>
                <span className="total">{players.length.toString().padStart(2, '0')}</span>
              </div>
              
              <div className="nav-arrows">
                <button className="nav-arrow prev" onClick={prevPlayer}>
                  <span>←</span>
                </button>
                <button className="nav-arrow next" onClick={nextPlayer}>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>

          <div className="player-images">
            {/* Main player image */}
            <div className="player-main-image">
              <div className="player-avatar">
                <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor" opacity="0.3">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
            </div>

            {/* Thumbnail navigation */}
            <div className="player-thumbnails">
              {players.map((player, index) => (
                <button
                  key={player.id}
                  className={`thumbnail ${index === currentPlayer ? 'active' : ''}`}
                  onClick={() => goToPlayer(index)}
                >
                  <div className="thumbnail-content">
                    <div className="thumbnail-label">{player.role} {"//"} {player.team}</div>
                    <div className="thumbnail-avatar">
                      <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor" opacity="0.5">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Teams;
