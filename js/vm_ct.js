fetch('../data/data.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('vm-list');
    data.vms.forEach(vm => {
      const card = document.createElement('div');
      card.className = 'card vm-card';
      card.innerHTML = `
        <h3>${vm.name}</h3>
        <p>Type: ${vm.type}</p>
        <p>ID: ${vm.id}</p>
        <p>Status: <span style="color: ${vm.status === 'running' ? 'green' : 'red'}">${vm.status}</span></p>
        
      `;
      container.appendChild(card);
    });
  });

