(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"+4mJ":function(e,t,a){"use strict";var o=a("svvH");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(a("cDcd")),l=a("MuoO"),i=o(a("vOnD")),n=o(a("5Epl")),s=i.default.span.attrs({className:"emoji"})`
  & img {
    width: 30px;
    margin: 0 3px;
  }
`;class c extends r.default.Component{constructor(e){super(e),this.state={url:e.emoji.emojiURLs[e.sign]}}render(){var e=this.props.sign;return r.default.createElement(s,null,r.default.createElement(n.default,{url:this.state.url,sign:e}))}}var d=(0,l.connect)(e=>{var t=e.emoji;return{emoji:t}})(c);t.default=d},"0q1Z":function(e,t,a){"use strict";var o=a("svvH");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(a("cDcd")),l=a("MuoO"),i=o(a("vOnD")),n=a("rY4l"),s=o(a("RXmK")),c=(0,i.default)(s.default)`
  ol {
    //height: 180px;
    //border: 10px solid var(--border-color);
    padding: 10px;
    border-radius: 3px;
    //box-shadow: rgba(20,20,20,0.1) 0px 0px 10px;
    //background-color: var(--border-color);
  }
  .tab-bar {
    display: flex;
    justify-content: space-between;
    margin: 0 10px;
    .more-version-box {
      display: flex;
      position: relative;
      .more-version-btn {
        margin-bottom: 5px;
        margin-left: 3px;
        padding: 3px 8px;
        border: 1px solid var(--border-color);
        border-radius: 3px;
        background-color: var(--pure-white);
        align-self: flex-end;
        outline: none;
        user-select: none;
        cursor: pointer;
        transition: all 0.15s;
        &:hover {
          color: var(--bilibili-blue);
          border: 1px solid var(--bilibili-blue);
        }
        &:active, &.active {
          opacity: 1;
          background-color: var(--bilibili-blue);
          color: var(--background-color);
        }
        &[disabled] {
          opacity: 0.5;
          cursor: not-allowed;
        }
      }
      ul {
        position: absolute;
        top: calc(100% - 4px);
        right: 1px;
        width: max-content;
        padding: 5px 1px;
        border-radius: 3px;
        background-color: var(--pure-white);
        box-shadow: rgba(20, 20, 20, 0.1) 1px 1px 10px;
        z-index: 101;
        li {
          padding: 2px 10px;
          font-size: 12px;
          text-align: right;
          list-style: none;
          cursor: pointer;
          transition: all 0.1s;
          &:hover, &.active {
            background-color: var(--bilibili-blue);
            color: var(--pure-white);
          }
          img {
            width: 14px;
            margin-right: 3px;
            vertical-align: sub;
          }
        }
      }
    }
  }
  .tab-contents {}
  .info-item {
    position: relative;
    margin-left: 20px;
    padding: 5px 0 5px 5px;
    font-size: 12px;
    border-radius: 3px;
    //border-bottom: 1px solid var(--pure-white);
    border-bottom: 1px solid var(--border-color);
    &:last-of-type {
      border:none;
    }
    //&:hover, &.active {
    //  background-color: var(--bilibili-blue);
    //  color: var(--pure-white);
    //}
    i {
      margin: 0 3px;
      font-style: normal;
      color: var(--content-color);
    }
    li {
      padding-left: 5px;
    }
    & li::after {
      content: ';';
      display: inline;
    }
    &:last-of-type li::after {
      content: '。';
    }
    a {
      position: absolute;
      top: 5px;
      right: calc(100% + 25px);
      color: var(--bilibili-blue);
      text-decoration: none;
    }
  }
`;class d extends r.default.Component{constructor(e){super(e)}render(){var e=this.props.global;return r.default.createElement(c,null,r.default.createElement(n.Header,null,"\u7f51\u7ad9\u52a8\u6001 ~ DYNAMIC FOR WEBSITE",r.default.createElement("p",{className:"sub-title"},"\u8fd9\u91cc\u5217\u51fa\u6700\u65b0\u768410\u6761\u7f51\u7ad9\u52a8\u6001~")),r.default.createElement("ol",{className:"tab-contents"},e.websiteUpdate&&e.websiteUpdate.slice(0,10).map((e,t)=>r.default.createElement("div",{className:"info-item",key:t},r.default.createElement("li",{dangerouslySetInnerHTML:{__html:e}})))))}}var p=(0,l.connect)(e=>{var t=e.global;return{global:t}})(d);t.default=p},"1ZZj":function(e,t,a){"use strict";var o=a("svvH");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(a("cDcd")),l=a("MuoO"),i=o(a("vOnD")),n=a("rY4l"),s=o(a("RXmK")),c=(0,i.default)(s.default)`
  ol {
    //height: 180px;
    //border: 10px solid var(--border-color);
    padding: 10px;
    border-radius: 3px;
    //box-shadow: rgba(20,20,20,0.1) 0px 0px 10px;
    //background-color: var(--border-color);
  }
  .tab-bar {
    display: flex;
    justify-content: space-between;
    margin: 0 10px;
    .more-version-box {
      display: flex;
      position: relative;
      .more-version-btn {
        margin-bottom: 5px;
        margin-left: 3px;
        padding: 3px 8px;
        border: 1px solid var(--border-color);
        border-radius: 3px;
        background-color: var(--pure-white);
        align-self: flex-end;
        outline: none;
        user-select: none;
        cursor: pointer;
        transition: all 0.15s;
        &:hover {
          color: var(--bilibili-blue);
          border: 1px solid var(--bilibili-blue);
        }
        &:active, &.active {
          opacity: 1;
          background-color: var(--bilibili-blue);
          color: var(--background-color);
        }
        &[disabled] {
          opacity: 0.5;
          cursor: not-allowed;
        }
      }
      ul {
        position: absolute;
        top: calc(100% - 4px);
        right: 1px;
        width: max-content;
        padding: 5px 1px;
        border-radius: 3px;
        background-color: var(--pure-white);
        box-shadow: rgba(20, 20, 20, 0.1) 1px 1px 10px;
        z-index: 101;
        li {
          padding: 2px 10px;
          font-size: 12px;
          text-align: right;
          list-style: none;
          cursor: pointer;
          transition: all 0.1s;
          &:hover, &.active {
            background-color: var(--bilibili-blue);
            color: var(--pure-white);
          }
          img {
            width: 14px;
            margin-right: 3px;
            vertical-align: sub;
          }
        }
      }
    }
  }
  .tab-contents {}
  .info-item {
    position: relative;
    margin-left: 20px;
    padding: 5px 0 5px 5px;
    font-size: 12px;
    border-radius: 3px;
    //border-bottom: 1px solid var(--pure-white);
    border-bottom: 1px solid var(--border-color);
    &:last-of-type {
      border:none;
    }
    //&:hover, &.active {
    //  background-color: var(--bilibili-blue);
    //  color: var(--pure-white);
    //}
    i {
      margin: 0 3px;
      font-style: normal;
      color: var(--content-color);
    }
    li {
      padding-left: 5px;
    }
    & li::after {
      content: ';';
      display: inline;
    }
    &:last-of-type li::after {
      content: '。';
    }
    a {
      position: absolute;
      top: 5px;
      right: calc(100% + 25px);
      color: var(--bilibili-blue);
      text-decoration: none;
    }
  }
`,d=i.default.button`
  position: relative;
  width: 200px;
  height: 50px;
  margin-right: 5px;
  margin-bottom: 5px;
  padding: 10px;
  box-sizing: border-box;
  border: none;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  border: 1px solid var(--border-color);
  background-color: white;
  cursor: pointer;
  outline: none;
  transition: all 0.15s;
  &:last-of-type {
    margin-right: 0;
  }
  &:hover {
    color: var(--bilibili-blue);
    border: 1px solid var(--bilibili-blue);
  }
  &::after {
    display: block;
    position: absolute;
    bottom: -6px;
    left: calc(50% - 7.07px);
    width: 10px;
    height: 10px;
    border: 1px solid var(--bilibili-blue);
    border-top: none;
    border-left: none;
    transform: rotate(45deg);
  }
  &:not(.active)::after {
    background-color: white;
  }
  &:active::after, &.active::after {
    background-color: var(--pure-white);
  }
  &.active::after {
    content: ' ';
  }
  &:active, &.active {
    opacity: 1;
    border: 1px solid var(--bilibili-blue);
    background-color: var(--bilibili-blue);
    background: linear-gradient(90deg, var(--bilibili-blue), #45b8e6 100%);
    color: var(--background-color);
  }
  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &.active span {
    top: -5px;
  }
  span {
    display: block;
    position: relative;
    top: 0;
    font-weight: normal;
    user-select: none;
  }
  .download-btn {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 3px;
    font-size: 10px;
    font-style: unset;
    background-color: var(--pure-white);
    color: var(--content-color);
    z-index: 1;
    transition: background-color 0.1s;
    &:hover {
      //box-shadow: rgba(20, 20, 20, 0.1) 1px 1px 10px;
      background-color: #eee;
    }
  }
`;class p extends r.default.Component{constructor(e){super(e),this.updateDownloads=(e=>{var t=_.find(e,e=>{e.version;var t=e.url;return t}).version,a=[],o=[],r=0;_.forEach(e,e=>{var t=e.url;t&&r<3?(r+=1,a.push(e)):o.push(e)}),this.setState({tabVersion:t,downloadThree:a,restVersion:o})}),this.handleOnClickTab=(e=>{this.setState({tabVersion:e})}),this.handleOnClickMoreVersion=(()=>{this.setState({showMoreVersion:!this.state.showMoreVersion})}),this.getVersionTypeString=(e=>{switch(e){case"store":return"Google Web Store";case"test":return"\u6d4b\u8bd5\u7248";default:return""}}),this.getVersionTypeIcon=(e=>{switch(e){case"store":return r.default.createElement("img",{src:"../static/icons/google_favicon.ico"});case"test":return"test ";default:return""}}),this.state={tabVersion:null,showMoreVersion:!1,downloadThree:null,restVersion:null}}componentDidMount(){var e=this.props.global,t=this.state,a=t.firstVersion,o=t.downloadThree,r=t.restVersion;!e.downloads||a||o||r||this.updateDownloads(e.downloads)}componentDidUpdate(e,t){var a=this.props.global,o=this.state,r=o.firstVersion,l=o.downloadThree,i=o.restVersion;!a.downloads||r||l||i||this.updateDownloads(a.downloads)}render(){var e=this.props.global,t=this.state,a=t.tabVersion,o=t.showMoreVersion,l=t.downloadThree,i=t.restVersion;return r.default.createElement(c,{id:"downloadArea"},r.default.createElement(n.Header,null,"\u4e0b\u8f7d\u52a9\u624b ~ DOWNLOAD",r.default.createElement("a",{href:"https://www.bilibili.com/video/av44808808",target:"_blank"},"\u529f\u80fd\u4ecb\u7ecd"),r.default.createElement("a",{href:"https://github.com/bilibili-helper/bilibili-helper/wiki/%E5%A6%82%E4%BD%95%E4%B8%8B%E8%BD%BD%E5%92%8C%E5%AE%89%E8%A3%85%EF%BC%9F#%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85",target:"_blank"},"\u5b89\u88c5\u65b9\u6cd5"),r.default.createElement("p",{className:"sub-title"},"\u65e7\u7248\u672c\u4e0d\u63d0\u4f9b\u4e0b\u8f7d\u5730\u5740\u54df~")),r.default.createElement("div",{className:"tab-bar"},r.default.createElement("div",{className:"versions"},l&&l.map(e=>{var t=e.version,o=e.sign,l=e.url;return l&&r.default.createElement(d,{key:t,className:`download-btn ${t===a&&"active"}`,onClick:()=>this.handleOnClickTab(t)},r.default.createElement("span",null,this.getVersionTypeString(o)," ",t),t===a&&r.default.createElement("a",{href:l},r.default.createElement("i",{className:"download-btn"},"Click here to download")))})),r.default.createElement("div",{className:"more-version-box"},r.default.createElement("button",{className:`more-version-btn ${o&&"active"}`,onClick:this.handleOnClickMoreVersion},"More Version"),o&&r.default.createElement("ul",null,i&&i.map(e=>{var t=e.version,o=(e.url,e.sign);return r.default.createElement("li",{className:`${t===a&&"active"}`,key:t,onClick:()=>this.handleOnClickTab(t)},this.getVersionTypeIcon(o),t)})))),r.default.createElement("div",{className:"tab-contents"},e.downloads&&e.downloads.map(e=>{var t=e.version,o=(e.url,e.info);return a===t&&r.default.createElement("ol",{key:t},o.map((e,t)=>r.default.createElement("div",{className:"info-item",key:t},r.default.createElement("li",{dangerouslySetInnerHTML:{__html:e[1]}}),void 0!==e[2]&&r.default.createElement("a",{target:"_blank",href:`https://github.com/bilibili-helper/bilibili-helper/issues/${e[2]}`},"#",e[2]))))})))}}var u=(0,l.connect)(e=>{var t=e.global;return{global:t}})(p);t.default=u},"5BdJ":function(e,t,a){"use strict";var o=a("svvH");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(a("cDcd")),l=a("MuoO"),i=o(a("vOnD")),n=o(a("RXmK")),s=(0,i.default)(n.default)`
  h3 {
    margin: 15px 0 20px;
    font-size: 16px;
    color: #212121;
    p {
      margin: 3px 0px;
      font-size: 12px;
      color: var(--content-color);
      font-weight: normal;
    }
  }
  .votes-list {
    margin-left: 10px;
    border-radius: 3px;
    overflow: hidden;
  }
  .mask {
    margin-left: 10px;
    color: var(--content-color);
  }
`,c=i.default.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  font-size: 14px;
  margin-bottom: 2px;
  padding: 7px 10px;
  width: calc(100% - 72px);
  border-radius: 3px;
  border-right: 1px solid var(--bilibili-pink);
  border-left: 1px solid var(--bilibili-pink);
  background-color: #f1f1f1;
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: ${e=>{var t=e.likesum,a=e.like;return t?a/t*100:0}}%;
    border-radius: 0 3px 3px 0;
    background-color: var(--bilibili-pink);
    transition: width 0.3s;
  }
  &:last-of-type {
    border-bottom: none;
    margin-bottom: 0;
  }
  &:hover {
    opacity: 0.8;
  }
  .topic {
    color: #000;
    z-index: 1;
  }
  .percent {
    position: absolute;
    top: 8px;
    right: -46px;
    font-size: 12px;
    color: var(--content-color);
  }
  .like-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;
    cursor: pointer;
    z-index: 1;
    button {
      margin-right: 20px;
      padding: 1px 10px;
      border: none;
      border-radius: 3px;
      font-size: 12px;
      background-color: var(--pure-white);
      color: var(--content-color);
      outline: none;
      cursor: pointer;
      &:last-of-type {
        margin-right: 0;
      }
      &[disabled] {
        cursor: not-allowed;
        opacity: 0.8;
      }
      &.like:hover, &.like[on='1'] {
        color: var(--bilibili-blue);
      }
      &.hate:hover, &.hate[on='1'] {
        color: var(--bilibili-pink);
      }
    }
  }
