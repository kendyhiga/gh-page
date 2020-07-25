import CARD_A_C from './SVG-cards/C01.svg';
import CARD_02_C from './SVG-cards/C02.svg';
import CARD_03_C from './SVG-cards/C03.svg';
import CARD_04_C from './SVG-cards/C04.svg';
import CARD_05_C from './SVG-cards/C05.svg';
import CARD_06_C from './SVG-cards/C06.svg';
import CARD_07_C from './SVG-cards/C07.svg';
import CARD_08_C from './SVG-cards/C08.svg';
import CARD_09_C from './SVG-cards/C09.svg';
import CARD_10_C from './SVG-cards/C10.svg';
import CARD_11_C from './SVG-cards/C11.svg';
import CARD_12_C from './SVG-cards/C12.svg';
import CARD_13_C from './SVG-cards/C13.svg';

import CARD_A_D from './SVG-cards/D01.svg';
import CARD_02_D from './SVG-cards/D02.svg';
import CARD_03_D from './SVG-cards/D03.svg';
import CARD_04_D from './SVG-cards/D04.svg';
import CARD_05_D from './SVG-cards/D05.svg';
import CARD_06_D from './SVG-cards/D06.svg';
import CARD_07_D from './SVG-cards/D07.svg';
import CARD_08_D from './SVG-cards/D08.svg';
import CARD_09_D from './SVG-cards/D09.svg';
import CARD_10_D from './SVG-cards/D10.svg';
import CARD_11_D from './SVG-cards/D11.svg';
import CARD_12_D from './SVG-cards/D12.svg';
import CARD_13_D from './SVG-cards/D13.svg';

import CARD_A_H from './SVG-cards/H01.svg';
import CARD_02_H from './SVG-cards/H02.svg';
import CARD_03_H from './SVG-cards/H03.svg';
import CARD_04_H from './SVG-cards/H04.svg';
import CARD_05_H from './SVG-cards/H05.svg';
import CARD_06_H from './SVG-cards/H06.svg';
import CARD_07_H from './SVG-cards/H07.svg';
import CARD_08_H from './SVG-cards/H08.svg';
import CARD_09_H from './SVG-cards/H09.svg';
import CARD_10_H from './SVG-cards/H10.svg';
import CARD_11_H from './SVG-cards/H11.svg';
import CARD_12_H from './SVG-cards/H12.svg';
import CARD_13_H from './SVG-cards/H13.svg';

import CARD_A_S from './SVG-cards/S01.svg';
import CARD_02_S from './SVG-cards/S02.svg';
import CARD_03_S from './SVG-cards/S03.svg';
import CARD_04_S from './SVG-cards/S04.svg';
import CARD_05_S from './SVG-cards/S05.svg';
import CARD_06_S from './SVG-cards/S06.svg';
import CARD_07_S from './SVG-cards/S07.svg';
import CARD_08_S from './SVG-cards/S08.svg';
import CARD_09_S from './SVG-cards/S09.svg';
import CARD_10_S from './SVG-cards/S10.svg';
import CARD_11_S from './SVG-cards/S11.svg';
import CARD_12_S from './SVG-cards/S12.svg';
import CARD_13_S from './SVG-cards/S13.svg';

// import Joker from './SVG-cards/JOKER.svg';

const DECK = [{name: 'CARD_02_C', svg: CARD_02_C, value: 2},  {name: 'CARD_02_D', svg: CARD_02_D, value: 2},  {name: 'CARD_02_H', svg: CARD_02_H, value: 2},  {name: 'CARD_02_S', svg: CARD_02_S, value: 2},
              {name: 'CARD_03_C', svg: CARD_03_C, value: 3},  {name: 'CARD_03_D', svg: CARD_03_D, value: 3},  {name: 'CARD_03_H', svg: CARD_03_H, value: 3},  {name: 'CARD_03_S', svg: CARD_03_S, value: 3},
              {name: 'CARD_04_C', svg: CARD_04_C, value: 4},  {name: 'CARD_04_D', svg: CARD_04_D, value: 4},  {name: 'CARD_04_H', svg: CARD_04_H, value: 4},  {name: 'CARD_04_S', svg: CARD_04_S, value: 4},
              {name: 'CARD_05_C', svg: CARD_05_C, value: 5},  {name: 'CARD_05_D', svg: CARD_05_D, value: 5},  {name: 'CARD_05_H', svg: CARD_05_H, value: 5},  {name: 'CARD_05_S', svg: CARD_05_S, value: 5},
              {name: 'CARD_06_C', svg: CARD_06_C, value: 6},  {name: 'CARD_06_D', svg: CARD_06_D, value: 6},  {name: 'CARD_06_H', svg: CARD_06_H, value: 6},  {name: 'CARD_06_S', svg: CARD_06_S, value: 6},
              {name: 'CARD_07_C', svg: CARD_07_C, value: 7},  {name: 'CARD_07_D', svg: CARD_07_D, value: 7},  {name: 'CARD_07_H', svg: CARD_07_H, value: 7},  {name: 'CARD_07_S', svg: CARD_07_S, value: 7},
              {name: 'CARD_08_C', svg: CARD_08_C, value: 8},  {name: 'CARD_08_D', svg: CARD_08_D, value: 8},  {name: 'CARD_08_H', svg: CARD_08_H, value: 8},  {name: 'CARD_08_S', svg: CARD_08_S, value: 8},
              {name: 'CARD_09_C', svg: CARD_09_C, value: 9},  {name: 'CARD_09_D', svg: CARD_09_D, value: 9},  {name: 'CARD_09_H', svg: CARD_09_H, value: 9},  {name: 'CARD_09_S', svg: CARD_09_S, value: 9},
              {name: 'CARD_10_C', svg: CARD_10_C, value: 10}, {name: 'CARD_10_D', svg: CARD_10_D, value: 10}, {name: 'CARD_10_H', svg: CARD_10_H, value: 10}, {name: 'CARD_10_S', svg: CARD_10_S, value: 10},
              {name: 'CARD_11_C', svg: CARD_11_C, value: 11}, {name: 'CARD_11_D', svg: CARD_11_D, value: 11}, {name: 'CARD_11_H', svg: CARD_11_H, value: 11}, {name: 'CARD_11_S', svg: CARD_11_S, value: 11},
              {name: 'CARD_12_C', svg: CARD_12_C, value: 12}, {name: 'CARD_12_D', svg: CARD_12_D, value: 12}, {name: 'CARD_12_H', svg: CARD_12_H, value: 12}, {name: 'CARD_12_S', svg: CARD_12_S, value: 12},
              {name: 'CARD_13_C', svg: CARD_13_C, value: 13}, {name: 'CARD_13_D', svg: CARD_13_D, value: 13}, {name: 'CARD_13_H', svg: CARD_13_H, value: 13}, {name: 'CARD_13_S', svg: CARD_13_S, value: 13},
              {name: 'CARD_A_C', svg: CARD_A_C, value: 14},   {name: 'CARD_A_D', svg: CARD_A_D, value: 14},   {name: 'CARD_A_H', svg: CARD_A_H, value: 14},   {name: 'CARD_A_S', svg: CARD_A_S, value: 14}]

export default DECK
