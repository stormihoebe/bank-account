//global variables
var name
var initialDeposit
var balance
var deposit
var withdrawal
var newBankAccount
//constructor for new account balance
function AccountTotal(balance, deposit, withdrawal){
	this.balance = balance;
	this.deposit = deposit;
	this.withdrawal = withdrawal;
};
//prototype to calculate total balance and display balance
AccountTotal.prototype.totalBalance = function() {
	if (!withdrawal) {
		withdrawal=0;
	}
	if (!deposit) {
		deposit = 0;
	}
	if (initialDeposit) {
		balance += deposit;
		balance -= withdrawal
		$("#currentBalance").text(balance);
	} else {
		//require account befor deposit or withdraw
		alert("Please create an account before depositing or withdrawing");
	};
};
//begin JQ
$(function () {
//submit new account form
	$("form#createAccount").submit(function(event){
		event.preventDefault();
		name = $("input#name").val();
		initialDeposit = parseInt($("input#initialDeposit").val());
		balance = initialDeposit
		$("#accountHolder").text(name+ "'s");
		$("#currentBalance").text(balance);
	});
//submit withdraw or deposit form
	$("form#depositWithdrawal").submit(function(event){
		event.preventDefault();
		deposit = parseInt($("input#deposit").val());
		withdrawal = parseInt($("input#withdrawal").val());
		newBankAccount = new AccountTotal(balance, deposit, withdrawal);
		newBankAccount.totalBalance();
	});
});