`;class d extends r.default.Component{constructor(e){super(e),this.handleOnClickLike=((e,t)=>{var a=this.props.comments.voteConfig.oid;this.setState({voting:!0}),this.props.dispatch({type:"comments/setLike",payload:{action:e,rpid:t,oid:a}}),setTimeout(()=>this.props.dispatch({type:"comments/fetchVotes"}),500),setTimeout(()=>this.setState({voting:!1}),2e3)}),this.handleOnClickHate=((e,t)=>{var a=this.props.comments.voteConfig.oid;this.setState({voting:!0}),this.props.dispatch({type:"comments/setHate",payload:{action:e,rpid:t,oid:a}}),setTimeout(()=>this.props.dispatch({type:"comments/fetchVotes"}),500),setTimeout(()=>this.setState({voting:!1}),2e3)}),this.renderVote=((e,t)=>{var a=t.rpid,o=t.content,l=t.action,i=t.like;return r.default.createElement(c,{key:a,className:"vote-block",likesum:e,like:i},r.default.createElement("span",{className:"topic"},o.message),r.default.createElement("div",{className:"like-box"},r.default.createElement("button",{disabled:this.state.voting,className:"like",on:1===l?"1":"0",onClick:()=>this.handleOnClickLike(Number(1!==l),a)},"LIKE"),r.default.createElement("button",{disabled:this.state.voting,className:"hate",on:2===l?"1":"0",onClick:()=>this.handleOnClickHate(Number(2!==l),a)},"HATE")),r.default.createElement("div",{className:"percent"},Number(e?i/e*100:0).toFixed(1),"%"))}),this.getVotes=(()=>{var e=[],t=this.props.comments,a=t.votes,o=t.replyMap;return a.rpidArray&&a.rpidArray.length>0&&(e=_.sortBy(a.rpidArray.map(e=>o[e].self),e=>{var t=e.like;return-t})),e}),this.state={voting:!1}}render(){var e=this.props,t=e.global,a=e.comments,o=this.getVotes(),l=_.reduce(a.votes.likeSum,(e,t)=>e+t);return r.default.createElement(s,null,r.default.createElement("h3",null,"\u65b0\u529f\u80fd\u6295\u7968 ~ VOTE FOR NEW FEATURE",r.default.createElement("p",null,"\u4e3a\u5e0c\u671b\u6dfb\u52a0\u8fdb\u52a9\u624b\u7684\u529f\u80fd\u70b9\u8d5e\u5427~")),r.default.createElement("div",{className:"votes-list"},o.map(e=>this.renderVote(l,e))),!t.status.connected&&r.default.createElement("div",{className:"mask"},"~ \u5c1a\u672a\u8fde\u63a5\u52a9\u624b ~"))}}var p=(0,l.connect)(e=>{var t=e.comments,a=e.global;return{comments:t,global:a}})(d);t.default=p},"5Epl":function(e,t,a){"use strict";var o=a("svvH");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(a("kTL5")),l=o(a("jUZP")),i=a("MuoO"),n=o(a("cDcd"));class s extends n.default.Component{constructor(e){super(e);var t=e.sign,a=e.url;a&&this.props.dispatch({type:"image/fetch",payload:{url:a,sign:t}})}render(){var e=this.props,t=e.image,a=e.sign,o=(e.url,e.dispatch,e.className),i=(0,l.default)(e,["image","sign","url","dispatch","className"]);return n.default.createElement("img",(0,r.default)({className:["model-img",o].join(" "),key:a,src:t[a]||null},i))}}var c=(0,i.connect)(e=>{var t=e.image;return{image:t}})(s);t.default=c},"8wrG":function(e,t,a){"use strict";var o=a("svvH");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(a("quD3")),l=o(a("YLtl")),i=o(a("cDcd")),n=o(a("vOnD")),s=o(a("Bo8p")),c=o(a("R18Y")),d=o(a("wd/R")),p=a("MuoO"),u=o(a("5Epl")),g=o(a("+4mJ")),m=o(a("Pa8V")),A=a("ywEC"),b=o(a("RXmK")),h=a("f23f");d.default.locale("zh-cn");var f=(0,n.default)(b.default).attrs({className:"comment-area"})`
  position: relative;
  .no-reply {
    color: var(--content-color);
  }
  .more-comment-list-wrapper {
    position: relative;
    .loading-page-mask {
      position: absolute;
      top: -10px;
      right: -10px;
      bottom: -10px;
      left: -10px;
      min-height: 200px;
      border-radius: 3px;
      background-color: rgba(85, 85, 85, 0.5);
      color: var(--content-color);
      img {
        position: absolute;
        top: 50px;
        left: calc(50% - 50px);
        width: 100px;
        height: 100px;
        background-color: rgba(252, 252, 252, 0.8);
        border-radius: 3px;
      }
    }
  }
  .list-wrapper {
    position: relative;
  }
