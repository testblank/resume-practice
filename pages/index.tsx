import Link from 'next/link';
import Style from 'styles/index.module.scss';


const Home = () => {

  const onClickGoAbout = () => {
    console.log('onClickGoAbout')
  }

  return (
    <div>
      <div>Hello Next</div>
      <Link href={'/about'} >
        <a title={'about page'}>go to about</a>
      </Link>
    </div>
  )
}

export default Home;