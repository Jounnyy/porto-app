import styled from 'styled-components'
import Link from 'next/link'

const Nav = styled.nav`
    background: transparent;
    height: 80px;
`

const Navbar = () => {
  return (
    <nav>
        <div>
            <Link href='/'>
                <a>Home</a>
            </Link>
        </div>
        <div>
            <Link href='/'>
                <a>ShowCaseRTG HM </a>
            </Link>
        </div>
        <div>
            <Link href='/'>
                <a>Home</a>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar