fetch('../data/data.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('backup-list');
    const select = document.getElementById('backupTarget');

    data.backups.forEach(bkp => {
      const card = document.createElement('div');
      card.className = 'card backup-card';
      card.innerHTML = `
        <h3>${bkp.name}</h3>
        <p>Date: ${bkp.date}</p>
        <p>Status: <span style="color: ${bkp.status === 'Ok' ? 'green' : 'red'}">${bkp.status}</span></p>
      `;
      container.appendChild(card);
    });
  });