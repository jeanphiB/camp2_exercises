const getBrands = require("../get_brands");

describe("Brands: test data validity", function() {
  test("brands must contain uuid for [id]", done => {
    const result = {
      json : function(currentRows) {
        expect(currentRows[0].id).toEqual(expect.stringMatching("^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$"));
        done();
      }
    };

    getBrands(null, result);
  });

  test("Brands must contain text for [title]", done => {
    const result = {
      json : function(currentRows) {
        expect(currentRows[0].title).toEqual(expect.stringMatching("^[^\x00-\x1f]*$"));
        done();
      }
    };

    getBrands(null, result);
  });
});

describe("Brands: test data rows number", function() {
  test("brands must contain more than 1 rows", done => {
    const result = {
      json : function(currentRows) {
        expect(currentRows.length).toBeGreaterThan(1);
        done();
      }
    };

    getBrands(null, result);
  });
});
