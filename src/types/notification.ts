export type Notification = {
  id: string
  priority: 'High' | 'Medium' | 'Low'
  patient: {
    name: string
    id: string
  }
  event: string
  dateTime: {
    start: string
    end: string
  }
  closureReason: string
  acknowledgedBy?: string
  notificationCount: number
  observations?: {
    id: string
    bodyTemperature: number
    spO2: number
  }
  medicalConditions?: Array<{
    condition: string
    date: string
  }>
  medications?: Array<{
    name: string
    dosage?: string
    date: string
  }>
  notification?: Record<string, unknown> & {
    title: string
    metric: number
    label: string
    time: string
  }
  vitals?: Record<string, unknown>
}

export interface SortConfig {
  key: keyof Notification | ''
  direction: 'asc' | 'desc'
}

export interface FilterConfig {
  priority?: string[]
  dateRange?: string
}

