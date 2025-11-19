import {
    setDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    updateDoc,
    serverTimestamp,
} from "firebase/firestore";

import type { CollectionReference, Timestamp } from "firebase/firestore";
import { db } from "../lib/firebase.config";

export interface User {
  uid: string; 
  displayName?: string | null;
  email?: string | null;
  photoURL?: string | null;
  createdAt?: Timestamp | null;
  updatedAt?: Timestamp | null;
}

export type UserCreate = Omit<User, "createdAt" | "updatedAt">;
export type UserUpdate = Partial<Omit<User, "createdAt">>;

class UserDAO {
    private collectionRef: CollectionReference;

    constructor() {
        this.collectionRef = collection(db, "users");
    }

    // Read one user per document ID
    async getUserById(
        id: string
    ): Promise<
        { success: true; data: User } |
        { success: false; data: null; error?: string }
    > {
        try {
            const snap = await getDoc(doc(this.collectionRef, id));
            if (!snap.exists()) {
                return { success: false, data: null };
            }
            return { success: true, data: snap.data() as User };
        } catch (err: any) {
            console.error("Error getting document:", err);
            return { success: false, data: null, error: err?.message };
        }
    }

    // Create or overwrite a user using UID
    async createUser(
        uid: string,
        userData: UserCreate
    ): Promise<{ success: true } | { success: false; error: string }> {
        try {
            const userRef = doc(this.collectionRef, uid);

            await setDoc(userRef, {
                ...userData,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp(),
            });

            console.log("User created/updated with UID:", uid);
            return { success: true };
        } catch (err: any) {
            console.error("Error creating user:", err);
            return { success: false, error: err?.message ?? "Unknown error" };
        }
    }

    // Update a user
    async updateUser(
        id: string,
        userData: UserUpdate
    ): Promise<{ success: true } | { success: false; error: string }> {
        try {
            const userRef = doc(this.collectionRef, id);

            await updateDoc(userRef, {
                ...userData,
                updatedAt: serverTimestamp(),
            });

            console.log("Document successfully updated!");
            return { success: true };
        } catch (err: any) {
            console.error("Error updating document:", err);
            return { success: false, error: err?.message ?? "Unknown error" };
        }
    }

    // Delete a user
    async deleteUser(
        id: string
    ): Promise<{ success: true } | { success: false; error: string }> {
        try {
            await deleteDoc(doc(this.collectionRef, id));
            console.log("Document successfully deleted!");
            return { success: true };
        } catch (err: any) {
            console.error("Error deleting document:", err);
            return { success: false, error: err?.message ?? "Unknown error" };
        }
    }
}

export default new UserDAO();
