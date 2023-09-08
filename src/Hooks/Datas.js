import { useEffect, useState } from 'react';

const Datas = () => {
        const [teams, setTeams] = useState([]); // Initialize with an empty array
        const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
                // Fetch data from the API endpoint
                fetch('https://raw.githubusercontent.com/mostakshahariyar/gym-data/main/gym.json')
                        .then(res => res.json())
                        .then(data => {
                                // Once data is fetched, update the state and set isLoading to false
                                setTeams(data);
                                setIsLoading(false);
                        })
                        .catch(error => {
                                // Handle any errors during the fetch process
                                console.error('Error fetching data:', error);
                                setIsLoading(false); // Update the loading state in case of an error
                        });
        }, []);
        return ([teams, isLoading]);
};

export default Datas;