`,x=n.default.header.attrs({className:"comment-list-header"})`
  font-size: 20px;
  margin: 20px 10px 30px 0;
  color: #a9a7a7;
  p {
    margin: 3px 0px;
    font-size: 12px;
  }
  a {
    color: var(--bilibili-blue);
  }
`,v=n.default.div.attrs({className:"comment-item"})`
  display: flex;
  margin-bottom: 30px;
  &:last-of-type > .main{
    & > .content:last-of-type {
      border-bottom: none;
    }
    .replies-box {
      border-bottom: none;
    }
  }
  .user {
    width: 70px;
    flex-shrink: 0;
    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }
  }
  .main {
    flex-grow: 1;
    .header {
      display: flex;
      line-height: 12px;
      margin: 0 10px 10px 0;
      & > * {
        margin-right: 10px;
        font-size: 12px;
        color: #999;
        text-decoration: unset;
        font-style: unset;
      }
      .top {
        margin-right: 8px;
        padding: 0 3px;
        border: 1px solid;
        border-radius: 3px;
        color: var(--bilibili-pink);
        transform: scale(0.9);
      }
      .username {
        font-weight: bold;
        color: #666;
        &.vip {
          color: #fb7299;
        }
      }
      .floor {
        flex-grow: 1;
        text-align: right;
        margin-right: 0;
        color: #ccc;
      }
      .moment {
      }
    }
    .content {
      padding: 0 10px 30px 0;
      position: relative;
      color: var(--content-color);
      border-bottom: 1px solid var(--border-color);
      font-size: 14px;
      pre {
        overflow-x: auto;
        white-space: pre-wrap;
        word-wrap: break-word;
        font-family: auto;
      }
      .toolbar {
        position: absolute;
        font-size: 10px;
        bottom: 3px;
        color: #bbb;
        .like-box {
          display: inline-block;
          user-select: none;
          span {
            line-height: 16px;
            margin-right: 20px;
            cursor: pointer;
            &.like:hover, &[on='1'] {
              color: var(--bilibili-blue);
            }
            &.hate:hover, &[on='1'] {
              color: var(--bilibili-pink);
            }
          }
        }
        .reply {
          padding: 3px 6px;
          border: none;
          border-radius: 3px;
          background-color: var(--background-color);
          color: var(--bilibili-blue);
          transform: scale(0.8);
          transition: all 0.15s;
          cursor: pointer;
          outline: none;
          user-select: none;
          &:hover, &[on='1'] {
            background-color: var(--bilibili-blue);
            color: var(--background-color);
          }
        }
      }
    }
    .replies-box {
      position: relative;
      padding-top: 30px;
      border-bottom: 1px solid var(--border-color);
      & > .replies > * {
        margin-bottom: 20px;
        &:nth-last-of-type(1) {
          border-bottom: none;
          .content {
            border-bottom: none;
          }
        }
        .user {
          width: 40px;
          img{
            width: 26px;
            height: 26px;
            flex-shrink: 0;
            transition: all 0.3s;
            &:hover {
              transform: scale(1.5);
            }
          }
        }
        .floor {
          color: #e6e6e6;
        } 
      }
      .loading-page-mask {
        img {
          top: calc(50% - 50px);
        }
      }
    }
  }
`,w=n.default.div`
  display: block;
  width: fit-content;
  margin: 0 auto 60px;
  padding: 3px 20px;
  border: none;
  border-radius: 3px;
  letter-spacing: 1px;
  font-size: 12px;
  background-color: var(--background-color);
  color: var(--content-color);
  outline: none;
  transition: all 0.15s;
  &:not([disabled]):hover {
    background-color: var(--bilibili-blue);
    color: var(--background-color);
    cursor: pointer;
  }
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    margin-top: -8px;
    position: absolute;
    left: 0;
    right: 0;
    background-color: var(--border-color);
    z-index: -1;
    cursor: pointer;
  }
  .replies-box & {
    margin-left: 20px;
    margin-bottom: 30px;
    margin-top: 20px;
    &::after {
      visibility: hidden;
    }
  } 
`,E=n.default.div.attrs({className:"page-navigation"})`
  display: flex;
  justify-content: center;
  & > a {
    text-decoration: none;
  }
  & .page-navigation-link {
    display: block;
    min-width: 20px;
    margin: 0 3px;
    padding: 5px 6px;
    text-align: center;
    letter-spacing: 1px;
    border: 1px solid #eee;
    border-radius: 5px;
    color: #333;
    user-select: none;
    transform: scale(0.8);
    cursor: pointer;
    &:not(.omit):hover {
      color: var(--bilibili-blue);
      border-color: var(--bilibili-blue);
      transition: all 0.3s;
    }
    &.omit {
      border: none;
      cursor: default;
    }
    &.now {
      border-color: var(--bilibili-blue);
      background-color: var(--bilibili-blue);
      color: var(--background-color);
      &:hover {
        color: var(--background-color);
      }
    }
  }
  .replies-box & {
    justify-content: left;
    & .page-navigation-link {
      margin: 0;
      border: none;
      background-color: transparent;
      &.now {
        color: var(--bilibili-blue);
      }
    }
  }
`,k=n.default.div`
  position: absolute;
  top: 210px;
  bottom: 0;
  left: 100%;
  width: 140px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`,B=n.default.div`
  position: sticky;
  top: 210px;
  text-align: right;
  i {
    font-style: normal;
    font-size: 12px;
    text-align: center;
    display: block;
    color: var(--content-color);
    opacity: 0.3;
  }
  .nav-item {
    line-height: 20px;
    font-size: 14px;
    border-right: 1px solid var(--bilibili-pink);
    margin-bottom: 10px;
    padding: 10px;
    box-sizing: border-box;
    cursor: pointer;
    &.on {
      background-color: var(--bilibili-pink);
      color: var(--pure-white);
      cursor: default;
    }
  }
