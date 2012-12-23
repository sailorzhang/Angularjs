/**
 * Created with JetBrains WebStorm.
 * User: Sailor
 * Date: 12-12-23
 * Time: 下午4:25
 * To change this template use File | Settings | File Templates.
 */
describe('PhoneCat controllers',function(){
    describe('PhoneListCtrl',function(){
        it('should create "phones" model with 3 phones',function(){
            var scope = {},
            ctrl = new PhoneListCtrl(scope);
            expect(scope.phones.length).toBe(3);
        });
    });
});
