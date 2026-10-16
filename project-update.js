(() => {
  const projects = {
    en: [
      { type: 'INTERNATIONAL EVENT OPERATIONS · 2026', name: 'TOKEN2049 Singapore 2026', body: ['Supported international event operations for participating companies.', 'Coordinated event arrangements and kept on-site execution organised.'], tags: ['EVENT OPERATIONS', 'WEB3', 'STAKEHOLDER COORDINATION'] },
      { type: 'LATAM GROWTH & AI COMMERCIALISATION STRATEGY · 2026', name: 'NetEase Games', body: ['Overseas growth strategy: Contributed to NetEase Games’ Latin America commercialisation strategy research, covering overseas market expansion, player payment conversion and business-model optimisation, and identified regional growth opportunities to support strategic decision-making for the company’s international expansion.', 'Market research & competitive analysis: Focused on priority Latin American markets, studying game market size, user spending behaviour, competitive landscape and local payment ecosystems; identified the key factors restricting players’ first-time payments and repeat purchases, and assessed differentiated market-entry and monetisation strategies.', 'Business model & financial analysis: Analysed in-game purchase funnels and payment transaction costs, comparing the unit economics of local payment methods, third-party payment providers and different contracting models; through financial modelling and scenario analysis, quantified the potential impact of higher payment conversion and optimised transaction costs on revenue and profit.', 'AI-driven growth & strategy implementation: Researched AI applications in player churn prediction, personalised marketing and intelligent payment flows; designed optimisation initiatives targeting user retention, payment conversion and revenue growth, and developed a commercial feasibility assessment framework with a phased implementation roadmap.'], tags: ['LATAM MARKET', 'GROWTH STRATEGY', 'AI COMMERCIALISATION', 'FINANCIAL MODELLING'] },
      { type: 'B2B STRATEGY PROJECT · 2026', name: 'Onn Wah Tech', body: ['Explored the connection between sustainable development and enterprise growth through ESG value commercialisation.', 'Conducted market research, competitor analysis and B2B procurement-needs research to support differentiated value propositions and market strategy.'], tags: ['B2B STRATEGY', 'ESG', 'MARKET RESEARCH'] },
      { type: 'PUBLIC FUNDRAISING · 2026', name: 'MINDS', body: ['Supported public fundraising and integrated marketing through cross-sector partnership development.', 'Assisted partner outreach, resource matching, campaign planning, execution coordination and multi-channel content promotion.'], tags: ['FUNDRAISING', 'PARTNERSHIPS', 'INTEGRATED MARKETING'] },
      { type: 'DAO MEMBER · APR 2026', name: 'Melodao Web3 Internship Training Camp', body: ['Built relationships with crypto professionals and Web3 communities.', 'Researched market trends, Web3 sectors and benchmark projects.', 'Launched a Web3-focused X account from 0 to 1, reaching 10K+ impressions.'], tags: ['DAO MEMBER', 'ECOSYSTEM RESEARCH', 'COMMUNITY', 'X CONTENT'] }
    ],
    zh: [
      { type: '国际活动运营 · 2026', name: 'TOKEN2049 Singapore 2026', body: ['支持参展企业开展国际活动运营。', '协调活动安排，保障现场执行有序推进。'], tags: ['活动运营', 'Web3', '利益相关者协调'] },
      { type: '拉美市场增长与 AI 商业化战略咨询 · 2026', name: '网易游戏（NetEase Games）', body: ['海外增长战略：参与网易游戏拉丁美洲市场商业化战略研究，围绕海外市场拓展、玩家付费转化及商业模式优化，识别区域增长机会，为网易游戏国际化布局提供战略决策支持。', '市场研究与竞争分析：聚焦拉美重点市场，研究游戏市场规模、用户消费行为、竞争格局及本地支付生态，识别制约玩家首次付费和重复购买的关键因素，评估差异化市场进入与商业化策略。', '商业模式与财务分析：分析游戏内购付费漏斗及支付交易成本，比较本地支付方式、第三方支付服务商与不同签约模式的单位经济效益；通过财务建模与情景分析，量化支付转化率提升、交易成本优化对收入及利润的潜在影响。', 'AI 驱动增长与战略落地：研究 AI 在玩家流失预测、个性化营销和智能支付流程中的应用，设计以用户留存、付费转化及收入增长为目标的优化方案，并制定商业可行性评估框架与分阶段实施路径。'], tags: ['拉美市场', '增长战略', 'AI 商业化', '财务建模'] },
      { type: 'B2B 战略项目 · 2026', name: 'Onn Wah Tech', body: ['探索可持续发展与企业增长之间的联系，聚焦 ESG 价值商业化。', '开展市场研究、竞争对手分析及 B2B 采购需求研究，支持差异化价值主张与市场策略。'], tags: ['B2B 战略', 'ESG', '市场研究'] },
      { type: '公众筹款 · 2026', name: 'MINDS', body: ['通过跨领域合作伙伴拓展，支持公众筹款与整合营销。', '协助合作伙伴拓展、资源匹配、活动策划、执行协调及多渠道内容推广。'], tags: ['筹款', '合作伙伴关系', '整合营销'] },
      { type: 'DAO 成员 · 2026 年 4 月', name: 'Melodao Web3 实习训练营', body: ['与加密行业从业者及 Web3 社区建立联系。', '研究市场趋势、Web3 赛道及对标项目。', '从 0 到 1 启动 Web3 垂直 X 账号，获得 10K+ 曝光。'], tags: ['DAO 成员', '生态研究', '社区', 'X 内容'] }
    ]
  };

  function render() {
    const cards = document.querySelector('.project-cards');
    if (!cards) return false;
    const lang = document.documentElement.lang === 'zh-CN' ? 'zh' : 'en';
    if (cards.dataset.lang === lang && cards.querySelectorAll('article').length === projects[lang].length) return true;
    const section = cards.closest('.project-section');
    const label = section && section.querySelector('.section-label');
    const title = section && section.querySelector('h2');
    if (label) label.textContent = lang === 'zh' ? '05 / WEB3 & WEB2 项目' : '05 / WEB3 & WEB2 PROJECT';
    if (title) title.innerHTML = lang === 'zh' ? 'Web3 & Web2 experience.<br>Research-led execution.' : 'Web3 & Web2 experience.<br>Research-led execution.';
    cards.innerHTML = projects[lang].map((project, index) => `
      <article class="project-card project-card-reference project-card-reference-${index + 1}">
        <div class="project-card-main">
          <div class="project-card-heading"><small>${project.type}</small><h3>${project.name}</h3></div>
          <ul class="project-body">${project.body.map(item => `<li>${item}</li>`).join('')}</ul>
        </div>
        <div class="project-card-footer"><div class="project-tags">${project.tags.map(tag => `<span>${tag}</span>`).join('')}</div><span class="project-card-plus">+</span></div>
      </article>`).join('');
    cards.dataset.lang = lang;
    return true;
  }

  const observer = new MutationObserver(() => { render(); });
  observer.observe(document.body, { childList: true, subtree: true });
  const langObserver = new MutationObserver(() => { render(); });
  langObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  render();
})();