`;class C extends i.default.Component{constructor(e){var t;super(e),t=this,this.load=(e=>{var t=this.props,a=t.comments,o=t.dispatch,r=t.location,l=e.config;!l&&a.config&&(e=a.config,l=e.config);var i=r.query,n=i.oid,s=void 0===n?l.oid:n,c=i.page,d=void 0===c?1:c,p=i.ptype,u=void 0===p?0:p,g=i.type,m=void 0===g?l.type:g,A={oid:s,[+u?"ps":"pn"]:d,type:m};o({type:"comments/load",payload:{comment:e,query:A,ptype:+u}})}),this.calculateNavigationPageIndex=((e,t)=>{var a=new Array(t).fill(void 0).map((e,t)=>t),o=l.default.compact(a.map((t,a)=>{if(Math.abs(e-a-1)<=2)return a+1<=0?void 0:a+1}));return 1!==o[0]&&(o[0]>2&&o.unshift("-"),o.unshift(1)),o.length>1&&o[o.length-1]<t&&(t-o[o.length-1]>1&&o.push("-"),o.push(t)),o}),this.handleOnClickHots=(()=>{this.props.dispatch({type:"comments/fetchComment",payload:{sort:1}})}),this.handleOnClickLoadMoreReplies=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.props.dispatch({type:"comments/fetchReply",payload:(0,r.default)({pn:1,ps:10},e)})},this.handleOnClickNavigation=(()=>{window.scrollTo(0,(0,h.cumulativeOffset)(this.moreCommentListWrapper).top-20)}),this.handleOnClickNavigationForReply=(e=>{var t=this[`reply-${e.root}`];t&&t.querySelector(".replies-box").scrollIntoView({behavior:"smooth",inline:"start"}),this.props.dispatch({type:"comments/fetchReply",payload:e})}),this.handleOnClickReply=(e=>{var t=e.uname,a=e.rpid;return this.setState({uname:t,rpid:a===this.state.rpid?null:a})}),this.handleOnClickLike=((e,t)=>{this.props.dispatch({type:"comments/setLike",payload:{action:e,rpid:t}})}),this.handleOnClickHate=((e,t)=>{this.props.dispatch({type:"comments/setHate",payload:{action:e,rpid:t}})}),this.handleOnClickCommentNav=(e=>{this.load(e)}),this.renderContent=(e=>{var t=new RegExp(/(\[.*?\])/g),a=[],o=null,r=0;while(null!==(o=t.exec(e))){var l=o,n=l.index,s=o[0];a.push(e.substr(r,n-r)),r=n+s.length,a.push(i.default.createElement(g.default,{key:n,sign:s}))}return 0===a.length&&a.push(e),a}),this.renderLine=(e=>{var t=e.rpid,a=e.top,o=this.props.comments,r=o.config,l=o.status,n=this.props.comments.replyMap[t],s=n.self,c=s.action,p=s.content,g=s.member,b=s.floor,h=s.ctime,f=s.like,x=s.oid,E=s.root,k=this.state,B=k.uname,C=k.rpid,Q=g.avatar,y=g.mid,D=g.uname,j=g.level_info,I=g.vip,M=j.current_level,N=I.vipType,O=C===t,G=[],R=!1;return n.replies&&(R=n.needExpand&&!n.hasExpand,G=this.calculateNavigationPageIndex(n.page.num,n.pages)),i.default.createElement(v,{key:t,id:t,ref:e=>this[`reply-${t}`]=e},i.default.createElement("div",{className:"user"},i.default.createElement(u.default,{className:"avatar",url:Q,sign:y})),i.default.createElement("div",{className:"main"},i.default.createElement("div",{className:"header"},a&&i.default.createElement("span",{className:"top"},"TOP"),i.default.createElement("a",{className:`username ${N?"vip":""}`,href:`https://space.bilibili.com/${y}`,target:"_blank"},D),M&&i.default.createElement("span",{className:"level"},"Lv.",M),i.default.createElement("span",{className:"moment"},(0,d.default)(1e3*h).startOf("second").fromNow()),b&&i.default.createElement("span",{className:"floor"},"#",b)),i.default.createElement("div",{className:"content"},i.default.createElement("pre",null,this.renderContent(p.message)),i.default.createElement("div",{className:"toolbar"},i.default.createElement("div",{className:"like-box"},i.default.createElement("span",{className:"like",on:1===c?"1":"0",onClick:()=>this.handleOnClickLike(Number(1!==c),t)},"LIKE ",f||""),i.default.createElement("span",{className:"hate",on:2===c?"1":"0",onClick:()=>this.handleOnClickHate(Number(2!==c),t)},"HATE")),r.canComment&&i.default.createElement("button",{className:"reply",on:O?"1":"0",onClick:()=>this.handleOnClickReply({uname:D,rpid:t})},"REPLY"))),O&&i.default.createElement(m.default,{root:E||t,parent:t,name:B}),n.replies&&n.replies.length>0&&i.default.createElement("div",{className:"replies-box"},i.default.createElement("div",{className:"replies"},n.replies.map(e=>this.renderLine(e))),R&&1===n.page.num&&i.default.createElement(w,{onClick:()=>this.handleOnClickLoadMoreReplies({root:t,oid:x})},"~ LOAD MORE ~"),!R&&n.pages>1&&this.renderPageNavigation({oid:r.config.oid,pageIndex:G,num:n.page.num,pages:n.pages,root:t,ptype:1}),l.comment.loadingRpid===t&&i.default.createElement("div",{className:"loading-page-mask"},i.default.createElement(u.default,{url:A.LOADING_IMAGE_URL,sign:"loading-gif"})))))}),this.renderPageNavigation=(e=>{var t=e.oid,a=e.pageIndex,o=e.num,r=e.pages,l=e.root,n=e.ptype,s=void 0===n?0:n,d=()=>{};return d=l?e=>this.handleOnClickNavigationForReply({pn:e,ps:10,sort:0,root:l}):e=>this.handleOnClickNavigation({pn:e}),i.default.createElement(E,null,a.length>2&&o>1&&i.default.createElement(c.default,{key:"prev",to:`?oid=${t}&page=${o-1}&ptype=${s}`},i.default.createElement("span",{className:"page-navigation-link",onClick:()=>d(o-1)},"PREV")),a.map((e,a)=>{return i.default.createElement(c.default,{key:e+a,to:`?oid=${t}&page=${e}&ptype=${s}`},i.default.createElement("span",{className:`page-navigation-link ${"-"===e?"omit":""} ${o===e?"now":""}`,onClick:o!==e&&"-"!==e?()=>d(e):null},"-"!==e?e:"..."))}),a.length>2&&o<r&&i.default.createElement(c.default,{key:"next",to:`?oid=${t}&page=${o+1}&ptype=${s}`},i.default.createElement("span",{className:"page-navigation-link",onClick:()=>d(o+1)},"NEXT")))}),this.render=(()=>{var e=this.props,t=e.comments,a=e.user,o=e.global,l=this.state,n=l.mid,s=l.uname,c=t.data,d=t.config,p=t.status,g=t.commentMap,b=c.page,h=c.hots,v=c.top,E=c.replies,C=void 0===E?[]:E,Q=b.count,y=b.size,D=b.acount,j=b.num,I=Math.ceil(Q/y)||1,M=this.calculateNavigationPageIndex(j,I);return i.default.createElement(f,null,i.default.createElement(x,null,`${D} \u8bc4\u8bba`,null===d&&i.default.createElement("p",null,"\u5c1a\u672a\u52a0\u8f7d\u8bc4\u8bba\u533a"),d&&i.default.createElement("p",null,"\u672c\u8bc4\u8bba\u533a\u6765\u81ea\u54d4\u54e9\u54d4\u54e9\u5f39\u5e55\u7f51\u7684\u8bc4\u8bba\u7cfb\u7edf\uff0c\u539f\u5730\u5740\u4e3a:",i.default.createElement("a",{target:"_blank",href:`https://h.bilibili.com/${d.config.oid}#canvas-detail-comment-ctnr`},"h",d.config.oid),"\uff0c\u5982\u679c\u65e0\u6cd5\u94fe\u63a5\u52a9\u624b\uff0c\u53ef\u4ee5\u524d\u5f80\u8be5\u9875\u9762\u8fdb\u884c\u7559\u8a00",i.default.createElement("br",null),"\u8bf7\u9075\u5b88\u76f8\u5173\u6cd5\u5f8b\u6cd5\u89c4\u5e76\u5171\u540c\u7ef4\u62a4\u79e9\u5e8f")),d&&i.default.createElement(m.default,{global:!0,receiver:{mid:n,uname:s},able:d.canComment}),o.status.connected&&d&&i.default.createElement(i.default.Fragment,null,0===D&&!v&&!h&&!C&&!p.comment.loadPage&&i.default.createElement("div",{className:"no-reply"},"\u6ca1\u6709\u7559\u8a00\uff0c",!a.info&&"\u767b\u9646\u540e","\u5f00\u59cb\u8bc4\u8bba\u5427~"),0!==D&&(v||h||C||p.comment.loadPage)&&i.default.createElement("div",{className:"more-comment-list-wrapper",ref:e=>this.moreCommentListWrapper=e},1===j&&v&&i.default.createElement("div",{className:"wrapper"},i.default.createElement("div",{id:"top",className:"comment-list"},this.renderLine((0,r.default)({},v,{top:!0}))),i.default.createElement(w,{disabled:!0},"IT'S A TOP COMMENT ABOVE")),1===j&&h&&i.default.createElement("div",{className:"list-wrapper"},i.default.createElement("div",{id:"hots",className:"comment-list"},h.map(e=>v?e.rpid!==v.rpid&&this.renderLine(e):this.renderLine(e))),i.default.createElement(w,{onClick:this.handleOnClickHots},"LOAD MORE HOT COMMENTS")),C&&i.default.createElement("div",{className:"list-wrapper"},i.default.createElement("div",{id:"comments",className:"comment-list"},C.map(e=>v?e.rpid!==v.rpid&&this.renderLine(e):this.renderLine(e))),this.renderPageNavigation({oid:d.config.oid,pageIndex:M,num:j,pages:I})),p.comment.loadPage&&i.default.createElement("div",{className:"loading-page-mask"},i.default.createElement(u.default,{url:A.LOADING_IMAGE_URL,sign:"loading-gif"})))),g&&d&&i.default.createElement(k,null,i.default.createElement(B,null,g.map(e=>{var t=e.config,a=e.name,o=t.oid,r=o===d.config.oid;return i.default.createElement("div",{key:o,className:`nav-item ${r?"on":""}`,onClick:r?null:()=>this.handleOnClickCommentNav(e)},a)}),i.default.createElement("i",null,"\u5207\u6362\u8bc4\u8bba\u533a"))))}),this.state={uname:"",rpid:null}}componentDidUpdate(e){var t=this.props.comments,a=t.commentMap,o=t.config;this.props.location.query.page!==e.location.query.page&&"0"===e.location.query.ptype?this.load():(a.length!==e.comments.commentMap.length||a.length>0&&!o)&&a.length>0&&this.load(a[0])}}var Q=(0,s.default)((0,p.connect)(e=>{var t=e.global,a=e.comments,o=e.user;return{global:t,comments:a,user:o}})(C));t.default=Q},HjWF:function(e,t,a){"use strict";var o=a("svvH");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(a("cDcd")),l=o(a("vOnD")),i=l.default.div`
  width: 800px;
  height: 20px;
  margin: 20px auto;
  & > * {
    display: inline-block;
    margin-right: 5px;
    height: 20px;
  }
