/**
 * Yashnobod Technopark Dashboard Logic - Duo-tone Version (Cyrillic)
 */

const dashboardData = {
    2025: {
        totalResidents: 38,
        appliedCount: 40,
        newResidents: 21,
        jobsCreated: 1136,
        totalProduction: 894.8,
        domesticSales: 721.1,
        exportSales: 173.7,
        exportUSD: null,
        domesticPercent: 80.6,
        exportPercent: 19.4,
        countries: [
            { name: 'Қирғизистон', flag: '🇰🇬' },
            { name: 'Қозоғистон', flag: '🇰🇿' },
            { name: 'Тожикистон', flag: '🇹🇯' },
            { name: 'Россия', flag: '🇷🇺' }
        ],
        news: []
    },
    2026: {
        totalResidents: 42,
        appliedCount: 8,
        newResidents: 4,
        jobsCreated: 102,
        totalProduction: 159.7,
        domesticSales: 112.3,
        exportSales: 47.4,
        exportUSD: "4.6",
        domesticPercent: 70.3,
        exportPercent: 29.7,
        countries: [
            { name: 'Қозоғистон', flag: '🇰🇿' },
            { name: 'Қирғизистон', flag: '🇰🇬' }
        ],
        news: [
            "I. АСОСИЙ ФАОЛИЯТ: Тошкент шаҳар ҳокимлиги ва Савдо-саноат палатасига инновацион фаолият билан шуғулланувчи тадбиркорлик субъектлари рўйхатини шакллантириш учун мурожаат қилинди.",
            "2026-йилда резидентликка даъвогар 8 та тадбиркорлик субъектидан аризалар қабул қилиниб, техник экспертизадан ўтказилди; шундан 4 та субъектга Технопарк резидентлик мақоми тақдим этилди.",
            "Технопарк резидентлари сони 42 тани ташкил этмоқда. Йил бошидан 159,7 млрд. сўмлик маҳсулот ишлаб чиқарилиб, 112,3 млрд. сўми ички бозорга сотилди ва 4,6 млн. АҚШ долларлик маҳсулот қўшни давлатларга экспорт қилинди.",
            "Жами 102 та янги иш ўрни яратилди. Технопарк ҳудудида 20 та тадбиркор ўзининг инновацион лойиҳалари билан самарали ишлаб келмоқда.",
            "«ARHAT INKS» МЧЖ «Босма бўёқлар ишлаб чиқариш» лойиҳаси доирасида 101,3 млрд. сўмлик инновацион маҳсулот ишлаб чиқарди ва 6,8 млн. АҚШ доллари миқдоридаги маҳсулотни экспорт қилди. 2025–26 йилларда 3,9 млрд. сўмлик инвестиция киритилди.",
            "«ARHAT INKS» МЧЖ 2026-йил 1-чорак учун Технопарк ҳисоб рақамига 32,7 млн. сўм ажратма ўтказди.",
            "«ALWOOD» МЧЖ «Металл қолип тизимлари ва ёрдамчи конструкциялар ишлаб чиқаришни маҳаллийлаштириш» лойиҳаси доирасида 10,2 млрд. сўмлик инновацион маҳсулот ишлаб чиқарди.",
            "«ALWOOD» МЧЖ Хитой давлатидан 30 977 АҚШ долларида асбоб-ускуналар олиб келди; 356,6 млн. сўм маблағ божхона тўловларидан озод этилди. Тежалган маблағ корхона капиталини кўпайтиришга киритилди.",
            "II. ҚЎШИМЧА ФАОЛИЯТ: Технопарк директори бошчилигида «Манфаатлар тўқнашувини бошқариш ва уни ҳал қилиш чоралари» мавзусида йиғилиш бўлиб ўтди.",
            "Технопарк резидентлари иштирокида онлайн конференция ўтказилди. Вазирлар Маҳкамасининг 2025-йил 784-сон қарори доирасида субсидиялар, имтиёзлар ва преференциялардан самарали фойдаланиш бўйича тушунтиришлар берилди.",
            "Адлия вазирлигида интеллектуал мулк объектларини баҳолаш тизимини йўлга қўйишга бағишланган давра суҳбати бўлиб ўтди (ПҚ–390-сон қарор ижроси доирасида).",
            "2026-йил 6-март куни Чуст тумани ҳокимлиги ҳамда Ёшлар ишлари бўлими ўртасида меморандум имзоланди.",
            "III. ТАСАББУСЛАР: Яшнобод инновация технопарки ходимлари иштирокида У.А.Арифов номидаги Ион-плазма ва лазер технологиялари институти ҳамда «Big Bag Production» МЧЖ ҳамкорлигида инновацион лойиҳа амалга оширилди.",
            "InnoWeek-2025 доирасида Яшнобод инновация технопарки, Сколково фонди ҳамда МДҲ Компетенциялар маркази ўртасида меморандум имзоланди."
        ]
    }
};

