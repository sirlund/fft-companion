function showSection(sectionId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Mostrar la sección seleccionada
    document.getElementById(sectionId).classList.add('active');

    // Scroll to top
    window.scrollTo(0, 0);
}

function filterJobs() {
    const searchText = document.getElementById('job-search').value.toLowerCase();

    // Filtrar job-cards (nuevo formato visual)
    const jobCards = document.querySelectorAll('.job-card');
    jobCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(searchText) ? 'block' : 'none';
    });

    // Filtrar job-items (formato lista viejo)
    const jobItems = document.querySelectorAll('.job-item');
    jobItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(searchText) ? 'block' : 'none';
    });
}

function filterAbilities() {
    const searchText = document.getElementById('ability-search').value.toLowerCase();
    const abilityItems = document.querySelectorAll('#abilities .ability-item');

    abilityItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(searchText) ? 'block' : 'none';
    });
}

function filterEquipment() {
    const searchText = document.getElementById('equipment-search').value.toLowerCase();
    const equipmentItems = document.querySelectorAll('#equipment .equipment-item');

    equipmentItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(searchText) ? 'block' : 'none';
    });
}
