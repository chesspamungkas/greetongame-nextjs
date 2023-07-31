import React  from 'react'
import GameList from '@/components/GameList'
import MostPopular from '@/components/MostPopular'
import withErrorBoundary from '@/hoc/withErrorBoundary'

const HomePage = () => {
    return (
        <main>
            <div className='padding-x padding-y max-width'>
                <GameList />
                <hr className="h-px my-8 bg-secondary-color border-0 dark:bg-primary-color"></hr>   
                <MostPopular />
            </div>
        </main>
    )
}

export default withErrorBoundary(HomePage)