import { useEffect, useState, type FormEvent } from 'react'
import { FormField } from './settings/FormField'
import { Toggle } from './settings/Toggle'
import {
  defaultSettings,
  SETTINGS_STORAGE_KEY,
  type SettingsFormData,
} from '../types/settings'

type FormErrors = Partial<Record<keyof SettingsFormData, string>>

const inputClassName =
  'w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 transition focus:border-brand-500/50 focus:outline-none focus:ring-2 focus:ring-brand-500/20'

const languages = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Spanish' },
  { value: 'fr', label: 'French' },
  { value: 'de', label: 'German' },
]

const timezones = [
  { value: 'America/New_York', label: 'Eastern Time (US)' },
  { value: 'America/Chicago', label: 'Central Time (US)' },
  { value: 'America/Denver', label: 'Mountain Time (US)' },
  { value: 'America/Los_Angeles', label: 'Pacific Time (US)' },
  { value: 'Europe/London', label: 'London (GMT)' },
  { value: 'Asia/Kolkata', label: 'India (IST)' },
]

function loadSettings(): SettingsFormData {
  try {
    const stored = localStorage.getItem(SETTINGS_STORAGE_KEY)
    if (stored) {
      return { ...defaultSettings, ...JSON.parse(stored) }
    }
  } catch {
    // ignore invalid stored data
  }
  return defaultSettings
}

function validate(data: SettingsFormData): FormErrors {
  const errors: FormErrors = {}

  if (!data.displayName.trim()) {
    errors.displayName = 'Display name is required.'
  } else if (data.displayName.trim().length < 2) {
    errors.displayName = 'Display name must be at least 2 characters.'
  }

  if (!data.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Enter a valid email address.'
  }

  if (data.bio.length > 280) {
    errors.bio = 'Bio must be 280 characters or fewer.'
  }

  return errors
}

export function SettingsForm() {
  const [formData, setFormData] = useState<SettingsFormData>(loadSettings)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'saved'>('idle')

  useEffect(() => {
    if (status !== 'saved') return
    const timer = setTimeout(() => setStatus('idle'), 3000)
    return () => clearTimeout(timer)
  }, [status])

  function updateField<K extends keyof SettingsFormData>(
    key: K,
    value: SettingsFormData[K],
  ) {
    setFormData((prev) => ({ ...prev, [key]: value }))
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }))
    }
    setStatus('idle')
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const validationErrors = validate(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(formData))
    setErrors({})
    setStatus('saved')
  }

  function handleReset() {
    setFormData(defaultSettings)
    setErrors({})
    setStatus('idle')
    localStorage.removeItem(SETTINGS_STORAGE_KEY)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10" noValidate>
      <fieldset className="space-y-6">
        <legend className="mb-2 text-lg font-semibold text-white">Profile</legend>

        <FormField
          id="displayName"
          label="Display name"
          description="How your name appears across the app."
          error={errors.displayName}
        >
          <input
            id="displayName"
            type="text"
            value={formData.displayName}
            onChange={(e) => updateField('displayName', e.target.value)}
            placeholder="Jane Doe"
            className={inputClassName}
            aria-invalid={Boolean(errors.displayName)}
            aria-describedby={
              errors.displayName ? 'displayName-error' : 'displayName-description'
            }
          />
        </FormField>

        <FormField
          id="email"
          label="Email address"
          description="Used for account notifications and sign-in."
          error={errors.email}
        >
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => updateField('email', e.target.value)}
            placeholder="you@example.com"
            className={inputClassName}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : 'email-description'}
          />
        </FormField>

        <FormField
          id="bio"
          label="Bio"
          description={`Short introduction (${formData.bio.length}/280).`}
          error={errors.bio}
        >
          <textarea
            id="bio"
            rows={3}
            value={formData.bio}
            onChange={(e) => updateField('bio', e.target.value)}
            placeholder="Tell us a little about yourself..."
            className={`${inputClassName} resize-y`}
            aria-invalid={Boolean(errors.bio)}
            aria-describedby={errors.bio ? 'bio-error' : 'bio-description'}
          />
        </FormField>
      </fieldset>

      <fieldset className="space-y-6">
        <legend className="mb-2 text-lg font-semibold text-white">
          Preferences
        </legend>

        <div className="grid gap-6 md:grid-cols-2">
          <FormField id="language" label="Language">
            <select
              id="language"
              value={formData.language}
              onChange={(e) => updateField('language', e.target.value)}
              className={inputClassName}
            >
              {languages.map((lang) => (
                <option key={lang.value} value={lang.value}>
                  {lang.label}
                </option>
              ))}
            </select>
          </FormField>

          <FormField id="timezone" label="Timezone">
            <select
              id="timezone"
              value={formData.timezone}
              onChange={(e) => updateField('timezone', e.target.value)}
              className={inputClassName}
            >
              {timezones.map((tz) => (
                <option key={tz.value} value={tz.value}>
                  {tz.label}
                </option>
              ))}
            </select>
          </FormField>
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="mb-2 text-lg font-semibold text-white">
          Notifications &amp; accessibility
        </legend>

        <Toggle
          id="emailNotifications"
          label="Email notifications"
          description="Receive updates about your account activity."
          checked={formData.emailNotifications}
          onChange={(checked) => updateField('emailNotifications', checked)}
        />

        <Toggle
          id="marketingEmails"
          label="Marketing emails"
          description="Product news, tips, and feature announcements."
          checked={formData.marketingEmails}
          onChange={(checked) => updateField('marketingEmails', checked)}
        />

        <Toggle
          id="reduceMotion"
          label="Reduce motion"
          description="Minimize animations throughout the interface."
          checked={formData.reduceMotion}
          onChange={(checked) => updateField('reduceMotion', checked)}
        />

        <Toggle
          id="autoSaveDrafts"
          label="Auto-save drafts"
          description="Automatically save work in progress."
          checked={formData.autoSaveDrafts}
          onChange={(checked) => updateField('autoSaveDrafts', checked)}
        />
      </fieldset>

      <div className="flex flex-wrap items-center gap-4 border-t border-white/10 pt-6">
        <button
          type="submit"
          className="rounded-xl bg-brand-600 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-brand-700"
        >
          Save changes
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="rounded-xl border border-white/15 px-6 py-2.5 text-sm font-medium text-slate-200 transition hover:border-white/30 hover:bg-white/5"
        >
          Reset to defaults
        </button>
        {status === 'saved' && (
          <p role="status" className="text-sm text-emerald-400">
            Settings saved successfully.
          </p>
        )}
      </div>
    </form>
  )
}
