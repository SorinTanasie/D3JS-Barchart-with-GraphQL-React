const query = `{
    allPosts(count:100) {
                id
                title
                body
                published
                createdAt
                author {
                  id
                  firstName
                  lastName
                  avatar
            }
      }  
    }`;

export {query};