/**
 * Animate numbers
 */
function animateValue(id, start, end, duration, isFloat = false) {
    const obj = document.getElementById(id);
    if (!obj) return;
    
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        let val = progress * (end - start) + start;
        
        if (isFloat) {
            obj.innerHTML = val.toFixed(1).replace('.', ',');
        } else {
            obj.innerHTML = Math.floor(val).toLocaleString();
        }
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

/**
 * Switch Year
 */
function switchYear(year) {
    document.querySelectorAll('.year-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.innerText === year.toString()) btn.classList.add('active');
    });

    const data = dashboardData[year];
    if (!data) return;

    animateValue('total-residents', 0, data.totalResidents, 800);
    animateValue('applied-count', 0, data.appliedCount, 800);
    animateValue('new-residents', 0, data.newResidents, 800);
    animateValue('jobs-created', 0, data.jobsCreated, 1000);
    animateValue('total-production', 0, data.totalProduction, 1000, true);

    // Update Title Tagline based on year
    const dashTitle = document.getElementById('dashboard-title');
    if (year === 2026) {
        dashTitle.innerText = 'ЯШНОБОД ИННОВАЦИЯ ТЕХНОПАРКИ ТОМОНИДАН 2026-ЙИЛ 1-ЧОРАК ФАОЛИЯТ НАТИЖАЛАРИ';
    } else {
        dashTitle.innerText = 'ТАҚДИМ ЭТИЛГАН ҚЎЛЛАБ-ҚУВВАТЛАШ ЧОРАЛАРИНИНГ САМАРАДОРЛИГИ ВА ЭРИШИЛГАН НАТИЖАЛАР (2025 ЙИЛЛАР КЕСИМИДА)';
    }

    // Update sales text
    const domesticEl = document.getElementById('domestic-sales');
    const exportEl = document.getElementById('export-sales');
    
    domesticEl.innerText = data.domesticSales.toString().replace('.', ',');
    
    if (data.exportUSD) {
        exportEl.innerHTML = `${data.exportSales.toString().replace('.', ',')} <span class="usd-text">(${data.exportUSD} млн $)</span>`;
    } else {
        exportEl.innerText = data.exportSales.toString().replace('.', ',');
    }

    // Update bars
    document.querySelector('.bar-fill.domestic').style.width = data.domesticPercent + '%';
    document.querySelector('.bar-fill.export').style.width = data.exportPercent + '%';
    
    const progressFill = document.querySelector('.progress-fill');
    if (progressFill) progressFill.style.width = '100%';

    // Update countries list
    const countriesContainer = document.querySelector('.countries-list');
    countriesContainer.innerHTML = '';
    data.countries.forEach(c => {
        const pill = document.createElement('div');
        pill.className = 'country-pill';
        pill.innerHTML = `<span class="flag">${c.flag}</span> ${c.name}`;
        countriesContainer.appendChild(pill);
    });

    // Handle News Ticker
    const newsContainer = document.getElementById('news-container');
    const newsContent = document.getElementById('news-ticker-content');
    
    if (data.news && data.news.length > 0) {
        newsContainer.style.display = 'flex';
        newsContent.innerHTML = '';
        data.news.forEach(text => {
            const span = document.createElement('span');
            span.className = 'ticker-item';
            span.innerText = text;
            newsContent.appendChild(span);
        });
    } else {
        newsContainer.style.display = 'none';
        newsContent.innerHTML = '';
    }
}

window.addEventListener('DOMContentLoaded', () => {
    switchYear(2025);
});
