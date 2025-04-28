document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('AddBtn').addEventListener('click', () => {
    const newElementText = document.getElementById('NE').value; 
    if (newElementText.trim() !== '') { 
      const li = document.createElement('li'); 
      li.textContent = newElementText; 
      document.getElementById('ol_todo').appendChild(li); 
      document.getElementById('NE').value = ''; 
    }
  });

  document.getElementById('ClearBtn').addEventListener('click', () => {
    document.getElementById('ol_todo').innerHTML = ''; 
  });
});
