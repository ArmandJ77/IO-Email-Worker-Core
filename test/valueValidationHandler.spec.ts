import ValueValidationHandler from "../src/valueValidationHandler";
import DataPropertiesModel from "../src/models/dataPropertiesModel";
import InputDataModel from "../src/models/inputDataModel";
import * as chai from "chai";
import "mocha";
import {
  GivenAValidDataSet,
  GivenAnInValidDataSetWithMissingProperties,
  GivenAnInValidDataSetWithIncorrectlyNamedProperties,
  GivenAnInValidDataSetWithMissingInputDataValues,
  GivenAnInValidDataSetWithIncorrectEmailValues
} from "./testData/Data";

const expect = chai.expect;

const sut = "ValueValidation";

describe(sut, function() {
  describe("Given An InValid DataSet", function() {
    it("should return a list of validation failed responses where is required = true", function() {
      let leDataSet = GivenAnInValidDataSetWithMissingInputDataValues;

      let inputData = <InputDataModel>(<unknown>leDataSet.data.InputData);

      let dataProperties = <DataPropertiesModel>(
        (<unknown>leDataSet.data.DataTemplate)
      );

      let handler = new ValueValidationHandler();

      let results = handler.ValidateValues(
        dataProperties.Properties,
        inputData.Data
      );
      console.log(results.length);

      results.forEach(result => {
        expect(result.IsValid).to.equal(false);
      });
    });

    it("should return a list of validation failed responses where emails aren't valid", function() {
      let leDataSet = GivenAnInValidDataSetWithIncorrectEmailValues;

      let inputData = <InputDataModel>(<unknown>leDataSet.data.InputData);
      let dataProperties = <DataPropertiesModel>(
        (<unknown>leDataSet.data.DataTemplate)
      );

      let handler = new ValueValidationHandler();

      let results = handler.ValidateValues(
        dataProperties.Properties,
        inputData.Data
      );

      console.log(results.length);

      const testResults = results.filter(x => x.IsValid === false);
      expect(testResults.length).to.equal(4);

      testResults.forEach(result => {
        expect(result.Error).to.contain("email check failed");
      });
    });
  });
});
