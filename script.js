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
        result = meters * 1000
        alert(`${meters} metros equivale a ${result} mm`)
        break
    case "2":
        result = meters * 100
        alert(`${meters} metros equivale a ${result} cm`)
        break
    case "3":
        result = meters * 10
        alert(`${meters} metros equivale a ${result} dm`)
        break
    case "4":
        result = meters / 10
        alert(`${meters} metros equivale a ${result} dam`)
        break
    case "5":
        result = meters / 100
        alert(`${meters} metros equivale a ${result} hm`)
        break
    case "6":
        result = meters / 1000;
        alert(`${meters} metros equivale a ${result} km`)
        break
    default:
        alert("Opção inválida!")
        break
}
