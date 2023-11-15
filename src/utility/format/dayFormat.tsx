// Format the date as "YYYY, MM/DD"
function dayFormat1(date: Date): string {
    return `${date.getFullYear()}, ${date.getMonth() + 1}/${date.getDate()}`;
}
  
// Format the date as "MM/DD/YYYY"
function dayFormat2(date: Date): string {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}
  
// Format the date as "MM/DD/YYYY, HH:MM AM/PM"
function dayFormat3(date: Date): string {
    let hours = date.getHours();
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    return `${dayFormat2(date)}, ${hours}:${minutes} ${ampm}`;
}

function dayFormat4(date: Date): string {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${dayFormat2(date)}, ${hours}:${minutes}`;
}
  
export { dayFormat1, dayFormat2, dayFormat3, dayFormat4 };
  