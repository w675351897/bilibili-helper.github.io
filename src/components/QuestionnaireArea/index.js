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
                <p>关于POPUP页面的问卷，很简短，请参与填写一下~：→ <a href="https://docs.qq.com/form/edit/DUHZ3allZS0ZYQlBN">link</a></p>
                <p>经过肉肉4天的紧急开发，<a href="https://chrome.google.com/webstore/detail/%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9%E9%9F%B3%E4%B9%90%EF%BC%9Abilibilicom-%E8%BE%85%E5%8A%A9%E6%89%A9%E5%B1%95/lhjebpdodpjgfihhaocoepmdojfhknfn">《哔哩哔哩音乐》</a>上架了，之后会增加更过实用功能，尽情期待</p>
            </Wrappr>
        );
    }
}

export default QuestionnaireArea;