`;class n extends r.default.Component{constructor(e){super(e)}render(){return r.default.createElement(i,null,r.default.createElement("a",{href:"https://github.com/bilibili-helper/bilibili-helper/blob/master/LICENSE",target:"_blank"},r.default.createElement("img",{src:"https://img.shields.io/github/license/mashape/apistatus.svg?style=social",alt:"LICENSE"})),r.default.createElement("a",{href:"https://chrome.google.com/webstore/detail/kpbnombpnpcffllnianjibmpadjolanh",target:"_blank"},r.default.createElement("img",{src:"https://img.shields.io/chrome-web-store/v/kpbnombpnpcffllnianjibmpadjolanh.svg?style=social",alt:"Chrome Web Store"})),r.default.createElement("a",{href:"https://chrome.google.com/webstore/detail/kpbnombpnpcffllnianjibmpadjolanh",target:"_blank"},r.default.createElement("img",{src:"https://img.shields.io/chrome-web-store/d/kpbnombpnpcffllnianjibmpadjolanh.svg?style=social",alt:"Users"})),r.default.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=bilibili-helper&repo=bilibili-helper&type=star&count=true",frameBorder:"0",scrolling:"0",width:"170px",height:"20px"}))}}t.default=n},Kvkj:function(e,t,a){"use strict";var o=a("svvH");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"CommentArea",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"HeaderArea",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"DownloadArea",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"WebsiteUpdateArea",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"AnnouncementArea",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"BadgeArea",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"FeedbackArea",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"VoteArea",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"Page",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"FeedArea",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return m.Header}}),Object.defineProperty(t,"PinballArea",{enumerable:!0,get:function(){return A.PinballArea}});var r=o(a("8wrG")),l=o(a("jbW3")),i=o(a("1ZZj")),n=o(a("0q1Z")),s=o(a("ZyJ2")),c=o(a("HjWF")),d=o(a("XeeE")),p=o(a("5BdJ")),u=o(a("RXmK")),g=o(a("oD3C")),m=a("rY4l"),A=a("LdXD")},Pa8V:function(e,t,a){"use strict";var o=a("svvH");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(a("quD3")),l=o(a("cDcd")),i=o(a("vOnD")),n=a("MuoO"),s=o(a("5Epl")),c=i.default.div.attrs({className:"comment-editor"})`
  position: relative;
  display: flex;
  margin-bottom: 40px;
  padding-bottom: 30px;
  border-bottom: 1px solid var(--border-color);
  transform: scale(${e=>{var t=e.canUse;return t?1:.95}});
  z-index: 100;
  &:last-of-type {
    border-bottom: none;
  }
  .mask{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -20px;
    right: -20px;
    bottom: 20px;
    left: -20px;
    border-radius: 3px;
    background-color: rgba(85, 85, 85, 0.75);
    color: var(--pure-white);
    user-select: none;
    z-index: 1;
  }
  
  .replies &, .main & {
    border-bottom: none;
    margin: 30px 0 10px;
    padding-bottom: 0;
    transform: scale(0.97);
    .header {
      width: 30px;
      img {
        width: 25px;
        height: 25px;
      }
    }
    .mask {
      top: -10px;
      right: -10px;
      bottom: -10px;
      left: -10px;
    }
  }
  .header {
    flex-shrink: 0;
    width: 120px;
    img {
      width: 85px;
      height: 85px;
      border-radius: 50%;
      flex-shrink: 0;
    }
  }
  .main {
    flex-grow: 1;
    .send-box {
      display: flex;
      border-radius: 3px;
      overflow: hidden;
      button {
        width: 80px;
        border: none;
        font-size: 14px;
        background-color: var(--bilibili-blue);
        color: var(--background-color);
        cursor: pointer;
        outline: none;
        transition: all 0.15s;
        user-select: none;
        &:hover {
          opacity: 0.9;
        }
        &:active {
          opacity: 1;
        }
        &[disabled] {
          opacity: 0.5;
          cursor: not-allowed;
        }
      }
    }
    .toolbar {
      position: relative;
      .stickers-btn {
        padding: 3px 10px;
        border: 1px solid var(--border-color);
        border-radius: 3px;
        color: var(--content-color);
        cursor: pointer;
        outline: none;
        transition: all 0.1s;
        &:hover, &[open] {
          background-color: var(--bilibili-blue);
          color: var(--background-color);
        }
        &[disabled] {
          cursor: not-allowed;
          background-color: unset;
          color: var(--content-color);
          opacity: 0.2;
        }
      }
      .stickers-box {
        position: absolute;
        top: 24px;
        width: 388px;
        height: auto;
        border-radius: 3px;
        border: 1px solid var(--border-color);
        background-color: var(--pure-white);
        box-shadow: rgba(20, 20, 20, 0.1) 1px 1px 10px;
        z-index: 100;
        .stickers {
          height: 175px;
          padding: 5px;
          overflow: auto;
          &::-webkit-scrollbar {
            display: none;
          }
          .sticker {
            margin: 2px;
            padding: 4px 5px;
            border-radius: 3px;
            cursor: pointer;
            transition: all 0.3s;
            user-select: none;
            &:hover {
              background-color: var(--border-color);
            }
            &.text {
              display: inline-block;
              font-size: 12px;
            }
            &.img {
              width: 40px;
              height: 40px;
            }
          }
        }
        .stickers-nav {
          position: relative;
          display: flex;
          justify-content: space-between;
          background-color: var(--border-color);
          .tab-btn, img {
            display: block;
            margin: 2px;
            padding: 3px;
            width: 21px;
            height: 21px;
            line-height: 21px;
            border-radius: 3px;
            box-sizing: content-box;
            font-size: 12px;
            cursor: pointer;
            transition: background-color 0.3s;
            user-select: none;
            &[on="1"], &:hover {
              background-color: var(--background-color);
            }
          }
          .tab-btn {
            width: auto;
            padding: 3px 6px;
          }
          img {
            margin: 2px 3px;
            &:not([src]) {
              width: 27px;
              height: 27px;
              border: 1px solid var(--content-color);
              box-sizing: border-box;
            }
          }
        }
      }
      .send-error {
        padding: 3px 10px;
        display: inline-block;
        font-size: 12px;
        color: var(--bilibili-pink);
      }
    }
  }
  textarea {
    display: inline-block;
    width: 100%;
    height: 65px;
    padding: 5px 10px;
    line-height: normal;
    border-radius: 4px;
    border: 1px solid var(--border-color);
    font-size: 12px;
    box-sizing: border-box;
    background-color: var(--border-color);
    overflow: auto;
    color: #555;
    transition: all 0.15s;
    outline: none;
    resize: none;
    &:hover, &:focus-within {
      background-color: var(--pure-white);
    }
    &[disabled] {
      opacity: 0.2;
      background-color: var(--border-color);
      cursor: not-allowed;
    }
  }
