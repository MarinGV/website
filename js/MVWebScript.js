//---------- About_Myself page ----------

// This is for the toggle button(the bars) in navbar
$(document).ready(function(){
   $(".nv-bars").click(function(){
     $(".nv-toggle").toggle();
   });
});

// The use of .toggle() will apply an inline style (display: none)
// This will remove the style when the viewport passes in the laptop size and when maximise button is used.
$(window).resize(function(){
    if ($(document).outerWidth(true) < 1000 || $(window).outerWidth(true) == screen.width){
        $(".nv-toggle").removeAttr("style");
    }
});

// This is to change the icon in the navbar from bars to X
$(document).ready(function(){
    $(".nv-bars").click(function(){
        $("i").toggleClass("hid");
    });
});

// This is used for hiding the navbar while scrolling down and show when scrolling up.
let prevScrollpos = $(window).scrollTop();
$(window).scroll(function(){
    let currentScrollPos = $(window).scrollTop();
    if (prevScrollpos > currentScrollPos){
        $(".navbar").css("top","0");
    } else {
        $(".navbar").css("top","-50px");
    }
    prevScrollpos = currentScrollPos;

});



/*--------------------------------------------------------------------------*/



//---------- Skills page ----------

// These are for the Soft Skill buttons to switch content for every section
$(document).ready(function(){
    $('.showSingle-1').click(function(){
        $('.target-1').hide();
        $('.sk-sec3-'+$(this).attr('id')).show();
    });
});

$(document).ready(function(){
    $('.showSingle-2').click(function(){
        $('.target-2').hide();
        $('.sk-sec3-'+$(this).attr('id')).show();
    });
});

$(document).ready(function(){
    $('.showSingle-3').click(function(){
        $('.target-3').hide();
        $('.sk-sec3-'+$(this).attr('id')).show();
    });
});

$(document).ready(function(){
    $('.showSingle-4').click(function(){
        $('.target-4').hide();
        $('.sk-sec3-'+$(this).attr('id')).show();
    });
});

$(document).ready(function(){
    $('.showSingle-5').click(function(){
        $('.target-5').hide();
        $('.sk-sec3-'+$(this).attr('id')).show();
    });
});

$(document).ready(function(){
    $('.showSingle-6').click(function(){
        $('.target-6').hide();
        $('.sk-sec3-'+$(this).attr('id')).show();
    });
});

$(document).ready(function(){
    $('.showSingle-7').click(function(){
        $('.target-7').hide();
        $('.sk-sec3-'+$(this).attr('id')).show();
    });
});

$(document).ready(function(){
    $('.showSingle-8').click(function(){
        $('.target-8').hide();
        $('.sk-sec3-'+$(this).attr('id')).show();
    });
});

$(document).ready(function(){
    $('.showSingle-9').click(function(){
        $('.target-9').hide();
        $('.sk-sec3-'+$(this).attr('id')).show();
    });
});

$(document).ready(function(){
    $('.showSingle-10').click(function(){
        $('.target-10').hide();
        $('.sk-sec3-'+$(this).attr('id')).show();
    });
});

// This is to switch between the Soft Skills and Hard Skills sections
$(document).ready(function(){
    $('.showSingle-P').click(function(){
        $('.target-P').hide();
        $('.sk-sec'+$(this).attr('id')).show();
    });
});

// This is to hide the Hard Skill section without affecting the {display: grid}
$(document).ready(function(){
    $('.sk-sec4').hide();
});



/*--------------------------------------------------------------------------*/



//---------- Portfolio page -------

$(document).ready(function(){
  $(".pt-pj1-img").click(function(){
    $(".pt-pj1-ctn").toggle();
  });
});
$(document).ready(function(){
  $(".pt-pj2-img").click(function(){
    $(".pt-pj2-ctn").toggle();
  });
});
$(document).ready(function(){
  $(".pt-pj3-img").click(function(){
    $(".pt-pj3-ctn").toggle();
  });
});
$(document).ready(function(){
  $(".pt-pj4-img").click(function(){
    $(".pt-pj4-ctn").toggle();
  });
});
$(document).ready(function(){
  $(".pt-pj5-img").click(function(){
    $(".pt-pj5-ctn").toggle();
  });
});

$(document).ready(function(){
    $('.pt-pj1-ctn, .pt-pj2-ctn, .pt-pj3-ctn, .pt-pj4-ctn, .pt-pj5-ctn').hide();
});


