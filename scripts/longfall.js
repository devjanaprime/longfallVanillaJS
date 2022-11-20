

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
    post.text.map( ( line, i ) =>( elString += `<p key={ i }>${ line }</p>` ) );
    //     <PostLinks links={ props.post.links } />
    elString += `<br clear="all" />`
    //   </div>
    elString +=`</div>`
    return elString;
}