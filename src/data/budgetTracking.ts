import { ProcessStep } from '@/components/sections/ProcessSteps';

export const budgetTrackingSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Accurate Budgeting',
    description: 'Start with a precise estimate using our smart calculator',
    isFree: true,
    points: [
      'Use our interactive calculator to get instant cost estimates',
      'Input your specific project requirements and features',
      'Receive detailed breakdown of development costs',
      'Understand pricing factors and how they affect your budget',
      'Get transparent pricing with no hidden surprises',
    ],
  },
  {
    number: '02',
    title: 'Goal Clarification & Project Strategy',
    description: 'Define clear objectives and align them with your budget',
    points: [
      'Identify your core business goals and success metrics',
      'Prioritize features based on budget and impact',
      'Define project scope to match financial constraints',
      'Establish realistic timelines within budget parameters',
      'Create a strategic roadmap aligned with your investment',
    ],
  },
  {
    number: '03',
    title: 'Roadmap with Milestones & Deliverables',
    description: 'Break down the project into manageable, budgeted phases',
    points: [
      'Create detailed project timeline with budget checkpoints',
      'Define clear milestones with cost estimates for each phase',
      'Establish deliverable expectations at every stage',
      'Build flexibility for scope adjustments if needed',
      'Set up review points to ensure budget alignment',
    ],
  },
  {
    number: '04',
    title: 'Resource Allocation & Budget Adjustment',
    description: 'Optimize team resources to maximize value within budget',
    points: [
      'Assign the right team members for cost efficiency',
      'Balance quality and speed within budget constraints',
      'Monitor resource utilization throughout development',
      'Make data-driven adjustments to stay on track',
      'Reallocate resources when priorities shift',
    ],
  },
  {
    number: '05',
    title: 'Final Approval with Financial Plan',
    description: 'Lock in your budget with complete transparency',
    points: [
      'Review comprehensive budget breakdown and timeline',
      'Approve detailed financial plan with payment schedule',
      'Sign off on scope, deliverables, and cost structure',
      'Receive documentation of all budget commitments',
      'Start development with confidence and clarity',
    ],
  },
];

export const budgetTrackingConfig = {
  heading: 'Proven Path to Keep Your Budget on Track',
  subheading: 'Our Process',
  description:
    "With a clear budget estimate, it's easier to manage costs, allocate resources efficiently, and set your product up for success.",
};
