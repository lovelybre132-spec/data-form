let supabaseurl ='https://zwtdeaqbeytnllldqbbl.supabase.co/rest/v1/data'
let apikey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3dGRlYXFiZXl0bmxsbGRxYmJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU1NjYxMzAsImV4cCI6MjA4MTE0MjEzMH0.hoNlMu_eUfizpyiDcxRulr6fZhHV4yIFWmYC3K2cyrE'
//let urlProducts = 
async function name(params) {
    

    let ID = document.getElementById('contactName').value;
    let Email =document.getElementById('contactEmail').value;
    let Message=document.getElementById('contactMessage').value;

  let user={
    name:contactName,
    email:contactEmail,
    message:contactMessage
};
let response = await fetch(supabaseurl, {
    method: 'POST', headers;}
        'Content-Type':'application/json',
        'apikey': apikey
             'apikey': SUPABASE_KEY,
    },
    body: JSON.stringify(user)
});
console.log(user);
console.log(response);
}
