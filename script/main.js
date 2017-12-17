  function getGithubData(){
            fetch("https://api.github.com/users/pkhisti/repos")
            .then((response)=>{
                response.json().then(data=>{
                        let mainDiv = $("#main");
                        let count = 1;
                        data.forEach(item=>{
                            if(count < 4) {
                                 mainDiv.append("<div class=\"projects\"><img class=\"subImage\"  src=\"images/book"+count+".jpg\" alt=\"logo\"><div class=\"projectTitle\">"+ item.name +"</div></div>");
                                 count = count + 1;
                            }
                        });
                });
            }).catch((error)=>{
                console.log(error.message);
            });
        }