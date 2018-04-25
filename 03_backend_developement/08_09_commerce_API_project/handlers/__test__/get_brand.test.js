const getBrand = require("../get_brand");

const recordOk = {
  id: "cbe1c32e-faa9-4911-ad8e-4422f2b627c9",
  title: "8C+"
};

describe("Brand: test data validity", function() {
  test(`brand must contain uuid '${recordOk.id}'`, done => {
    const request = {
      params : {
        id : recordOk.id
      }
    };

    const result = {
      json : function(row) {
        expect(row.id).toBe(request.params.id);
        done();
      }
    };

    getBrand(request, result);
  });

  test(`brand must contain value '${recordOk.title}' for uuid '${recordOk.id}'`, done => {
    const request = {
      params : {
        id : recordOk.id
      }
    };

    const result = {
      json : function(row) {
        expect(row.title).toBe(recordOk.title);
        done();
      }
    };

    getBrand(request, result);
  });
});

describe("Brand: test data rows number", function() {
  test("get brand for 1 id must return 1 row max", done => {
    const request = {
      params : {
        id : recordOk.id
      }
    };

    const result = {
      json : function(row) {
        expect(row).toEqual(recordOk);
        done();
      }
    };

    getBrand(request, result);
  });
});

describe("Brand: test data rows number", function() {
  test("get brand for a bad uuid", done => {
    const request = {
      params : {
        id : "cbe1c32e"
      }
    };

    const result = {
      json : function(row) {
        expect(row.name).toBe("error");
        done();
      }
    };

    getBrand(request, result);
  });

  test("get brand for an unknown id", done => {
    const request = {
      params : {
        id : recordOk.id.substring(0, recordOk.id.length - 1) + "0"
      }
    };

    const result = {
      json : function(row) {
        expect(row.message).toBe("No data returned from the query.");
        done();
      }
    };

    getBrand(request, result);
  });
});
