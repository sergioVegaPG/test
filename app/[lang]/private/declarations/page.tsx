import { redirect } from 'next/navigation';

export default async function Private() {
    redirect('/private/declarations/declarations');
}