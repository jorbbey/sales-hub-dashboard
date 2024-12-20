export async function getStaticProps() {
  const baseURL = "http://localhost:3000";

  try {
    const sideRes = await fetch(`${baseURL}/api/sidebar`);
    const leadRes = await fetch(`${baseURL}/api/leads`);

    if (!sideRes.ok || !leadRes.ok) {
      throw new Error(
        `HTTP Error!, status: ${sideRes.status} || ${leadRes.status}`
      );
    }

    const sideData = await sideRes.json();
    const leadsData = await leadRes.json();

    return {
      props: {
        sideData,
        leadsData,
      },
    };
  } catch (error) {
    console.error(`Error fetching data:`, error);
    return {
      props: {
        sideData: null,
        leadsData: null,
      },
    };
  }
}
