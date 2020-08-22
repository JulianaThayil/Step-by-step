import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from "./NutritionInfo.modules.scss";
import PropTypes, { array } from "prop-types";
import Chip from '@material-ui/core/Chip';

//<Chip color="secondary" label="Basic" />
export default function NutritionInfo({ ingredients, title, serves }) {
  const APP_ID = "1ffc8942";
  const API_KEY = "5927b1f898a3a49c21cb31ef70753d02";
  var elements = [];

  ingredients &&
    ingredients.map((ingredient) =>
      elements.push(`${ingredient.amount}` + " " + `${ingredient.name}`)
    );

  const [nutrients, setNutrients] = useState({
    calories: "",
    FAT: "",
    FASAT: "",
    CHOLE: "",
    NA: "",
    FIBTG: "",
    SUGAR: "",
    PROCNT: "",
    CA: "",
    FE: "",
    VITA_RAE: "",
    VITC: "",
    dailyFAT:"",
    dailyFASAT:"",
    dailyCHOLE:"",
    dailyNa:"",
    dailyFIBTG:""
  });

  useEffect(() => {
    const jsonReq = {
      title: { title },
      yield: { serves },
      ingr: [...elements],
    };
    const headers = {
      "Content-Type": "application/json",
    };
    axios
      .post(
        `https://api.edamam.com/api/nutrition-details?app_id=${APP_ID}&app_key=${API_KEY}`,
        jsonReq,
        {
          headers: headers,
        }
      )
      .then((res) => {
        //console.log(res.data.totalNutrients['FAT'].quantity);
        console.log(res.data);
        setNutrients({
          ...nutrients,
          calories: res.data.calories,
          FAT: res.data.totalNutrients["FAT"].quantity.toFixed(3),
          FASAT: res.data.totalNutrients["FASAT"].quantity.toFixed(3),
          CHOLE: res.data.totalNutrients["CHOLE"].quantity.toFixed(3),
          NA: res.data.totalNutrients["NA"].quantity.toFixed(3),
          FIBTG: res.data.totalNutrients["FIBTG"].quantity.toFixed(3),
          SUGAR: res.data.totalNutrients["SUGAR"].quantity.toFixed(3),
          PROCNT: res.data.totalNutrients["PROCNT"].quantity.toFixed(3),
          CA: res.data.totalNutrients["CA"].quantity.toFixed(3),
          FE: res.data.totalNutrients["FE"].quantity.toFixed(3),
          VITA_RAE:res.data.totalNutrients["VITA_RAE"].quantity.toFixed(3),
          VITC:res.data.totalNutrients["VITC"].quantity.toFixed(3),

          dailyFAT: res.data.totalDaily["FAT"].quantity.toFixed(2),
          dailyFASAT: res.data.totalDaily["FASAT"].quantity.toFixed(2),
          dailyCHOLE: res.data.totalDaily["CHOLE"].quantity.toFixed(2),
          dailyNa: res.data.totalDaily["NA"].quantity.toFixed(2),
          dailyFIBTG: res.data.totalDaily["FIBTG"].quantity.toFixed(2),

        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {nutrients && (
        <div class="nutrifacts-html">
          <h2>Nutrition Facts</h2>

          <div class="separator"></div>
          <table>
            <tr>
              <td colspan="2">
                <strong>Amount Per Serving</strong>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Calories</strong>
              </td>
              <td class="align-text-right">{nutrients.calories}</td>
            </tr>
            <tr>
              <td></td>
              <td class="align-text-right">
                % <strong>Daily Value*</strong>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Total Fat </strong>
                {nutrients.FAT} g{" "}
              </td>
              <td class="align-text-right">{nutrients.dailyFAT}%</td>
            </tr>
            <tr>
              <td>Saturated Fat {nutrients.FASAT} g</td>
              <td class="align-text-right">{nutrients.FASAT}%</td>
            </tr>
            
            <tr>
              <td>
                <strong>Cholesterol</strong> {nutrients.CHOLE} mg
              </td>
              <td class="align-text-right">{nutrients.dailyCHOLE}%</td>
            </tr>
            <tr>
              <td>
                <strong>Sodium</strong> {nutrients.NA} mg
              </td>
              <td class="align-text-right">{nutrients.dailyNa}%</td>
            </tr>
            <tr>
              <td>Dietary Fiber {nutrients.FIBTG} g</td>
              <td class="align-text-right">{nutrients.dailyFIBTG}%</td>
            </tr>
            <tr>
              <td>Sugars {nutrients.SUGAR} g</td>
              <td></td>
            </tr>
            <tr>
              <td>
                <strong>Protein</strong> {nutrients.PROCNT} g
              </td>
              <td></td>
            </tr>
          </table>
          <div class="separator"></div>
          <table>
            <tr>
              <td>Vitamin A</td>
              <td class="align-text-right">{nutrients.VITA_RAE} µg</td>
              <td>• Vitamin C</td>
              <td class="align-text-right">{nutrients.VITC} mg</td>
            </tr>
            <tr>
              <td>Calcium</td>
              <td class="align-text-right">{nutrients.CA} mg</td>
              <td>• Iron</td>
              <td class="align-text-right">{nutrients.FE} mg</td>
            </tr>
          </table>
          <div class="info">
            *Percent Daily Values are based on a 2,000 Calorie Diet. Your daily
            values may be higher or lower depending on your calorie needs
          </div>
        </div>
      )}
    </div>
  );
}

NutritionInfo.propTypes = {
  ingredients: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  serves: PropTypes.number.isRequired,
};
