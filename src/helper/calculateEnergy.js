const moment = require('moment');

const BANDWIDTH_PERIOD = 86400;
const MAX_BLOCK_SIZE = 22020096;
const RESERVE_RATIO = 1;
const MAX_CELLULOSE = Number.MAX_SAFE_INTEGER;
const NETWORK_BANDWIDTH = RESERVE_RATIO * MAX_BLOCK_SIZE * BANDWIDTH_PERIOD;

export function calculateEnergy(account) {
  const diff = account.bandwidthTime ?
    moment().unix() - moment(account.bandwidthTime).unix() :
    BANDWIDTH_PERIOD;
  const bandwidthLimit = account.balance / MAX_CELLULOSE * NETWORK_BANDWIDTH;
  const bandwidth = account.bandwidth ?
    Math.max(0, (BANDWIDTH_PERIOD - diff) / BANDWIDTH_PERIOD) * account.bandwidth :
    0
  return Math.ceil(bandwidthLimit - bandwidth)
}