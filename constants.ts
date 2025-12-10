import { User, UserRole, Appointment, AppointmentStatus, Service, StatMetric } from './types';

// --- EMPLOYEES & USERS ---
export const MOCK_USERS: User[] = [
  { id: '1', name: 'JOSE CAMPO ELIAS MORA URIBE', phone: '3107183890', email: 'jose.mora@barce.com', role: UserRole.ADMIN, avatar: 'https://ui-avatars.com/api/?name=Jose+Mora&background=0D8ABC&color=fff', specialties: ['ALL'] },
  { id: '2', name: 'ADRIANA LISSET BARBOSA BELTRAN', phone: '3197676992', email: 'Adrianabarbosa2615@gmail.com', role: UserRole.COLLABORATOR, avatar: 'https://ui-avatars.com/api/?name=Adriana+Barbosa&background=random', specialties: ['MANICURE', 'PEDICURE'] },
  { id: '3', name: 'ANDRES CALDERON RODRIGUEZ', phone: '3233262381', email: 'andres7237@gmail.com', role: UserRole.COLLABORATOR, avatar: 'https://ui-avatars.com/api/?name=Andres+Calderon&background=random', specialties: ['CORTE', 'BARBERÍA ANTIEDAD'] },
  { id: '4', name: 'CARLOS JAVIER CASTRO', phone: '3217658683', email: 'CORTALA32@GMAIL.COM', role: UserRole.COLLABORATOR, avatar: 'https://ui-avatars.com/api/?name=Carlos+Castro&background=random', specialties: ['CORTE', 'COLOR'] },
  { id: '5', name: 'CAROL JOULIETH GIRALDO CASTRO', phone: '3022477726', email: 'JULIETH23GIRALDO@GMAIL.COM', role: UserRole.COLLABORATOR, avatar: 'https://ui-avatars.com/api/?name=Carol+Giraldo&background=random', specialties: ['MANICURE', 'PEDICURE'] },
  { id: '6', name: 'DEIVIS COLINA', phone: '3002791602', email: 'deiviscolinagonzalez1@gmail.com', role: UserRole.COLLABORATOR, avatar: 'https://ui-avatars.com/api/?name=Deivis+Colina&background=random', specialties: ['CORTE'] },
  { id: '7', name: 'EDY AMANDA ARIAS GOMEZ', phone: '3228405028', email: 'edgomez1969@gmail.com', role: UserRole.COLLABORATOR, avatar: 'https://ui-avatars.com/api/?name=Edy+Arias&background=random', specialties: ['ESTÉTICA', 'MASAJE'] },
  { id: '8', name: 'EIMY KATHERINE RUZ GONZALEZ', phone: '3144330097', email: 'eimyruz.04@gmail.com', role: UserRole.COLLABORATOR, avatar: 'https://ui-avatars.com/api/?name=Eimy+Ruz&background=random', specialties: ['MANICURE', 'PEDICURE'] },
  { id: '9', name: 'ERICK HERNANDO CALDERON RODRIGUEZ', phone: '3016074920', email: 'erick.calderon.rodriguez@gmail.com', role: UserRole.COLLABORATOR, avatar: 'https://ui-avatars.com/api/?name=Erick+Calderon&background=random', specialties: ['CORTE', 'BARBERÍA ANTIEDAD'] },
  { id: '10', name: 'GINA MILENA VILLARREAL CASTAÑEDA', phone: '3019061074', email: 'gmvc060585@gmail.com', role: UserRole.COLLABORATOR, avatar: 'https://ui-avatars.com/api/?name=Gina+Villarreal&background=random', specialties: ['MANICURE', 'PEDICURE'] },
  { id: '11', name: 'INGRID MONTEALEGRE', phone: '3108591153', email: 'ingridt.montealegre@gmail.com', role: UserRole.COLLABORATOR, avatar: 'https://ui-avatars.com/api/?name=Ingrid+Montealegre&background=random', specialties: ['ESTÉTICA', 'DEPILACIÓN'] },
  { id: '12', name: 'JOHNN SCHLAPPKOHK RODRIGUEZ', phone: '3138586148', email: 'johnnschlappkohl@gmail.com', role: UserRole.COLLABORATOR, avatar: 'https://ui-avatars.com/api/?name=Johnn+Schlappkohk&background=random', specialties: ['CORTE', 'COLOR'] },
  { id: '13', name: 'JULIANA CUERVO', phone: '3184020231', email: 'julianac102786@gmail.com', role: UserRole.COLLABORATOR, avatar: 'https://ui-avatars.com/api/?name=Juliana+Cuervo&background=random', specialties: ['MANICURE', 'PEDICURE'] },
  { id: '14', name: 'KAREN YULIETH TAMAYO RAMOS', phone: '3219746818', email: 'karentamayo1247@gmail.com', role: UserRole.COLLABORATOR, avatar: 'https://ui-avatars.com/api/?name=Karen+Tamayo&background=random', specialties: ['MAQUILLAJE', 'PEINADO'] },
  { id: '15', name: 'KRISTEYMAR ROMERO', phone: '3118112507', email: 'kristeymar@gmail.com', role: UserRole.COLLABORATOR, avatar: 'https://ui-avatars.com/api/?name=Kristeymar+Romero&background=random', specialties: ['MANICURE', 'PEDICURE'] },
  { id: '16', name: 'LEIDY GINETH CARREÑO HERNANDEZ', phone: '3162975303', email: 'le.gineth.ca94@gmail.com', role: UserRole.COLLABORATOR, avatar: 'https://ui-avatars.com/api/?name=Leidy+Carreño&background=random', specialties: ['ESTÉTICA'] },
  { id: '17', name: 'LILIBETH ANDREA OLIVAR TORRES', phone: '3202263160', email: 'psicolivart@gmail.com', role: UserRole.COLLABORATOR, avatar: 'https://ui-avatars.com/api/?name=Lilibeth+Olivar&background=random', specialties: ['ESTÉTICA', 'MASAJE'] },
  { id: '18', name: 'LISBETH CAROLINA TRIANA ABRIL', phone: '3053187745', email: 'lisbethtriana10@gmail.com', role: UserRole.COLLABORATOR, avatar: 'https://ui-avatars.com/api/?name=Lisbeth+Triana&background=random', specialties: ['MANICURE', 'PEDICURE'] },
  { id: '19', name: 'LISET TATIANA TOSCANO PABON', phone: '3102815718', email: 'TOSCANOTATIANA4@GMAIL.COM', role: UserRole.COLLABORATOR, avatar: 'https://ui-avatars.com/api/?name=Liset+Toscano&background=random', specialties: ['MANICURE', 'PEDICURE'] },
  { id: '20', name: 'MAIRA ALEJANDRA GARAVITO PINILLA', phone: '3128323231', email: 'alejandra.garavito0605@gmail.com', role: UserRole.COLLABORATOR, avatar: 'https://ui-avatars.com/api/?name=Maira+Garavito&background=random', specialties: ['MANICURE', 'PEDICURE'] },
  { id: '21', name: 'Maria Alejandra Castillo Caycedo', phone: '3168299088', email: 'alejandranisi@gmail.com', role: UserRole.COLLABORATOR, avatar: 'https://ui-avatars.com/api/?name=Maria+Castillo&background=random', specialties: ['ESTÉTICA'] },
  { id: '22', name: 'MARISOL GARCIA', phone: '3014109916', email: 'maryg1307@hotmail.es', role: UserRole.COLLABORATOR, avatar: 'https://ui-avatars.com/api/?name=Marisol+Garcia&background=random', specialties: ['MANICURE', 'PEDICURE'] },
  { id: '23', name: 'MARTHA CECILIA SANCHEZ ROJAS', phone: '3123962210', email: 'gisel24nov@gmail.com', role: UserRole.COLLABORATOR, avatar: 'https://ui-avatars.com/api/?name=Martha+Sanchez&background=random', specialties: ['ESTÉTICA'] },
  { id: '24', name: 'NELSON YESID AMOR RIVEROS', phone: '3205159478', email: 'nelsonamor-1969@hotmail.com', role: UserRole.COLLABORATOR, avatar: 'https://ui-avatars.com/api/?name=Nelson+Amor&background=random', specialties: ['CORTE', 'BARBERÍA ANTIEDAD'] },
  { id: '25', name: 'NICOLAS STEVEN RAMIREZ SCHLAPPKOHL', phone: '3124870952', email: 'ramireznicolas878@gmail.com', role: UserRole.COLLABORATOR, avatar: 'https://ui-avatars.com/api/?name=Nicolas+Ramirez&background=random', specialties: ['CORTE'] },
  { id: '26', name: 'NICOLE ANDREA GUTIERREZ AVILA', phone: '3197603749', email: 'nicol02gutierrez@gmail.com', role: UserRole.COLLABORATOR, avatar: 'https://ui-avatars.com/api/?name=Nicole+Gutierrez&background=random', specialties: ['MANICURE', 'PEDICURE'] },
  { id: '27', name: 'NORMA CRISTINA OTALORA CABRERA', phone: '3046634982', email: 'otalora212@gmail.com', role: UserRole.COLLABORATOR, avatar: 'https://ui-avatars.com/api/?name=Norma+Otalora&background=random', specialties: ['ESTÉTICA'] },
  { id: '28', name: 'SEBASTIAN GUZMAN FEO', phone: '3503268468', email: 'yohan_013@hotmail.com', role: UserRole.COLLABORATOR, avatar: 'https://ui-avatars.com/api/?name=Sebastian+Guzman&background=random', specialties: ['CORTE', 'COLOR'] },
  { id: '29', name: 'VANESSA DE LOS ANGELES HENRRIQUEZ', phone: '3006717704', email: 'vanedelrosario17@gmail.com', role: UserRole.COLLABORATOR, avatar: 'https://ui-avatars.com/api/?name=Vanessa+Henrriquez&background=random', specialties: ['MANICURE', 'PEDICURE'] },
  { id: '30', name: 'XIMENA ANDREA SALAS NIVIA', phone: '3227045004', email: '13ximenaandrea06@gmail.com', role: UserRole.COLLABORATOR, avatar: 'https://ui-avatars.com/api/?name=Ximena+Salas&background=random', specialties: ['MANICURE', 'PEDICURE'] },
  { id: '31', name: 'YESENIA CARRILLO BELTRAN', phone: '3001310249', email: 'leidyc.beltran@gmail.com', role: UserRole.COLLABORATOR, avatar: 'https://ui-avatars.com/api/?name=Yesenia+Carrillo&background=random', specialties: ['MANICURE', 'PEDICURE'] },
  { id: 'cl-1', name: 'Maria Client (Demo)', email: 'client@demo.com', role: UserRole.CLIENT, avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' }
];

// --- SERVICES DATABASE ---
export const SERVICES: Service[] = [
  // CURSO
  { id: 'edu-1', name: 'CURSO DE AUTOMAQUILLAJE', price: 300000, durationMinutes: 240, category: 'CURSO' },

  // BARBERÍA ANTIEDAD
  { id: 'bar-1', name: 'BARBERÍA ANTIEDAD', price: 100000, durationMinutes: 60, category: 'BARBERÍA ANTIEDAD' },

  // TRATAMIENTOS FACIALES
  { id: 'fac-1', name: 'REJUVENECER BOOST', price: 100000, durationMinutes: 60, category: 'TRATAMIENTOS FACIALES' },
  { id: 'fac-2', name: 'ROSTRO ANTI-EDAD', price: 80000, durationMinutes: 60, category: 'TRATAMIENTOS FACIALES' },
  { id: 'fac-3', name: 'CARA COMPLETA (Depilación)', price: 90000, durationMinutes: 30, category: 'TRATAMIENTOS FACIALES' },
  { id: 'fac-4', name: 'OMBLIGO', price: 15000, durationMinutes: 15, category: 'TRATAMIENTOS FACIALES' },
  { id: 'fac-5', name: 'FRENTE', price: 20000, durationMinutes: 15, category: 'TRATAMIENTOS FACIALES' },
  { id: 'fac-6', name: 'PÓMULOS EN CERA', price: 18000, durationMinutes: 15, category: 'TRATAMIENTOS FACIALES' },

  // MANICURE
  { id: 'man-1', name: 'MANICURE ANTIEDAD', price: 50000, durationMinutes: 60, category: 'MANICURE' },
  { id: 'man-2', name: 'MANICURE TRADICIONAL', price: 30000, durationMinutes: 60, category: 'MANICURE' },
  { id: 'man-3', name: 'MANICURE SEMIPERMANENTE', price: 80000, durationMinutes: 75, category: 'MANICURE' },
  { id: 'man-4', name: 'MANICURE SPA', price: 90000, durationMinutes: 75, category: 'MANICURE' },
  { id: 'man-5', name: 'MANICURE SECADO RÁPIDO', price: 40000, durationMinutes: 45, category: 'MANICURE' },
  { id: 'man-6', name: 'ACRÍLICO', price: 160000, durationMinutes: 90, category: 'MANICURE' },
  { id: 'man-7', name: 'POLY GEL', price: 180000, durationMinutes: 90, category: 'MANICURE' },
  { id: 'man-8', name: 'BASE RUBBER', price: 120000, durationMinutes: 60, category: 'MANICURE' },
  { id: 'man-9', name: 'BASE VITACARE', price: 40000, durationMinutes: 30, category: 'MANICURE' },
  { id: 'man-10', name: 'POLISH - BRILLO NATURAL', price: 35000, durationMinutes: 45, category: 'MANICURE' },
  { id: 'man-11', name: 'RECUBRIMIENTO EN ACRÍLICO', price: 100000, durationMinutes: 60, category: 'MANICURE' },
  { id: 'man-12', name: 'CAMBIO DE ESMALTE TRADICIONAL', price: 20000, durationMinutes: 15, category: 'MANICURE' },
  { id: 'man-13', name: 'CAMBIO DE ESMALTE SEC. RÁPIDO B1', price: 30000, durationMinutes: 20, category: 'MANICURE' },
  { id: 'man-14', name: 'CAMBIO DE ESMALTE SEC. RÁPIDO B2', price: 40000, durationMinutes: 20, category: 'MANICURE' },
  { id: 'man-15', name: 'RETIRO SEMIPERMANENTE', price: 20000, durationMinutes: 30, category: 'MANICURE' },
  { id: 'man-16', name: 'RETIRO ACRÍLICO/POLYGEL', price: 180000, durationMinutes: 90, category: 'MANICURE' },
  { id: 'man-17', name: 'RETIRO BASE RUBBER', price: 120000, durationMinutes: 60, category: 'MANICURE' },
  { id: 'man-18', name: 'THERMOTERAPIA MANOS', price: 35000, durationMinutes: 45, category: 'MANICURE' },
  { id: 'man-19', name: 'DECORACIÓN POR UNIDAD', price: 95000, durationMinutes: 60, category: 'MANICURE' },

  // PEDICURE
  { id: 'ped-1', name: 'PEDICURE ANTIEDAD WELL SPA', price: 70000, durationMinutes: 75, category: 'PEDICURE' },
  { id: 'ped-2', name: 'PEDICURE TRADICIONAL', price: 40000, durationMinutes: 60, category: 'PEDICURE' },
  { id: 'ped-3', name: 'PEDICURE SEMIPERMANENTE', price: 90000, durationMinutes: 75, category: 'PEDICURE' },
  { id: 'ped-4', name: 'PEDICURE SPA', price: 95000, durationMinutes: 90, category: 'PEDICURE' },
  { id: 'ped-5', name: 'PEDICURE SECADO RÁPIDO B1', price: 70000, durationMinutes: 60, category: 'PEDICURE' },
  { id: 'ped-6', name: 'PEDICURE SECADO RÁPIDO B2', price: 90000, durationMinutes: 60, category: 'PEDICURE' },
  { id: 'ped-7', name: 'PEDICURE SECADO RÁPIDO COLEGA', price: 45000, durationMinutes: 60, category: 'PEDICURE' },
  { id: 'ped-8', name: 'THERMOTERAPIA PIES', price: 35000, durationMinutes: 45, category: 'PEDICURE' },

  // DEPILACIÓN
  { id: 'dep-1', name: 'CEJAS', price: 30000, durationMinutes: 15, category: 'DEPILACIÓN' },
  { id: 'dep-2', name: 'CEJAS HILO', price: 42000, durationMinutes: 15, category: 'DEPILACIÓN' },
  { id: 'dep-3', name: 'BIGOTE EN CERA', price: 22000, durationMinutes: 10, category: 'DEPILACIÓN' },
  { id: 'dep-4', name: 'BIGOTE HILO', price: 32000, durationMinutes: 10, category: 'DEPILACIÓN' },
  { id: 'dep-5', name: 'CARA O PÓMULOS CON HILO', price: 60000, durationMinutes: 20, category: 'DEPILACIÓN' },
  { id: 'dep-6', name: 'BARBILLA', price: 18000, durationMinutes: 15, category: 'DEPILACIÓN' },
  { id: 'dep-7', name: 'PATILLAS', price: 18000, durationMinutes: 15, category: 'DEPILACIÓN' },
  { id: 'dep-8', name: 'NARIZ', price: 18000, durationMinutes: 10, category: 'DEPILACIÓN' },
  { id: 'dep-9', name: 'OREJAS', price: 18000, durationMinutes: 15, category: 'DEPILACIÓN' },
  { id: 'dep-10', name: 'MENTÓN', price: 15000, durationMinutes: 15, category: 'DEPILACIÓN' },
  { id: 'dep-11', name: 'AXILAS EN CERA', price: 28000, durationMinutes: 10, category: 'DEPILACIÓN' },
  { id: 'dep-12', name: 'AXILAS POR SESIÓN', price: 55000, durationMinutes: 15, category: 'DEPILACIÓN' },
  { id: 'dep-13', name: 'BRAZOS', price: 30000, durationMinutes: 20, category: 'DEPILACIÓN' },
  { id: 'dep-14', name: 'PIERNA MEDIA', price: 40000, durationMinutes: 20, category: 'DEPILACIÓN' },
  { id: 'dep-15', name: 'PIERNA COMPLETA', price: 50000, durationMinutes: 30, category: 'DEPILACIÓN' },
  { id: 'dep-16', name: 'BIKINI PARCIAL', price: 40000, durationMinutes: 30, category: 'DEPILACIÓN' },
  { id: 'dep-17', name: 'BIKINI COMPLETO', price: 60000, durationMinutes: 30, category: 'DEPILACIÓN' },
  { id: 'dep-18', name: 'ESPALDA', price: 45000, durationMinutes: 20, category: 'DEPILACIÓN' },
  { id: 'dep-19', name: 'ABDOMEN', price: 25000, durationMinutes: 15, category: 'DEPILACIÓN' },
  { id: 'dep-20', name: 'PECHO', price: 30000, durationMinutes: 15, category: 'DEPILACIÓN' },
  { id: 'dep-21', name: 'GLÚTEOS', price: 30000, durationMinutes: 15, category: 'DEPILACIÓN' },
  { id: 'dep-22', name: 'AREOLAS/TETILLAS', price: 15000, durationMinutes: 15, category: 'DEPILACIÓN' },
  { id: 'dep-23', name: 'DEDOS PIES O MANOS', price: 17000, durationMinutes: 10, category: 'DEPILACIÓN' },
  { id: 'dep-24', name: 'CERA CUERPO COMPLETO', price: 200000, durationMinutes: 120, category: 'DEPILACIÓN' },
  { id: 'dep-25', name: 'CARA COMPLETA DEPILACIÓN', price: 100000, durationMinutes: 30, category: 'DEPILACIÓN' },
  { id: 'dep-26', name: 'DECOLORACIÓN BRAZOS', price: 30000, durationMinutes: 30, category: 'DEPILACIÓN' },
  { id: 'dep-27', name: 'DECOLORACIÓN PIERNAS', price: 60000, durationMinutes: 40, category: 'DEPILACIÓN' },
  { id: 'dep-28', name: 'ONDULADO DE PESTAÑAS', price: 130000, durationMinutes: 60, category: 'DEPILACIÓN' },
  { id: 'dep-29', name: 'SOMBREADO CEJAS', price: 70000, durationMinutes: 30, category: 'DEPILACIÓN' },

  // TRATAMIENTOS CAPILARES - TRUSS
  { id: 'cap-1', name: 'BLOWER RECONSTRUCTION CORTOS', price: 160000, durationMinutes: 60, category: 'TRATAMIENTOS CAPILARES' },
  { id: 'cap-2', name: 'BLOWER RECONSTRUCTION MEDIOS', price: 180000, durationMinutes: 60, category: 'TRATAMIENTOS CAPILARES' },
  { id: 'cap-3', name: 'BLOWER RECONSTRUCTION LARGOS', price: 200000, durationMinutes: 60, category: 'TRATAMIENTOS CAPILARES' },
  { id: 'cap-4', name: 'CHOQUE KERATINE CORTOS', price: 250000, durationMinutes: 60, category: 'TRATAMIENTOS CAPILARES' },
  { id: 'cap-5', name: 'CHOQUE KERATINE MEDIOS', price: 300000, durationMinutes: 60, category: 'TRATAMIENTOS CAPILARES' },
  { id: 'cap-6', name: 'CHOQUE KERATINE LARGOS', price: 350000, durationMinutes: 60, category: 'TRATAMIENTOS CAPILARES' },
  { id: 'cap-7', name: 'FAST REPAIR CORTO', price: 130000, durationMinutes: 30, category: 'TRATAMIENTOS CAPILARES' },
  { id: 'cap-8', name: 'FAST REPAIR MEDIOS', price: 150000, durationMinutes: 30, category: 'TRATAMIENTOS CAPILARES' },
  { id: 'cap-9', name: 'FAST REPAIR LARGOS', price: 180000, durationMinutes: 30, category: 'TRATAMIENTOS CAPILARES' },
  { id: 'cap-10', name: 'FAST REPAIR CRIOTERAPIA CORTOS', price: 160000, durationMinutes: 40, category: 'TRATAMIENTOS CAPILARES' },
  { id: 'cap-11', name: 'FAST REPAIR CRIOTERAPIA MEDIOS', price: 180000, durationMinutes: 40, category: 'TRATAMIENTOS CAPILARES' },
  { id: 'cap-12', name: 'FAST REPAIR CRIOTERAPIA LARGOS', price: 200000, durationMinutes: 40, category: 'TRATAMIENTOS CAPILARES' },
  { id: 'cap-13', name: 'INFUSION CORTOS', price: 250000, durationMinutes: 50, category: 'TRATAMIENTOS CAPILARES' },
  { id: 'cap-14', name: 'INFUSION MEDIOS', price: 300000, durationMinutes: 50, category: 'TRATAMIENTOS CAPILARES' },
  { id: 'cap-15', name: 'INFUSION LARGOS', price: 350000, durationMinutes: 50, category: 'TRATAMIENTOS CAPILARES' },
  { id: 'cap-16', name: 'KERATINE RESTORE CORTOS', price: 250000, durationMinutes: 60, category: 'TRATAMIENTOS CAPILARES' },
  { id: 'cap-17', name: 'PERFECT BALAYAGE CORTOS', price: 160000, durationMinutes: 40, category: 'TRATAMIENTOS CAPILARES' },

  // TRATAMIENTOS CAPILARES - BAC
  { id: 'bac-1', name: 'SHAMPOO', price: 20000, durationMinutes: 20, category: 'TRATAMIENTOS CAPILARES' },
  { id: 'bac-2', name: 'SHAMPOO + MASCARILLA', price: 20000, durationMinutes: 20, category: 'TRATAMIENTOS CAPILARES' },
  { id: 'bac-3', name: 'APLICACIÓN MASCARILLA + MASAJE', price: 7000, durationMinutes: 20, category: 'TRATAMIENTOS CAPILARES' },
  { id: 'bac-4', name: 'LAVADO DE COLOR/BOTOX', price: 20000, durationMinutes: 20, category: 'TRATAMIENTOS CAPILARES' },
  { id: 'bac-5', name: 'EXFOLIACIÓN CAPILAR', price: 170000, durationMinutes: 20, category: 'TRATAMIENTOS CAPILARES' },
  { id: 'bac-6', name: 'RITUAL CUIDADO COLOR Y BRILLO', price: 150000, durationMinutes: 20, category: 'TRATAMIENTOS CAPILARES' },
  { id: 'bac-7', name: 'RITUAL HIDRATACIÓN Y BRILLO', price: 170000, durationMinutes: 20, category: 'TRATAMIENTOS CAPILARES' },
  { id: 'bac-8', name: 'RITUAL REPARACIÓN INTENSIVA FUSION', price: 180000, durationMinutes: 20, category: 'TRATAMIENTOS CAPILARES' },

  // CORTE
  { id: 'cut-1', name: 'CORTE DAMA', price: 75000, durationMinutes: 45, category: 'CORTE' },
  { id: 'cut-2', name: 'CORTE CABALLERO', price: 50000, durationMinutes: 45, category: 'CORTE' },
  { id: 'cut-3', name: 'CORTE + PEINADO', price: 100000, durationMinutes: 60, category: 'CORTE' },
  { id: 'cut-4', name: 'CORTE FLEQUILLO', price: 20000, durationMinutes: 20, category: 'CORTE' },
  { id: 'cut-5', name: 'CORTE THERMOCUT', price: 150000, durationMinutes: 60, category: 'CORTE' },
  { id: 'cut-6', name: 'ARREGLO DE BARBA', price: 50000, durationMinutes: 30, category: 'CORTE' },

  // COLOR
  { id: 'col-1', name: 'APLICACIÓN COLOR', price: 280000, durationMinutes: 90, category: 'COLOR' },
  { id: 'col-2', name: 'COLOR (BABYLIGHTS, BALAYAGE)', price: 350000, durationMinutes: 120, category: 'COLOR' },
  { id: 'col-3', name: 'COLOR BASE + MATIZADO', price: 280000, durationMinutes: 120, category: 'COLOR' },

  // PEINADO
  { id: 'sty-1', name: 'BLOWER', price: 40000, durationMinutes: 60, category: 'PEINADO' },
  { id: 'sty-2', name: 'BLOWER + ONDAS', price: 60000, durationMinutes: 60, category: 'PEINADO' },
  { id: 'sty-3', name: 'RECOGIDO', price: 60000, durationMinutes: 60, category: 'PEINADO' },
  { id: 'sty-4', name: 'TRENZAS', price: 35000, durationMinutes: 30, category: 'PEINADO' },
  { id: 'sty-5', name: 'PRUEBA DE PEINADO BODA', price: 30000, durationMinutes: 30, category: 'PEINADO' },

  // MAQUILLAJE
  { id: 'mua-1', name: 'MAQUILLAJE', price: 130000, durationMinutes: 90, category: 'MAQUILLAJE' },
  { id: 'mua-2', name: 'MAQUILLAJE EVENTOS', price: 130000, durationMinutes: 90, category: 'MAQUILLAJE' },
  { id: 'mua-3', name: 'MAQUILLAJE NOVIA', price: 130000, durationMinutes: 90, category: 'MAQUILLAJE' },
  { id: 'mua-4', name: 'MAQUILLAJE PRUEBA', price: 80000, durationMinutes: 40, category: 'MAQUILLAJE' },
  { id: 'mua-5', name: 'PESTAÑAS', price: 50000, durationMinutes: 30, category: 'MAQUILLAJE' },
  { id: 'mua-6', name: 'MAQUILLAJE SOCIAL BODA', price: 290000, durationMinutes: 45, category: 'MAQUILLAJE' },
  { id: 'mua-7', name: 'NOVIAS VIP', price: 1380000, durationMinutes: 120, category: 'MAQUILLAJE' },
  { id: 'mua-8', name: 'RETOQUE MAQUILLAJE Y PEINADO NIÑA', price: 150000, durationMinutes: 40, category: 'MAQUILLAJE' },

  // MASAJE
  { id: 'mas-1', name: 'MASAJE', price: 80000, durationMinutes: 45, category: 'MASAJE' },
  { id: 'mas-2', name: 'MASAJE COMPLETO 60 MINUTOS', price: 115000, durationMinutes: 60, category: 'MASAJE' },
  { id: 'mas-3', name: 'MASAJE ESPALDA 40 MINUTOS', price: 85000, durationMinutes: 40, category: 'MASAJE' },
  { id: 'mas-4', name: 'MASAJE TERAPÉUTICO 1H 20MIN', price: 145000, durationMinutes: 80, category: 'MASAJE' },
  { id: 'mas-5', name: 'MASAJE DE MANOS', price: 30000, durationMinutes: 30, category: 'MASAJE' },
  { id: 'mas-6', name: 'MASAJE PIES', price: 35000, durationMinutes: 30, category: 'MASAJE' },

  // EXTENSIONES
  { id: 'ext-1', name: 'EXTENSIONES DE CABELLO', price: 250000, durationMinutes: 120, category: 'EXTENSIONES' },
  { id: 'ext-2', name: 'EXTENSOS FRIZZ OFF', price: 450000, durationMinutes: 120, category: 'EXTENSIONES' },
  { id: 'ext-3', name: 'EXTENSOS GLICOPROTEINA', price: 450000, durationMinutes: 120, category: 'EXTENSIONES' },
  { id: 'ext-4', name: 'EXTENSOS RESISTANT', price: 450000, durationMinutes: 120, category: 'EXTENSIONES' },

  // ESTÉTICA
  { id: 'est-1', name: 'ESTÉTICA CORPORAL', price: 150000, durationMinutes: 90, category: 'ESTÉTICA' },
  { id: 'est-2', name: 'ESTÉTICA FACIAL', price: 150000, durationMinutes: 90, category: 'ESTÉTICA' },
  { id: 'est-3', name: 'ESTÉTICA RELAJACIÓN', price: 100000, durationMinutes: 60, category: 'ESTÉTICA' },
  { id: 'est-4', name: 'DEPILACIÓN LÁSER SESIÓN CUERPO', price: 250000, durationMinutes: 90, category: 'ESTÉTICA' },
  { id: 'est-5', name: 'DEPILACIÓN LÁSER PAQUETE 10 SESIONES', price: 2200000, durationMinutes: 90, category: 'ESTÉTICA' },
  { id: 'est-6', name: 'DEPILACIÓN LÁSER PAQUETE MEDIA PIERNA/AXILAS', price: 1600000, durationMinutes: 60, category: 'ESTÉTICA' },
];

export const APPOINTMENTS: Appointment[] = [
  { id: 'a1', clientName: 'Maria Client (Demo)', serviceId: 'fac-1', staffId: '4', startTime: new Date().toISOString(), status: AppointmentStatus.IN_PROGRESS },
  { id: 'a2', clientName: 'John Doe', serviceId: 'bar-1', staffId: '24', startTime: new Date(Date.now() + 3600000).toISOString(), status: AppointmentStatus.SCHEDULED },
  { id: 'a3', clientName: 'Sarah Smith', serviceId: 'man-3', staffId: '2', startTime: new Date(Date.now() - 7200000).toISOString(), status: AppointmentStatus.COMPLETED },
];

export const KPI_STATS: StatMetric[] = [
  { label: 'Revenue (Today)', value: '$1,240,000', change: 12, trend: 'up' },
  { label: 'Appointments', value: '18', change: 5, trend: 'up' },
  { label: 'No-Show Rate', value: '4%', change: -1, trend: 'down' }, // Down is good for no-show
  { label: 'NPS Score', value: '9.2', change: 0.2, trend: 'up' },
];

export const CHART_DATA = [
  { name: 'Mon', revenue: 4000000, appointments: 24 },
  { name: 'Tue', revenue: 3000000, appointments: 13 },
  { name: 'Wed', revenue: 2000000, appointments: 38 },
  { name: 'Thu', revenue: 2780000, appointments: 29 },
  { name: 'Fri', revenue: 1890000, appointments: 28 },
  { name: 'Sat', revenue: 2390000, appointments: 28 },
  { name: 'Sun', revenue: 3490000, appointments: 33 },
];