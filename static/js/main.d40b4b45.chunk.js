(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(2),l=a.n(o),s=(a(12),a(3)),c=a(4),r=a(6),d=a(5),m=(a(13),function(e){var t=e.handleSectionClick;return i.a.createElement("div",{className:"sidenav"},i.a.createElement("img",{src:"https://media-exp1.licdn.com/dms/image/C5103AQHStYyK-6AV5g/profile-displayphoto-shrink_200_200/0?e=1604534400&v=beta&t=gn3I4kEahUXMNs-_SHKO-fjs0FbnWgz_FQLSqyLUHZE",className:"avatar",alt:"avatar"}),i.a.createElement("h2",{className:"main-name"},"Kasish Agarwal"),i.a.createElement("p",{className:"subtitle"},'"A Full Stack Developer"'),i.a.createElement("div",{className:"sections-list"},i.a.createElement("p",{className:"section-list-element",onClick:function(){return t("about")}},"About Me"),i.a.createElement("p",{className:"section-list-element",onClick:function(){return t("skills")}},"Skills"),i.a.createElement("p",{className:"section-list-element",onClick:function(){return t("projects")}},"Projects")))}),u=(a(14),function(e){var t=e.bio;return i.a.createElement("div",{className:"about-container"},i.a.createElement("p",null,t))}),p=(a(15),function(e){var t=e.skill;return i.a.createElement("div",{className:"skill-card"},t)}),h=(a(16),function(e){var t=e.skills;return i.a.createElement("div",{className:"skills-container"},i.a.createElement("h3",null,"Technical Skills"),i.a.createElement("div",{className:"industry-skill-container"},t.techSkills.map((function(e){return i.a.createElement(p,{skill:e})}))),i.a.createElement("h3",null,"Industry Knowledge"),i.a.createElement("div",{className:"industry-skill-container"},t.industryKnowledge.map((function(e){return i.a.createElement(p,{skill:e})}))),i.a.createElement("h3",null,"Interpersonal Skills"),i.a.createElement("div",{className:"industry-skill-container"},t.interpersonalSkills.map((function(e){return i.a.createElement(p,{skill:e})}))))}),g=(a(17),function(e){var t=e.project;return i.a.createElement("div",{className:"project-card"},i.a.createElement("p",null,i.a.createElement("b",null,"Name:")," ",t.name),i.a.createElement("p",null,i.a.createElement("b",null,"Description:")," ",t.description))}),f=function(e){var t=e.projects;return i.a.createElement("div",{className:"projects-container"},i.a.createElement("div",{className:"industry-skill-container"},t.projectList.map((function(e){return i.a.createElement(g,{project:e})}))))},S=(a(18),function(e){var t=e.selectedHeading,a=e.selectedQuote,n=e.selectedSection,o=e.about,l=e.skills,s=e.projects;return i.a.createElement("div",{className:"section-container"},i.a.createElement("div",{className:"section-heading-container"},i.a.createElement("h1",{className:"main-heading"},t),i.a.createElement("p",{className:"main-quote"},a)),i.a.createElement("div",{className:"section-component"},{about:i.a.createElement(u,{bio:o.bio}),skills:i.a.createElement(h,{skills:l}),projects:i.a.createElement(f,{projects:s})}[n]))}),v=(a(19),function(e){var t=e.handleSectionClick,a=e.selectedHeading,n=e.selectedQuote,o=e.selectedSection,l=e.about,s=e.skills,c=e.projects;return i.a.createElement("div",{className:"portfolio-container"},i.a.createElement("div",{className:"sidenav-container"},i.a.createElement(m,{handleSectionClick:t})),i.a.createElement("div",{className:"main-section-container"},i.a.createElement(S,{selectedSection:o,selectedHeading:a,selectedQuote:n,about:l,skills:s,projects:c})))}),k={heading:"About Me",quote:"Things are not as easy as it seems, even life is full of errors, and we just need to debug. Thus I framed my career towards developing, programming, debugging and am a Full Stack Developer. A Leader, Motivator, Stage Lover, Artist, Painter, and much more defines my personality. ",bio:"I was ICSE student till my 10th stardard and also was one of district topper, Further i did my pre-graduation with very good score, then my Bachelors of Engineering in Computer Science from LNCT group of colleges, Bhopal. My optimistic thought process lead my way to internship while i was pursuing my engineering, in ValueLabs. Now I am working as a Full time Employee designated as Software Engineer. It taught me that a company by itself is a bunch of people working towards a common goal. If the people won't succeed the company won't either. "},E={heading:"Skills",quote:"Skill = Power + Skill = Magic + Skill = Everything",techSkills:["NodeJS","ReactJS","JavaScript","C++","C","Python","HTML","CSS","Bootstrap4","Material Design","MaterializeCSS","MySql","MongoDB"],industryKnowledge:["Software Development","Marketing","Engineering"],interpersonalSkills:["Communication","Team Motivation","Leadership","Public Speaking"]},y={heading:"Projects",quote:"Implementation is Satisfaction",projectList:[{name:"Camouflaged Detailer",description:"The project aims to provide a secret vault of thoughts to individuals who get registered on it. Technology used are HTML, CSS, JavaScript, React JS, Node JS, MySql and Bootstrap 4.",link:""},{name:"Blood Bank Pro",description:"The aim of this project is to fulfill the availability of Blood to the needy ones. It is based on HTML, CSS, JavaScript, React JS, Node JS, MySql and Bootstrap 4. Any donor can get registered, so that the people who need blood can directly get the contact of the donors from their id, and also if some one needs blood can contact the donors registered on the website.",link:""},{name:"Attendance Assessment Software",description:"The aim of the project is to provide an easy method of attendance compilation for a particular organization. It is based on HTML, CSS, JavaScript, MySql and JSP that manages attendance of students and teachers along with giving detailed report for assessing the eligibility of various criteria set for events being hosted.",link:""}]},b=(a(20),function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).handleSectionClick=function(t){e.setState({selectedSection:t,selectedHeading:e.state[t].heading,selectedQuote:e.state[t].quote})},e.state={selectedSection:"",selectedHeading:"",selectedQuote:"",about:null,skills:null,projects:null},e}return Object(c.a)(a,[{key:"componentWillMount",value:function(){this.setState({about:k,skills:E,projects:y,selectedHeading:k.heading,selectedQuote:k.quote,selectedSection:"about"})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(v,{handleSectionClick:this.handleSectionClick,selectedSection:this.state.selectedSection,selectedHeading:this.state.selectedHeading,selectedQuote:this.state.selectedQuote,about:this.state.about,skills:this.state.skills,projects:this.state.projects}))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.d40b4b45.chunk.js.map