`;class d extends l.default.Component{constructor(e){super(e),this.handleOnClickStickersBtn=(()=>{this.setState({on:!this.state.on}),this.state.on?this.textarea.blur():this.textarea.focus()}),this.handleOnClickStickerNavPrev=(()=>{var e=this.props.emoji.optionJSON,t=this.state.emojiNavigation,a=t.start,o=t.current,l=a-1;l<0&&(l=0);var i=o-1>0?o-1:0,n=i<a?l:a;this.setState({emojiNavigation:(0,r.default)({},this.state.emojiNavigation,{pid:e[i].pid||0,start:n,current:i})})}),this.handleOnClickStickerNavNext=(()=>{var e=this.props.emoji.optionJSON,t=this.state.emojiNavigation,a=t.start,o=t.current,l=t.length,i=a+1;i>=e.length&&(i=e.length-1);var n=o+1,s=n>a+l-1?i:a;this.setState({emojiNavigation:(0,r.default)({},this.state.emojiNavigation,{pid:e[n].pid||0,start:s,current:n})})}),this.handleOnClickStickerTab=((e,t)=>{this.setState({emojiNavigation:(0,r.default)({},this.state.emojiNavigation,{pid:e,current:t})})}),this.handleOnClickSticker=(e=>{var t=this.textarea.selectionStart,a=this.textarea.selectionEnd,o=this.textarea.value,r=o.substr(0,t),l=o.substr(a);this.textarea.value=r.concat(e,l),this.textarea.focus(),this.textarea.selectionEnd=r.length+e.length}),this.handleOnKeyDown=(e=>{var t=e.ctrlKey,a=e.keyCode,o=e.key;91!==a&&93!==a||(this.onCommandDown=!0),(t&&"Enter"===o||this.onCommandDown&&"Enter"===o)&&this.handleSendReply()}),this.handleOnKeyUp=(e=>{e.ctrlKey,e.key;var t=e.keyCode;!this.onCommandDown||91!==t&&93!==t&&224!==t&&17!==t||(this.onCommandDown=!1)}),this.handleSendReply=(()=>{var e=this.props,t=e.oid,a=e.parent,o=e.root,r=e.name,l=this.textarea.value,i=r?`\u56de\u590d @${r} :${l}`:l,n=this.props.user.csrf;l&&this.props.dispatch({type:"comments/sendReply",payload:{root:o,parent:a,message:i,oid:t,csrf:n}}),this.setState({tempMessage:l},()=>{this.textarea.value=""})}),this.renderEmojis=((e,t)=>e.map(e=>{if(t)return l.default.createElement("span",{key:e,className:"sticker text",title:e,onClick:()=>this.handleOnClickSticker(e)},e);var a=e.url,o=e.name,r=e.remark;return l.default.createElement(s.default,{key:o,className:"sticker img",url:a,sign:o,remark:r,onClick:()=>this.handleOnClickSticker(o)})})),this.state={on:!1,emojiNavigation:{pid:0,start:0,length:7,current:0},tempMessage:null},this.onCommandDown=!1}render(){var e=this.state,t=e.on,a=e.emojiNavigation,o=e.tempMessage,r=a.start,i=a.length,n=a.pid,d=a.current,p=this.props,u=p.comments,g=p.name,m=p.user,A=p.emoji,b=p.global,h=p.able,f=void 0===h||h,x=u.status.editor,v=x.error,w=x.sending,E=A.optionJSON,k=!!m.info,B=m.info||{},C=B.face,Q=B.uid;return l.default.createElement(c,{canUse:k},(!k||w||!f)&&l.default.createElement("div",{className:"mask"},l.default.createElement("span",null,"~",!f&&"\u8bc4\u8bba\u529f\u80fd\u529f\u80fd\u88ab\u7981\u6b62",!b.status.connected&&"\u672a\u8fde\u63a5\u52a9\u624b",!k&&b.status.connected&&"\u5c1a\u672a\u767b\u5f55",w&&"\u53d1\u9001\u4e2d","~")),l.default.createElement("div",{className:"header"},k&&l.default.createElement(s.default,{className:"avatar",url:C,sign:Q})),l.default.createElement("div",{className:"main"},l.default.createElement("div",{className:"send-box"},l.default.createElement("textarea",{disabled:!k,ref:e=>this.textarea=e,placeholder:g&&!b?`\u56de\u590d @${g}`:"\u8bf7\u81ea\u89c9\u9075\u5b88\u4e92\u8054\u7f51\u76f8\u5173\u7684\u653f\u7b56\u6cd5\u89c4\uff0c\u4e25\u7981\u53d1\u5e03\u8272\u60c5\u3001\u66b4\u529b\u3001\u53cd\u52a8\u7684\u8a00\u8bba\u3002",defaultValue:v?o:"",onKeyUp:this.handleOnKeyUp,onKeyDown:this.handleOnKeyDown}),l.default.createElement("button",{disabled:w||!k,onClick:this.handleSendReply},"\u53d1\u9001")),l.default.createElement("div",{className:"toolbar"},l.default.createElement("button",{disabled:!k,className:"stickers-btn",onClick:this.handleOnClickStickersBtn,open:t},"STICKERS"),t&&l.default.createElement("div",{className:"stickers-box"},l.default.createElement("div",{className:"stickers"},E[d]&&this.renderEmojis(E[d].emojis,0===n)),l.default.createElement("div",{className:"stickers-nav"},r>0&&l.default.createElement("div",{className:"tab-btn",onClick:this.handleOnClickStickerNavPrev},"PREV"),E.map((e,t)=>{var a=e.pid,o=(e.emojis,e.pname,e.purl);if(t<r+i&&t>r-1)return l.default.createElement(s.default,{key:a,url:o,sign:`default-emoji-tab-${a}`,on:d===t?"1":"0",onClick:()=>this.handleOnClickStickerTab(a,t)})}),r+i<E.length&&l.default.createElement("div",{className:"tab-btn",onClick:this.handleOnClickStickerNavNext},"NEXT"))),v&&l.default.createElement("span",{className:"send-error"},v))))}}var p=(0,n.connect)(e=>{var t=e.user,a=e.emoji,o=e.comments,r=e.global;return{user:t,emoji:a,comments:o,global:r}})(d);t.default=p},RXmK:function(e,t,a){"use strict";var o=a("svvH");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(a("cDcd")),l=o(a("vOnD")),i=l.default.div`
    width: 800px;
    margin: 10px auto 30px;
    padding: 0px 10px;
