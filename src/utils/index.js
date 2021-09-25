import {bets, EBetStatus} from "../consts";

export function toggleStatus(status) {
  return status === EBetStatus.Active
    ? EBetStatus.Suspended
    : EBetStatus.Active;
}

export function getBetById(selectedBetId) {
  return bets.find(({id}) => id === selectedBetId);
}
