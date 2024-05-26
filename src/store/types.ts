


type Split<T extends string[]> = 
    T extends [string, ...infer Tail] ? 
        Tail extends [] ? 
            T[0] :
            Tail extends string[] ?
        T[0] | Split<Tail> : never :
    never


type E = Split<['a','b']>