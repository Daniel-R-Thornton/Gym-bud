export interface Workout {
  id: string;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  exercises: Exercise[];
}

export interface Exercise {
  id: string;
  name: string;
  reps: number;
  weight: number;
  equipment: string;
  notes: string;
  intensity: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface Gym {
  id: string;
  name: string;
  address: string;
  equipment: string;
  isMember: boolean;
  membershipExpires: string;
  contact: string;
  reminders: string;
  image: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface userData {
  id: string;
  first_name: string;
  last_name: string;
  age: number;
  height: number;
  weight: number;
  description: string;
  created_at: string;
  updated_at: string;
  gyms: Gym[];
  workouts: Workout[];
  exercises: Exercise[];
  profileImage: string;
  bio: string;
}
