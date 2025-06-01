fetch('../data/data.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('storage-list');
    
    data.storage.forEach(disk => {
      const card = document.createElement('div');
      card.className = 'card storage-card';
      card.innerHTML = `
        <h3>${disk.name}</h3>
        <p>Type: ${disk.type}</p>
        <p>Used: ${disk.used}</p>
        <p>Total: ${disk.total}</p>
      `;
      container.appendChild(card);
    });
  });
