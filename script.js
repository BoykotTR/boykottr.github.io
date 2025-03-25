const companies = [
    {
        name: "Espressolab",
        logo: "img/espressolab.png",
        description: "Hükümete yakın kahve zinciri",
        sectors: ["Gıda", "Kahve"]
    },
    {
        name: "Demirören Grubu",
        logo: "img/demiroren.png",
        description: "Medya, sanayi, turizm ve eğitim gibi alanlarda faaliyet",
        sectors: ["Medya", "Sanayi", "Turizm", "Eğitim"]
    },
    {
        name: "Hürriyet",
        logo: "img/hurriyet.png",
        description: "Demirören Grubu'na ait gazete",
        sectors: ["Medya", "Gazete"]
    },
    {
        name: "Milliyet",
        logo: "img/milliyet.png",
        description: "Demirören Grubu'na ait gazete",
        sectors: ["Medya", "Gazete"]
    },
    {
        name: "Posta",
        logo: "img/posta.png",
        description: "Demirören Grubu'na ait gazete",
        sectors: ["Medya", "Gazete"]
    },
    {
        name: "Fanatik",
        logo: "img/fanatik.png",
        description: "Demirören Grubu'na ait spor gazetesi",
        sectors: ["Medya", "Spor"]
    },
    {
        name: "Kanal D",
        logo: "img/kanald.png",
        description: "Demirören Grubu'na ait televizyon kanalı",
        sectors: ["Medya", "Televizyon"]
    },
    {
        name: "CNN Türk",
        logo: "img/cnnturk.png",
        description: "Demirören Grubu'na ait haber kanalı",
        sectors: ["Medya", "Haber"]
    },
    {
        name: "D&R",
        logo: "img/dr.png",
        description: "Demirören Grubu'na ait kitap, müzik ve medya perakendecisi",
        sectors: ["Medya", "Perakende"]
    },
    {
        name: "Idefix",
        logo: "img/idefix.png",
        description: "Demirören Grubu'na ait kitap ve medya platformu",
        sectors: ["Medya", "E-ticaret"]
    },
    {
        name: "Ülker",
        logo: "img/ulker.png",
        description: "Gıda sektöründe faaliyet; iktidara yakın",
        sectors: ["Gıda", "Şekerleme"]
    },
    {
        name: "Godiva",
        logo: "img/godiva.png",
        description: "Ülker'in çikolata markası",
        sectors: ["Gıda", "Çikolata"]
    },
    {
        name: "McVitie's",
        logo: "img/mcvities.png",
        description: "Ülker'in bisküvi markası",
        sectors: ["Gıda", "Bisküvi"]
    },
    {
        name: "ETS Tur",
        logo: "img/etstur.png",
        description: "Turizm sektöründe faaliyet gösteriyor",
        sectors: ["Turizm"]
    },
    {
        name: "Kilim Mobilya",
        logo: "img/kilim.png",
        description: "Mobilya sektöründe faaliyet",
        sectors: ["Mobilya"]
    },
    {
        name: "Türk Petrol",
        logo: "img/turkpetrol.png",
        description: "Akaryakıt sektöründe; Milangaz ve Likitgaz ile bağlantılı",
        sectors: ["Enerji", "Akaryakıt"]
    },
    {
        name: "TRT",
        logo: "img/trt.png",
        description: "Devlete ait yayın kuruluşu",
        sectors: ["Medya", "Yayıncılık"]
    },
    {
        name: "TGRT",
        logo: "img/tgrt.png",
        description: "İhlas Holding'e ait medya grubu",
        sectors: ["Medya", "Yayıncılık"]
    },
    {
        name: "CNN Türk",
        logo: "img/cnnturk.png",
        description: "Demirören Grubu'na ait haber kanalı",
        sectors: ["Medya", "Haber"]
    },
    {
        name: "Milli Piyango",
        logo: "img/millipiyango.png",
        description: "Devlete ait şans oyunları",
        sectors: ["Şans Oyunları"]
    },
    {
        name: "İddaa",
        logo: "img/iddaa.png",
        description: "İktidar yanlısı bahis platformu.",
        sectors: ["Şans Oyunları"]
    },
    {
        name: "Misli",
        logo: "img/misli.png",
        description: "İktidar yanlısı bahis platformu.",
        sectors: ["Şans Oyunları"]
    },
    {
        name: "Türk Telekom",
        logo: "img/turktelekom.png",
        description: "Devlete ait telekomünikasyon şirketi",
        sectors: ["Telekomünikasyon"]
    },
    {
        name: "PTT",
        logo: "img/ptt.png",
        description: "Devlete ait posta ve iletişim hizmetleri",
        sectors: ["Posta", "İletişim"]
    },
    {
        name: "ÜçDörtBeş",
        logo: "img/ucdortbes.png",
        description: "İktidar yanlısı eğitim yayıncılığı.",
        sectors: ["Yayıncılık", "Eğitim"]
    },
    {
        name: "Ziraat Bankası",
        logo: "img/ziraat.png",
        description: "Devlete ait bankacılık hizmetleri",
        sectors: ["Bankacılık"]
    },
    {
        name: "Halkbank",
        logo: "img/halkbank.png",
        description: "Devlete ait bankacılık hizmetleri",
        sectors: ["Bankacılık"]
    },
    {
        name: "VakıfBank",
        logo: "img/vakıfbank.png",
        description: "Devlete ait bankacılık hizmetleri",
        sectors: ["Bankacılık"]
    },
    {
        name: "BOTAŞ",
        logo: "img/botas.png",
        description: "Devlete ait enerji ve doğal gaz dağıtım şirketi",
        sectors: ["Enerji", "Doğal Gaz"]
    },
    {
        name: "Tüpraş",
        logo: "img/tupras.png",
        description: "Devlete ait petrol rafineri şirketi",
        sectors: ["Enerji", "Petrol"]
    }
];

// Şirket kartları
function createCompanyCards(companiesToShow = companies) {
    const grid = document.getElementById('companiesGrid');
    grid.innerHTML = '';

    companiesToShow.forEach((company, index) => {
        const card = document.createElement('div');
        card.className = 'company-card';
        card.style.animationDelay = `${index * 0.1}s`;

        card.innerHTML = `
            <img src="${company.logo}" alt="${company.name} logo" class="company-logo">
            <div class="company-info">
                <h3 class="company-name">${company.name}</h3>
                <p class="company-description">${company.description}</p>
                <div class="company-sectors">
                    ${company.sectors.map(sector => `<span class="sector-tag">${sector}</span>`).join('')}
                </div>
            </div>
        `;

        grid.appendChild(card);
    });
}

// Arama fonksiyonu
function searchCompanies(query) {
    const searchTerm = query.toLowerCase();
    const filteredCompanies = companies.filter(company => 
        company.name.toLowerCase().includes(searchTerm) ||
        company.description.toLowerCase().includes(searchTerm) ||
        company.sectors.some(sector => sector.toLowerCase().includes(searchTerm))
    );
    
    createCompanyCards(filteredCompanies);
}

// Arama inputuna event listener ekle
document.getElementById('searchInput').addEventListener('input', (e) => {
    searchCompanies(e.target.value);
});

// Sayfa yüklendiğinde tüm şirketleri göster
document.addEventListener('DOMContentLoaded', () => {
    createCompanyCards();
}); 