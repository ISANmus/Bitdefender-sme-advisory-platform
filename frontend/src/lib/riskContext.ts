export interface OrganisationContext {
  employeeCount: string;
  endpointCount: string;
  itManagement: string;
  currentSecurity: string;
}


export interface RiskModifier {
  riskLevel: "Low" | "Medium" | "High";
  explanation: string;
}


export function evaluateEndpointRisk(
  context: OrganisationContext
): RiskModifier {

  const endpointCount =
    convertEndpointRange(context.endpointCount);


  const hasSecuritySolution =
    context.currentSecurity.trim().length > 0;


  let riskScore = 0;


  // Endpoint exposure
  if (endpointCount >= 250) {
    riskScore += 3;
  } else if (endpointCount >= 50) {
    riskScore += 2;
  } else {
    riskScore += 1;
  }


  // Missing endpoint protection
  if (!hasSecuritySolution) {
    riskScore += 3;
  }


  // Limited IT capability
  if (
    context.itManagement === "none"
  ) {
    riskScore += 2;
  }


  if (riskScore >= 6) {

    return {
      riskLevel: "High",

      explanation:
        `The organisation has approximately ${context.endpointCount} endpoints with limited security visibility or protection. This increases potential exposure to endpoint threats.`
    };

  }


  if (riskScore >= 4) {

    return {
      riskLevel: "Medium",

      explanation:
        "The organisation has some cybersecurity controls, but improvements may be required to reduce endpoint-related risks."
    };

  }


  return {

    riskLevel: "Low",

    explanation:
      "The organisation has a smaller endpoint environment and existing security measures reduce overall endpoint exposure."

  };

}



function convertEndpointRange(
  range: string
): number {

  switch(range) {

    case "1-10":
      return 10;

    case "11-50":
      return 50;

    case "51-100":
      return 100;

    case "101-250":
      return 250;

    case "251+":
      return 500;

    default:
      return 0;

  }

}