const herbsDatabase = [
  {
    "herb_number": 1,
    "herb_name": "Agathi",
    "tamil_name": "அகத்தி",
    "english_name": "Hummingbird Tree / Agati / Swamp Pea",
    "botanical_name": "Sesbania grandiflora (Linn.) Pers.",
    "taste": "Bitter, Sweet, Astringent",
    "suvai": "கைப்பு, தித்திப்பு, துவர்ப்பு",
    "veeriyam": "தட்பம் (Cooling)",
    "gunam": "பித்தக் கோளாறுகள், உடற்சூடு, மலக்கட்டு, பித்த மயக்கம் ஆகியவற்றைத் தணிக்கும்.",
    "pharmacological_action": "பித்தசமனி (Antibilious), மலமிளக்கி (Laxative)"
  },
  {
    "herb_number": 2,
    "herb_name": "Agil (Agaru)",
    "tamil_name": "அகில் (அகருகட்டை)",
    "english_name": "Eaglewood / Agarwood / Aloe-wood",
    "botanical_name": "Aquilaria agallocha Roxb.",
    "taste": "Pungent, Bitter, Mild Sweet",
    "suvai": "கார்ப்பு, கைப்பு, சிறு இனிப்பு",
    "veeriyam": "வெப்பம் (Hot)",
    "gunam": "மூக்கடைப்பு, ஒற்றைத் தலைவலி, வாதம், நமைச்சல்கள், சுரம், சுவாசம் ஆகியவற்றை நீக்கும்.",
    "pharmacological_action": "வெப்பமுண்டாக்கி (Stimulant), பித்தநீர்ப்பெருக்கி (Cholagogue), வீக்கமுருக்கி (Deobstruent)"
  },
  {
    "herb_number": 3,
    "herb_name": "Akkaragaram",
    "tamil_name": "அக்கராகாரம்",
    "english_name": "Pellitory of Spain / Pellithry Root",
    "botanical_name": "Anacyclus pyrethrum DC.",
    "taste": "Pungent",
    "suvai": "கார்ப்பு",
    "veeriyam": "வெப்பம் (Hot)",
    "gunam": "வாததோடம், நீர்வேட்கை, நாவறட்சி, பல்வலி, தொண்டைக்கட்டல், நா அசைவற்றுப் போதல் ஆகியவற்றை நீக்கும்.",
    "pharmacological_action": "வெப்பமுண்டாக்கி (Stimulant), உமிழ்சீர்ப்பெருக்கி (Sialogogue), தடிப்புண்டாக்கி (Rubefacient)"
  },
  {
    "herb_number": 8,
    "herb_name": "Ati Maduram",
    "tamil_name": "அதிமதுரம்",
    "english_name": "Liquorice / Jamaica Liquorice",
    "botanical_name": "Glycyrrhiza glabra Linn.",
    "taste": "Sweet",
    "suvai": "இனிப்பு",
    "veeriyam": "தட்பம் (Cooling)",
    "gunam": "தலைவலி, ஒற்றைத்தலைவலி, காய்ச்சல், நாவறட்சி, இருமல், கண் எரிச்சல், தாகச்சுரம் ஆகியவற்றைத் தணிக்கும்.",
    "pharmacological_action": "கோழையகற்றி (Expectorant), உள்ளழலாற்றி (Demulcent), தாகசமனி (Refrigerant), உடற்றேற்றி (Alterative)"
  },
  {
    "herb_number": 14,
    "herb_name": "Amukkurak-Kizhangu",
    "tamil_name": "அமுக்குராக்கிழங்கு",
    "english_name": "Winter Cherry / Ashwagandha",
    "botanical_name": "Withania somnifera (Linn) Dunal",
    "taste": "Bitter",
    "suvai": "கைப்பு",
    "veeriyam": "வெப்பம் (Hot)",
    "gunam": "கயம், வளிக்கூட்டங்கள், கரப்பான், சுரம், வீக்கம் ஆகியவற்றைப் போக்கும், பசித்தீயையுண்டாக்கும்.",
    "pharmacological_action": "உடற்றேற்றி (Alterative), ஆண்மைப்பெருக்கி (Aphrodisiac), வீக்கமுருக்கி (Deobstruent), சிறுநீர்ப்பெருக்கி (Diuretic), உரமாக்கி (Tonic), உறக்கமுண்டாக்கி (Soporific)"
  },
  {
    "herb_number": 43,
    "herb_name": "Avarai (Avaram)",
    "tamil_name": "ஆவாரை (ஆவாரம்)",
    "english_name": "Tanner's Cassia / Avaram",
    "botanical_name": "Senna auriculata (Linn.) Roxb. / Cassia auriculata Linn.",
    "taste": "Astringent",
    "suvai": "துவர்ப்பு",
    "veeriyam": "தட்பம் (Cooling)",
    "gunam": "நீரிழிவு, மேக நோய், நாவறட்சி, உடற்சூடு, சிறுநீரில் சர்க்கரை ஆகியவற்றைக் கட்டுப்படுத்தும்.",
    "pharmacological_action": "துவர்ப்பி (Astringent), உடற்றேற்றி (Alterative), நீரழிவு அகற்றி (Antidiabetic)"
  },
  {
    "herb_number": 128,
    "herb_name": "Karisalankanni",
    "tamil_name": "கரிசலாங்கண்ணி (கையாந்தகரை)",
    "english_name": "Trailing Eclipta / Bhringraj",
    "botanical_name": "Eclipta prostrata (Linn) Linn.",
    "taste": "Bitter",
    "suvai": "கைப்பு",
    "veeriyam": "வெப்பம் (Hot)",
    "gunam": "பெருவயிறு, ஏறுபித்தம், காமாலை, சோகை, மண்ணீரல் வீக்கம், கல்லீரல் கோளாறுகளைக் குணமாக்கும்.",
    "pharmacological_action": "பித்தநீர்ப்பெருக்கி (Cholagogue), உரமாக்கி (Tonic), உடற்றேற்றி (Alterative), ஈரல்தேற்றி (Hepatic tonic)"
  },
  {
    "herb_number": 153,
    "herb_name": "Katrazhai",
    "tamil_name": "கற்றாழை (சோற்றுக்கற்றாழை)",
    "english_name": "Indian Aloe / Aloe Vera",
    "botanical_name": "Aloe vera (Linn.) Burm.f. / Aloe barbadensis",
    "taste": "Mild Bitter, Sweet",
    "suvai": "சிறுகைப்பு, இனிப்பு",
    "veeriyam": "தட்பம் (Cooling)",
    "gunam": "உடற்சூடு, கண் எரிச்சல், மேகவெள்ளை, கருப்பை நோய்கள், மூலம் ஆகியவற்றைக் குணப்படுத்தும்.",
    "pharmacological_action": "குளிர்ச்சியுண்டாக்கி (Refrigerant), உள்ளழலாற்றி (Demulcent), மலமிளக்கி (Laxative)"
  }
];

