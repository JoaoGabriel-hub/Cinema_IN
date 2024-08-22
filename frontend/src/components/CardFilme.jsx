import style from "./cardfilme.module.css"
import {NavLink} from 'react-router-dom'

export function CardFilme() {
    return(
        <div>
            <div className={style.card}>
                <img src="https://s3-alpha-sig.figma.com/img/f0ba/a8f0/db65e3c30e85b33c539b26ec5bc1ae77?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OGyBfMWLJRA50qacj8MsSbKC2gvuPM3yJcROLzL8O4WpN5PAdK~VBZb0GXhMT-Rai9ZWSrWZOMUH3-EbR1Z59I7jxKHFruxP4M25fIRsBCBR8iMSeCK0y9TXghhXg04pxvPcwfHoodd0sQUBK4W~2NQ-tT10gvYxWsmSTbxASUa-x~MCepk5Mv3hLEK-zV-mmPNyPWO1cUm8lK4OkhXLv8jiilqhyK4SPjS-W0WaBIVRWdMaI-UgKSF5VS-60h4bH5CcvD0uTwDCZolbmTgeVrNGtuaoC~wokn0oQ2lYk8qG22wbd3vTjXE1EEpBWA2atiWK2Za5~9O06cGlBmwTRQ__" className={style.poster}/>
                <div className={style.datacard}>
                    <div>
                        <h3>TITULO DO FILME</h3>
                        <img src="src/assets/idade.svg" className={style.ageclass}/>
                    </div>
                    <div>
                        <p>Gêneros do filme</p>
                        <p>Direção: Pedrinho de Souza</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing 
                            elit. Corrupti perferendis vitae aliquam libero quas 
                            quis cum. Recusandae doloribus dolorum quas perspiciatis 
                            vel quis possimus sunt quidem inventore. Aliquam, magnam 
                            neque.
                        </p>
                    </div>
                </div>
                <NavLink to='/sessoes'>
                   <button> VER SESSÕES </button>
                </NavLink>
            </div>
        </div>
    )
}