/*--------------------------------------------------------------------------*/



//---------- Converter page -------

function lengthConverter(source,valNum) {
  valNum = parseFloat(valNum);
  let inputFeet = document.getElementById("inputFeet");
  let inputMeters = document.getElementById("inputMeters");
  let inputInches = document.getElementById("inputInches");
  let inputcm = document.getElementById("inputCentimeters");
  let inputKilometers = document.getElementById("inputKilometers");
  let inputMiles = document.getElementById("inputMiles");

  if (source=="inputFeet") {
    inputMeters.value=(valNum/3.2808).toFixed(2);
    inputInches.value=(valNum*12).toFixed(2);
    inputcm.value=(valNum/0.032808).toFixed();
    inputKilometers.value=(valNum/3280.8).toFixed(5);
    inputMiles.value=(valNum*0.00018939).toFixed(5);
  }
  if (source=="inputMeters") {
    inputFeet.value=(valNum*3.2808).toFixed(2);
    inputInches.value=(valNum*39.370).toFixed(2);
    inputcm.value=(valNum/0.01).toFixed();
    inputKilometers.value=(valNum/1000).toFixed(5);
    inputMiles.value=(valNum*0.00062137).toFixed(5);
  }
  if (source=="inputInches") {
    inputFeet.value=(valNum*0.083333).toFixed(3);
    inputMeters.value=(valNum/39.370).toFixed(3);
    inputcm.value=(valNum/0.39370).toFixed(2);
    inputKilometers.value=(valNum/39370).toFixed(6);
    inputMiles.value=(valNum*0.000015783).toFixed(6);
  }
  if (source=="inputCentimeters") {
    inputFeet.value=(valNum*0.032808).toFixed(3);
    inputMeters.value=(valNum/100).toFixed(3);
    inputInches.value=(valNum*0.39370).toFixed(2);
    inputKilometers.value=(valNum/100000).toFixed(6);
    inputMiles.value=(valNum*0.0000062137).toFixed(6);
  }
  if (source=="inputKilometers") {
    inputFeet.value=(valNum*3280.8).toFixed();
    inputMeters.value=(valNum*1000).toFixed();
    inputInches.value=(valNum*39370).toFixed();
    inputcm.value=(valNum*100000).toFixed();
    inputMiles.value=(valNum*0.62137).toFixed(2);
  }
  if (source=="inputMiles") {
    inputFeet.value=(valNum*5280).toFixed();
    inputMeters.value=(valNum/0.00062137).toFixed();
    inputInches.value=(valNum*63360).toFixed();
    inputcm.value=(valNum/0.0000062137).toFixed();
    inputKilometers.value=(valNum/0.62137).toFixed(2);
  }
}

function weightConverter(source,valNum) {
  valNum = parseFloat(valNum);
  let inputPounds = document.getElementById("inputPounds");
  let inputKilograms = document.getElementById("inputKilograms");
  let inputOunces = document.getElementById("inputOunces");
  let inputGrams = document.getElementById("inputGrams");
  let inputStones = document.getElementById("inputStones");
  let inputMilligrams = document.getElementById("inputMilligrams");

  if (source=="inputPounds") {
    inputKilograms.value=(valNum/2.2046).toFixed(2);
    inputOunces.value=(valNum*16).toFixed(2);
    inputGrams.value=(valNum/0.0022046).toFixed();
    inputStones.value=(valNum*0.071429).toFixed(3);
    inputMilligrams.value=(valNum*453592.37).toFixed(2);
  }
  if (source=="inputKilograms") {
    inputPounds.value=(valNum*2.2046).toFixed(2);
    inputOunces.value=(valNum*35.274).toFixed(2);
    inputGrams.value=(valNum*1000).toFixed();
    inputStones.value=(valNum*0.1574).toFixed(3);
    inputMilligrams.value=(valNum*1000000).toFixed();
  }
  if (source=="inputOunces") {
    inputPounds.value=(valNum*0.062500).toFixed(4);
    inputKilograms.value=(valNum/35.274).toFixed(4);
    inputGrams.value=(valNum/0.035274).toFixed(1);
    inputStones.value=(valNum*0.0044643).toFixed(4);
    inputMilligrams.value=(valNum*28349.5231).toFixed(2);
  }
  if (source=="inputGrams") {
    inputPounds.value=(valNum*0.0022046).toFixed(4);
    inputKilograms.value=(valNum/1000).toFixed(4);
    inputOunces.value=(valNum*0.035274).toFixed(3);
    inputStones.value=(valNum*0.00015747).toFixed(5);
    inputMilligrams.value=(valNum*1000).toFixed();
  }
  if (source=="inputStones") {
    inputPounds.value=(valNum*14).toFixed(1);
    inputKilograms.value=(valNum/0.15747).toFixed(1);
    inputOunces.value=(valNum*224).toFixed();
    inputGrams.value=(valNum/0.00015747).toFixed();
    inputMilligrams.value=(valNum*6350300).toFixed();
  }
  if (source=="inputMilligrams") {
    inputPounds.value=(valNum*0.0000022).toFixed(7);
    inputKilograms.value=(valNum*0.000001).toFixed(6);
    inputOunces.value=(valNum*0.00003527).toFixed(8);
    inputGrams.value=(valNum*0.001).toFixed(3);
    inputStones.value=(valNum*0.00000015747).toFixed(9);
  }

}

