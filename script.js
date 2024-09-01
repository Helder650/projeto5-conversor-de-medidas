let meters = parseFloat(prompt("Digite um valor em metros"))
let unit = prompt("Agora, selecione uma opção abaixo para converter:\n" +
    "1 - milímetro (mm)\n" +
    "2 - centrímetro (cm)\n" +
    "3 - decímetro (dm)\n" +
    "4 - decâmetro (dam)\n" +
    "5 - hectômetro (hm)\n" +
    "6 - quilômetro (km)")


switch (unit) {
    case "1":
        resultado = meters * 1000
        alert(`${meters} metros equivale a ${resultado} mm`)
        break
    case "2":
        resultado = meters * 100
        alert(`${meters} metros equivale a ${resultado} cm`)
        break
    case "3":
        resultado = meters * 10
        alert(`${meters} metros equivale a ${resultado} dm`)
        break
    case "4":
        resultado = meters / 10
        alert(`${meters} metros equivale a ${resultado} dam`)
        break
    case "5":
        resultado = meters / 100
        alert(`${meters} metros equivale a ${resultado} hm`)
        break
    case "6":
        resultado = meters / 1000;
        alert(`${meters} metros equivale a ${resultado} km`)
        break
    default:
        alert("Opção inválida!")
        break
}