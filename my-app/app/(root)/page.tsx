import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'

const Home = () => {
    const loggedIn = { firstName: 'Ntshuxeko', lastName: 'Mathebula',
        email: 'ntshuxekom98@gmail.com'
    }
    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox
                     type='greeting'
                     title='Welcome'
                     user={loggedIn?.firstName || 'Guest'}
                     subtext='Access and manage your accounts and transactions efficiently.'
                    />

                    <TotalBalanceBox 
                     accounts={[]}
                     totalBanks={1}
                     totalCurrentBalance={1200.50}
                    />
                </header>

                RECENT TRANSACTIONS
            </div>

            <RightSideBar 
             user={loggedIn}
             transactions={[]}
             banks={[{}, {}]}
            />
        </section>
    )
}

export default Home