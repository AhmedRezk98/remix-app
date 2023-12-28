import {NavLink} from '@remix-run/react'

function MainNavigation(){
    return <nav>
        <ul>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/notes'>Notes</NavLink>
            </li>
        </ul>
    </nav>
}

export default MainNavigation;