enum EApi {
  host = 'https://api.multifarm.fi/jay_flamingo_random_6ix_vegas/get_assets?pg=1&tvl_min=50000&sort=tvlStaked&sort_order=desc&farms_tvl_staked_gte=10000000',
}

export const getAssets = async () => {
  return fetch(EApi.host)
    .then(async (response) => {
      if (response.ok) {
        return await response.json();
      } else {
        throw new Error('Server error');
      }
    })
    .catch((error) => {
      throw new Error('Bad request');
    });
};
