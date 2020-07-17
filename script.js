function validarCadastro(){

    var layout = document.querySelector('#form')
    var name = document.querySelector('#name').value 

    var age = document.querySelector('#age')
        age = Number(age.value)

    var height = document.querySelector('#height')
    height = Number(height.value) 

    var weight = document.querySelector('#weight')
    weight = Number(weight.value)

    if (name == '' || age == '' || height == '' || weight == ''){

        alert('Erro!!! Favor preencher o campo.')

    } else {

        var imcCalc = function(weight, height){return  weight / ((height / 100) * (height / 100)) }
        var imc = imcCalc(weight, height)

        var gender = document.querySelector('#gender')
        var genderFinal = gender.options[gender.selectedIndex].text

        var activityLevel = document.querySelector('#activity-level')
        var activityLevelValue = activityLevel.options[activityLevel.selectedIndex].value
        var activityLevelText = activityLevel.options[activityLevel.selectedIndex].text

        let tmb
        if (tmb == (genderFinal === 'female')){
            // tmb woman
            tmb = (655 + (9.6 * weight) + (1.8 * height) - (4.7 * age))

        } else {
            // tmb man
            tmb = (66 + (13.7 * weight) + (5 * height) - (6.8 * age))

        }
    
        var maintenance = Math.round(tmb * Number(activityLevelValue))
        var loseWeight = maintenance - 450
        var gainWeight = maintenance + 450

        layout.innerHTML = `<div 
        style="margin: 80px auto 20px auto;
        width: 550px;
        padding: 20px;
        background-color: white;
        color: black;
        border: none;
        border-radius: 8px;
        box-shadow: 2px 2px 15px #0AFF00;
        ">
            <p style="font-size:20px; line-height:1.5;">
            Nome: ${name}<br>
            Sexo: ${genderFinal}<br>
            Idade: ${age} anos<br>
            Altura: ${height} cm<br>
            Peso: ${weight} kg<br>
            Nível de atividade: ${activityLevelText}<br><br>
            </p>
    
            <p style="text-align: center; font-size: 20px; font-weight: bold;">
                IMC<br>
                <span style="color: red;">${imc.toFixed(1)} kg/m²</span>
            </p>
            <table style="border: 1px solid black; margin: 15px auto 15px 95px; padding: 10px;">
                <tr>
                    <th>Resultado</th>
                    <th>Situação</th>
                </tr>
                <tr>
                    <td>Abaixo de 17</td>
                    <td>Muito baixo do peso</td>
                </tr>
                <tr>
                    <td>Entre 17 e 18,49</td>
                    <td>Abaixo do peso</td>
                </tr>
                <tr>
                    <td>Entre 18,50 e 24,99</td>
                    <td>Peso normal</td>
                </tr>
                <tr>
                    <td>Entre 25 e 29,99</td>
                    <td>Acima do peso</td>
                </tr>
                <tr>
                    <td>Entre 30 e 34,99</td>
                    <td>Obesidade I</td>
                </tr>
                <tr>
                    <td>Entre 35 e 39,99</td>
                    <td>Obesidade II (severa)</td>
                </tr>
                <tr>
                    <td>Acima 40</td>
                    <td>Obesidade III (mórbida)</td>
                </tr>

            </table>
           
        
            <p style="font-size:20px; line-height:1.5;">
            Metabolismo basal: <strong style="color:blue">${tmb.toFixed(3)} Kcal</strong> Kcal<br>
            Para manter o peso, consumir em média <strong style="color:orange">${maintenance.toFixed(3)} Kcal</strong><br>
            Para perder peso, consumir em média <strong style="color:red">${loseWeight.toFixed(3)} Kcal</strong><br>
            Para ganhar peso, consumir em média <strong style="color:green">${gainWeight.toFixed(3)} Kcal</strong>
            </p>
        </div>`
    }
}

