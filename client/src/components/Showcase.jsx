import '../assets/scss/hero.scss'
import { FaLongArrowAltRight } from "react-icons/fa";

const Showcase = ()=>{
    return(
        <>
            <div className="showcase_container">
                <div className="showcase_content">
                   <div className="left">Hi</div>
                    <div className="right">
                        <h4>Connect the world ...</h4>
                        <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid animi consectetur consequatur, consequuntur earum fugit, id iste obcaecati odio, quidem quo ratione repellendus sit vel. Consequatur excepturi labore numquam!</span></p>
                        <a href="#"> <span>More</span><FaLongArrowAltRight /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Showcase