function currencyConverter(source,valNum){
  valNum = parseFloat(valNum);
  let inputGBP = document.getElementById("inputGBP");
  let inputUSD = document.getElementById("inputUSD");
  let inputEUR = document.getElementById("inputEUR");
  let inputCHF = document.getElementById("inputCHF");
  let inputJPY = document.getElementById("inputJPY");
  let inputCNY = document.getElementById("inputCNY");

  if (source=="inputGBP") {
    inputUSD.value=(valNum*1.23).toFixed(2);
    inputEUR.value=(valNum*1.17).toFixed(2);
    inputCHF.value=(valNum*1.22).toFixed(2);
    inputJPY.value=(valNum*161.05).toFixed(2);
    inputCNY.value=(valNum*8.22).toFixed(2);
  }
  if (source=="inputUSD") {
    inputGBP.value=(valNum*0.81).toFixed(2);
    inputEUR.value=(valNum*0.95).toFixed(2);
    inputCHF.value=(valNum*0.99).toFixed(2);
    inputJPY.value=(valNum*130.55).toFixed(2);
    inputCNY.value=(valNum*6.67).toFixed(2);
  }
  if (source=="inputEUR") {
    inputUSD.value=(valNum*1.06).toFixed(2);
    inputGBP.value=(valNum*0.85).toFixed(2);
    inputCHF.value=(valNum*1.04).toFixed(2);
    inputJPY.value=(valNum*137.74).toFixed(2);
    inputCNY.value=(valNum*7.03).toFixed(2);
  }
  if (source=="inputCHF") {
    inputUSD.value=(valNum*1.01).toFixed(2);
    inputEUR.value=(valNum*0.96).toFixed(2);
    inputGBP.value=(valNum*0.82).toFixed(2);
    inputJPY.value=(valNum*132).toFixed();
    inputCNY.value=(valNum*6.74).toFixed(2);
  }
  if (source=="inputJPY") {
    inputUSD.value=(valNum*0.0077).toFixed(4);
    inputEUR.value=(valNum*0.0073).toFixed(4);
    inputCHF.value=(valNum*0.0076).toFixed(4);
    inputGBP.value=(valNum*0.0062).toFixed(4);
    inputCNY.value=(valNum*0.051).toFixed(3);
  }
  if (source=="inputCNY") {
    inputUSD.value=(valNum*0.15).toFixed(2);
    inputEUR.value=(valNum*0.14).toFixed(2);
    inputCHF.value=(valNum*0.15).toFixed(2);
    inputJPY.value=(valNum*19.58).toFixed(2);
    inputGBP.value=(valNum*0.12).toFixed(2);
  }
}

$(document).ready(function(){
    $('.showSingle-s').click(function(){
        $('.target-s').hide();
        $('.container-'+$(this).attr('id')).show();
    });
});

$(document).ready(function(){
    $('.container-W, .container-C').hide();
});



/*--------------------------------------------------------------------------*/

// This is for the back button that is used in the portfolio projects
$(document).ready(function(){
    $(".back-btn").click(function(){
        window.history.back();
    });
});

/*--------------------------------------------------------------------------*/



//---------- QR Reader page -------

