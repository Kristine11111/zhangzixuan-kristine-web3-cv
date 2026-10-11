(() => {
  const projects = {
    en: [
      { type: 'INTERNATIONAL EVENT OPERATIONS · 2026', name: 'TOKEN2049 Singapore 2026', body: ['Supported international event operations for participating companies.', 'Coordinated event arrangements and kept on-site execution organised.'], tags: ['EVENT OPERATIONS', 'WEB3', 'STAKEHOLDER COORDINATION'] },
      { type: 'B2B STRATEGY PROJECT · 2026', name: 'Onn Wah Tech', body: ['Explored the connection between sustainable development and enterprise growth through ESG value commercialisation.', 'Conducted market research, competitor analysis and B2B procurement-needs research to support differentiated value propositions and market strategy.'], tags: ['B2B STRATEGY', 'ESG', 'MARKET RESEARCH'] },
      { type: 'PUBLIC FUNDRAISING · 2026', name: 'MINDS', body: ['Supported public fundraising and integrated marketing through cross-sector partnership development.', 'Assisted partner outreach, resource matching, campaign planning, execution coordination and multi-channel content promotion.'], tags: ['FUNDRAISING', 'PARTNERSHIPS', 'INTEGRATED MARKETING'] },
      { type: 'DAO MEMBER · APR 2026', name: 'Melodao Web3 Internship Training Camp', body: ['Built relationships with crypto professionals and Web3 communities.', 'Researched market trends, Web3 sectors and benchmark projects.', 'Launched a Web3-focused X account from 0 to 1, reaching 10K+ impressions.'], tags: ['DAO MEMBER', 'ECOSYSTEM RESEARCH', 'COMMUNITY', 'X CONTENT'] }
    ],
    zh: [
      { type: '国际活动运营 · 2026', name: 'TOKEN2049 Singapore 2026', body: ['支持参展企业开展国际活动运营。', '协调活动安排，保障现场执行有序推进。'], tags: ['活动运营', 'Web3', '利益相关者协调'] },
      { type: 'B2B 战略项目 · 2026', name: 'Onn Wah Tech', body: ['探索可持续发展与企业增长之间的联系，聚焦 ESG 价值商业化。', '开展市场研究、竞争对手分析及 B2B 采购需求研究，支持差异化价值主张与市场策略。'], tags: ['B2B 战略', 'ESG', '市场研究'] },
      { type: '公众筹款 · 2026', name: 'MINDS', body: ['通过跨领域合作伙伴拓展，支持公众筹款与整合营销。', '协助合作伙伴拓展、资源匹配、活动策划、执行协调及多渠道内容推广。'], tags: ['筹款', '合作伙伴关系', '整合营销'] },
      { type: 'DAO 成员 · 2026 年 4 月', name: 'Melodao Web3 实习训练营', body: ['与加密行业从业者及 Web3 社区建立联系。', '研究市场趋势、Web3 赛道及对标项目。', '从 0 到 1 启动 Web3 垂直 X 账号，获得 10K+ 曝光。'], tags: ['DAO 成员', '生态研究', '社区', 'X 内容'] }
    ]
  };

  function render() {
    const cards = document.querySelector('.project-cards');
    if (!cards) return false;
    const lang = document.documentElement.lang === 'zh-CN' ? 'zh' : 'en';
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
    return true;
  }

  const observer = new MutationObserver(() => { if (render()) observer.disconnect(); });
  observer.observe(document.body, { childList: true, subtree: true });
  render();
})();
