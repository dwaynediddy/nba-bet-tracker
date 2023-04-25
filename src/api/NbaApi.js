import { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const nbaTeamsApi = 'https://api.sportsdata.io/v3/nbgit adda/scores/json/teams?key=722b3495597d4292b99c0c6a9c71381c';

const NbaApi = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      axios.get(nbaTeamsApi)
        .then(response => {
          const filteredTeams = Object.values(response.data).filter(team => {
            const teamName = `${team.City} ${team.Name}`.toLowerCase();
            const query = searchQuery.toLowerCase();
            return teamName.includes(query);
          });
          setSearchResults(filteredTeams);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  }

  return (
    <div>
      <input type="text" value={searchQuery} onChange={handleSearchInputChange} placeholder="Search NBA teams..." />
      {searchResults.map(team => (
        <div key={team.TeamID}>
          <Link to={`/team/${team.TeamID}`}>
            <p>{team.City} {team.Name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default NbaApi;