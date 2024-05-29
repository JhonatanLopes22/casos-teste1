const ValidarNome = require("./nome")

// TESTE 10

test ('Validação do Nome com Letras', ()=>{
    expect(ValidarNome("João")).toBe(true)
})

// TESTE 11

test ('Validação do Nome com Numeros', ()=>{
    expect(ValidarNome("Jhonatan1")).toBe(false)
})
