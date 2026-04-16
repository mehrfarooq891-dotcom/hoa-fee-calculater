export interface CalculatorInputs {
  propertyValue: number;
  monthlyHOA: number;
  annualIncrease: number;
  yearsOfOwnership: number;
  annualIncome: number;
}

export interface CalculatorOutputs {
  totalLifetimeCost: number;
  averageMonthlyCost: number;
  yearlyData: { year: number; fee: number; cumulative: number }[];
  hoaToIncomeRatio: number;
  affordabilityScore: 'A' | 'B' | 'C' | 'D';
  insight?: string;
}

export interface StateData {
  name: string;
  avgFee: number;
  cities: { name: string; avgFee: number }[];
  laws: string;
}
