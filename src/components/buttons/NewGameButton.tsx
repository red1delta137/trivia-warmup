import {Button, Group} from '@mantine/core';
import {useNavigate} from 'react-router-dom';

export function NewGameButton() {

    const navigate = useNavigate();

    const handleClick = () => {
        fetch('http://localhost:8080/category/all')
            .then(res => res.text())
            .then(data => console.log(data))
            .catch(err => console.log(err));
    };

    return (
        <Group justify="center">
            <Button color="orange" onClick={handleClick}>New Game</Button>
        </Group>
    );


}