function decodeOnce(codeReader, selectedDeviceId) {
    codeReader.decodeFromInputVideoDevice(selectedDeviceId, 'video').then((result) => {
        console.log(result)
        document.getElementById('result').textContent = result.text
    }).catch((err) => {
        console.error(err)
        document.getElementById('result').textContent = err
        })
}

function decodeContinuously(codeReader, selectedDeviceId) {
    codeReader.decodeFromInputVideoDeviceContinuously(selectedDeviceId, 'video', (result, err) => {
        if (result) {
            // properly decoded qr code
            console.log('Found QR code!', result)
            document.getElementById('result').textContent = result.text
        }

        if (err) {
            // As long as this error belongs into one of the following categories
            // the code reader is going to continue as excepted. Any other error
            // will stop the decoding loop.
            //
            // Excepted Exceptions:
            //
            //  - NotFoundException
            //  - ChecksumException
            //  - FormatException

            if (err instanceof ZXing.NotFoundException) {
                console.log('No QR code found.')
            }

            if (err instanceof ZXing.ChecksumException) {
                console.log('A code was found, but it\'s read value was not valid.')
            }

            if (err instanceof ZXing.FormatException) {
                console.log('A code was found, but it was in a invalid format.')
            }
        }
    })
}

window.addEventListener('load', function () {
    let selectedDeviceId;
    const codeReader = new ZXing.BrowserQRCodeReader()
    console.log('ZXing code reader initialized')

    codeReader.getVideoInputDevices()
    .then((videoInputDevices) => {
        const sourceSelect = document.getElementById('sourceSelect')
        selectedDeviceId = videoInputDevices[0].deviceId
        if (videoInputDevices.length >= 1) {
            videoInputDevices.forEach((element) => {
                const sourceOption = document.createElement('option')
                sourceOption.text = element.label
                sourceOption.value = element.deviceId
                sourceSelect.appendChild(sourceOption)
            })

            sourceSelect.onchange = () => {
                selectedDeviceId = sourceSelect.value;
            };

            const sourceSelectPanel = document.getElementById('sourceSelectPanel')
            sourceSelectPanel.style.display = 'block'
        }

        document.getElementById('startButton').addEventListener('click', () => {

            const decodingStyle = document.getElementById('decoding-style').value;

            if (decodingStyle == "once") {
                decodeOnce(codeReader, selectedDeviceId);
            } else {
                decodeContinuously(codeReader, selectedDeviceId);
            }

            console.log(`Started decode from camera with id ${selectedDeviceId}`)
        })

        document.getElementById('resetButton').addEventListener('click', () => {
            codeReader.reset()
            document.getElementById('result').textContent = '';
            console.log('Reset.')
        })

    })

    .catch((err) => {
        console.error(err)
        })
})



/*--------------------------------------------------------------------------*/



//---------- Calculator page ----------
// Keep it at the bottom of the document. The way it behaves will affect any
// function put under it


class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()
  }

  clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
      this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
  }

  compute() {
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      case '*':
        computation = prev * current
        break
      case '÷':
        computation = prev / current
        break
      default:
        return
    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText =
      this.getDisplayNumber(this.currentOperand)
    if (this.operation != null) {
      this.previousOperandTextElement.innerText =
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    } else {
      this.previousOperandTextElement.innerText = ''
    }
  }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

equalsButton.addEventListener('click', button => {
  calculator.compute()
  calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
  calculator.clear()
  calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
  calculator.delete()
  calculator.updateDisplay()
})

document.addEventListener('keydown', function (event) {
  let patternForNumbers = /[0-9]/g;
  let patternForOperators = /[+\-*\/]/g
  if (event.key.match(patternForNumbers)) {
    event.preventDefault();
    calculator.appendNumber(event.key)
    calculator.updateDisplay()
  }
  if (event.key === '.') {
    event.preventDefault();
    calculator.appendNumber(event.key)
    calculator.updateDisplay()
  }
  if (event.key.match(patternForOperators)) {
    event.preventDefault();
    calculator.chooseOperation(event.key)
    calculator.updateDisplay()
  }
  if (event.key === 'Enter' || event.key === '=') {
    event.preventDefault();
    calculator.compute()
    calculator.updateDisplay()
  }
  if (event.key === "Backspace") {
    event.preventDefault();
    calculator.delete()
    calculator.updateDisplay()
  }
  if (event.key == 'Delete') {
    event.preventDefault();
    calculator.clear()
    calculator.updateDisplay()
  }

});




