import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const NbaTeamPage = () => {
  const { teamId } = useParams();
  const [team, setTeam] = useState(null);

  useEffect(() => {
    axios.get(`https://api.sportsdata.io/v3/nba/scores/json/teams/${teamId}?key=722b3495597d4292b99c0c6a9c71381c`)
      .then(response => {
        setTeam(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [teamId]);

  if (!team) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{team.FullName}</h1>
      <p>{team.City}</p>
      <p>{team.Name}</p>
      <p>{team.Conference}</p>
      <p>{team.Division}</p>
    </div>
  );
}

export default NbaTeamPage;