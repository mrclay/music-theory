export const readNotePattern = /^([A-Ga-g])(♭|b|bb|𝄫|♯|#|𝄪|##|x|♮|)$/;
export const readAccidentalsMap: Record<string, number> = {
  bb: -2,
  "𝄫": -2,
  b: -1,
  "♭": -1,
  "": 0,
  "♮": 0,
  "♯": 1,
  "#": 1,
  "𝄪": 2,
  "##": 2,
  x: 2,
};

export const writeAccidentalsMap: Record<string, string> = {
  "-2": "bb",
  "-1": "b",
  "0": "",
  "1": "#",
  "2": "x",
};

export const diatonicOffsets = [2, 2, 1, 2, 2, 2, 1];
export const cMajorLetters = "CDEFGAB".split("");

// const diatonicTriads = ['', 'm', 'm', '', '', 'm', 'dim'];
// const diatonicSevenths = ['maj7', 'm7', 'm7', 'maj7', '7', 'm7', 'ø7'];
