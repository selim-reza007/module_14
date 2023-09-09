export async function sendEmail(email) {
    let res = await fetch(`http://localhost:3000/api/email?email=${email}`);
    
    let data = await res.json();
    return data;
}