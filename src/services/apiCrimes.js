const url = `https://api.usa.gov/crime/fbi/cde/arrest/state/AK/all?from=2012&to=2021&API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv`;

export async function getCrimes() {
  const res = await fetch(url);
  const data = await res.json();

  const dataModified = data.data.map((ele) => {
    return {
      data_year: ele.data_year,
      Burglary: ele.Burglary,
    };
  });

  return dataModified;
}
