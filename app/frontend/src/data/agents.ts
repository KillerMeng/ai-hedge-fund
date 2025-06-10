import { useTranslation } from 'react-i18next';

export interface AgentItem {
  key: string;
  display_name: string;
  description?: string;
  order: number;
}

export const agents: AgentItem[] = [
  {
    "key": "aswath_damodaran",
    "display_name": "aswath_damodaran.display_name",
    "description": "aswath_damodaran.description",
    "order": 0
  },
  {
    "key": "ben_graham",
    "display_name": "ben_graham.display_name",
    "description": "ben_graham.description",
    "order": 1
  },
  {
    "key": "bill_ackman",
    "display_name": "bill_ackman.display_name",
    "description": "bill_ackman.description",
    "order": 2
  },
  {
    "key": "cathie_wood",
    "display_name": "cathie_wood.display_name",
    "description": "cathie_wood.description",
    "order": 3
  },
  {
    "key": "charlie_munger",
    "display_name": "charlie_munger.display_name",
    "description": "charlie_munger.description",
    "order": 4
  },
  {
    "key": "michael_burry",
    "display_name": "michael_burry.display_name",
    "description": "michael_burry.description",
    "order": 5
  },
  {
    "key": "peter_lynch",
    "display_name": "peter_lynch.display_name",
    "description": "peter_lynch.description",
    "order": 6
  },
  {
    "key": "phil_fisher",
    "display_name": "phil_fisher.display_name",
    "description": "phil_fisher.description",
    "order": 7
  },
  {
    "key": "rakesh_jhunjhunwala",
    "display_name": "rakesh_jhunjhunwala.display_name",
    "description": "rakesh_jhunjhunwala.description",
    "order": 8
  },
  {
    "key": "stanley_druckenmiller",
    "display_name": "stanley_druckenmiller.display_name",
    "description": "stanley_druckenmiller.description",
    "order": 9
  },
  {
    "key": "warren_buffett",
    "display_name": "warren_buffett.display_name",
    "description": "warren_buffett.description",
    "order": 10
  },
  {
    "key": "technical_analyst",
    "display_name": "technical_analyst.display_name",
    "description": "technical_analyst.description",
    "order": 11
  },
  {
    "key": "fundamentals_analyst",
    "display_name": "fundamentals_analyst.display_name",
    "description": "fundamentals_analyst.description",
    "order": 12
  },
  {
    "key": "sentiment_analyst",
    "display_name": "sentiment_analyst.display_name",
    "description": "sentiment_analyst.description",
    "order": 13
  },
  {
    "key": "valuation_analyst",
    "display_name": "valuation_analyst.display_name",
    "description": "valuation_analyst.description",
    "order": 14
  },
  
];

// Get agent by key
export function getAgentByKey(key: string): AgentItem | undefined {
  return agents.find(agent => agent.key === key);
}

// Get default agent to use
export const defaultAgent = agents.find(agent => agent.key === "warren_buffett") || null; 
