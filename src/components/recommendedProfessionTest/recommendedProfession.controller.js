class RecommendedProfessionController {
    constructor($location, $rootScope){
        this.location=$location;
        this.$rootScope=$rootScope;
        this.exitToLocation=('/account-page');
        this.modalWindowText=`Вы ответили не на все вопросы! Желаете закончить прохождение теста без получения результатa?`;
        this.recommendedProfessionArray=this.$rootScope.recommendedProfession;
    }
    getResult(){
        let resultOfRecommendedTest=0;
        let resultsOfTestArray=[];
        for(let i in this) {
            if (typeof(this[i]) === 'number') {
                resultsOfTestArray.push(this[i]);
            }
        }
         if(resultsOfTestArray.length<30){
             this.showModalWindow=true;
         }
         else{
             resultOfRecommendedTest=resultsOfTestArray.reduce((x,y)=>x+y);
             if (resultOfRecommendedTest>=37) {
                 this.recommendedProfessionArray.push('строитель', 'врач');
             }
             else if(resultOfRecommendedTest>=25&&resultOfRecommendedTest<=36) {
                 this.recommendedProfessionArray.push('врач', 'учитель');
             }
             else if(resultOfRecommendedTest>=13&&resultOfRecommendedTest<=24) {
                 this.recommendedProfessionArray.push('учитель', 'повар');
             }
             else{
                     this.recommendedProfessionArray.push('повар', 'дизайнер');
             }
             this.location.path('/account-page');
         }
    }
}

export default RecommendedProfessionController