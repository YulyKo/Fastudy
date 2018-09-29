const directionExample = {
  Программирование: [
    "Программирование",
    "Программирование",
    "Программирование",
    "Программирование"
  ],
  Кэмпинг: ["Кэмпинг", "Кэмпинг", "Кэмпинг"],
  Медицина: ["Медицина", "Спасение при обморожении", "Кэмпинг"],
  Рыбалка: ["Рыбалка", "Кэмпинг", "Кэмпинг"],
  Исскуство: ["Исскуство", "Кэмпинг", "Кэмпинг"],
  Фильмы: ["Фильмы", "Кэмпинг", "Кэмпинг"]
};

const lessons = {
  "Спасение при обморожении": {
    title: "Обморожение",
    theory: [
      'Иногда обморожение наступает при небольшом морозе (от -3 до -5 град. С) и даже при плюсовой температуре, что обычно связано с понижением сопротивляемости организма.\n\n      "Первая помощь при обморожении / отморожении: *убрать с холода (на морозе растирать и греть бесполезно и опасно) закрыть сухой повязкой (для уменьшения скорости отогревания) медленное согревание в помещении обильное теплое и сладкое питье (согреваем изнутри)'
    ],
    test: {
      body: [
        {
          title: "Ситуация 1",
          question: "Что делать?",
          variants: ["Да", "Нет", "Сарказм"]
        },
        {
          title: "Ситуация 2",
          question: "Что опять сделать?",
          variants: ["Да", "Нет", "Сарказм", "Ничего"]
        }
      ],
      correct: [2, 0]
    }
  }
};

export { directionExample, lessons };