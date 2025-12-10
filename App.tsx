
import { useState } from 'react';
import { MOCK_USERS, SERVICES as INITIAL_SERVICES, APPOINTMENTS as INITIAL_APPOINTMENTS } from './constants';
import { User, UserRole, ViewState, Service, QueueItem, StaffStatus, WalkInTicket, Appointment, AppointmentStatus, FicheroLog, LogType } from './types';
import { Layout } from './components/Layout';
import { AdminDashboard } from './views/AdminDashboard';
import { Agenda } from './views/Agenda';
import { ConsentForm } from './views/ConsentForm';
import { ServicesManager } from './views/ServicesManager';
import { EmployeesManager } from './views/EmployeesManager';
import { Fichero } from './views/Fichero';
import { Lock } from 'lucide-react';

const LoginView = ({ onLogin, users }: { onLogin: (user: User) => void, users: User[] }) => {
    // Show only the first few users for login demo, prioritizing Admin
    const displayUsers = users.slice(0, 5);

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full space-y-8 animate-in zoom-in-95 duration-300">
                <div className="text-center">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent mb-2">Barcé</h1>
                    <p className="text-slate-500">Sign in to your dashboard</p>
                </div>

                <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 no-scrollbar">
                    {displayUsers.map(user => (
                        <button
                            key={user.id}
                            onClick={() => onLogin(user)}
                            className="w-full flex items-center justify-between p-4 border border-slate-200 rounded-xl hover:border-indigo-500 hover:shadow-md transition-all group bg-slate-50 hover:bg-white text-left"
                        >
                            <div className="flex items-center gap-3 min-w-0">
                                <img src={user.avatar} alt="" className="w-10 h-10 rounded-full shrink-0" />
                                <div className="min-w-0">
                                    <p className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors truncate">{user.name}</p>
                                    <p className="text-xs text-slate-500 capitalize">{user.role.toLowerCase()}</p>
                                </div>
                            </div>
                            <Lock size={16} className="text-slate-300 group-hover:text-indigo-500 shrink-0" />
                        </button>
                    ))}
                    <div className="text-xs text-center text-slate-400 pt-2">
                        + {users.length - 5} more users available
                    </div>
                </div>

                <div className="text-center text-xs text-slate-400 mt-8">
                    &copy; 2024 Barcé Clinic Manager
                </div>
            </div>
        </div>
    )
}

