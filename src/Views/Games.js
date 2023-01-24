function Games(){
    return(
        <div style={styles.games}>
            <img style={styles.dim} alt="" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/most-popular-video-games-of-2022-1642612227.png" />
        </div>
    )
}

const styles = {
    games: {
        width: '100%',
        height: '100%',
    },

    dim: {
        width: '100%',
        height: '100%'
    }
}

export default Games;