`;class n extends r.default.Component{constructor(e){super(e)}render(){return r.default.createElement(i,this.props,this.props.children)}}var s=n;t.default=s},RnhZ:function(e,t,a){var o={"./af":"K/tc","./af.js":"K/tc","./ar":"jnO4","./ar-dz":"o1bE","./ar-dz.js":"o1bE","./ar-kw":"Qj4J","./ar-kw.js":"Qj4J","./ar-ly":"HP3h","./ar-ly.js":"HP3h","./ar-ma":"CoRJ","./ar-ma.js":"CoRJ","./ar-sa":"gjCT","./ar-sa.js":"gjCT","./ar-tn":"bYM6","./ar-tn.js":"bYM6","./ar.js":"jnO4","./az":"SFxW","./az.js":"SFxW","./be":"H8ED","./be.js":"H8ED","./bg":"hKrs","./bg.js":"hKrs","./bm":"p/rL","./bm.js":"p/rL","./bn":"kEOa","./bn.js":"kEOa","./bo":"0mo+","./bo.js":"0mo+","./br":"aIdf","./br.js":"aIdf","./bs":"JVSJ","./bs.js":"JVSJ","./ca":"1xZ4","./ca.js":"1xZ4","./cs":"PA2r","./cs.js":"PA2r","./cv":"A+xa","./cv.js":"A+xa","./cy":"l5ep","./cy.js":"l5ep","./da":"DxQv","./da.js":"DxQv","./de":"tGlX","./de-at":"s+uk","./de-at.js":"s+uk","./de-ch":"u3GI","./de-ch.js":"u3GI","./de.js":"tGlX","./dv":"WYrj","./dv.js":"WYrj","./el":"jUeY","./el.js":"jUeY","./en-SG":"zavE","./en-SG.js":"zavE","./en-au":"Dmvi","./en-au.js":"Dmvi","./en-ca":"OIYi","./en-ca.js":"OIYi","./en-gb":"Oaa7","./en-gb.js":"Oaa7","./en-ie":"4dOw","./en-ie.js":"4dOw","./en-il":"czMo","./en-il.js":"czMo","./en-nz":"b1Dy","./en-nz.js":"b1Dy","./eo":"Zduo","./eo.js":"Zduo","./es":"iYuL","./es-do":"CjzT","./es-do.js":"CjzT","./es-us":"Vclq","./es-us.js":"Vclq","./es.js":"iYuL","./et":"7BjC","./et.js":"7BjC","./eu":"D/JM","./eu.js":"D/JM","./fa":"jfSC","./fa.js":"jfSC","./fi":"gekB","./fi.js":"gekB","./fo":"ByF4","./fo.js":"ByF4","./fr":"nyYc","./fr-ca":"2fjn","./fr-ca.js":"2fjn","./fr-ch":"Dkky","./fr-ch.js":"Dkky","./fr.js":"nyYc","./fy":"cRix","./fy.js":"cRix","./ga":"USCx","./ga.js":"USCx","./gd":"9rRi","./gd.js":"9rRi","./gl":"iEDd","./gl.js":"iEDd","./gom-latn":"DKr+","./gom-latn.js":"DKr+","./gu":"4MV3","./gu.js":"4MV3","./he":"x6pH","./he.js":"x6pH","./hi":"3E1r","./hi.js":"3E1r","./hr":"S6ln","./hr.js":"S6ln","./hu":"WxRl","./hu.js":"WxRl","./hy-am":"1rYy","./hy-am.js":"1rYy","./id":"UDhR","./id.js":"UDhR","./is":"BVg3","./is.js":"BVg3","./it":"bpih","./it-ch":"bxKX","./it-ch.js":"bxKX","./it.js":"bpih","./ja":"B55N","./ja.js":"B55N","./jv":"tUCv","./jv.js":"tUCv","./ka":"IBtZ","./ka.js":"IBtZ","./kk":"bXm7","./kk.js":"bXm7","./km":"6B0Y","./km.js":"6B0Y","./kn":"PpIw","./kn.js":"PpIw","./ko":"Ivi+","./ko.js":"Ivi+","./ku":"JCF/","./ku.js":"JCF/","./ky":"lgnt","./ky.js":"lgnt","./lb":"RAwQ","./lb.js":"RAwQ","./lo":"sp3z","./lo.js":"sp3z","./lt":"JvlW","./lt.js":"JvlW","./lv":"uXwI","./lv.js":"uXwI","./me":"KTz0","./me.js":"KTz0","./mi":"aIsn","./mi.js":"aIsn","./mk":"aQkU","./mk.js":"aQkU","./ml":"AvvY","./ml.js":"AvvY","./mn":"lYtQ","./mn.js":"lYtQ","./mr":"Ob0Z","./mr.js":"Ob0Z","./ms":"6+QB","./ms-my":"ZAMP","./ms-my.js":"ZAMP","./ms.js":"6+QB","./mt":"G0Uy","./mt.js":"G0Uy","./my":"honF","./my.js":"honF","./nb":"bOMt","./nb.js":"bOMt","./ne":"OjkT","./ne.js":"OjkT","./nl":"+s0g","./nl-be":"2ykv","./nl-be.js":"2ykv","./nl.js":"+s0g","./nn":"uEye","./nn.js":"uEye","./pa-in":"8/+R","./pa-in.js":"8/+R","./pl":"jVdC","./pl.js":"jVdC","./pt":"8mBD","./pt-br":"0tRk","./pt-br.js":"0tRk","./pt.js":"8mBD","./ro":"lyxo","./ro.js":"lyxo","./ru":"lXzo","./ru.js":"lXzo","./sd":"Z4QM","./sd.js":"Z4QM","./se":"//9w","./se.js":"//9w","./si":"7aV9","./si.js":"7aV9","./sk":"e+ae","./sk.js":"e+ae","./sl":"gVVK","./sl.js":"gVVK","./sq":"yPMs","./sq.js":"yPMs","./sr":"zx6S","./sr-cyrl":"E+lV","./sr-cyrl.js":"E+lV","./sr.js":"zx6S","./ss":"Ur1D","./ss.js":"Ur1D","./sv":"X709","./sv.js":"X709","./sw":"dNwA","./sw.js":"dNwA","./ta":"PeUW","./ta.js":"PeUW","./te":"XLvN","./te.js":"XLvN","./tet":"V2x9","./tet.js":"V2x9","./tg":"Oxv6","./tg.js":"Oxv6","./th":"EOgW","./th.js":"EOgW","./tl-ph":"Dzi0","./tl-ph.js":"Dzi0","./tlh":"z3Vd","./tlh.js":"z3Vd","./tr":"DoHr","./tr.js":"DoHr","./tzl":"z1FC","./tzl.js":"z1FC","./tzm":"wQk9","./tzm-latn":"tT3J","./tzm-latn.js":"tT3J","./tzm.js":"wQk9","./ug-cn":"YRex","./ug-cn.js":"YRex","./uk":"raLr","./uk.js":"raLr","./ur":"UpQW","./ur.js":"UpQW","./uz":"Loxo","./uz-latn":"AQ68","./uz-latn.js":"AQ68","./uz.js":"Loxo","./vi":"KSF8","./vi.js":"KSF8","./x-pseudo":"/X5v","./x-pseudo.js":"/X5v","./yo":"fzPg","./yo.js":"fzPg","./zh-cn":"XDpg","./zh-cn.js":"XDpg","./zh-hk":"SatO","./zh-hk.js":"SatO","./zh-tw":"kOpN","./zh-tw.js":"kOpN"};function r(e){var t=l(e);return a(t)}function l(e){var t=o[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}r.keys=function(){return Object.keys(o)},r.resolve=l,e.exports=r,r.id="RnhZ"},XeeE:function(e,t,a){"use strict";var o=a("svvH");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(a("cDcd")),l=o(a("vOnD")),i=a("rY4l"),n=o(a("RXmK")),s=(0,l.default)(n.default)`
  a {
    display: inline-block;
    margin: 3px 5px;
    padding: 6px 12px;
    font-size: 12px;
    border-radius: 3px;
    text-decoration: none;
    background-color: #ef6c00;
    color: var(--pure-white);
    user-select: none;
    &:first-of-type {
      margin-left: 0;
    }
    &:hover {
      opacity: 0.9;
    }
    &:active {
      opacity: 1;
    }
    img, .github-svg {
      width: 15px;
      vertical-align: middle;
      fill: currentColor;
    }
  }
  .github {
    background-color: #222;
  }
  .qq {
    background-color: #11abff;
  }
  .comments {
    background-color: var(--bilibili-pink);
  }
  
`,c=()=>r.default.createElement(s,null,r.default.createElement(i.Header,null,"\u95ee\u9898\u53cd\u9988 ~ FEEDBACK",r.default.createElement("p",null,"\u8d76\u7d27\u7559\u8a00\u5427~\u60f3\u8bf4\u4ec0\u4e48\u90fd\u53ef\u4ee5~")),r.default.createElement("a",{className:"comments"},"\u300c\u8bc4\u8bba\u533a\u300d\u7559\u8a00"),r.default.createElement("a",{className:"github",href:"https://github.com/bilibili-helper/bilibili-helper/issues",target:"_blank"},"\u300cGithub\u300d\u4e0a\u53cd\u9988"),r.default.createElement("a",{href:"https://weibo.com/guguke",target:"_blank"},"\u300c\u5fae\u535a\u300d@\u557e\u5495\u5495www"),r.default.createElement("a",{href:"https://weibo.com/ruo0037",target:"_blank"},"\u300c\u5fae\u535a\u300d@\u6ca1\u7761\u9192\u7684\u8089\u554a"),r.default.createElement("a",{className:"qq"},"\u5728\u300cQQ\u7fa4548321019\u300d\u79c1\u804a \u8089\u8089"));t.default=c},ZyJ2:function(e,t,a){"use strict";var o=a("svvH");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(a("YLtl")),l=o(a("cDcd")),i=a("MuoO"),n=o(a("vOnD")),s=o(a("RXmK")),c=(0,n.default)(s.default)`
  h3 {
    margin: 15px 0 10px;
    font-size: 16px;
    color: #212121;
  }
  ul {
    padding: 5px 1px;
    border-radius: 3px;
    background-color: var(--pure-white);
    z-index: 101;
    li {
      padding: 7px 10px;
      font-size: 12px;
      list-style: none;
      //cursor: pointer;
      border-radius: 3px;
      border-bottom: 1px solid var(--border-color);
      transition: all 0.1s;
      &:last-of-type {
        border:none;
      }
      //&:hover, &.active {
      //  background-color: var(--bilibili-blue);
      //  color: var(--pure-white);
      //}
      &::after {
        content: ';';
        display: inline;
      }
      &:last-of-type::after {
        content: '。';
      }
      i {
        margin: 0 3px;
        font-style: normal;
      }
    }
  }
`;class d extends l.default.Component{constructor(e){super(e)}render(){var e=this.props.announcements;return l.default.createElement(c,{id:"announcement"},l.default.createElement("h3",null,"\u91cd\u8981\u516c\u544a ~ ANNOUNCEMENTS"),r.default.map(e.config,(e,t)=>"\u529f\u80fd\u5220\u9664\u987b\u77e5"===t&&l.default.createElement("div",{className:"item",key:t},l.default.createElement("ul",{className:"content"},e.map((e,t)=>l.default.createElement("li",{key:t,dangerouslySetInnerHTML:{__html:e}}))))))}}var p=(0,i.connect)(e=>{var t=e.announcements;return{announcements:t}})(d);t.default=p},jbW3:function(e,t,a){"use strict";var o=a("svvH");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(a("cDcd")),l=a("MuoO"),i=o(a("vOnD")),n=a("LdXD"),s=i.default.div.attrs({className:"header-box"})`
  position: relative;
  flex-shrink: 0;
  margin-bottom: 40px;
  padding-bottom: 0;
  height: 80px;
  min-width: 800px;
  background-color: var(--bilibili-pink);
  color: var(--background-color);
  padding: 50px 0px 20px;
  &::after {
    content: '';
    display: block;
    margin-top: 10px;
    width: 100%;
    height: 20px;
    background-color: #fb7299;
    border-radius: 0 0 50% 50%;
  }
  & > * {
    display: block;
    max-width: 800px;
    margin: 0px auto;
    padding: 0px 10px;
  }
  .header-box {
    display: flex;
    justify-content: space-between;
    height: 80px;
    .title-box {
      h1 {
        font-size: 24px;
      }
      .version-box {
        height: 12px;
        line-height: 12px;
        text-indent: 2px;
        span {
          margin-right: 20px;
          line-height: 12px;
          font-size: 12px;
          font-weight: normal;
        }
      }
    }
    .action-box {
      display: flex;
      justify-content: flex-end;
      //align-items: center;
      .login-box {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        & > * {
          flex-grow: 0;
          width: max-content;
        }
        span {
          font-size: 12px;
          margin-top: 3px;
          text-align: right;
        }
        .login-btn {
          
        }
      }
    }
  }
  img {
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    width: 100%;
    height: 37px;
    max-width: unset;
    margin: -1px 0 0;
    padding: 0;
  }
