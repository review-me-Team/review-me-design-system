/**
 * Name: option에 표시할 text
 */
export type Name = number | string;
/**
 * Value: option의 value
 */
export type Value = number | string;

export interface Option {
  value: Value;
  name: Name;
}
