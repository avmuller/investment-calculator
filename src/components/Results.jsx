import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";

export default function Results({ input }) {
  const resultData = calculateInvestmentResults(input);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Imvestment Value</th>
          <th>Interest</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((yearData) => {
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(yearData.totalInterest)}</td>
              <td>{formatter.format(yearData.investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}