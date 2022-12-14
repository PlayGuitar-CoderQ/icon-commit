export enum CommitTypeEnum {
  fix = "fix",
  feat = "feat",
  refactor = "refactor",
  doc = "doc",
  style = "style",
  ci = "ci",
  dead = "dead",
  comment = 'comment',
  structure = 'structure',
  test = 'test',
  hotfix = 'hotfix',
  init = 'init',
  depend = 'depend',
  config = 'config',
  version = 'version',
  type = "type"
}

export const Commit_Icons = {
  [CommitTypeEnum.fix]: '๐',
  [CommitTypeEnum.feat]: 'โจ',
  [CommitTypeEnum.refactor]: 'โป๏ธ',
  [CommitTypeEnum.doc]: '๐',
  [CommitTypeEnum.style]: '๐จ',
  [CommitTypeEnum.ci]: '๐ท',
  [CommitTypeEnum.dead]: '๐',
  [CommitTypeEnum.comment]: '๐ก',
  [CommitTypeEnum.structure]: '๐๏ธ',
  [CommitTypeEnum.test]: '๐งช',
  [CommitTypeEnum.hotfix]: '๐ฅ',
  [CommitTypeEnum.init]: '๐',
  [CommitTypeEnum.depend]: '๐งฑ',
  [CommitTypeEnum.config]: '๐ง',
  [CommitTypeEnum.version]: '๐ฏ',
  [CommitTypeEnum.type]: '๐',
};

export const Tag_Icon = '๐';