`,c=i.default.button`
  padding: 10px 40px;
  border-radius: 3px;
  font-size: 14px;
  letter-spacing: 2px;
  border: 1px solid var(--background-color);
  background-color: var(--bilibili-blue);
  color: var(--background-color);
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: rgba(35, 173, 229, 0.9);
  }
  &:active {
    background-color: var(--bilibili-blue);
  }
  &[disabled] {
    background-color: rgba(35, 173, 229, 0.5);
    cursor: not-allowed;
  }
`;class d extends r.default.Component{constructor(e){super(e),this.handleOnClickLogin=((e,t)=>{e||t?location.href=location.href:this.props.dispatch({type:"global/connectHelper"})}),this.app=null,this.state={showPinball:!1}}render(){var e=this.props.global,t=e.status,a=t.connected,o=t.tryConnect,l=t.initializing;return r.default.createElement(r.default.Fragment,null,r.default.createElement(s,null,r.default.createElement("div",{className:"header-box"},r.default.createElement("div",{className:"title-box"},r.default.createElement("h1",null,"BILIBILI HELPER",r.default.createElement(n.PinballArea,null)),r.default.createElement("div",{className:"version-box"},e.config&&r.default.createElement("span",null,"Latest: ",e.config.lastVersion),e.version&&r.default.createElement("span",null,"Yours: ",e.version))),r.default.createElement("div",{className:"action-box"},!a&&o?r.default.createElement("div",{className:"login-box"},r.default.createElement(c,{className:"login-btn",onClick:()=>this.handleOnClickLogin(a,o)},l&&"\u8fde\u63a5\u4e2d",!l&&!a&&!o&&"\u8fde\u63a5\u52a9\u624b",!l&&!a&&o&&"\u8fde\u63a5\u52a9\u624b\u5931\u8d25\uff0c\u70b9\u51fb\u5237\u65b0\u91cd\u8bd5"),!a&&o&&r.default.createElement("span",null,"\u5982\u679c\u60a8\u7684\u6d4f\u89c8\u5668\u672a\u5b89\u88c5\u52a9\u624b\u6216\u52a9\u624b\u7248\u672c\u5c0f\u4e8e 1.2.0.8\uff0c\u8fde\u63a5\u5c06\u4f1a\u5931\u8d25",r.default.createElement("br",null),"\u8bf7\u5b89\u88c5\u52a9\u624b\u6216\u8005\u66f4\u65b0\u81f3\u65b0\u7248\u672c")):null))))}}var p=(0,l.connect)(e=>{var t=e.global,a=e.user;return{global:t,user:a}})(d);t.default=p},oD3C:function(e,t,a){"use strict";var o=a("svvH");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(a("etV5")),l=o(a("cDcd")),i=a("MuoO"),n=o(a("vOnD")),s=a("rY4l"),c=o(a("5Epl")),d=o(a("RXmK")),p=a("c7k8"),u=(0,n.default)(d.default)`
  position: relative;
  img {
    position: absolute;
    top: 82px;
    right: 30px;
    width: 160px;
    opacity: 0.7;
    user-select: none;
    pointer-events: none;
    &:hover {
    }
  }
`,g=(0,n.default)(p.List)`
  border-radius: 3px;
  outline: none;
`,m=n.default.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 6px;
  font-size: 12px;
  box-sizing: border-box;
  border-bottom: 1px solid #fff;
  border-radius: 3px;
  background-color: var(--border-color);
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: var(--background-color);
  }
  &.largeThanTen {
    color: var(--bilibili-pink);
  }
  &.largeThanFive {
    color: var(--bilibili-blue);
  }
  & > * {
    padding: 0 2px 0 5px;
    width: 100px;
    border-right: 1px solid white;
    &:last-of-type {
      border-right: none;
    }
  }
  .date {
  }
  .name {
    width: 60px;
    text-align: center;
  }
  .num {
    text-align: right;
    padding-right: 20px;
    width: 60px;
  }
  .message {
    flex-grow: 1;
  }
`;class A extends l.default.Component{constructor(e){super(e),this.renderLine=(e=>{var t=e.index,a=e.style,o=this.props.global,i=(0,r.default)(o.feeds[t],4),n=i[0],s=i[1],c=i[2],d=i[3],p=c>=10,u=c>=5&&c<10;return l.default.createElement(m,{style:a,key:t,className:`${u?"largeThanFive":p?"largeThanTen":""}`},l.default.createElement("span",{className:"date"},n),l.default.createElement("span",{className:"name"},s),l.default.createElement("span",{className:"num"},"\uffe5 ",Number(c).toFixed(2)),l.default.createElement("span",{className:"message"},d))})}render(){var e=this.props.global;return l.default.createElement(u,null,l.default.createElement(s.Header,null,"\u6295\u5582\u533a\u9e2d ~ FEEDS",l.default.createElement("p",null,"\u611f\u8c22\u5927\u5bb6\u7684\u652f\u6301\u9e2d~mua~")),l.default.createElement(g,{width:800,height:200,rowCount:e.feeds&&e.feeds.length||0,rowHeight:28,rowRenderer:this.renderLine,noRowsRenderer:()=>l.default.createElement("div",null,"\u65e0\u6570\u636e")}),l.default.createElement(c.default,{src:"../static/images/alipay-df.png"}))}}var b=(0,i.connect)(e=>{var t=e.global;return{global:t}})(A);t.default=b},rB1f:function(e,t,a){"use strict";var o=a("g2Oz"),r=a("svvH");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a("cDcd")),i=a("MuoO"),n=o(a("vOnD")),s=r(a("Bo8p")),c=a("Kvkj"),d=n.createGlobalStyle`
  html {
    --background-color: #fafafa;
	  --bilibili-blue: #23ade5;
	  --bilibili-pink: #fb7299;
	  --border-color: #f1f1f1;
	  --content-color: #555;
	  --pure-white: #fcfcfc;
  }
  body {
    background: var(--background-color);
  }
  *, body {
    margin: 0;
    padding: 0;
    font-family: system-ui, "PingFang SC", STHeiti, sans-serif;
  }
  .model-img {
    &:not([src]) {
      content: url("data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==");
      border: 1px solid var(--border-color);
      box-sizing: border-box;
    }
  }
`,p=()=>l.default.createElement(l.default.Fragment,null,l.default.createElement(d,null),l.default.createElement(c.HeaderArea,null),l.default.createElement(c.DownloadArea,null),l.default.createElement(c.WebsiteUpdateArea,null),l.default.createElement(c.VoteArea,null),l.default.createElement(c.AnnouncementArea,null),l.default.createElement(c.FeedbackArea,null),l.default.createElement(c.FeedArea,null),l.default.createElement(c.BadgeArea,null),l.default.createElement(c.CommentArea,null)),u=(0,s.default)((0,i.connect)(e=>e)(p));t.default=u},rY4l:function(e,t,a){"use strict";var o=a("svvH");Object.defineProperty(t,"__esModule",{value:!0}),t.Header=void 0;var r=o(a("cDcd")),l=o(a("vOnD")),i=l.default.h3`
  align-items: center;
  margin: 15px 0 20px;
  font-size: 16px;
  color: #212121;
  a {
    margin-left: 20px;
    padding: 2px 7px;
    line-height: 22px;
    vertical-align: bottom;
    font-size: 12px;
    font-weight: normal;
    border: 1px solid;
    border-radius: 3px;
    text-decoration: none;
    background-color: var(--pure-white);
    color: var(--bilibili-blue);
    cursor: pointer;
    outline: none;
    user-select: none;
    &:active {
      background-color: var(--bilibili-blue);
      color: var(--pure-white);
    }
  }
  p {
    margin: 3px 0px;
    font-size: 12px;
    color: var(--content-color);
    font-weight: normal;
  }
`,n=function(e){return r.default.createElement(i,null,e.children)};t.Header=n},ywEC:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LOADING_IMAGE_URL=void 0;var o="data:image/jpeg;base64,R0lGODlhZABkAMQfAKqytf7+/hktNoaRltTY2jRHTvP09VdmbHqGi2Nxd+rs7cPIyvr6+52nquHk5bzCxUFSWc/T1SY6Qt7h4kxcY+fp6pKcoG58gfDx8rS7vsjNz9nd3uTm5/b39+3u7////yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY3OUZDREY5MDgxMDExRTVBOTQ0ODQ2RTUzQjczM0VEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY3OUZDREZBMDgxMDExRTVBOTQ0ODQ2RTUzQjczM0VEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Rjc5RkNERjcwODEwMTFFNUE5NDQ4NDZFNTNCNzMzRUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Rjc5RkNERjgwODEwMTFFNUE5NDQ4NDZFNTNCNzMzRUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94Onht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";t.LOADING_IMAGE_URL=o}}]);