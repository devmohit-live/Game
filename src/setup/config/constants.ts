export class Queue {
  public static readonly USER_CREATED_EVENT: string = 'event_management_user_created_event_queue';
  public static readonly USER_UPDATED_EVENT: string = 'event_management_user_updated_event_queue';
  public static readonly SEND_GROUP_MESSAGE: string = 'send_group_message_queue';
  public static readonly UPDATE_TRADE_EVENT_LTP: string = 'event_management_trade_event_update_ltp_queue';
  public static readonly INIT_EVENT_SETTLEMENT_QUEUE: string = 'order_init_event_settlement_queue';
  public static readonly COMETCHAT_MESSAGE_EVENT: string = 'event_management_cometchat_message_event_queue';
  public static readonly TRIGGER_NOTIFICATION: string = 'trigger_notification_queue';
  public static readonly ANALYTICS_EVENT_QUEUE: string = 'dare_analytics_event_queue';
  public static readonly CANCEL_CONTEST_VARIANT_SCHEDULE_EVENT: string = 'event_management_cancel_contest_variant_schedule_event_queue';
}

export class Activity {
  public static readonly FETCH_ELIGIBLE_CONTESTS: string = 'FetchEligibleContestsActivity';
  public static readonly UPDATE_LEADERBOARD_LOCK_CONTEST: string = 'UpdateLeaderboardLockContestActivity';
  public static readonly CREATE_PLAYER_STATS: string = 'CreatePlayerStatsActivity';
  public static readonly FETCH_CONTEST_VARIANTS: string = 'FetchContestVariantsActivity';
  public static readonly CREATE_LEADERBOARD_FOR_VARIANT: string = 'CreateLeaderboardForVariantActivity';
  public static readonly UPDATE_LEADERBOARD_POST_PROCESSING: string = 'UpdateLeaderboardPostProcessingActivity';
  public static readonly UPDATE_LEADERBOARD_UNLOCK_CONTEST: string = 'UpdateLeaderboardUnlockContestActivity';
  public static readonly FETCH_CONTEST_VARIANTS_FOR_NOTIFICATIONS: string = 'FetchContestVariantsForNotificationsActivity';
  public static readonly UPDATE_LEADERBOARD_TRIGGER_NOTIFICATIONS: string = 'UpdateLeaderboardTriggerNotificationsActivity';

  public static readonly CONTEST_SETTLEMENT_VALIDATE: string = 'ContestSettlementValidateActivity';
  public static readonly CONTEST_SETTLEMENT_GET_LATEST_SHOW_ACTIVITY: string = 'ContestSettlementGetLatestShowActivityActivity';
  public static readonly CONTEST_SETTLEMENT_FETCH_CONTEST_VARIANTS: string = 'ContestSettlementFetchContestVariantsActivity';

  public static readonly CONTEST_VARIANT_SETTLEMENT_CALCULATE_RANK_PRIZE_DISTRIBUTION: string = 'ContestVariantSettlementCalculateRankPrizeDistributionActivity';
  public static readonly CONTEST_VARIANT_SETTLEMENT_SETTLE_PARTICIPATIONS: string = 'ContestVariantSettlementSettleParticipationsActivity';
  public static readonly CONTEST_VARIANT_SETTLEMENT_POST_PROCESSING: string = 'ContestVariantSettlementPostProcessingActivity';
  public static readonly CONTEST_VARIANT_SETTLEMENT_TRIGGER_NOTIFICATIONS: string = 'ContestVariantSettlementTriggerNotificationsActivity';

  public static readonly CONTEST_VARIANT_CANCELLATION_VALIDATE: string = 'ContestVariantCancellationValidateActivity';
  public static readonly CONTEST_VARIANT_CANCELLATION_CANCEL_PARTICIPATIONS: string = 'ContestVariantCancellationCancelParticipationsActivity';
  public static readonly CONTEST_VARIANT_CANCELLATION_POST_PROCESSING: string = 'ContestVariantCancellationPostProcessingActivity';
  public static readonly CONTEST_VARIANT_CANCELLATION_TRIGGER_NOTIFICATIONS: string = 'ContestVariantCancellationTriggerNotificationsActivity';
}

export class StateMachine {
  public static readonly TRIGGER_UPDATE_LEADERBOARD_WORKFLOW: string = 'TriggerUpdateLeaderboardWorkflow';
  public static readonly CONTEST_SETTLEMENT_WORKFLOW: string = 'ContestSettlementWorkflow';
  public static readonly CONTEST_VARIANT_CANCELLATION_WORKFLOW: string = 'ContestVariantCancellationWorkflow';
}

export enum Environment {
  DEV = 'dev',
  BETA = 'beta',
  PROD = 'prod'
}

export const SERVICE_NAME = 'gameservice';