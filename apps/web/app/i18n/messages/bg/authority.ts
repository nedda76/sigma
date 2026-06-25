export const authority = {
  metaTitle: '{name} — СИГМА',
  metaDescription: 'Обществени поръчки на {name}, {range}.',
  fallbackName: 'Институция',

  breadcrumbHome: 'Начало',
  breadcrumbAuthorities: 'Институции',

  kind: 'Институция',

  lede: 'Колко публични средства е похарчила институцията за обществени поръчки през {range} г. Зад всяко число по-долу стоят конкретните договори, които го формират.',

  factsLabel: 'Ключови показатели',
  factTotalValue: 'Обща стойност',
  factContracts: 'Брой договори',
  factPeriod: 'Период',
  factDistinctSuppliers: 'Различни изпълнители',
  factEuShare: 'Дял с финансиране от ЕС',
  factEuShareSub: 'от общия обем',
  factAvgBids: 'Средно оферти на търг',
  factSeat: 'Седалище',
  noData: 'няма данни',
  factTopSectors: 'Топ сектори',
  factUnverifiedValue: 'Непотвърдена стойност',
  unverifiedValueSub: 'изключени от сумите',
  contracts_one: 'договор',
  contracts_many: 'договора',

  topContractorsTitle: 'Топ изпълнители',
  topContractorsHint:
    'Подредени по общата сума, спечелена от {name}. Колоната „Дял" показва каква част от парите отива при всеки изпълнител.',
  colRank: '#',
  colCompany: 'Компания',
  colWon: 'Спечелено',
  colContracts: 'Договори',
  colShareOfTotal: 'Дял от общата сума',
  labelShare: 'Дял',
  chipConsortium: 'обединение',
  moreContractors: '… още {count} изпълнители — виж всички договори →',

  whatTitle: 'Какво купува',
  whatHint: 'CPV категориите, подредени по обем.',
  whatCaption: 'Какво купува {name} — по CPV категория',
  whatColSector: 'Сектор (CPV)',
  whatColValueShare: 'Стойност и дял',

  howTitle: 'Как купува',
  howHint: 'Разпределение на договорите по вид процедура.',

  allTitle: 'Договори',
  contractsSortLabel: 'Подреждане на договорите',
  allHint: '{count} {word}, {range} — превключи между най-новите и най-големите по стойност.',
  tabNewest: 'Най-нови',
  tabLargest: 'Най-големи по стойност',
  viewAllCsv: 'Виж всички / филтрирай / свали като CSV →',
} as const;
