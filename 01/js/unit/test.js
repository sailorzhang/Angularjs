/**
 * Created with JetBrains WebStorm.
 * User: Sailor
 * Date: 12-12-23
 * Time: 下午3:33
 * To change this template use File | Settings | File Templates.
 */
it("should show of angular binding",function(){
    expect(binding('qty*cost')).toEqual('$19.95');
    input("qty").enter("2");
    input("cost").enter("5.00");
    expect(binding("qty*cost")).toEqual("$10.00");
});