function App() {
    const [user, setUser] = useState<User | null>(null);
    const [view, setView] = useState<ViewState>('LOGIN');

    // Data State
    const [services, setServices] = useState<Service[]>(INITIAL_SERVICES);
    const [users, setUsers] = useState<User[]>(MOCK_USERS);
    const [appointments, setAppointments] = useState<Appointment[]>(INITIAL_APPOINTMENTS);

    // Queue & Ticket State
    const [queue, setQueue] = useState<QueueItem[]>(() => {
        // Initialize queue with some staff already clocked in (excluding clients/admins mainly)
        return MOCK_USERS
            .filter(u => u.role === UserRole.COLLABORATOR)
            .slice(0, 10) // First 10 collaborators are active
            .map(u => ({
                userId: u.id,
                status: StaffStatus.AVAILABLE,
                checkInTime: new Date(Date.now() - Math.random() * 3600000).toISOString() // Random time in last hour
            }));
    });

    const [tickets, setTickets] = useState<WalkInTicket[]>([]);
    const [ficheroLogs, setFicheroLogs] = useState<FicheroLog[]>([]);

    // --- LOGGING HELPER ---
    const addLog = (message: string, type: LogType, staffName?: string) => {
        const newLog: FicheroLog = {
            id: `log-${Date.now()}`,
            timestamp: new Date().toISOString(),
            message,
            type,
            staffName
        };
        setFicheroLogs(prev => [newLog, ...prev]);
    };

    const handleLogin = (selectedUser: User) => {
        setUser(selectedUser);
        if (selectedUser.role === UserRole.CLIENT) {
            setView('AGENDA');
        } else {
            setView('DASHBOARD');
        }
    };

    const handleLogout = () => {
        setUser(null);
        setView('LOGIN');
    };

    // Service CRUD
    const handleAddService = (newService: Service) => {
        setServices([...services, newService]);
    };
    const handleUpdateService = (updatedService: Service) => {
        setServices(services.map(s => s.id === updatedService.id ? updatedService : s));
    };
    const handleDeleteService = (id: string) => {
        setServices(services.filter(s => s.id !== id));
    };

    // User CRUD
    const handleAddUser = (newUser: User) => {
        setUsers([...users, newUser]);
    };
    const handleUpdateUser = (updatedUser: User) => {
        setUsers(users.map(u => u.id === updatedUser.id ? updatedUser : u));
        if (user && user.id === updatedUser.id) setUser(updatedUser);
    };
    const handleDeleteUser = (id: string) => {
        setUsers(users.filter(u => u.id !== id));
    };

    // Fichero Logic
    const handleUpdateQueueStatus = (userId: string, status: StaffStatus) => {
        const staffUser = users.find(u => u.id === userId);
        const staffName = staffUser?.name || 'Desconocido';

        setQueue(prev => {
            const exists = prev.find(item => item.userId === userId);

            // Log Logic
            let msg = '';
            if (status === StaffStatus.AVAILABLE) msg = `${staffName} marcó entrada / disponible.`;
            if (status === StaffStatus.BREAK) msg = `${staffName} salió a pausa.`;
            if (status === StaffStatus.OFF_SHIFT) msg = `${staffName} finalizó turno (desconexión).`;
            addLog(msg, 'STATUS_CHANGE', staffName);

            if (exists) {
                // Update existing
                if (status === StaffStatus.OFF_SHIFT) {
                    // Remove from queue
                    return prev.filter(i => i.userId !== userId);
                }
                return prev.map(item => item.userId === userId ? { ...item, status } : item);
            } else {
                // Add new if not off_shift
                if (status !== StaffStatus.OFF_SHIFT) {
                    return [...prev, { userId, status, checkInTime: new Date().toISOString() }];
                }
                return prev;
            }
        });
    };

    const handleCreateTicket = (ticket: WalkInTicket) => {
        setTickets([...tickets, ticket]);
        const serviceName = services.find(s => s.id === ticket.serviceId)?.name;
        addLog(`Nuevo cliente en espera: ${ticket.clientName} (${serviceName})`, 'TICKET_CREATED');
    };

    const handleCancelTicket = (ticketId: string) => {
        const ticket = tickets.find(t => t.id === ticketId);
        if (ticket) {
            addLog(`Ticket cancelado: ${ticket.clientName}`, 'CANCELLATION');
        }
        setTickets(tickets.filter(t => t.id !== ticketId));
    };

    const handleReleaseStaff = (staffId: string) => {
        const staffUser = users.find(u => u.id === staffId);
        addLog(`Liberación manual: ${staffUser?.name || 'Staff'} vuelve a estar disponible`, 'STATUS_CHANGE', staffUser?.name);

        // Force release a busy staff member back to available (e.g. if they forgot to close appointment)
        setQueue(prev => prev.map(item =>
            item.userId === staffId
                ? { ...item, status: StaffStatus.AVAILABLE, currentTicketId: undefined }
                : item
        ));
    };

    const handleAssignTicket = (ticketId: string, staffId: string) => {
        const ticket = tickets.find(t => t.id === ticketId);
        const staffUser = users.find(u => u.id === staffId);
        if (!ticket) return;

        // 1. Create Appointment
        const newAppointment: Appointment = {
            id: `apt-${Date.now()}`,
            clientName: ticket.clientName,
            serviceId: ticket.serviceId,
            staffId: staffId,
            startTime: new Date().toISOString(),
            status: AppointmentStatus.IN_PROGRESS
        };
        setAppointments([newAppointment, ...appointments]);

        // 2. Remove Ticket
        setTickets(tickets.filter(t => t.id !== ticketId));

        // 3. Update Staff Status to BUSY
        setQueue(prev => prev.map(item =>
            item.userId === staffId
                ? { ...item, status: StaffStatus.BUSY, currentTicketId: ticketId }
                : item
        ));

        // 4. Log
        const serviceName = services.find(s => s.id === ticket.serviceId)?.name;
        addLog(`Asignación: ${staffUser?.name} atenderá a ${ticket.clientName} (${serviceName})`, 'ASSIGNMENT', staffUser?.name);
    };

    const renderView = () => {
        switch (view) {
            case 'DASHBOARD':
                return <AdminDashboard />;
            case 'AGENDA':
                return <Agenda userRole={user?.role || UserRole.CLIENT} services={services} />;
            case 'SERVICES':
                return (
                    <ServicesManager
                        services={services}
                        onAdd={handleAddService}
                        onUpdate={handleUpdateService}
                        onDelete={handleDeleteService}
                    />
                );
            case 'EMPLOYEES':
                return (
                    <EmployeesManager
                        users={users}
                        services={services}
                        onAdd={handleAddUser}
                        onUpdate={handleUpdateUser}
                        onDelete={handleDeleteUser}
                    />
                );
            case 'FICHERO':
                return (
                    <Fichero
                        users={users}
                        services={services}
                        queue={queue}
                        tickets={tickets}
                        logs={ficheroLogs}
                        onUpdateQueueStatus={handleUpdateQueueStatus}
                        onCreateTicket={handleCreateTicket}
                        onAssignTicket={handleAssignTicket}
                        onCancelTicket={handleCancelTicket}
                        onReleaseStaff={handleReleaseStaff}
                    />
                );
            case 'CONSENT':
                return <ConsentForm />;
            case 'PROFILE':
                return (
                    <div className="flex items-center justify-center h-96 text-slate-400">
                        <div className="text-center">
                            <h2 className="text-xl font-semibold mb-2">Profile Settings</h2>
                            <p>Work in progress...</p>
                        </div>
                    </div>
                );
            default:
                return <AdminDashboard />;
        }
    };

    if (!user || view === 'LOGIN') {
        return <LoginView onLogin={handleLogin} users={users} />;
    }

    return (
        <Layout
            currentUser={user}
            currentView={view}
            onNavigate={setView}
            onLogout={handleLogout}
        >
            {renderView()}
        </Layout>
    );
}

export default App;
