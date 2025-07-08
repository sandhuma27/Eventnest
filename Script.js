  <!-- JavaScript -->
  <script>
    const form = document.getElementById('eventForm');
    const eventList = document.getElementById('eventList');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('eventName').value.trim();
      const date = document.getElementById('eventDate').value;
      const desc = document.getElementById('eventDesc').value.trim();

      if (!name || !date) {
        alert('Please fill in event name and date!');
        return;
      }

      const col = document.createElement('div');
      col.className = 'col-md-4 mb-4';

      col.innerHTML = `
        <div class="card event-card shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${date}</h6>
            <p class="card-text">${desc || 'No description provided.'}</p>
          </div>
        </div>
      `;

      eventList.appendChild(col);
      form.reset();
    });
  </script>
