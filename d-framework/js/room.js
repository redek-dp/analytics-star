
tokenapi_URL = "" + document.location;
tokenapi_From = tokenapi_URL.indexOf("#api=");
tokenapi = tokenapi_URL.substring(tokenapi_From + 5, tokenapi_URL.length);


window.onload = function () {
    if (!window.location.hash) {
        window.location = window.location + '#api=eyJ1IjogImFjOGRiN2I1LWZiMmUtNDQ1NS05NjA5LTM0ZGI0YjU5YWFhNyIsICJpZCI6ICI4ZWNlMmNjYy1jNmNlLTRkNzktYTBkZS1jZGY0Yzg1NDQwNDgifQ.1suExc_c-7OowRiV7C7w18mvEeZI6W_I69tjpXbVH_M';
        window.location.reload();
    }
}


/*var tokenapi = "eyJ1IjogImFjOGRiN2I1LWZiMmUtNDQ1NS05NjA5LTM0ZGI0YjU5YWFhNyIsICJpZCI6ICI4ZWNlMmNjYy1jNmNlLTRkNzktYTBkZS1jZGY0Yzg1NDQwNDgifQ.1suExc_c-7OowRiV7C7w18mvEeZI6W_I69tjpXbVH_M";*/


new Vue({
    el: "#top_devicesmy",
    data: {

        nuber: "14",
        nupok: "fi fi-",
        posts: []
    },
    created() {
        this.getData();
    },
    methods: {
        getData() {
            axios
                .get(
                    "https://api.us-east.tinybird.co/v0/pipes/top_devices.json?limit=50&token=p." + tokenapi + ""
                )
                .then((posts) => {
                    this.posts = posts.data;
                    console.log(this.posts);
                });
        }
    }
});



new Vue({
    el: "#top_devices",
    data: {

        nuber: "14",
        nupok: "fi fi-",
        posts: []
    },
    created() {
        this.getData();
    },
    methods: {
        getData() {
            axios
                .get(
                    "https://api.us-east.tinybird.co/v0/pipes/top_devices.json?limit=50&token=p." + tokenapi + ""
                )
                .then((posts) => {
                    this.posts = posts.data;
                    console.log(this.posts);
                });
        }
    }
});


new Vue({
    el: "#top_browsers",
    data: {

        nuber: "14",
        nupok: "fi fi-",
        posts: []
    },
    created() {
        this.getData();
    },
    methods: {
        getData() {
            axios
                .get(
                    "https://api.us-east.tinybird.co/v0/pipes/top_browsers.json?limit=50&token=p." + tokenapi + ""
                )
                .then((posts) => {
                    this.posts = posts.data;
                    console.log(this.posts);
                });
        }
    }
});


new Vue({
    el: "#top_locations",
    data: {

        nuber: "14",
        nupok: "fi fi-",
        posts: []
    },
    created() {
        this.getData();
    },
    methods: {
        getData() {
            axios
                .get(
                    "https://api.us-east.tinybird.co/v0/pipes/top_locations.json?limit=50&token=p." + tokenapi + ""
                )
                .then((posts) => {
                    this.posts = posts.data;
                    console.log(this.posts);
                });
        }
    }
});


new Vue({
    el: "#top_sources",
    data: {

        nuber: "14",
        nupok: "fi fi-",
        posts: []
    },
    created() {
        this.getData();
    },
    methods: {
        getData() {
            axios
                .get(
                    "https://api.us-east.tinybird.co/v0/pipes/top_sources.json?limit=30&token=p." + tokenapi + ""
                )
                .then((posts) => {
                    this.posts = posts.data;
                    console.log(this.posts);
                });
        }
    }
});



new Vue({
    el: "#top_pages",
    data: {

        nuber: "14",
        nupok: "fi fi-",
        posts: []
    },
    created() {
        this.getData();
    },
    methods: {
        getData() {
            axios
                .get(
                    "https://api.us-east.tinybird.co/v0/pipes/top_pages.json?limit=30&token=p." + tokenapi + ""
                )
                .then((posts) => {
                    this.posts = posts.data;
                    console.log(this.posts);
                });
        }
    }
});




new Vue({
    el: "#analytics_hits",
    data: {

        at1: '#',
        nuber: "30",
        nupok: "fi fi-",
        posts: []
    },
    created() {
        this.getData();
    },
    methods: {
        getData() {
            axios
                .get(
                    "https://api.us-east.tinybird.co/v0/pipes/analytics_hits.json?token=p." +
                    tokenapi +
                    ""
                )
                .then((posts) => {
                    this.posts = posts.data;
                    console.log(this.posts);
                });
        }
    }
});






function enviar() {
    var valor = document.getElementById("textinput").value;
    //alert("Você digitou: " + valor);
    window.open("https://redek-dp.github.io/analytics-star/#api=" + valor, "_blank",);
}

function share(button) {
    if (navigator.share) {

        navigator.share({
            title: "Analytics Star",
            text: "APP DavAnalytics Servdevanalytics",
            url: "https://redek-dp.github.io/analytics-star/"
        });
    } else {
        if (!clickedOnShare) {
            clickedOnShare = true;
            showLoading(button);
        }
    }
}
