// 44
const registrationForm = document.querySelector('#registration-form form');
    const registrationTable = document.getElementById('registration-table');
    const tableBody = document.getElementById('table-body');

    registrationForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const dateOfBirth = document.getElementById('dateOfBirth').value;
      const gender = document.querySelector('input[name="gender"]:checked').value;
      const city = document.getElementById('city').value;
      const address = document.getElementById('address').value;
      const languages = Array.from(document.querySelectorAll('input[name="languages"]:checked')).map(input => input.value);

      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${dateOfBirth}</td>
        <td>${gender}</td>
        <td>${city}</td>
        <td>${address}</td>
        <td>${languages.join(', ')}</td>
      `;

      tableBody.appendChild(row);

      registrationForm.reset();
      registrationForm.style.display = 'none';
      registrationTable.style.display = 'block';
    });
