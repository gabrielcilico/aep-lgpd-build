(function(e){function s(s){for(var a,r,n=s[0],d=s[1],c=s[2],l=0,p=[];l<n.length;l++)r=n[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(e[a]=d[a]);u&&u(s);while(p.length)p.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var e,s=0;s<o.length;s++){for(var t=o[s],a=!0,n=1;n<t.length;n++){var d=t[n];0!==i[d]&&(a=!1)}a&&(o.splice(s--,1),e=r(r.s=t[0]))}return e}var a={},i={app:0},o=[];function r(s){if(a[s])return a[s].exports;var t=a[s]={i:s,l:!1,exports:{}};return e[s].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=a,r.d=function(e,s,t){r.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:t})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,s){if(1&s&&(e=r(e)),8&s)return e;if(4&s&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var a in e)r.d(t,a,function(s){return e[s]}.bind(null,a));return t},r.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(s,"a",s),s},r.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],d=n.push.bind(n);n.push=s,n=n.slice();for(var c=0;c<n.length;c++)s(n[c]);var u=d;o.push([0,"chunk-vendors"]),t()})({0:function(e,s,t){e.exports=t("56d7")},"0110":function(e,s,t){"use strict";var a=t("6266"),i=t.n(a);i.a},"034f":function(e,s,t){"use strict";var a=t("85ec"),i=t.n(a);i.a},2065:function(e,s,t){"use strict";var a=t("c5b0"),i=t.n(a);i.a},"33a7":function(e,s,t){},3673:function(e,s,t){},"53b1":function(e,s,t){"use strict";var a=t("3673"),i=t.n(a);i.a},"56d7":function(e,s,t){"use strict";t.r(s);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),i=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{attrs:{id:"app"}},[t("Header"),t("router-view")],1)},o=[],r=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("header",[t("h1",{staticClass:"nes-text is-warning"},[e._v("Quiz LGPD")]),t("nav",[e.$store.state.player?t("router-link",{staticClass:"nes-btn",attrs:{to:"/"}},[e._v("Desistir")]):e._e()],1)])},n=[],d={name:"Header",data:function(){return{player:this.$store.state.player}}},c=d,u=(t("8baf"),t("2877")),l=Object(u["a"])(c,r,n,!1,null,null,null),p=l.exports,m={name:"Home",components:{Header:p}},h=m,v=(t("034f"),Object(u["a"])(h,i,o,!1,null,null,null)),f=v.exports,g=t("8c4f"),b=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"content"},[t("div",{staticClass:"container"},[t("MessageCard",{key:e.messageKey,attrs:{message:e.message}})],1),t("div",{staticClass:"container"},[t("LoginCard",{on:{error:e.nameError}})],1)])},C=[],w=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"nes-container is-dark with-title is-centered card"},[t("h1",{staticClass:"title"},[e._v("Começar")]),t("div",{staticClass:"nes-field"},[t("label",{attrs:{for:"name_field"}},[e._v("Seu nome")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"nes-input",attrs:{type:"text",id:"name_field",autocomplete:"off"},domProps:{value:e.name},on:{keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.validate(s)},input:function(s){s.target.composing||(e.name=s.target.value)}}})]),t("button",{staticClass:"nes-btn is-warning",attrs:{type:"button"},on:{click:e.validate}},[e._v("Começar")])])},_=[],y=(t("b0c0"),t("ac1f"),t("466d"),{name:"LoginCard",data:function(){return{name:"",dialog:!1}},methods:{validate:function(){var e=this.name;if(!e||e.match(/[^A-Za-z0-9]/)||e.match(" ")||e.length<3||e.length>12)return this.returnErrorMessage(),void(this.name="");this.$store.state.player=e,this.$router.push("/game")},returnErrorMessage:function(){this.$emit("error")}}}),q=y,O=(t("0110"),Object(u["a"])(q,w,_,!1,null,"4a05def2",null)),P=O.exports,M=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",{staticClass:"card"},[t("i",{staticClass:"nes-bcrikko"}),t("p",{staticClass:"nes-balloon from-left nes-pointer"},[e._v(" "+e._s(e.typeValue)+" ")])])},x=[],A=(t("4160"),t("1276"),t("159b"),{name:"MessageCard",props:{message:{type:String,default:"Seja bem vindo! Escolha um nome e comece a jogar!"}},data:function(){return{typeValue:""}},methods:{messageWriter:function(){var e=this,s=this.message.split("");s.forEach((function(s,t){setTimeout((function(){e.typeValue+=s}),75*t)}))}},mounted:function(){this.messageWriter()}}),E=A,Q=(t("53b1"),Object(u["a"])(E,M,x,!1,null,"27408b48",null)),$=Q.exports,k={name:"Home",components:{LoginCard:P,MessageCard:$},data:function(){return{message:"Seja bem vindo! Escolha um nome e comece a jogar!",messageKey:1}},methods:{nameError:function(){this.message="",this.message="Este nome não é válido! Tente usar um nome sem caracteres especiais e sem espaços. E lembre-se: o nome deve conter de 3 à 12 caracteres.",this.messageKey++}},mounted:function(){this.$store.state.player=""}},j=k,N=(t("d3ad"),Object(u["a"])(j,b,C,!1,null,"7944447d",null)),T=N.exports,z=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"content"},[t("div",{staticClass:"container"},[t("div",{staticClass:"nes-badge is-splited badge"},[t("span",{staticClass:"is-dark"},[e._v("ACERTOS")]),t("span",{staticClass:"is-warning"},[e._v(e._s(e.hits))])]),t("div",{staticClass:"nes-badge is-splited tips"},[t("span",{staticClass:"is-dark"},[e._v("DICAS")]),t("span",{staticClass:"is-warning"},[e._v(e._s(e.$store.state.tips))])])]),e.openMessage?t("div",{staticClass:"container"},[t("div",{staticClass:"content"},[t("MessageCard",{key:e.cardKey,attrs:{message:e.message}}),t("div",{staticClass:"options"},[t("progress",{key:e.progress,staticClass:"nes-progress is-primary",attrs:{max:"100"},domProps:{value:e.progress}}),t("button",{staticClass:"nes-btn is-primary",attrs:{type:"button"},on:{click:e.pressContinue}},[e._v("Continuar")])])],1)]):t("div",{staticClass:"container"},[e.currentNumberQuestion<=10?t("QuestionCard",{attrs:{questionNumber:e.currentQuestion.number,question:e.currentQuestion.question,answers:e.currentQuestion.answers,tip:e.currentQuestion.tip},on:{answer:e.getAnswer}}):e._e()],1)])},S=[],D=(t("4de4"),function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[e.hasError?t("ErrorModal",{on:{close:function(s){e.hasError=!1}}}):e._e(),e.hasTip?t("ErrorModal",{attrs:{message:e.tip},on:{close:function(s){e.hasTip=!1}}}):e._e(),t("div",{staticClass:"nes-container is-dark with-title is-centered card"},[t("h1",{staticClass:"title"},[e._v("Pergunta #"+e._s(e.questionNumber))]),t("p",{staticClass:"nes-text is-error"},[e._v(e._s(e.question))]),e._l(e.answers,(function(s){return t("div",{key:s.id,staticClass:"answer-radio"},[t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.choosenAnswer,expression:"choosenAnswer"}],staticClass:"nes-radio",attrs:{type:"radio",name:"answer"},domProps:{value:s.id,checked:e._q(e.choosenAnswer,s.id)},on:{change:function(t){e.choosenAnswer=s.id}}}),t("span",[e._v(e._s(s.title))])])])}))],2),t("div",{staticClass:"controller-group"},[t("div",{staticClass:"progress-group"},[t("progress",{staticClass:"nes-progress is-warning",attrs:{max:"100"},domProps:{value:10*e.questionNumber}}),t("div",{staticClass:"progress-info"},[t("h3",{staticClass:"nes-text is-warning"},[e._v("Progresso:")]),t("div",{staticClass:"nes-badge is-splited"},[t("span",{staticClass:"is-warning"},[e._v(e._s(e.questionNumber))]),t("span",{staticClass:"is-dark"},[e._v("10")])])])]),t("div",{staticClass:"progress-info"},[e.$store.state.tips>0?t("button",{staticClass:"nes-btn tip",on:{click:e.showTip}},[e._v("Dica")]):e._e(),t("button",{staticClass:"nes-btn is-warning",attrs:{type:"button"},on:{click:e.confirmAnswer}},[e._v("Confirmar")])])])],1)}),L=[],G=(t("a9e3"),function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"modal"},[t("MessageCard",{attrs:{message:e.message}}),t("div",{staticClass:"control"},[t("button",{staticClass:"nes-btn is-error",attrs:{type:"button"},on:{click:e.closeModal}},[e._v("OK")])])],1)}),V=[],I={name:"ErrorModal",props:{message:{type:String,default:"Você precisa selecionar uma opção!"}},components:{MessageCard:$},data:function(){return{}},methods:{closeModal:function(){this.$emit("close")}}},K=I,U=(t("2065"),Object(u["a"])(K,G,V,!1,null,null,null)),H=U.exports,J={name:"QuestionCard",components:{ErrorModal:H},props:{questionNumber:Number,question:String,answers:Array,tip:String},data:function(){return{choosenAnswer:0,hasError:!1,hasTip:!1}},methods:{confirmAnswer:function(){this.hasError=!1;var e=this.choosenAnswer;e?this.$emit("answer",e):this.hasError=!0},showTip:function(){this.$store.state.tips<=0?this.hasTip=!1:(this.$store.state.tips--,this.hasTip=!0)}}},F=J,R=(t("5907"),Object(u["a"])(F,D,L,!1,null,"638baece",null)),W=R.exports,Z=t("6e63"),B={name:"Game",components:{QuestionCard:W,MessageCard:$},data:function(){return{message:"",hits:0,openMessage:!1,progress:100,cardKey:1,player:this.$store.state.player,questions:Z,currentQuestion:{},currentNumberQuestion:0}},methods:{getAnswer:function(e){var s=this,t="";if(this.currentQuestion.idCorrectAnswer==e)t="Parabéns, ".concat(this.player,"! Você acertou!"),this.hits++;else{var a=this.currentQuestion.answers.filter((function(e){return e.id==s.currentQuestion.idCorrectAnswer}))[0];t="Oops, ".concat(this.player,"! Você Errou! Na verdade a resposta correta é '")+a.title+"'..."}this.openTheMessage(t)},nextQuestion:function(){this.currentNumberQuestion>=10?this.$router.push("/finish"):(this.cardKey++,this.openMessage&&(this.updateQuestion(),this.openMessage=!1))},updateQuestion:function(){this.questions.length>this.currentNumberQuestion&&(this.currentQuestion=this.questions[this.currentNumberQuestion],this.currentQuestion.answers=this.currentQuestion.answers.sort((function(){return.5-Math.random()}))),this.currentNumberQuestion++},openTheMessage:function(e){this.message=e,this.openMessage=!0,this.timerControl()},timerControl:function(){var e=this;this.progress=100;var s=setInterval((function(){e.progress-=5,(e.progress<=0||!e.openMessage)&&(e.nextQuestion(),clearInterval(s))}),1e3)},pressContinue:function(){this.progress=0}},mounted:function(){this.$store.state.player||this.$router.push("/"),this.$store.state.tips=3,this.updateQuestion()},watch:{hits:function(){this.$store.state.hits=this.hits}}},X=B,Y=(t("6c46"),Object(u["a"])(X,z,S,!1,null,"92032d56",null)),ee=Y.exports,se=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"content"},[t("div",{staticClass:"container"},[t("div",{staticClass:"nes-container is-dark with-title card"},[t("p",{staticClass:"title"},[e._v("JOGO FINALIZADO!")]),t("p",[e._v(" Muito obrigado por jogar, "),t("span",{staticClass:"nes-text",class:e.classPoints},[e._v(e._s(e.player))]),e._v("! ")]),t("p",{staticClass:"nes-text",class:e.classPoints},[e._v(e._s(e.message))]),t("p",[e._v("Tire um print desta tela e desafie seus amigos a superar sua pontuação!")]),t("router-link",{staticClass:"nes-btn",attrs:{to:"/"}},[e._v("Jogar novamente")])],1)]),t("div",{staticClass:"container"},[t("div",{staticClass:"nes-badge"},[t("span",{class:e.classPoints},[t("h2",[e._v(e._s(e.hits))]),t("p",[e._v("PONTOS!")])])])])])},te=[],ae={name:"Finish",data:function(){return{player:"",classPoints:"is-primary",hits:0,message:"",messages:["Você teve um desempenho de principiante, jogue novamente!","Você pode melhorar... jogue novamente!","Você está acima da média, mas ainda há o que aprender!","Muito bem, você é quase um gênio!","Incrível, você quase gabaritou!","Você é o mestre supremo do universo LGPD, perfeito!"]}},methods:{checkPerformance:function(){var e=this.hits,s=this.messages;return e<3?(this.setClassPoints("is-error"),void this.setMessage(s[0])):e<5?(this.setClassPoints("is-error"),void this.setMessage(s[1])):e<7?(this.setClassPoints("is-warning"),void this.setMessage(s[2])):e<9?(this.setClassPoints("is-primary"),void this.setMessage(s[3])):e<10?(this.setClassPoints("is-primary"),void this.setMessage(s[4])):(this.setClassPoints("is-success"),void this.setMessage(s[5]))},setClassPoints:function(e){this.classPoints=e},setMessage:function(e){this.message=e}},mounted:function(){this.$store.state.player||this.$router.push("/"),this.player=this.$store.state.player,this.hits=this.$store.state.hits,this.checkPerformance()}},ie=ae,oe=(t("c64b"),Object(u["a"])(ie,se,te,!1,null,null,null)),re=oe.exports;a["a"].use(g["a"]);var ne=[{path:"/",name:"Home",component:T},{path:"/game",name:"Game",component:ee},{path:"/finish",name:"Finish",component:re}],de=new g["a"]({mode:"history",base:"/",routes:ne}),ce=de,ue=t("2f62");a["a"].use(ue["a"]);var le=new ue["a"].Store({state:{player:"",hits:0,tips:0},mutations:{},actions:{},modules:{}});a["a"].config.productionTip=!1,new a["a"]({router:ce,store:le,render:function(e){return e(f)}}).$mount("#app")},5907:function(e,s,t){"use strict";var a=t("8ec1"),i=t.n(a);i.a},6266:function(e,s,t){},6860:function(e,s,t){},"6c46":function(e,s,t){"use strict";var a=t("33a7"),i=t.n(a);i.a},"6e63":function(e){e.exports=JSON.parse('[{"number":1,"question":"A Lei n.º 13.709/2018 (Lei Geral de Proteção de Dados Pessoais) prevê a realização do tratamento de dados pessoais, mediante o consentimento do titular dos dados, para o cumprimento de obrigação legal ou regulatória e para a realização de estudos ou execução de contratos a pedido do titular. As hipóteses em questão são exemplos de","tip":"Não diz respeito à princípios das atividades de tratamento de dados pessoais","answers":[{"id":1,"title":"princípios das atividades de tratamento de dados pessoais"},{"id":2,"title":"requisitos para o tratamento de dados pessoais sensíveis"},{"id":3,"title":"tratamento de dados pessoais de crianças e adolecentes"},{"id":4,"title":"direitos do titular dos dados"},{"id":5,"title":"requisitos para o tratamento de dados pessoais"}],"idCorrectAnswer":5},{"number":2,"question":"Considere que, em um órgão público, foi detectada a necessidade da atribuição de responsáveis para manterem registro das operações de tratamento de dados pessoais. De acordo com a Lei nº 13.709/2018, quem devem ser esses responsáveis?","tip":"O presidente não exerce funções relacionadas ao tratamento de dados","answers":[{"id":1,"title":"Os agentes de tratamentos de dados e o conselho diretor"},{"id":2,"title":"O controlador e o operador"},{"id":3,"title":"O presidente da República e o controlador"},{"id":4,"title":"A autoridade nacional e o operador"},{"id":5,"title":"O governante e a autoridade nacional"}],"idCorrectAnswer":2},{"number":3,"question":"A Lei n° 13.709/2018 (Lei Geral de Proteção de Dados) incide quanto ao cadastro de usuários e clientes, alterando a maneira como as organizações devem tratar dados pessoais, com vistas a proteger os direitos fundamentais de liberdade e de privacidade e a respeitar o livre desenvolvimento da personalidade, a dignidade e o exercício da cidadania. Considerando o disposto na referida lei, assinale a alternativa correta","tip":"Tudo que compartilhamos na internet deve ser consentido pelo dono das informações","answers":[{"id":1,"title":"Essa lei aplica-se exclusivamente a dados coletados por meio digital"},{"id":2,"title":"Para os fins dessa lei, considera-se dado pessoal qualquer informação relacionada a pessoa física ou jurítip identificada ou identificável"},{"id":3,"title":"O tratamento de dados pessoais, bem como o compartilhamento desses dados, somente é permitido mediante consentimento do titular, salvo casos de exceção previstos na lei"},{"id":4,"title":"Dados pessoais de crianças podem ser coletados sem consentimento prévio e armazenados para fins de contato com os pais ou o responsável legal"},{"id":5,"title":"O consentimento do tratamento dos dados deve ser fornecido pelo titular antecipadamente à coleta dos dados e presume concordância com o compartilhamento dos respectivos dados pessoais com entidades parceiras por tempo indeterminado"}],"idCorrectAnswer":3},{"number":4,"question":"Em que ano foi sancionada a LGPD?","tip":"A lei foi sansionada durante a gestão de Temer","answers":[{"id":1,"title":"2015"},{"id":2,"title":"2016"},{"id":3,"title":"2017"},{"id":4,"title":"2018"},{"id":5,"title":"2019"}],"idCorrectAnswer":4},{"number":5,"question":"O que é a ANPD?","tip":"Não é uma entidade sem fins lucrativos criada para tratar dados","answers":[{"id":1,"title":"Uma entidade sem fins lucrativos criada para tratar dados"},{"id":2,"title":"Órgão responsável por acompanhar e aplicar sanções descritas na lei Geral de Proteção de Dados"},{"id":3,"title":"Uma organização internacional de apoio aos governos para o tratamento de dados"},{"id":4,"title":"Uma agência que vai regular o aumento de despesas relativo ao tratamento de dados pessoais"},{"id":5,"title":"É o Órgão responsável por prender ladrões de dados"}],"idCorrectAnswer":2},{"number":6,"question":"Quem é o controlador de dados?","tip":"Um controlador de dados não é necessariamente um profissional de TI","answers":[{"id":1,"title":"Um profissional de TI"},{"id":2,"title":"Um advogado"},{"id":3,"title":"Um membro da banda bonde do tigrão"},{"id":4,"title":"Profissional responsável pelo tratamento de dados pessoais"},{"id":5,"title":"O CEO da empresa, que responde pelos dados pessoais"}],"idCorrectAnswer":4},{"number":7,"question":"O que é tratamento de dados pessoais?","tip":"Digamos que, nem a \'Organização dos dados pessoais em pastas\' nem \'Proteção dos dados pessoais contra vazamentos\' é a alternativa correta, porém não estão erradas","answers":[{"id":1,"title":"Organização dos dados pessoais em pastas"},{"id":2,"title":"Conjunto de operações efetuadas sobre dados pessoais, por meios manuais ou automatizados"},{"id":3,"title":"Proteção dos dados pessoais contra vazamentos"},{"id":4,"title":"Filtragem de dados para verificar quais são os mais necessários a serem protegidos"},{"id":5,"title":"Todas as alternativas"}],"idCorrectAnswer":5},{"number":8,"question":"A LGPD impactará apenas empresas:","tip":"Nem só as empresas de tecnologia serão afetadas","answers":[{"id":1,"title":"Que trabalhem com comércio eletrônico"},{"id":2,"title":"Que recebam e armazenem documentos físicos"},{"id":3,"title":"Que são do ramo de jogos"},{"id":4,"title":"Que recebam e armazenem documentos virtuais"},{"id":5,"title":"Que recebam e armazenem documentos físicos e virtuais"}],"idCorrectAnswer":5},{"number":9,"question":"Quantas são as hipóteses que a lei autoriza a realização do tratamento de dados pessoais (bases legais)?","tip":"Os valores 5 e 15 são incorretos","answers":[{"id":1,"title":"5"},{"id":2,"title":"10"},{"id":3,"title":"12"},{"id":4,"title":"15"},{"id":5,"title":"458"}],"idCorrectAnswer":2},{"number":10,"question":"Dentre as bases legais que autorizam o tratamento dos dados pessoais, qual ou quais dessas NÃO estão previstas na lei?","tip":"Consentimento pelo titular é uma das principais bases, assim como o cumprimento pela obrigação legal","answers":[{"id":1,"title":"Consentimento pelo titular"},{"id":2,"title":"Cumprimento pela obrigação legal"},{"id":3,"title":"Execução do contrato"},{"id":4,"title":"Princípio da impessoalidade"},{"id":5,"title":"Quando necessário para atender aos interesses legítimos do controlador ou de terceiros"}],"idCorrectAnswer":4}]')},"75d5":function(e,s,t){},"85ec":function(e,s,t){},"8baf":function(e,s,t){"use strict";var a=t("6860"),i=t.n(a);i.a},"8ec1":function(e,s,t){},c5b0:function(e,s,t){},c64b:function(e,s,t){"use strict";var a=t("dc31"),i=t.n(a);i.a},d3ad:function(e,s,t){"use strict";var a=t("75d5"),i=t.n(a);i.a},dc31:function(e,s,t){}});
//# sourceMappingURL=app.aaf41f6a.js.map