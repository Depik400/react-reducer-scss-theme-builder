import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { stat } from 'fs';

// type ActionType<T extends object> = Split<T, ToTuple<keyof T>>

// type Split<T extends object, K> =
// K extends [] ? never
//  : K extends [ infer B, ...infer A] ?
//  B extends keyof T ?
//   T[B] extends string ?
//   A extends string[] ?
//   B extends string ?
//    `${B}/${T[B]}` | Split<T, A> : 'a'  : 'b' : 'c' : 'd' : 'e'

// type Store = {
//     theme: 'light' |'dark',
//     meme: 'eee'| 'ddd'
// }

// type TypeSplitArr<T extends string[]> = T extends [] ? never :
//     T extends [infer A, ...infer B] ?
//     B extends string[] ?
//      A | TypeSplitArr<B> :
//       A :
//       never

// type GGG = TypeSplitArr<['a','b']>

// type TT = ActionType<Store>

// type UnionToParm<U> = U extends any ? (k: U) => void : never;
// type UnionToSect<U> = UnionToParm<U> extends ((k: infer I) => void) ? I : never;
// type ExtractParm<F> = F extends { (a: infer A): void } ? A : never;

// type SpliceOne<Union> = Exclude<Union, ExtractOne<Union>>;
// type ExtractOne<Union> = ExtractParm<UnionToSect<UnionToParm<Union>>>;

// type ToTuple<Union> = ToTupleRec<Union, []>;
// type ToTupleRec<Union, Rslt extends any[]> =
//     SpliceOne<Union> extends never ? [ExtractOne<Union>, ...Rslt]
//     : ToTupleRec<SpliceOne<Union>, [ExtractOne<Union>, ...Rslt]>
// ;

// type Test = ActionType<Store>

type Action<T extends { [key: string]: unknown }> = {
  type: keyof T extends string ? `set${Capitalize<keyof T>}` : never;
  payload: T[keyof T];
};

function themeReducer(state = { theme: 'dark' }, action: Action<typeof state>) {
  switch (action.type) {
    case 'setTheme': {
      return {
        ...state,
        theme: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export { store };
