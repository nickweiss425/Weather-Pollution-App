import "./PollutantTable.css";

export const PollutantTable = ({ pollutantData }) => {
    const COConc = pollutantData.list[0].components['co']
    const COCondition = COConc >= 0 && COConc < 4400 ? "Good" : COConc >= 4400 && COConc < 9400 ? "Fair" : COConc >= 9400 && COConc < 12400 ? "Moderate" : COConc >= 12400 && COConc < 15400 ? "Poor" : "Very-Poor";

    const NO2Conc = pollutantData.list[0].components['no2'];
    const NO2Condition = NO2Conc >= 0 && NO2Conc < 40 ? "Good" : NO2Conc >= 40 && NO2Conc < 70 ? "Fair" : NO2Conc >= 70 && NO2Conc < 150 ? "Moderate" : NO2Conc >= 150 && NO2Conc < 200 ? "Poor" : "Very-Poor";
    
    const O3Conc = pollutantData.list[0].components['o3'];
    const O3Condition = O3Conc >= 0 && O3Conc < 60 ? "Good" : O3Conc >= 60 && O3Conc < 100 ? "Fair" : O3Conc >= 100 && O3Conc < 140 ? "Moderate" : O3Conc >= 140 && O3Conc < 180 ? "Poor" : "Very-Poor";

    const SO2Conc = pollutantData.list[0].components['so2'];
    const SO2Condition = SO2Conc >= 0 && SO2Conc < 20 ? "Good" : SO2Conc >= 20 && SO2Conc < 80 ? "Fair" : SO2Conc >= 80 && SO2Conc < 250 ? "Moderate" : SO2Conc >= 250 && SO2Conc < 350 ? "Poor" : "Very-Poor";

    const PM25Conc = pollutantData.list[0].components['pm2_5'];
    const PM25Condition = PM25Conc >= 0 && PM25Conc < 10 ? "Good" : PM25Conc >= 10 && PM25Conc < 25 ? "Fair" : PM25Conc >= 25 && PM25Conc < 50 ? "Moderate" : PM25Conc >= 50 && PM25Conc < 75 ? "Poor" : "Very-Poor";

    const PM10Conc = pollutantData.list[0].components['pm10'];
    const PM10Condition = PM10Conc >= 0 && PM10Conc < 20 ? "Good" : PM10Conc >= 20 && PM10Conc < 50 ? "Fair" : PM10Conc >= 50 && PM10Conc < 100 ? "Moderate" : PM10Conc >= 100 && PM10Conc < 200 ? "Poor" : "Very-Poor";




  return (
    <div className="pollutant-table-container">
      <table className="pollutant-table">
        <thead className="table-headers">
          <tr>
            <th>Pollutant</th>
            <th>Concentration (μg/m<sup>3</sup>)</th>
            <th>Condition</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td>CO</td>
                <td>{COConc}</td>
                <td className={COCondition}>{COCondition}</td>
            </tr>



            <tr>
                <td>NO<sub>2</sub></td>
                <td>{NO2Conc}</td>
                <td className={NO2Condition}>{NO2Condition}</td>
            </tr>


            <tr>
                <td>O<sub>3</sub></td>
                <td>{O3Conc}</td>
                <td className={O3Condition}>{O3Condition}</td>
            </tr>


            <tr>
                <td>SO<sub>2</sub></td>
                <td>{SO2Conc}</td>
                <td className={SO2Condition}>{SO2Condition}</td>
            </tr>


            <tr>
                <td>PM<sub>2.5</sub></td>
                <td>{PM25Conc}</td>
                <td className={PM25Condition}>{PM25Condition}</td>
            </tr>

            <tr>
                <td>PM<sub>10</sub></td>
                <td>{PM10Conc}</td>
                <td className={PM10Condition}>{PM10Condition}</td>
            </tr>


        </tbody>
      </table>
    </div>
  );
};
