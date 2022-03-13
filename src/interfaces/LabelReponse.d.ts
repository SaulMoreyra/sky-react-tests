export interface LabelResponse {
  data?:      Data;
  message?:   string;
  code?:      string;
}

export interface Data {
  id?:         string;
  type?:       string;
  attributes?: Attributes;
}

export interface Attributes {
  created_at?:            Date;
  updated_at?:            Date;
  status?:                string | null;
  tracking_number?:       string | null;
  tracking_status?:       string | null;
  label_url?:             string | null;
  tracking_url_provider?: string | null;
  rate_id?:               string | null;
  error_message?:         ErrorMessage[];
}

export interface ErrorMessage {
    message?: string;
}
