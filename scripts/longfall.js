

document.addEventListener("DOMContentLoaded", ()=> {
    let el = document.getElementById( 'content' );
    let appendString = '';
    for( let i=0; i< posts.length; i++ ){
        appendString += createPostString( posts[ i ] );
    } // end for
    el.innerHTML+= appendString;
    
    ///  test
    const params = new URLSearchParams(window.location.pathname);
    const paramsString = params.toString();
    console.log( params.toString() );
});

let createPostString = ( post, index ) => {
    let elString = `<div class="App-article">`;
    elString += `<hr />`;
    elString += `<h1>${ post.title }</h1>`;
    //   <div className={ alignment }>
    if( post.type === 'image'){ 
        elString += `<img src='${ post.image }' class='Article-image-wide-left alt='${ post.title }'></img>`;
    }
    else if ( post.type === 'video' ){
        let width = document.getElementById("content").offsetWidth * 0.8;
        let height = width * 0.56;
        if( post.youtube_id != '' ){
            elString += `<iframe width="${ width }" height=${ height } src="https://www.youtube.com/embed/${ post.youtube_id }" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        }
        else if( post.fb_id != '' ){
            elString += `<iframe src="https://www.facebook.com/plugins/video.php?height=1080&href=https%3A%2F%2Fwww.facebook.com%2Fcallofthefall%2Fvideos%2F952723752370500%2F&show_text=false&width=1920&t=0" width="${ width }" height="${ height }" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>`;
        }
    }
    else if( post.type === "music"){
        elString += `<iframe 
          src=${ post.spotifyUrl }
          width="55%" 
          height="420"
          title="Spotify player"
        />`;
    }

    post.text.map( ( line, i ) =>( elString += `<p key={ i }>${ line }</p>` ) );
    //     <PostLinks links={ props.post.links } />
    elString += `<br clear="all" />`
    //   </div>
    elString +=`</div>`
    return elString;
}