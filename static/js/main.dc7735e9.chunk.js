(this["webpackJsonpmovie-search"]=this["webpackJsonpmovie-search"]||[]).push([[0],{30:function(e,t,c){},32:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(11),r=c.n(a),i=c(4),n=c(15),o={stored:Object(i.d)({cardView:!1,favorites:[]},{storage:"localStorage"}),movieResults:[],selectedMovie:{},onFavoritesPage:!1,toggleCardView:Object(i.b)((function(e){e.stored.cardView=!e.stored.cardView})),setMovieResults:Object(i.b)((function(e,t){e.movieResults=t})),setSelectedMovie:Object(i.b)((function(e,t){e.selectedMovie=t})),addToFavorites:Object(i.b)((function(e,t){var c,s=!1,a=Object(n.a)(e.stored.favorites);try{for(a.s();!(c=a.n()).done;){c.value.imdbID===t.imdbID&&(s=!0)}}catch(r){a.e(r)}finally{a.f()}s||e.stored.favorites.push({Poster:t.poster,Title:t.title,Type:t.type,Year:t.year,imdbID:t.imdbID})})),removeFromFavorites:Object(i.b)((function(e,t){for(var c=e.stored.favorites,s=0;s<c.length;s++)c[s].imdbID===t&&c.splice(s,1)})),toggleOnFavoritesPage:Object(i.b)((function(e){e.onFavoritesPage=!e.onFavoritesPage}))},d=(c(30),c(12)),l=c.n(d),j=c(14),b=c(8),v=c(2),u=c(44),m=c(21),O=(c(32),c(0)),h=function(e){var t=e.movie,c=Object(i.f)((function(e){return e.stored.favorites})),a=Object(i.e)((function(e){return{addToFavorites:e.addToFavorites,removeFromFavorites:e.removeFromFavorites}})),r=a.addToFavorites,o=a.removeFromFavorites,d=Object(s.useState)(!1),l=Object(b.a)(d,2),j=l[0],h=l[1];Object(s.useEffect)((function(){if(!0===e.show){var s,a=Object(n.a)(c);try{for(a.s();!(s=a.n()).done;){var r=s.value;if(t.imdbID===r.imdbID)return h(!0)}}catch(i){a.e(i)}finally{a.f()}h(!1)}}),[e.show]);return Object(O.jsx)(u.a,Object(v.a)(Object(v.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:Object(O.jsx)("div",{className:"modalContainer",style:{backgroundImage:"url(".concat(t.Poster,")")},children:Object(O.jsxs)("div",{className:"backgroundTint",children:[Object(O.jsx)(u.a.Header,{closeButton:!0,children:Object(O.jsx)(u.a.Title,{id:"contained-modal-title-vcenter",children:t.Title})}),Object(O.jsx)(u.a.Body,{children:Object(O.jsxs)("div",{className:"modalBody",children:[Object(O.jsxs)("h5",{children:[t.Type," (",t.Year,")"]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"Plot:"})," ",t.Plot]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"Actors:"})," ",t.Actors]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"Genre:"})," ",t.Genre]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"Director(s):"})," ",t.Director]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"Writer(s):"})," ",t.Writer]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"Production:"})," ",t.Production]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"Awards:"})," ",t.Awards]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"BoxOffice:"})," ",t.BoxOffice]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"Language:"})," ",t.Language]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"Rated:"})," ",t.Rated]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"IMDB Rating:"})," ",t.imdbRating]})]})}),Object(O.jsxs)(u.a.Footer,{children:[Object(O.jsx)(m.a,{variant:j?"danger":"success",onClick:function(){j?(o(t.imdbID),h(!1)):(r({poster:t.Poster,title:t.Title,type:t.Type,year:t.Year,imdbID:t.imdbID}),h(!0))},className:j?"removefavoriteBtn":"addfavoriteBtn",children:j?"Remove from Favorites":"Add to Favorites"}),Object(O.jsx)(m.a,{variant:"secondary",onClick:e.onHide,children:"Close"})]})]})})}))},x=(c(36),function(e){var t=e.movie,c=Object(s.useState)(!1),a=Object(b.a)(c,2),r=a[0],n=a[1],o=Object(i.f)((function(e){return{selectedMovie:e.selectedMovie,onFavoritesPage:e.onFavoritesPage}})),d=o.selectedMovie,v=o.onFavoritesPage,u=Object(i.e)((function(e){return{removeFromFavorites:e.removeFromFavorites,setSelectedMovie:e.setSelectedMovie}})),m=u.removeFromFavorites,x=u.setSelectedMovie,f=function(){var e=Object(j.a)(l.a.mark((function e(){var c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?i=".concat(t.imdbID),{method:"GET",headers:{"x-rapidapi-key":"387e27d97fmsh8e24e62224ddd7bp139e87jsn4629eff6112a","x-rapidapi-host":"movie-database-imdb-alternative.p.rapidapi.com"}});case 3:return c=e.sent,e.next=6,c.json();case 6:s=e.sent,x(s),n(!0),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{onClick:f,className:"listViewBlock",children:[Object(O.jsx)("div",{className:"listPoster",children:Object(O.jsx)("img",{src:t.Poster,alt:"poster"})}),Object(O.jsx)("div",{className:"listTitle",children:Object(O.jsx)("h5",{children:t.Title})}),Object(O.jsx)("div",{className:"listType",children:Object(O.jsx)("h6",{children:t.Type})}),Object(O.jsx)("div",{className:"listYear",children:Object(O.jsx)("h6",{children:t.Year})}),v?Object(O.jsx)("button",{onClick:function(){return m(t.imdbID)},className:"quickRemoveList",children:"X"}):null]}),Object(O.jsx)(h,{movie:d,show:r,onHide:function(){return n(!1)}})]})}),f=(c(37),function(e){var t=e.movie,c=Object(s.useState)(!1),a=Object(b.a)(c,2),r=a[0],n=a[1],o=Object(i.f)((function(e){return{selectedMovie:e.selectedMovie,onFavoritesPage:e.onFavoritesPage}})),d=o.selectedMovie,v=o.onFavoritesPage,u=Object(i.e)((function(e){return{removeFromFavorites:e.removeFromFavorites,setSelectedMovie:e.setSelectedMovie}})),m=u.removeFromFavorites,x=u.setSelectedMovie,f=function(){var e=Object(j.a)(l.a.mark((function e(){var c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?i=".concat(t.imdbID),{method:"GET",headers:{"x-rapidapi-key":"387e27d97fmsh8e24e62224ddd7bp139e87jsn4629eff6112a","x-rapidapi-host":"movie-database-imdb-alternative.p.rapidapi.com"}});case 3:return c=e.sent,e.next=6,c.json();case 6:s=e.sent,x(s),n(!0),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{onClick:f,className:"cardViewBlock",children:[v?Object(O.jsx)("button",{onClick:function(){return m(t.imdbID)},className:"quickRemoveCard",children:"X"}):null,Object(O.jsx)("div",{className:"cardPoster",children:Object(O.jsx)("img",{src:t.Poster,alt:"poster"})}),Object(O.jsx)("div",{className:"cardTitle",children:Object(O.jsx)("h5",{children:t.Title})}),Object(O.jsx)("div",{className:"cardType",children:Object(O.jsx)("h6",{children:t.Type})}),Object(O.jsx)("div",{className:"cardYear",children:Object(O.jsx)("h6",{children:t.Year})})]}),Object(O.jsx)(h,{movie:d,show:r,onHide:function(){return n(!1)}})]})}),p=function(){var e=Object(i.f)((function(e){return{cardView:e.stored.cardView,movieResults:e.movieResults,onFavoritesPage:e.onFavoritesPage,favorites:e.stored.favorites}})),t=e.cardView,c=e.movieResults,s=e.onFavoritesPage,a=e.favorites,r=function(){return s?a:c};return Object(O.jsx)(O.Fragment,{children:void 0!==r()?r().map((function(e){return t?Object(O.jsx)(f,{movie:e},e.imdbID):Object(O.jsx)(x,{movie:e},e.imdbID)})):null})},g=(c(38),function(){var e=Object(i.f)((function(e){return e.stored.cardView})),t=Object(i.e)((function(e){return e.toggleCardView}));return!1===e?Object(O.jsxs)("div",{onClick:t,className:"toggleViewIcon cardViewIcon",children:[Object(O.jsx)("div",{className:"block"}),Object(O.jsx)("div",{className:"block"}),Object(O.jsx)("div",{className:"block"}),Object(O.jsx)("div",{className:"block"}),Object(O.jsx)("div",{className:"block"}),Object(O.jsx)("div",{className:"block"}),Object(O.jsx)("div",{className:"block"}),Object(O.jsx)("div",{className:"block"}),Object(O.jsx)("div",{className:"block"})]}):Object(O.jsxs)("div",{onClick:t,className:"toggleViewIcon listViewIcon",children:[Object(O.jsx)("div",{className:"dot"}),Object(O.jsx)("div",{className:"line"}),Object(O.jsx)("div",{className:"dot"}),Object(O.jsx)("div",{className:"line"}),Object(O.jsx)("div",{className:"dot"}),Object(O.jsx)("div",{className:"line"})]})});c(39),c(40);var F=function(){var e=Object(i.f)((function(e){return{cardView:e.stored.cardView,onFavoritesPage:e.onFavoritesPage}})),t=e.cardView,c=e.onFavoritesPage,a=Object(i.e)((function(e){return{setMovieResults:e.setMovieResults,toggleOnFavoritesPage:e.toggleOnFavoritesPage}})),r=a.setMovieResults,n=a.toggleOnFavoritesPage,o=Object(s.useState)(""),d=Object(b.a)(o,2),v=d[0],u=d[1],h=function(){var e=Object(j.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!v.length){e.next=15;break}return u(""),e.prev=2,e.next=5,fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?s=".concat(v),{method:"GET",headers:{"x-rapidapi-key":"387e27d97fmsh8e24e62224ddd7bp139e87jsn4629eff6112a","x-rapidapi-host":"movie-database-imdb-alternative.p.rapidapi.com"}});case 5:return t=e.sent,e.next=8,t.json();case 8:c=e.sent,r(c.Search),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}();return document.addEventListener("keydown",(function(e){13===e.keyCode&&(e.preventDefault(),document.querySelector(".enter").click())})),Object(O.jsxs)("div",{className:"appContainer",children:[Object(O.jsx)("header",{children:Object(O.jsx)("div",{className:"header",children:Object(O.jsxs)("div",{className:"headerItems",children:[Object(O.jsx)(m.a,{onClick:n,variant:"outline-secondary",className:"favorites",children:c?"Search":"Favorites"}),Object(O.jsx)(g,{})]})})}),Object(O.jsxs)("div",{className:"grid",children:[c?Object(O.jsx)("div",{className:"favoritesContainer",children:Object(O.jsx)("h2",{className:"favText",children:"Favorites"})}):Object(O.jsxs)("div",{className:"searchBoxContainer",children:[Object(O.jsx)("input",{onChange:function(e){return u(e.target.value)},value:v,className:"searchBox",type:"text",placeholder:"Search for a movie, show, game, etc..."}),Object(O.jsx)(m.a,{variant:"outline-secondary",onClick:h,className:"enter",children:"Enter"})]}),Object(O.jsx)("div",{className:"resultContainer",children:Object(O.jsx)("div",{className:t?"cardContainer":"listContainer",children:Object(O.jsx)(p,{})})})]})]})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,45)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),r(e),i(e)}))},k=Object(i.c)(o);r.a.render(Object(O.jsx)(i.a,{store:k,children:Object(O.jsx)(F,{})}),document.getElementById("root")),N()}},[[41,1,2]]]);
//# sourceMappingURL=main.dc7735e9.chunk.js.map