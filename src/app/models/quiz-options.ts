export interface QuizOptions {
  id?: number;
  title?: string;
  description?: string;
  canRetryQuestion?: boolean;
  questions?: any[];  // Pass raw data. Will be re-hydrated.
}
