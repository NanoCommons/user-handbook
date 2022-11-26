// Original code taken with permission from : https://github.com/dwilliamson/donw.io/blob/master/public/js/github-comments.js
//

async function getComments(repo_name, comment_id, page_id, acc )
{
    const url = "https://api.github.com/repos/" + repo_name + "/issues/" + comment_id + "/comments" + "?page=" + page_id;
    const resp = await fetch (url, { headers: {Accept: "application/vnd.github.v3.html+json"}});
    if (resp.status !== 200) {
        throw new Error("Response status " + resp.status + " while attempting to fetch comments from: " + url);
    }

    const comments = await resp.json();
    let newcomments = 0;

    // Individual comments
    for (let i = 0; i < comments.length; i++)
    {
        const comment = comments[i];
        if (comment.reactions.eyes > 0) {
            continue
        }
        const date = new Date(comment.created_at);
        const now = new Date();
        if (30 >= Math.floor((now - date) / (1000 * 60 * 60 * 24)))
        {
            newcomments = newcomments + 1;
        }

        acc.push( "<div class='gh-comment'>" + 
                    "Posted at " + 
                    "<em>" + date.toUTCString() + "</em>" + 
                    "<div class='.gh-comment-hr'></div>" + 
//                    JSON.stringify(comment) + // prints full reply for testing
                    comment.body_html + 
                  "</div>" );
    }

    // Call recursively if there are more pages to display

    const links = resp.headers.get("Link");
    if (links) {
        const entries = links.split(",");
        for (let j=0; j<entries.length; j++)
        {
            const entry = entries[j];
            if (-1 != entry.search('rel="next"'))
            {
                acc = await getComments(repo_name, comment_id, page_id+1, acc);
                break; // recurse on "next" and then stop looking for "next".
            }
        }
    }
    return [acc, comments.length, newcomments];
}

function DoGithubComments(repo_name, comment_id, list_flag)
{
    const date = new Date();
    date.setDate(date.getDate() - 30); // new comments are less than 30 days old
    document.addEventListener("DOMContentLoaded", async function() 
    {
        try {
            // post button 
            const url = "https://github.com/" + repo_name + "/issues/" + comment_id + "#new_comment_field";
            const comments = await getComments(repo_name, comment_id, 1, []);
            const commentsElement = document.getElementById('gh-comments-list');

            // choose one of the next two lines to determine display order (newest or oldest first).
            const commentsHtml = comments[0].join('');             // oldest first
            // const commentsHtml = comments.reverse().join('');   // newest first
            
            const count = "<div  class='gh-comment'>Total number of comments: " + comments[1] + "<br>New comments since " + date.toUTCString() + ": " + comments[2] + "</div>"

            if (list_flag === 'false') {
                commentsElement.innerHTML = "<div class='more-link more-link--webpage'><a href='" + url + "'>Read and post comments on Github</a></div>" + count;
            } else {
                commentsElement.innerHTML = "<div class='more-link more-link--webpage'><a href='" + url + "'>Post a comment on Github</a></div>" + commentsHtml + count;
            }
        } catch (err)
        {
            console.log( err.message );
        }
        return null;
    });
}
