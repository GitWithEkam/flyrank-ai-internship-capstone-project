export type SettingsFormData = {
  displayName: string
  email: string
  bio: string
  language: string
  timezone: string
  emailNotifications: boolean
  marketingEmails: boolean
  reduceMotion: boolean
  autoSaveDrafts: boolean
}

export const defaultSettings: SettingsFormData = {
  displayName: '',
  email: '',
  bio: '',
  language: 'en',
  timezone: 'America/New_York',
  emailNotifications: true,
  marketingEmails: false,
  reduceMotion: false,
  autoSaveDrafts: true,
}

export const SETTINGS_STORAGE_KEY = 'flyrank-settings'
