class AccountPageController {
    constructor($location){
        this.modalWindowText='Вы уверенны, что хотите выйти?';
        this.$location=$location;
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