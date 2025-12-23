
export enum SelectionType {
  LOVE = 'LOVE',
  LIKE = 'LIKE',
  OKAY = 'OKAY',
  NOT_FOR_ME = 'NOT_FOR_ME'
}

export interface PlatformSource {
  platformId: string; // 'qidian', 'jjwxc', 'cp'
  externalId: string;
  url: string;
  updateTime: number;
}

export interface Novel {
  id: string; // Cio Canonical ID
  title: string;
  author: string;
  canonicalHash: string; // Normalized md5(title + author)
  sources: PlatformSource[];
  tags: string[];
  description: string;
  coverUrl?: string;
  lastSyncTime: number;
}

export interface Selection {
  userId: string;
  novelId: string;
  choice: SelectionType;
  timestamp: number;
  version: number; 
}

export interface UserProfile {
  userId: string;
  isKOL: boolean;
  trustWeight: number;
  preferences: string[]; 
}
