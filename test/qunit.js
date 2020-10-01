
QUnit.test("Input Check", function (assert) {
     var result = cal(65.0275, 1.85)
     assert.equal(result , "19", "BMI should be 19");
});

QUnit.test("Input validation weight", function (assert){
      var result = cal (-1,1)
      assert.equal(result, "-1","weight cannot be negative")
  });

  QUnit.test("Input validation height" ,function (assert){
     var result = cal(88,-1.8).toFixed(2)
     assert.equal(result,"27.16", "height cannot be negative")
  })