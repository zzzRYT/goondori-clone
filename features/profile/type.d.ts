export type MilitaryBranch =
  | '육군'
  | '해군'
  | '공군'
  | '해병대'
  | '의무경찰'
  | '사회복무요원';
export type MilitaryType = '병사' | '부사관' | '장교';
export type ThemeColor =
  | 'default'
  | 'blue'
  | 'green'
  | 'red'
  | 'yellow'
  | 'purple';

export type Profile = {
  id: string;
  name: string;
  militaryBranch: MilitaryBranch;
  militaryType: MilitaryType;
  enlistmentDate: Date;
  dischargeDate: Date;
  theme?: ThemeColor;
  imageUrl?: string;
  isRepresentative?: boolean;
};
