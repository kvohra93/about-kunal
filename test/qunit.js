
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

  QUnit.test ("BMI category Overweight ", function(assert) {
     var result = cal(86,1.85).toFixed(1)
     assert.equal(result, "25.1", "BMI over 25 means you are over weight")
  })

  QUnit.test("BMI category Underweight", function (assert){
   var result = cal(63,1.85).toFixed(1)
   assert.equal(result,"18.4","BMI under 18.5 means you are under weight")
  })