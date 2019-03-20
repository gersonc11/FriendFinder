// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friends = [
    {
        "name":"Ahmed",
        "scores":[
            2,
            1,
            4,
            1,
            2,
            1,
            5,
            3,
            4,
            1
          ]
      },
      {
        "name":"John",
        "scores":[
            5,
            5,
            2,
            1,
            3,
            5,
            5,
            2,
            1,
            4
          ]
      },
      {
        "name":"Jack",
        "scores":[
            3,
            3,
            3,
            1,
            1,
            4,
            4,
            3,
            1,
            5
          ]
      }
      
      
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friends;