function getFieldValue(herb, ...keys) {
  for (const key of keys) {
    const value = herb[key];
    if (value !== undefined && value !== null && value !== '') {
      return value;
    }
  }
  return '';
}

function normalizeHerb(herb) {
  return {
    herb_name: getFieldValue(herb, 'herb_name', 'name'),
    tamil_name: getFieldValue(herb, 'tamil_name', 'tamilName'),
    english_name: getFieldValue(herb, 'english_name', 'englishName'),
    botanical_name: getFieldValue(herb, 'botanical_name', 'botanicalName'),
    taste: getFieldValue(herb, 'taste'),
    suvai: getFieldValue(herb, 'suvai'),
    veeriyam: getFieldValue(herb, 'veeriyam'),
    gunam: getFieldValue(herb, 'gunam'),
    pharmacological_action: getFieldValue(herb, 'pharmacological_action')
  };
}

function displayHerbs(herbs) {
  const container = document.getElementById('herbsGrid') || document.getElementById('herbContainer');

  if (!container) {
    return;
  }

  if (herbs.length === 0) {
    container.innerHTML = '<p>No herbs found matching your search.</p>';
    return;
  }

  const normalized = herbs.map(normalizeHerb);

  container.innerHTML = normalized.map((herb) => `
    <div class="herb-card">
      <h3>${herb.herb_name} (${herb.tamil_name})</h3>
      <p><strong>Botanical Name:</strong> ${herb.botanical_name}</p>
      <p><strong>English Name:</strong> ${herb.english_name}</p>
      <p><strong>Suvai / Taste:</strong> ${herb.suvai || herb.taste}</p>
      <p><strong>Veeriyam:</strong> ${herb.veeriyam}</p>
      <p><strong>Gunam:</strong> ${herb.gunam}</p>
      <p><strong>Pharmacological Action:</strong> ${herb.pharmacological_action}</p>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim().toLowerCase();

      const filtered = herbsDatabase.filter((herb) => {
        const normalized = normalizeHerb(herb);
        const searchableText = [
          normalized.herb_name,
          normalized.tamil_name,
          normalized.english_name,
          normalized.botanical_name,
          normalized.gunam
        ].join(' ').toLowerCase();

        return searchableText.includes(query);
      });

      displayHerbs(filtered);
    });
  }

  displayHerbs(herbsDatabase);
});
