'use client'
import { rem, Button } from '@mantine/core';
import { Spotlight, SpotlightActionData, spotlight } from '@mantine/spotlight';

const actions: SpotlightActionData[] = [
    {
      id: 'home',
      label: 'Home',
      description: 'Get to home page',
      onClick: () => console.log('Home'),
    },
    {
      id: 'dashboard',
      label: 'Dashboard',
      description: 'Get full information about current system status',
      onClick: () => console.log('Dashboard'),
    },
    {
      id: 'documentation',
      label: 'Documentation',
      description: 'Visit documentation to lean more about all features',
      onClick: () => console.log('Documentation'),
    },
];

export const SearchBar = () => {
    return (
        <div className='flex justify-center'>
            <Button onClick={spotlight.open} fullWidth className='mx-4 my-2'>Search</Button>
            <Spotlight
                actions={actions}
                nothingFound="Nothing found..."
                highlightQuery
                searchProps={{
                placeholder: 'Search...',
                }}
            />
        </div>
    )
}