fetch('../data/data.json')
  .then(res => res.json())
  .then(data => {
    const zfs = data.zfs;
    const container = document.getElementById('zfs-info');
    
    container.innerHTML += `
      <p>name: ${zfs.name}</p>
      <p>State: ${zfs.status}</p>
      <p>Used: ${zfs.used}</p>
      <p>Available: ${zfs.available}</p>
    `;
  });
