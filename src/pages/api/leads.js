export default function handler(req, res) {
  res.status(200).json({
    head: ["Name", "Topic", "Status Reason", "Created On"],
    users: [
      {
        name: "Winford Asher",
        topic: "Cafe A100 commercial use",
        status: "New",
        date: "4/02/2024 12:00 PM",
        image:
          "https://www.gstatic.com/images/branding/product/1x/avatar_square_blue_512dp.png",
        details: {
          role: "Operations Manager",
          company: "Northwind Traders",
          decisionMaker: "Yes",
          potentialDealValue: "$500K",
          intent: "High",
          summary:
            "Winford is exploring options to scale up operations with Cafe A100. His team has reported increased customer demands",
        },
      },
      {
        name: "Josia Love",
        topic: "Upgrading service plan",
        status: "New",
        date: "3/30/2024 7:45 AM",
        image:
          "https://www.gstatic.com/images/branding/product/1x/avatar_square_pink_512dp.png",
        details: {
          role: "IT Manager",
          company: "Contoso Ltd.",
          decisionMaker: "Yes",
          potentialDealValue: "$300K",
          intent: "Medium",
          summary:
            "Josia is seeking to upgrade their service plan to accommodate increased IT workload due to business growth.",
        },
      },
      {
        name: "Amara Daniels",
        topic: "Server downtime report",
        status: "New",
        date: "3/28/2024 9:30 AM",
        image:
          "https://www.gstatic.com/images/branding/product/1x/avatar_square_pink_512dp.png",
        details: {
          role: "Technical Lead",
          company: "Litware Inc.",
          decisionMaker: "No",
          potentialDealValue: "$200K",
          intent: "Low",
          summary:
            "Amara reported recurring server downtimes affecting productivity. Evaluating new solutions to improve stability and performance.",
        },
      },
      {
        name: "Lucas Brown",
        topic: "New user onboarding",
        status: "New",
        date: "4/01/2024 11:15 AM",
        image:
          "https://www.gstatic.com/images/branding/product/1x/avatar_square_blue_512dp.png",
        details: {
          role: "HR Director",
          company: "Adventure Works",
          decisionMaker: "Yes",
          potentialDealValue: "$150K",
          intent: "Medium",
          summary:
            "Lucas is facilitating onboarding for a large wave of new hires and requires tools to streamline the process efficiently.",
        },
      },
      {
        name: "Evelyn Carter",
        topic: "Billing adjustment request",
        status: "New",
        date: "3/29/2024 3:00 PM",
        image:
          "https://www.gstatic.com/images/branding/product/1x/avatar_square_pink_512dp.png",
        details: {
          role: "Finance Lead",
          company: "Tailspin Toys",
          decisionMaker: "Yes",
          potentialDealValue: "$100K",
          intent: "Low",
          summary:
            "Evelyn is seeking adjustments to their billing structure for better alignment with budgetary constraints and projections.",
        },
      },
      {
        name: "James Owens",
        topic: "Account recovery assistance",
        status: "New",
        date: "3/27/2024 8:45 AM",
        image:
          "https://www.gstatic.com/images/branding/product/1x/avatar_square_blue_512dp.png",
        details: {
          role: "Support Specialist",
          company: "Fabrikam Inc.",
          decisionMaker: "No",
          potentialDealValue: "$50K",
          intent: "Low",
          summary:
            "James requested assistance with recovering a key account for better service continuity and resolution time.",
        },
      },
      {
        name: "Sophia Hall",
        topic: "Marketing campaign feedback",
        status: "New",
        date: "4/01/2024 2:30 PM",
        image:
          "https://www.gstatic.com/images/branding/product/1x/avatar_square_pink_512dp.png",
        details: {
          role: "Marketing Head",
          company: "Proseware Ltd.",
          decisionMaker: "Yes",
          potentialDealValue: "$750K",
          intent: "High",
          summary:
            "Sophia provided feedback on recent marketing campaigns and is looking for strategic support to scale outreach efforts.",
        },
      },
      {
        name: "David Wilson",
        topic: "Feature request submission",
        status: "New",
        date: "4/03/2024 10:00 AM",
        image:
          "https://www.gstatic.com/images/branding/product/1x/avatar_square_blue_512dp.png",
        details: {
          role: "Product Owner",
          company: "Alpine Ski House",
          decisionMaker: "Yes",
          potentialDealValue: "$400K",
          intent: "Medium",
          summary:
            "David submitted a feature request to improve usability and add advanced capabilities in the current product offering.",
        },
      },
      {
        name: "Olivia Martinez",
        topic: "Subscription cancellation",
        status: "New",
        date: "3/31/2024 4:20 PM",
        image:
          "https://www.gstatic.com/images/branding/product/1x/avatar_square_pink_512dp.png",
        details: {
          role: "Operations Lead",
          company: "Trey Research",
          decisionMaker: "Yes",
          potentialDealValue: "$100K",
          intent: "Low",
          summary:
            "Olivia is considering subscription cancellation due to cost concerns and requires consultation on alternative plans.",
        },
      },
      {
        name: "Noah Garcia",
        topic: "Partnership inquiry",
        status: "New",
        date: "4/02/2024 1:00 PM",
        image:
          "https://www.gstatic.com/images/branding/product/1x/avatar_square_blue_512dp.png",
        details: {
          role: "Business Development Manager",
          company: "Wide World Importers",
          decisionMaker: "Yes",
          potentialDealValue: "$1M",
          intent: "High",
          summary:
            "Noah is exploring a potential partnership to expand product distribution across key markets, focusing on mutual growth opportunities.",
        },
      },
    ],
  });
}
