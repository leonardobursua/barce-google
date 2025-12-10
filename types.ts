
export enum UserRole {
  ADMIN = 'ADMIN',
  COLLABORATOR = 'COLLABORATOR',
  CLIENT = 'CLIENT'
}

export enum AppointmentStatus {
  SCHEDULED = 'SCHEDULED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  phone?: string;
  specialties?: string[]; // Array of service categories this user can perform
}

export interface Service {
  id: string;
  name: string;
  durationMinutes: number;
  price: number;
  category: string;
}

export interface Appointment {
  id: string;
  clientName: string;
  serviceId: string;
  staffId: string;
  startTime: string; // ISO String
  status: AppointmentStatus;
}

export interface StatMetric {
  label: string;
  value: string | number;
  change: number; // Percentage
  trend: 'up' | 'down' | 'neutral';
}

export type ViewState = 'LOGIN' | 'DASHBOARD' | 'AGENDA' | 'CONSENT' | 'PROFILE' | 'SERVICES' | 'EMPLOYEES' | 'FICHERO';

// --- FICHERO TYPES ---
export enum StaffStatus {
  AVAILABLE = 'AVAILABLE', // Green: Ready to take clients
  BUSY = 'BUSY',           // Red: Currently in service
  BREAK = 'BREAK',         // Orange: Temporary break
  OFF_SHIFT = 'OFF_SHIFT'  // Gray: Not working right now
}

export interface QueueItem {
  userId: string;
  status: StaffStatus;
  checkInTime: string; // ISO time when they became AVAILABLE
  currentTicketId?: string; // If busy, which ticket are they serving
}

export interface WalkInTicket {
  id: string;
  clientName: string;
  clientPhone?: string;
  serviceId: string;
  arrivalTime: string;
  notes?: string;
}

export type LogType = 'STATUS_CHANGE' | 'TICKET_CREATED' | 'ASSIGNMENT' | 'CANCELLATION' | 'SYSTEM';

export interface FicheroLog {
  id: string;
  timestamp: string;
  message: string;
  type: LogType;
  staffName?: string; // Optional, if related to a specific staff member
}
