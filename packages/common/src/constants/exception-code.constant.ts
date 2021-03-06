export enum ExceptionCode {
  TrialThresholdLimitReached = 'trial_threshold_limit_reached',
  SubscriptionThresholdLimitReached = 'subscription_threshold_limit_reached',
  SubscriptionResourceDenied = 'subscription_resource_denied',
  SubscriptionDowngradeNotAllow = 'subscription_downgrade_not_allow',
  SubscriptionNotAllow = 'subscription_not_allow',
  SubscriptionInvalidPrice = 'subscription_invalid_price',
  PermissionDenied = 'permission_denied',
  BadRequest = 'bad_request',
  FormBadRequest = 'form_bad_request',
  InvalidEnum = 'invalid_enum',
  InvalidAddress = 'invalid_address',
  InvalidEmail = 'invalid_email',
  InvalidPassword = 'invalid_password',
  InvalidBooleanValue = 'invalid_boolean_value',
  InvalidMongoId = 'invalid_mongo_id',
  InvalidIsoDateString = 'invalid_date_string',
  InvalidLength = 'invalid_length',
  InvalidNumberString = 'invalid_number_string',
  InvalidArray = 'invalid_array',
  BadData = 'bad_data',
  InvalidIdToken = 'invalid_id_token',
  InvalidAccessToken = 'invalid_access_token',
  InvalidRefreshToken = 'invalid_refresh_token',
  InvalidTenant = 'invalid_tenant',
  InvalidUser = 'invalid_user',
  UpgradeRequired = 'upgrade_required',
  RenewRequired = 'renew_required',
  AlreadyExists = 'already_exists',
  ConflictData = 'conflict_data',
  NotFound = 'not_found',
  IsDefined = 'is_defined',
  IsDefault = 'is_default',
  NotEmpty = 'not_empty',
  NotAligned = 'not_aligned',
  NotOwner = 'not_owner',
  UnsupportedFileType = 'unsupported_file_type',
  UnsupportedFunctionality = 'unsupported_functionality',
  CachedFailed = 'cached_failed',
  Unauthenticated = 'unauthenticated',
  Forbidden = 'forbidden_action',
  Unimplemented = 'unimplemented',
  ModuleUnavailable = 'module_unavailable',
  ExecutionTimeOut = 'execution_time_out',
  TimeEntryNoMethodSelected = 'time_entry_no_method_selected',
}
