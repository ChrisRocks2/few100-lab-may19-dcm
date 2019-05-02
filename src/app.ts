let tipAmounts: NodeList;
//let inputBill: Node;

const billAmtId: HTMLInputElement = <HTMLInputElement>document.getElementById("billAmount");
const inputBill = document.getElementById("bill") as HTMLInputElement;
const tipPercentId: HTMLInputElement = <HTMLInputElement>document.getElementById("tipPercent");
const amtTipId: HTMLInputElement = <HTMLInputElement>document.getElementById("tipAmt");
const totalId: HTMLInputElement = <HTMLInputElement>document.getElementById("total");
const youAreTipping: HTMLInputElement = <HTMLInputElement>document.getElementById("tipAmount");
const button10: HTMLElement = <HTMLInputElement>document.getElementById("b10");
const button15: HTMLElement = <HTMLInputElement>document.getElementById("b15");
const button20: HTMLElement = <HTMLInputElement>document.getElementById("b20");
let percent = "20%";
let tip: number = .20;

export function runApp() {
    tipAmounts = document.querySelectorAll('.buttons');
    inputBill.addEventListener('keyup', handleInput);
    let currentButton = 1;
    tipAmounts.forEach((tip: HTMLDivElement) => {
        tip.addEventListener('click', handleClick);
    })
}

function handleInput() {
    const cost = document.getElementById("bill") as HTMLInputElement;
    if (inputBill.valueAsNumber < 0) {
        const emptyString = "";
        inputBill.style.border = "thick solid red";
        billAmtId.value = "Bill Amount: $" + emptyString;
        amtTipId.value = "Amount of Tip: $" + emptyString;
        totalId.value = "Total to be Paid: $" + emptyString;
    } else {
        inputBill.style.border = "thin solid gray";
        if (cost.value !== "") {
            var calculatedTip = calculateTip(tip, cost.valueAsNumber);
            billAmtId.value = "Bill Amount: $" + parseFloat(cost.value).toFixed(2).toString();
            amtTipId.value = "Amount of Tip: $" + calculatedTip.toFixed(2).toString();
            totalId.value = "Total to be Paid: $" + calculateTotal(calculatedTip, cost.valueAsNumber).toFixed(2).toString();
        }
    }

}

function handleClick() {
    //did they win
    //console.log("you click on ", this);
    const clickedButton = this;
    let yourTip = "You are tipping "
    switch (clickedButton.id) {
        case "b10":
            tip = .10;
            percent = "10%";
            button10.setAttribute('disabled', 'disabled');
            button15.removeAttribute('disabled');
            button20.removeAttribute('disabled');
            break;
        case "b15":
            tip = .15;
            percent = "15%";
            button15.setAttribute('disabled', 'disabled');
            button10.removeAttribute('disabled');
            button20.removeAttribute('disabled');
            break;
        case "b20":
            tip = .20;
            percent = "20%";
            button20.setAttribute('disabled', 'disabled');
            button15.removeAttribute('disabled');
            button10.removeAttribute('disabled');
            break;
        default:
            tip = .20;
            percent = "20%";
            button20.setAttribute('disabled', 'disabled');
            button15.removeAttribute('disabled');
            button10.removeAttribute('disabled');
            break;
    }
    youAreTipping.value = yourTip + percent;
    tipPercentId.value = "Tip Percentage: " + percent;
    handleInput();
}

function calculateTip(tip: number, cost: number) {
    return tip * cost;
}

function calculateTotal(tip: number, cost: number) {
    return (tip + cost);
}