class AccountPageController {
    constructor(){
        this.modalWindowText='Вы уверенны, что хотите выйти?';
    }
    exitAccount() {
        this.showModalWindow = true;
    }

    addNewProfession() {
        console.log('addNewProfession')
    }
    AllProfession() {
    	this.$location.path('/prof-all');
    }
}

export default AccountPageController