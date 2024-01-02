/**
 * Label: option에 표시할 text
 */
export type Label = number | string;
/**
 * Value: option의 value
 */
export type Value = number | string;

export interface Option {
  label: Label;
  value: Value;
}
