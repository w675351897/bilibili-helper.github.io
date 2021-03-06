import _ from 'lodash';
import styled from 'styled-components';
import React from 'react';

const Wrappr = styled.div`
  width: 800px;
  margin: 10px auto 30px;
  padding: 0px 10px;
  h3 {
    margin: 15px 0 10px;
    font-size: 16px;
    color: #212121;
  }
  
  p {
    margin: 0 20px 8px;
    padding: 5px 4px;
    border-radius: 3px;
    font-size: 12px;
    background-color: var(--bilibili-pink);
    color: var(--pure-white);
  }
  
  a {
    color: var(--pure-white);
  }
  .important {
    background-color: red;
    color: yellow;
  }
`;

/**
 * Author: DrowsyFlesh
 * Create: 2019/11/4
 * Description:
 */
class QuestionnaireArea extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Wrappr id="announcement">
                <h3>问卷调查 ~ QUESTIONNAIRE</h3>
                {/*<p className="important">从 <b>EDGE应用商店下载到的发布者为"edge ext"的助手</b>，该版本为进过修改的恶意上传版本，存在极大安全隐患，请立刻卸载。正版地址：<a  target="_blank" href="https://microsoftedge.microsoft.com/addons/detail/fcfebhekhbkhjjimonjmbgmkbclheaoh?hl=zh-CN">link</a></p>*/}
                <p>如果觉得助手用起来还不错，恳请前往 <a href="https://chrome.google.com/webstore/detail/%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9%E5%8A%A9%E6%89%8B%EF%BC%9Abilibilicom-%E7%BB%BC%E5%90%88%E8%BE%85%E5%8A%A9%E6%89%A9%E5%B1%95/kpbnombpnpcffllnianjibmpadjolanh?hl=zh-CN">&nbsp;谷歌商店&nbsp;</a> 给予五星好评~从而让更多人知道~</p>
                <p>目前火狐正在严格审查中，请大家加群下载1.2.16版本，非常抱歉，我们暂时还没能够很好地处理严格审查，它意味着我们一些技术需要做重大调整</p>
                <p>关于POPUP页面的问卷，很简短，请参与填写一下~：→ <a href="https://docs.qq.com/form/edit/DUHZ3allZS0ZYQlBN">link</a></p>
                <p>经过肉肉4天的紧急开发，<a href="https://chrome.google.com/webstore/detail/%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9%E9%9F%B3%E4%B9%90%EF%BC%9Abilibilicom-%E8%BE%85%E5%8A%A9%E6%89%A9%E5%B1%95/lhjebpdodpjgfihhaocoepmdojfhknfn">《哔哩哔哩音乐》</a>上架了，之后会增加更过实用功能，这里是一份调差问卷：→<a href="https://docs.qq.com/form/fill/DUGR4bE1rbkJrc1Vm?_w_tencentdocx_form=1">link</a></p>
            </Wrappr>
        );
    }
}

export default QuestionnaireArea;
